import { useAuth } from "@clerk/clerk-react";
import { useEffect } from "react";
import { setGetToken } from "../lib/axios";

const ClerkAxiosProvider = ({ children }) => {
  const { getToken } = useAuth();

  useEffect(() => {
    setGetToken(getToken);
  }, [getToken]);

  return children;
};

export default ClerkAxiosProvider;