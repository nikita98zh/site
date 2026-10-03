import styles from "./styles.module.css"
import { SvgGraphic } from "./RichText"

export default function HowItWorksCard({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["active"]}>
        <div className={styles["how-it-works-surface"]}>
          <div className={styles["number-12"]}>
            <div className={styles["number-13"]}>
              <p className={styles["p-17"]}>{slots[0] ?? "Step 1"}</p>
            </div>
          </div>
          <div className={styles["how-it-works-group-7"]}>
            <div className={styles["enter-your-idea"]}>
              <p className={styles["p-11"]}>{slots[1] ?? "Enter your idea"}</p>
            </div>
            <div className={styles["create-ads-emails-landing-pages-and-social-content-without-starting-from-scratch-quickly-generate-multiple-variations-test-different-angles-and-adapt-your-message-for-every-platform-in-seconds-2"]}>
              <p className={styles["p-12"]}>{slots[2] ?? "Describe what you want to create in a simple prompt - even a rough idea works."}</p>
            </div>
          </div>
        </div>
        <div className={styles["how-it-works-group-8"]}>
          <div className={styles["div-12"]}>
            <div className={styles["div-13"]}>
              <SvgGraphic className={styles["svg-5"]} html={"<svg style=\"width:100%;height:100%;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"1446\"><use href=\"#svg1527700876_422\" data-f2c-idx=\"1447\"></use></svg>"} />
            </div>
          </div>
        </div>
        <div className={styles["how-it-works-group-9"]}>
          <div className={styles["div-12"]}>
            <div className={styles["div-13"]}>
              <SvgGraphic className={styles["svg-5"]} html={"<svg style=\"width:100%;height:100%;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"1451\"><use href=\"#svg334393695_407\" data-f2c-idx=\"1452\"></use></svg>"} />
            </div>
          </div>
        </div>
        <div className={styles["how-it-works-group-10"]}>
          <div className={styles["div-12"]}>
            <div className={styles["div-13"]}>
              <SvgGraphic className={styles["svg-5"]} html={"<svg style=\"width:100%;height:100%;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"1456\"><use href=\"#svg172319957_405\" data-f2c-idx=\"1457\"></use></svg>"} />
            </div>
          </div>
        </div>
        <div className={styles["how-it-works-group-11"]}>
          <div className={styles["div-12"]}>
            <div className={styles["div-13"]}>
              <SvgGraphic className={styles["svg-5"]} html={"<svg style=\"width:100%;height:100%;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"1461\"><use href=\"#svg-2126597858_420\" data-f2c-idx=\"1462\"></use></svg>"} />
            </div>
          </div>
        </div>
      </div>
  )
}
