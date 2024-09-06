import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    window.scrollTo(0, 0);
    setMenuOpen(!menuOpen);
  };

  // Effect to add or remove the no-scroll class
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
        >
          Home
        </NavLink>
        <NavLink
          to="/Projects"
          className={({ isActive }) =>
            isActive ? styles["active-nav-link"] : styles["nav-link"]
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/L3"
          className={({ isActive }) =>
            isActive ? styles["active-nav-link"] : styles["nav-link"]
          }
        >
          L3
        </NavLink>
        <NavLink
          to="/L4"
          className={({ isActive }) =>
            isActive ? styles["active-nav-link"] : styles["nav-link"]
          }
        >
          L4
        </NavLink>
      </div>
    </div>
  );
};
