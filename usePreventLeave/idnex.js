export const usePreventLeave = () => {
  const listner = (event) => {
    event.preventDefault();
    event.returnValue = ""; //없으면 작동 안함!!
  };
  const enablePrevet = () => window.addEventListener("beforeload", listner);
  const disablePrevet = () =>
    window.removeEventListener("beforeunload", listner);
  return { enablePrevet, disablePrevet };
};
