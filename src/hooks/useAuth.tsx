import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../app/hooks";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../utils/FirebaseConfig";
import { setUser } from "../app/slices/AuthSlice";

function useAuth() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  useEffect(() => {
    const unsubsucribe = onAuthStateChanged(firebaseAuth, (currentUser) => {
      if (!currentUser) {
        navigate("/");
      } else {
        dispatch(setUser({
          uid: currentUser.uid,
          name: currentUser.displayName,
          email: currentUser.email
        }));
      }
    });
    return () => unsubsucribe();
  }, [dispatch, navigate]);
}

export default useAuth;