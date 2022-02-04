import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebse.config";

const initializeAuthentication = () => {
  initializeApp(firebaseConfig);
};

export default initializeAuthentication;
