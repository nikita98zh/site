import styles from "./styles.module.css"

export default function MainButton4({ slots = [] }: { slots?: string[] }) {
  return (
      <a className={styles["primary-5"]} href="https://framer.link/W76dZzY">
        <div className={styles["text-container-5"]}>
          <div className={styles["get-template-4"]}>
            <p className={styles["p-47"]}>{slots[0] ?? "Get Template Free"}</p>
          </div>
          <div className={styles["get-template-4"]}>
            <p className={styles["p-47"]}>{slots[1] ?? "Get Template Free"}</p>
          </div>
        </div>
      </a>
  )
}
