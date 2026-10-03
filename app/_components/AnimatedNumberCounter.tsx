import styles from "./styles.module.css"

export default function AnimatedNumberCounter({ slots = [] }: { slots?: string[] }) {
  return (
      <p className={styles["p-19"]}>{slots[0] ?? "87%"}</p>
  )
}
