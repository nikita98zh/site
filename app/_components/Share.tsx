import styles from "./styles.module.css"

export default function Share({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["icon-text-bold"]} />
  )
}
