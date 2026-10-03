import styles from "./styles.module.css"

export default function AnimatedNumberCounter2({ slots = [] }: { slots?: string[] }) {
  return (
      <p className={styles["p-20"]}>{slots[0] ?? "100%"}</p>
  )
}
