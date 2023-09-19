export const useHover = (onHover) => {
  if (typeof onHover !== "function") {
    return;
  }
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListner("mouseenter", onHover);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListner("mouseenter", onHover);
      }
    };
  }, []);
  return element;
};
