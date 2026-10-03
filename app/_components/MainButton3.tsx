import styles from "./styles.module.css"

export default function MainButton3({ slots = [] }: { slots?: string[] }) {
  return (
      <a className={styles["secondary"]} href="./contact-us">
        <div className={styles["text-container-3"]}>
          <div className={styles["get-template-3"]}>
            <p className={styles["p-31"]}>{slots[0] ?? "Get Started"}</p>
          </div>
          <div className={styles["get-template-3"]}>
            <p className={styles["p-31"]}>{slots[1] ?? "Get Started"}</p>
          </div>
        </div>
      </a>
  )
}
