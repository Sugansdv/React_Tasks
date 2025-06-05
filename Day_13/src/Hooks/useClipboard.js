import { useState } from "react";

export default function useClipboard() {
  const [isCopied, setIsCopied] = useState(false);

  const copy = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 1500);
      })
      .catch(() => setIsCopied(false));
  };

  return { copy, isCopied };
}
