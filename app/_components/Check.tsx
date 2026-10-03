import styles from "./styles.module.css"

export default function Check({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["icon-check"]} />
  )
}
