import { useState, useEffect, useRef, useReducer } from "react";
import { onSnapshot, collection } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import * as ImagePicker from "expo-image-picker";
import { addDoc } from "firebase/firestore";
import { storage, db } from "../firebaseConfig";

const useFileUpload = () => {
  const [image, setImage] = useState("");
  const [progress, setProgress] = useState(0);
  const [dogImage, setDogImage] = useState("");
  const [userImage, setUserImage] = useState("");
  const unsubscribeRef = useRef(null);
  const [uploadComplete, setUploadComplete] = useState(false);

  const [files, setFiles] = useState([]);

  const startFileListener = () => {
    unsubscribeRef.current = onSnapshot(collection(db, "files"), (snapshot) => {
      const newFiles = [];
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          const newFile = change.doc.data();
          // checks if the file is not already in the files array to prevent duplicates
          if (!newFiles.some((file) => file.url === newFile.url)) {
            newFiles.push(newFile);
            // determine if it's the first upload (dogImage) or the second upload (userImage)
          }
        }
      });
      setFiles((prevFiles) => [...prevFiles, ...newFiles]);
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
          setUploadComplete(true); //set the upload as complete
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

  useEffect(() => {
    // check if the upload is complete and stop the listener if it is
    if (uploadComplete) {
      stopFileListener();
    }
  }, [uploadComplete]);

  // set dogImage after the upload is complete
  useEffect(() => {
    if (uploadComplete && files.length > 0) {
      setDogImage(files[0].url);
    }
  }, [uploadComplete, files]);

  // set userImage after the upload is complete
  useEffect(() => {
    if (uploadComplete && files.length > 1) {
      setUserImage(files[1].url);
    }
  }, [uploadComplete, files]);

  console.log('user', userImage)
  console.log('dog', dogImage)
  console.log('files', files)

  return {
    image,
    progress,
    files,
    dogImage,
    userImage,
    pickImage,
  };
};

export default useFileUpload;