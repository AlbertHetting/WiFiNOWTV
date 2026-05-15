import { useEffect, useState } from "react";
import { Navigate } from "react-router";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "/firebase";

export default function RequireAuth({ children }) {
  const [checking, setChecking] = useState(true);
  const [user, setUser] = useState(null);


  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u || null);
      setChecking(false);
    });
    return unsub;
  }, []);

  if (checking) {
    // Fallback when Firebase restores session
    return <div style={{ padding: 16 }}>Loading…</div>;
  }

  if (!user) {
    // Not signed in, send to create profile
    return <Navigate to="/Create"/>;
  }

  return children;
}
