import styles from "./styles.module.css"

export default function ContactSubmitButton({ slots = [] }: { slots?: string[] }) {
  return (
      <button className={styles["default-4"]}>
        <div className={styles["text-container-8"]}>
          <div className={styles["get-template-7"]}>
            <p className={styles["p-73"]}>{slots[0] ?? "Submit"}</p>
          </div>
          <div className={styles["get-template-7"]}>
            <p className={styles["p-73"]}>{slots[1] ?? "Submit"}</p>
          </div>
        </div>
      </button>
  )
}
