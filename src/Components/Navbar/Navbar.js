import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    // Scroll to the top of the page before opening the menu
    window.scrollTo(0, 0);
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add(styles["no-scroll"]);
    } else {
      document.body.classList.remove(styles["no-scroll"]);
    }

    // Clean up the effect to ensure the no-scroll class is removed when the component unmounts
    return () => {
      document.body.classList.remove(styles["no-scroll"]);
    };
  }, [menuOpen]);

  return (
    <div className={styles.navbar}>
      <div className={styles.header}>
        <h2>Youssef Kawook</h2>

        <div className={styles["menu-toggle-container"]}>
          <span className={styles["menu-toggle"]} onClick={toggleMenu}>
            &#9776;
          </span>
        </div>
      </div>
      <div className={`${styles.links} ${menuOpen ? styles.show : ""}`}>
        <NavLink
          to="/Home"
          className={({ isActive }) =>
            isActive ? styles["active-nav-link"] : styles["nav-link"]
          }
          onClick={closeMenu} // Close menu when clicked
        >
          Home
        </NavLink>
        <NavLink
          to="/Projects"
          className={({ isActive }) =>
            isActive ? styles["active-nav-link"] : styles["nav-link"]
          }
          onClick={closeMenu} // Close menu when clicked
        >
          Projects
        </NavLink>
        <NavLink
          to="/L3"
          className={({ isActive }) =>
            isActive ? styles["active-nav-link"] : styles["nav-link"]
          }
          onClick={closeMenu} // Close menu when clicked
        >
          L3
        </NavLink>
        <NavLink
          to="/L4"
          className={({ isActive }) =>
            isActive ? styles["active-nav-link"] : styles["nav-link"]
          }
          onClick={closeMenu} // Close menu when clicked
        >
          L4
        </NavLink>
      </div>
    </div>
  );
};
