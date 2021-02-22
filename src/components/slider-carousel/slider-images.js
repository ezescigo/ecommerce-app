import media1 from "./licours.jpg";
import media2 from "./shelves.jpg";
import media3 from "./we_are_open.jpg";


export const sectionsasd = [
     "https://drive.google.com/uc?export=view&id=1lkYxMITYjMAOOlw9iBL1M9h7J7zT9i6S",
     "https://drive.google.com/uc?export=view&id=1EXX4Jk-Vu0k2bJz4IK36weTP7t7Nv_Vl",
     "https://drive.google.com/uc?export=view&id=1V2Zsfrpwx66B-wCDRYRlI2q4X7fZFm9y",
     "https://drive.google.com/uc?export=view&id=1A1EYXPBUIAEPWzx-_gNUv8z91Z1YlbQ8",
]


export const media = [media1, media2, media3];
export const mediaByIndex = index => media[index % media.length];
