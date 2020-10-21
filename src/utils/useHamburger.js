import { useState } from "react";

const useHamburger = () => {
  const [isHamburgerActive, setisHamburgerActive] = useState(false);

  const handleChange = (e) => {
    e.persist();
    setisHamburgerActive(!isHamburgerActive);
  };

  return [isHamburgerActive, handleChange];
};
export default useHamburger;
