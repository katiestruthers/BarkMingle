
export const dogProfiles = [{
  id: 1,
  firstName: "FIDO",
  avatar: "https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half-caption/public/field_blog_entry_images/2020-04/cb.jpg?itok=zzuVtGPr",
  bio: "BIO: Lorem ipsum dolor sit amet. ",
  matches: [2,4,6],
  humanName: "ALAN",
  human: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
},
  {id: 2,
  firstName: "ROVER",
  avatar: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGRvZyUyMGJyZWVkc3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
  bio: "BIO: Lorem ipsum dolor sit amet. ",
  matches: [1,3,5],
  humanName: "BETTY",
  human:"https://www.masslive.com/resizer/kNl3qvErgJ3B0Cu-WSBWFYc1B8Q=/arc-anglerfish-arc2-prod-advancelocal/public/W5HI6Y4DINDTNP76R6CLA5IWRU.jpeg"
},
  {id: 3,
  firstName: "REX",
  avatar: "https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  bio: "BIO: Lorem ipsum dolor sit amet.",
  matches: [1,2,4,5,6],
  humanName: "CLARK",
  human: "https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg"
  },
  {id: 4,
    firstName: "SIR WOOFS",
    avatar: "https://www.thesprucepets.com/thmb/hxWjs7evF2hP1Fb1c1HAvRi_Rw0=/2765x0/filters:no_upscale():strip_icc()/chinese-dog-breeds-4797219-hero-2a1e9c5ed2c54d00aef75b05c5db399c.jpg",
    bio: "BIO: Lorem ipsum dolor sit amet.",
    matches: [2,3,5,6],
    humanName: "DEB",
    human: "https://highlysensitiverefuge.com/wp-content/uploads/2019/12/highly-sensitive-person-signs.jpeg"
  },
  {id: 5,
    firstName: "LIL RASCAL",
    avatar: "https://www.princeton.edu/sites/default/files/styles/1x_full_2x_half_crop/public/images/2022/02/KOA_Nassau_2697x1517.jpg?itok=Bg2K7j7J",
    bio: "BIO: Lorem ipsum dolor sit amet.",
    matches: [1,3,6], 
    humanName: "EVAN",
    human: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  },
  {id: 6,
    firstName: "QT",
    avatar: "https://static.vecteezy.com/system/resources/previews/005/857/332/non_2x/funny-portrait-of-cute-corgi-dog-outdoors-free-photo.jpg",
    bio: "BIO: Lorem ipsum dolor sit amet.",
    matches: [1,2,3,5],
    humanName: "FIONA",
    human: "https://i.cbc.ca/1.4026455.1491334629!/fileImage/httpImage/image.JPG_gen/derivatives/16x9_780/magic-8-cea-sunrise-person.JPG"
  },
];

export const getUserProfile = (userID) => {
  let userProfile = {}
  for (const p of dogProfiles) {
    if (p.id === userID) {
      userProfile = p;
    };
  };
  return userProfile
};
 
export const filterProfiles = (userID) => {
  const filteredProfiles = [];
  for (const p of dogProfiles) {
    if (p.id !== userID) {
      filteredProfiles.push(p)
    }
  }
  return filteredProfiles;
};

export const matchedProfiles = (matchArray, profiles) => {
  const matchProfiles = [];
  for (const m of matchArray) {
    for (const p of profiles) {
      if (m === p.id) {
        matchProfiles.push(p)
      }
    }
  }
  return matchProfiles;
};
