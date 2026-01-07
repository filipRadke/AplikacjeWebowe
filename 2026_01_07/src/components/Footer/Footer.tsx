import type {ReactElement} from "react";
import {NavLink} from "react-router";
import styles from "./Footer.module.scss"

export default function Footer() :ReactElement {
  return (
      <div className={styles.Footer}>
        <ul>
          <li>
            <NavLink to="/pathOne">Uno</NavLink>
          </li>
          <li>
            <NavLink to="/pathTwo">Dos</NavLink>
          </li>
          <li>
            <NavLink to="/pathThree">Tres</NavLink>
          </li>
        </ul>
      </div>
  )
}