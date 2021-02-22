const INITIAL_STATE = {
  sections: [
    {
      title: "belts",
      imageUrl: "https://drive.google.com/uc?export=view&id=1lkYxMITYjMAOOlw9iBL1M9h7J7zT9i6S",
      id: 2,
      linkUrl: "shop/belts",
    },
    {
      title: "wallets",
      imageUrl: "https://drive.google.com/uc?export=view&id=1EXX4Jk-Vu0k2bJz4IK36weTP7t7Nv_Vl",
      id: 3,
      linkUrl: "shop/wallets",
    },
    {
      title: "jackets",
      imageUrl: "https://drive.google.com/uc?export=view&id=1V2Zsfrpwx66B-wCDRYRlI2q4X7fZFm9y",
      size: "large",
      id: 4,
      linkUrl: "shop/jackets",
    },
    {
      title: "dresses",
      imageUrl: "https://drive.google.com/uc?export=view&id=1A1EYXPBUIAEPWzx-_gNUv8z91Z1YlbQ8",
      size: "large",
      id: 5,
      linkUrl: "shop/dresses",
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    default:
      return state;
  }
};

export default directoryReducer;