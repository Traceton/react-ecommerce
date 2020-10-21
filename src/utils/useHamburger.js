import { useState } from "react";

const useHamburger = (links) => {
  const [isHamburgerActive, setisHamburgerActive] = useState(false);

  const handleChange = (e) => {
    e.persist();
    setisHamburgerActive(!isHamburgerActive);
  };

  if (isHamburgerActive === true) {
    //   change this to include a finished hamburger component
    return [isHamburgerActive, handleChange];
  } else {
    return [isHamburgerActive, handleChange];
  }
};
export default useHamburger;
