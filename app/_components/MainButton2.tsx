import styles from "./styles.module.css"

export default function MainButton2({ slots = [] }: { slots?: string[] }) {
  return (
      <a className={styles["primary-2"]} href="./contact-us">
        <div className={styles["text-container-2"]}>
          <div className={styles["get-template-2"]}>
            <p className={styles["p-18"]}>{slots[0] ?? "Start Writing"}</p>
          </div>
          <div className={styles["get-template-2"]}>
            <p className={styles["p-18"]}>{slots[1] ?? "Start Writing"}</p>
          </div>
        </div>
      </a>
  )
}
