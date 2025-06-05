import { useEffect, useState } from "react";

export default function useMediaQuery(query) {
  const [isMatch, setIsMatch] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    setIsMatch(media.matches);

    const updateMatch = () => setIsMatch(media.matches);
    media.addEventListener("change", updateMatch);

    return () => media.removeEventListener("change", updateMatch);
  }, [query]);

  return isMatch;
}
