import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export function useAnimation() {
  const { type } = useContext(ThemeContext);
  const [animation, setAnimation] = useState("");
  const [timeoutId, setTimeoutId] = useState(null);
  useEffect(() => {
    setAnimation("");
    setTimeoutId(() => setAnimation(`fade-in`), 50);
  }, [type]);

  return {
    animation,
  };
}
