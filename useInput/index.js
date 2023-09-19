export const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value); //value의 유효성 검사 수행
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};
