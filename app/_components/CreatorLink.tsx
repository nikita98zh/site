import styles from "./styles.module.css"
import { SvgGraphic } from "./RichText"

export default function CreatorLink({ slots = [] }: { slots?: string[] }) {
  return (
      <a className={styles["desktop-5"]} href="https://tvorbadesign.com/">
        <div className={styles["created-by"]}>
          <p className={styles["p-71"]}>{slots[0] ?? "Created by"}</p>
        </div>
        <div className={styles["image-7"]}>
          <div className={styles["avatar"]}>
            <div className={styles["logo-6"]}>
              <div className={styles["div-34"]}>
                <div className={styles["div-35"]}>
                  <SvgGraphic className={styles["svg-17"]} html={"<svg style=\"width:100%;height:100%;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"4910\"><use href=\"#svg-1594501862_407\" data-f2c-idx=\"4911\"></use></svg>"} />
                </div>
              </div>
            </div>
          </div>
          <div className={styles["logo-7"]}>
            <div className={styles["div-36"]}>
              <div className={styles["div-37"]}>
                <SvgGraphic className={styles["svg-18"]} html={"<svg style=\"width:100%;height:100%;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"4915\"><use href=\"#svg830928906_407\" data-f2c-idx=\"4916\"></use></svg>"} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles["tvorba"]}>
          <p className={styles["p-72"]}>{slots[1] ?? "Tvorba"}</p>
        </div>
      </a>
  )
}
