import type {ReactElement} from "react";
import styles from "./WelcomePage.module.scss"

export default function WelcomePage() :ReactElement {
    return (
        <div className={styles.WelcomePage}>
            <h3>Welcome</h3>
            <p>Lorem ipsum</p>
        </div>
    )
}