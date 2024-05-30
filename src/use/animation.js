import { useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";
export function useAnimation() {
  const { type } = useContext(ThemeContext);
  const [animation, setAnimation] = useState("");
  const [timeoutId, setTimeoutId] = useState(null);
  useEffect(() => {
    setAnimation("");
    setTimeout(() => setAnimation("fade-in"), 50);
  }, [type]);

  return {
    animation,
  };
}
