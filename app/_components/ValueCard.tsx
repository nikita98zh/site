import styles from "./styles.module.css"
import { SvgGraphic } from "./RichText"

export default function ValueCard({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["with-icon"]}>
        <div className={styles["value-group-5"]}>
          <div className={styles["div"]}>
            <div className={styles["div-2"]}>
              <SvgGraphic className={styles["svg"]} html={"<svg style=\"width:100%;height:100%;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"954\"><use href=\"#svg1527700876_422\" data-f2c-idx=\"955\"></use></svg>"} />
            </div>
          </div>
        </div>
        <div className={styles["value-group-6"]}>
          <div className={styles["div"]}>
            <div className={styles["div-2"]}>
              <SvgGraphic className={styles["svg"]} html={"<svg style=\"width:100%;height:100%;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"959\"><use href=\"#svg334393695_407\" data-f2c-idx=\"960\"></use></svg>"} />
            </div>
          </div>
        </div>
        <div className={styles["value-group-7"]}>
          <div className={styles["div"]}>
            <div className={styles["div-2"]}>
              <SvgGraphic className={styles["svg"]} html={"<svg style=\"width:100%;height:100%;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"964\"><use href=\"#svg172319957_405\" data-f2c-idx=\"965\"></use></svg>"} />
            </div>
          </div>
        </div>
        <div className={styles["value-group-8"]}>
          <div className={styles["div"]}>
            <div className={styles["div-2"]}>
              <SvgGraphic className={styles["svg"]} html={"<svg style=\"width:100%;height:100%;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"969\"><use href=\"#svg-2126597858_420\" data-f2c-idx=\"970\"></use></svg>"} />
            </div>
          </div>
        </div>
        <div className={styles["value-surface-2"]}>
          <div className={styles["frame-2147239313"]}>
            <div className={styles["frame-2147239314"]}>
              <div className={styles["smart-rewrite"]}>
                <p className={styles["p-2"]}>{slots[0] ?? "Smart Rewrite"}</p>
              </div>
              <div className={styles["improve-clarity-structure-and-tone-instantly-without-rewriting-from-scratch"]}>
                <p className={styles["p-3"]}>{slots[1] ?? "Improve clarity, structure, and tone instantly without rewriting from scratch."}</p>
              </div>
            </div>
            <div className={styles["fix-and-refine-in-one-click"]}>
              <p className={styles["p-4"]}>{slots[2] ?? "Fix and refine in one click."}</p>
            </div>
          </div>
          <div className={styles["icon-var-variable-ftsblmi9s-4"]} />
        </div>
      </div>
  )
}
