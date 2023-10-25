import { useState, useEffect, useRef, useReducer } from "react";
import { onSnapshot, collection } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import * as ImagePicker from "expo-image-picker";
import { addDoc } from "firebase/firestore";
import { storage, db } from "../firebaseConfig";

const ACTIONS = {
  SET_IMAGE: 'SET_IMAGE',
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_IMAGE:
      return { ...state, files: action.payload };
    default:
      return state;
  }
};

const useFileUpload = () => {
  const [image, setImage] = useState("");
  const [progress, setProgress] = useState(0);
  const unsubscribeRef = useRef(null);

  const defaultState = {
    files: []
  };

  const [ state, dispatch ] = useReducer(reducer, defaultState);

  const startFileListener = () => {
    unsubscribeRef.current = onSnapshot(collection(db, "files"), (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          const newFile = change.doc.data();
          // checks if the file is not already in the files array to prevent duplicates
          if (!state.files.some((file) => file.url === newFile.url)) {
            dispatch({ type: ACTIONS.SET_IMAGE, payload: [...state.files, newFile] });
          }
        }
      });
    });
  };

  const stopFileListener = () => {
    if (unsubscribeRef.current) {
      console.log('cleanup executed');
      unsubscribeRef.current();
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [3, 4],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      await uploadImage(result.assets[0].uri, "image");
    }
  };

  const uploadImage = async (uri, fileType) => {
    const response = await fetch(uri);
    const blob = await response.blob();

    const storageRef = ref(storage, "Photos/" + new Date().getTime());
    const uploadTask = uploadBytesResumable(storageRef, blob);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const newProgress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(newProgress.toFixed());
      },
      (error) => {
        console.error(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          console.log("File available at", downloadURL);
          await saveRecord(fileType, downloadURL, new Date().toISOString());
          setImage("");
        });
      }
    );
  };

  const saveRecord = async (fileType, url, createdAt) => {
    try {
      const docRef = await addDoc(collection(db, "files"), {
        fileType,
        url,
        createdAt,
      });
      console.log("Document saved correctly", docRef.id);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    startFileListener();

    return () => {
      stopFileListener();
    };
  }, []);

  return {
    image,
    progress,
    files: state.files,
    pickImage,
  };
};

export default useFileUpload;