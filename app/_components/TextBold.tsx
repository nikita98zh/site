import styles from "./styles.module.css"

export default function TextBold({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["icon-text-bold"]} />
  )
}
