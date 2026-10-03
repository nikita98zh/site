import styles from "./styles.module.css"
import { SvgGraphic } from "./RichText"

export default function Navigation({ slots = [] }: { slots?: string[] }) {
  return (
      <nav className={styles["desktop"]}>
        <div className={styles["navigation-group"]}>
          <div className={styles["nav"]}>
            <div className={styles["logo"]}>
              <a className={styles["logo-2"]} href="./">
                <div className={styles["logo-3"]}>
                  <div className={styles["div-23"]}>
                    <SvgGraphic className={styles["svg-11"]} html={"<svg style=\"width:100%;height:100%;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"3936\"><use href=\"#svg-53885881_2590\" data-f2c-idx=\"3937\"></use></svg>"} />
                  </div>
                </div>
                <div className={styles["logo-4"]}>
                  <p className={styles["p-41"]}>{slots[0] ?? "Verseo"}</p>
                </div>
              </a>
            </div>
            <div className={styles["items"]}>
              <div className={styles["label-product"]}>
                <div className={styles["p-42"]}>
                  <a className={styles["a"]} href="./#features">{slots[1] ?? "Product"}</a>
                </div>
              </div>
              <div className={styles["label-use-cases"]}>
                <div className={styles["p-43"]}>
                  <a className={styles["a"]} href="./#use-cases">{slots[2] ?? "Use Cases"}</a>
                </div>
              </div>
              <div className={styles["label-examples"]}>
                <div className={styles["p-44"]}>
                  <a className={styles["a"]} href="./#examples">{slots[3] ?? "Examples"}</a>
                </div>
              </div>
              <div className={styles["label-pricing"]}>
                <div className={styles["p-45"]}>
                  <a className={styles["a"]} href="./#pricing">{slots[4] ?? "Pricing"}</a>
                </div>
              </div>
              <div className={styles["button-label"]}>
                <div className={styles["p-46"]}>
                  <a className={styles["a"]} href="./contact-us">{slots[5] ?? "Contact Us"}</a>
                </div>
              </div>
            </div>
            <div className={styles["navigation-instance-2"]}>
              <a className={styles["primary-5"]} href="https://framer.link/W76dZzY">
                <div className={styles["text-container-5"]}>
                  <div className={styles["get-template-4"]}>
                    <p className={styles["p-47"]}>{slots[6] ?? "Get Template Free"}</p>
                  </div>
                  <div className={styles["get-template-4"]}>
                    <p className={styles["p-47"]}>{slots[7] ?? "Get Template Free"}</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className={styles["vertical-fixed-lines"]}>
            <div className={styles["navigation-panel"]} />
            <div className={styles["navigation-panel"]} />
          </div>
        </div>
      </nav>
  )
}
