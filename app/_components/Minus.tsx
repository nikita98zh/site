import styles from "./styles.module.css"

export default function Minus({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["icon-minus"]} />
  )
}
