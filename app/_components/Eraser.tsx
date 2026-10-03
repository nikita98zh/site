import styles from "./styles.module.css"

export default function Eraser({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["icon-text-bold"]} />
  )
}
