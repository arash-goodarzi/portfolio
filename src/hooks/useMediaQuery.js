import { useState, useEffect } from "react";

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listerner = () => setMatches(media.matches);
    window.addEventListener("resize", listerner);

    return () => {
      window.removeEventListener("resize", listerner);
    };
  }, [matches, query]);

  return matches;
};

export default useMediaQuery;
