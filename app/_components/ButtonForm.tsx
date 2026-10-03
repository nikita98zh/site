import styles from "./styles.module.css"

export default function ButtonForm({ slots = [] }: { slots?: string[] }) {
  return (
      <button className={styles["default-3"]}>
        <div className={styles["text-container-7"]}>
          <div className={styles["get-template-6"]}>
            <p className={styles["p-61"]}>{slots[0] ?? "Join"}</p>
          </div>
          <div className={styles["get-template-6"]}>
            <p className={styles["p-61"]}>{slots[1] ?? "Join"}</p>
          </div>
        </div>
      </button>
  )
}
