import styles from "./styles.module.css"
import { SvgGraphic } from "./RichText"

export default function PlusMinusButtonSmall({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["minus"]}>
        <div className={styles["div-11"]} />
        <div className={styles["plus-minus-button-small-group-5"]}>
          <div className={styles["div-12"]}>
            <div className={styles["div-13"]}>
              <SvgGraphic className={styles["svg-5"]} html={"<svg style=\"width:100%;height:100%;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"1198\"><use href=\"#svg1527700876_422\" data-f2c-idx=\"1199\"></use></svg>"} />
            </div>
          </div>
        </div>
        <div className={styles["plus-minus-button-small-group-6"]}>
          <div className={styles["div-12"]}>
            <div className={styles["div-13"]}>
              <SvgGraphic className={styles["svg-5"]} html={"<svg style=\"width:100%;height:100%;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"1203\"><use href=\"#svg334393695_407\" data-f2c-idx=\"1204\"></use></svg>"} />
            </div>
          </div>
        </div>
        <div className={styles["plus-minus-button-small-group-7"]}>
          <div className={styles["div-12"]}>
            <div className={styles["div-13"]}>
              <SvgGraphic className={styles["svg-5"]} html={"<svg style=\"width:100%;height:100%;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"1208\"><use href=\"#svg172319957_405\" data-f2c-idx=\"1209\"></use></svg>"} />
            </div>
          </div>
        </div>
        <div className={styles["plus-minus-button-small-group-8"]}>
          <div className={styles["div-12"]}>
            <div className={styles["div-13"]}>
              <SvgGraphic className={styles["svg-5"]} html={"<svg style=\"width:100%;height:100%;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"1213\"><use href=\"#svg-2126597858_420\" data-f2c-idx=\"1214\"></use></svg>"} />
            </div>
          </div>
        </div>
      </div>
  )
}
