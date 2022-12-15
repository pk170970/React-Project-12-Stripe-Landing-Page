import React from "react";
import { FaBars, FaBatteryThreeQuarters } from "react-icons/fa";
import data from "./data";
import { useGlobalContext } from "./context";

const Navbar = () => {
  const { handleSidebar, handleModal, openModal, closeModal } = useGlobalContext();
  // console.log(values);

  function handleHover(e) {
    const page = e.target.textContent;
    const styles = e.target.getBoundingClientRect();
    // console.log(styles);
    const center = (styles.left + styles.right) / 2;
    const bottom = styles.bottom - 3;
    handleModal(page, { center, bottom });
    openModal();
  }


  function touchingNav(e) {
    if (!e.target.classList.contains("link-btn")) {
      closeModal();
    }
  }
  return (
    <nav className="nav" onMouseOver={touchingNav}>
      <div className="nav-center">
        <div className="nav-header">
          <img className="nav-logo" src="https://react-projects-13-stripe-submenus.netlify.app/static/media/logo.1090473d.svg" alt="logo" />
          <button className="btn toggle-btn" onClick={() => handleSidebar()} >
            <FaBars />
          </button>
        </div>
        <ul className="nav-links" >
          {data.map((list, index) => {
            return (
              <li key={index}>
                <button onMouseOver={handleHover} className="link-btn">{list.page}</button>
              </li>
            );
          })}
        </ul>
        <button className="btn signin-btn">Sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;
