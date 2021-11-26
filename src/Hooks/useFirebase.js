import axios from "axios";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";

const useFirebase = () => {
  const auth = getAuth();
  const [user, setUser] = useState({});

  const [isLoading, setIsLoading] = useState(true);
  const [admin, setAdmin] = useState(false);



  useEffect(() => {
    axios.get(`https://stark-anchorage-34193.herokuapp.com/users/isAdmin/${user.email}`).then((res) => {
      setAdmin(res.data.admin);
    });
  }, [user.email]);

  
  // User Login With Google
  const signinWithGoogle = () => {
    setIsLoading(true);
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result);
        const user = result.user;
        const newUser = {email:user.email, displayName:user.displayName, photoURL:user.photoURL}
        saveUser(newUser, 'PUT');
        setUser(newUser);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
        
      });
  };


  // User Login with Email
  const signUpWithEmail = (name, email, password) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const newUser = { email, displayName: name, photoURL:"https://i.ibb.co/VHLDPSh/design-flat-style-minimalist-avatar-of-you.png" };
        
        updateProfile(auth.currentUser, { displayName: name, photoURL:"https://i.ibb.co/VHLDPSh/design-flat-style-minimalist-avatar-of-you.png" }).then().catch();
        
        saveUser(newUser, 'POST');

        setUser(newUser);
      })
      .catch((err) => alert(err.message))
      .finally(() => {
        
        setIsLoading(false);
        
      });
  };


  const signInWithEmail = (email, password) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        let errorMessage = error.message.split("(")[1].split(")")[0];
        alert(errorMessage);
      })
      .finally(() => {
        setIsLoading(false);
        window.location.reload();
      });
  };



  // User Logout
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        alert(error.message);
      })
      .finally(() => {
        setIsLoading(false);
        
      });
  };


  const saveUser = (data,method) => {
    if (method === 'POST') {
      axios
      .post("https://stark-anchorage-34193.herokuapp.com/users", data)
      .then((res) => {
        if (res.data.insertedId) {
          console.log(res);
        }
      });
    } else {
      axios
      .put("https://stark-anchorage-34193.herokuapp.com/users", data)
      .then((res) => {
        if (res.data.insertedId) {
          console.log(res);
        }
      });
    }
    
  };


  // User Observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });

    return () => unsubscribe;
  }, [auth]);





  return {
    user,
    signinWithGoogle,
    signInWithEmail,
    signUpWithEmail,
    logOut,
    isLoading,
    admin,

  };
};

export default useFirebase;
