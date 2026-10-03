import styles from "./styles.module.css"
import { SvgGraphic } from "./RichText"

export default function LinkBuiltIn({ slots = [] }: { slots?: string[] }) {
  return (
      <a className={styles["desktop-4"]} href="https://framer.link/yulia95">
        <div className={styles["vector"]}>
          <div className={styles["div-33"]}>
            <SvgGraphic className={styles["svg-16"]} html={"<svg style=\"width:100%;height:100%;\" data-f2c-idx=\"4894\"><use href=\"#svg10444124753\" data-f2c-idx=\"4895\"></use></svg>"} />
          </div>
        </div>
        <div className={styles["linkbuiltin-group"]}>
          <div className={styles["label-built-in-framer"]}>
            <p className={styles["p-70"]}>{slots[0] ?? "Built in Framer"}</p>
          </div>
          <div className={styles["label-built-in-framer-2"]}>
            <p className={styles["p-70"]}>{slots[1] ?? "Built in Framer"}</p>
          </div>
        </div>
      </a>
  )
}
