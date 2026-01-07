import type {ReactElement} from "react";
import styles from "./Path.module.scss";

export default function Path({content}: {content: string}) :ReactElement {
    return (
        <div className={styles.Path}>
            <h3>{content}</h3>
        </div>
    )
}