import styles from "./styles.module.css"

export default function LogoCard({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["primary-3"]}>
        <div className={styles["logo-image"]}>
          <div className={styles["div-17"]}>
            <img className={styles["img-7"]} src={slots[0] ?? "https://framerusercontent.com/images/YPA31dypqQhkEL6FPlyB7OyvY.png?width=127&height=44"} alt="" />
          </div>
        </div>
      </div>
  )
}
