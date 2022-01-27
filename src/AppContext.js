import { createContext, useState } from "react";
import { useLocalStorage } from "./Components/Functions/Storages";

export const AppContext = createContext();

const Provider = ({ children }) => {
  const [videoUrl, setVideoUrl] = useLocalStorage("videoUrl", "");
  const [submittedNotes, setSubmittedNotes] = useLocalStorage("notes", []);
  const [progress, setProgress] = useState({
    played: 0,
    playedSeconds: 0,
    loaded: 0,
    loadedSeconds: 0,
  });

  const values = {
    videoUrl,
    setVideoUrl,
    submittedNotes,
    setSubmittedNotes,
    progress,
    setProgress,
  };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export default Provider;
