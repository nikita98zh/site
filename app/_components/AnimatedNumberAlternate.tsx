import styles from "./styles.module.css"
import { SvgGraphic } from "./RichText"

export default function AnimatedNumberAlternate({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["end"]}>
        <div className={styles["number"]}>
          <div className={styles["number-2"]}>
            <div className={styles["number-3"]}>
              <p className={styles["p-6"]}>{slots[0] ?? "001"}</p>
            </div>
          </div>
          <div className={styles["icon"]}>
            <div className={styles["div-5"]}>
              <SvgGraphic className={styles["svg-3"]} html={"<svg style=\"width:100%;height:100%;\" viewBox=\"0 0 17 17\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"1157\"><use href=\"#svg1440312429_209\" data-f2c-idx=\"1158\"></use></svg>"} />
            </div>
          </div>
        </div>
        <div className={styles["icon-2"]}>
          <div className={styles["div-5"]}>
            <SvgGraphic className={styles["svg-3"]} html={"<svg style=\"width:100%;height:100%;\" viewBox=\"0 0 17 17\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"1161\"><use href=\"#svg-1982902615_207\" data-f2c-idx=\"1162\"></use></svg>"} />
          </div>
        </div>
        <div className={styles["line"]} />
      </div>
  )
}
