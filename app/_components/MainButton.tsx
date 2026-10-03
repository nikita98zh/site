import styles from "./styles.module.css"

export default function MainButton({ slots = [] }: { slots?: string[] }) {
  return (
      <a className={styles["primary"]} href="./contact-us">
        <div className={styles["text-container"]}>
          <div className={styles["get-template"]}>
            <p className={styles["p"]}>{slots[0] ?? "Get Started"}</p>
          </div>
          <div className={styles["get-template"]}>
            <p className={styles["p"]}>{slots[1] ?? "Get Started"}</p>
          </div>
        </div>
      </a>
  )
}
