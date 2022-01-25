import { createContext } from "react";
import { useLocalStorage } from "./Components/Functions/Storages";

export const AppContext = createContext();

const Provider = ({ children }) => {
  const [videoUrl, setVideoUrl] = useLocalStorage("videoUrl", "");
  const [submittedNotes, setSubmittedNotes] = useLocalStorage("notes", []);

  const values = {
    videoUrl,
    setVideoUrl,
    submittedNotes,
    setSubmittedNotes,
  };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export default Provider;
