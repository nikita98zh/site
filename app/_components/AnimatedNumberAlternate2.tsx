import styles from "./styles.module.css"
import { SvgGraphic } from "./RichText"

export default function AnimatedNumberAlternate2({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["start"]}>
        <div className={styles["number-6"]}>
          <div className={styles["number-5"]}>
            <div className={styles["number-3"]}>
              <p className={styles["p-9"]}>{slots[0] ?? "002"}</p>
            </div>
          </div>
          <div className={styles["icon"]}>
            <div className={styles["div-5"]}>
              <SvgGraphic className={styles["svg-3"]} html={"<svg style=\"width:100%;height:100%;\" viewBox=\"0 0 17 17\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"1250\"><use href=\"#svg1440312429_209\" data-f2c-idx=\"1251\"></use></svg>"} />
            </div>
          </div>
        </div>
        <div className={styles["icon-3"]}>
          <div className={styles["div-5"]}>
            <SvgGraphic className={styles["svg-3"]} html={"<svg style=\"width:100%;height:100%;\" viewBox=\"0 0 17 17\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"1254\"><use href=\"#svg-1982902615_207\" data-f2c-idx=\"1255\"></use></svg>"} />
          </div>
        </div>
        <div className={styles["line-3"]} />
      </div>
  )
}
