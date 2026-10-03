import styles from "./styles.module.css"

export default function TextItalic({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["icon-text-bold"]} />
  )
}
