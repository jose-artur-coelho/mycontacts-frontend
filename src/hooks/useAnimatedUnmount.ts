import { useRef, useEffect, useState } from "react";

export default function useAnimatedUnmount<T extends HTMLElement>(
  isVisible: boolean
) {
  const [shouldRender, setShouldRender] = useState(isVisible);

  const componentRef = useRef<T>(null);

  useEffect(() => {
    if (isVisible) {
      setShouldRender(true);
    }
    function handleAnimationEnd() {
      setShouldRender(false);
    }
    const componentRefElement = componentRef.current;
    if (!isVisible && componentRefElement) {
      componentRefElement.addEventListener("animationend", () =>
        handleAnimationEnd()
      );
    }
    return () => {
      if (componentRefElement) {
        componentRefElement.removeEventListener("animationend", () =>
          handleAnimationEnd()
        );
      }
    };
  }, [isVisible]);

  return { shouldRender, componentRef };
}
