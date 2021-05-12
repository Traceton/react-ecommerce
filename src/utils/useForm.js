import { useState } from "react";

const useForm = (initialState) => {
  const [state, setState] = useState({});
  const [altState, setaltState] = useState(initialState);
  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     submitCallback();
  //   };

  const handleChange = (e) => {
    e.persist();
    setState((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const handleChangeWithInitialState = (e) => {
    e.persist();
    setaltState((altState) => ({
      ...altState,
      [e.target.name]: e.target.value,
    }));
  };

  if (initialState) {
    return [altState, handleChangeWithInitialState];
  } else {
    return [state, handleChange];
  }
};

export default useForm;
