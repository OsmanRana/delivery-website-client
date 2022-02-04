import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
} from "firebase/auth";
import { useState } from "react";
import initializeAuthentication from "../../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState([]);
  const [authError, setAuthError] = useState("");
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const signUpNewUserWithEmailandPassword = (email, password, name) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError("");
        const newUser = { email, diplayName: name };
        setUser(newUser);
      })
      .catch((error) => {
        setAuthError(error.message);
      });
  };
  return {
    signUpNewUserWithEmailandPassword,
    authError,
    user,
  };
};
export default useFirebase;
