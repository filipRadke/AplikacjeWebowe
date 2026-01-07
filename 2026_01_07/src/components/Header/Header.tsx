import type {ReactElement} from "react";
import styles from "./Header.module.scss";

export default function Header() :ReactElement {
    return (
        <div className={styles.Header}>
            <h1>Pretty blog</h1>
        </div>
    )
}