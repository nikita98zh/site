import styles from "./styles.module.css"

export default function PricingToggle({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["monthly-2"]}>
        <div className={styles["active-segment"]}>
          <div className={styles["active-segment-sizer"]} />
        </div>
        <div className={styles["monthly-option"]}>
          <div className={styles["button-text"]}>
            <p className={styles["p-25"]}>{slots[0] ?? "Monthly"}</p>
          </div>
        </div>
        <div className={styles["annual-option"]}>
          <div className={styles["button-text-2"]}>
            <p className={styles["p-26"]}>{slots[1] ?? "Annual"}</p>
          </div>
        </div>
      </div>
  )
}
