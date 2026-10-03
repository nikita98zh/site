import styles from "./styles.module.css"
import { SvgGraphic } from "./RichText"

export default function TestimonialCard({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["featured"]}>
        <div className={styles["testimonial-group-9"]}>
          <div className={styles["testimonial-group-10"]}>
            <div className={styles["testimonial-group-11"]}>
              <div className={styles["div-18"]}>
                <div className={styles["div-19"]}>
                  <SvgGraphic className={styles["svg-9"]} html={"<svg style=\"width:100%;height:100%;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"3118\"><use href=\"#svg1612837512_789\" data-f2c-idx=\"3119\"></use></svg>"} />
                </div>
              </div>
              <div className={styles["testimonial-group-12"]}>
                <div className={styles["5-0"]}>
                  <p className={styles["p-21"]}>{slots[0] ?? "4,9"}</p>
                </div>
                <div className={styles["div-20"]}>
                  <div className={styles["div-21"]}>
                    <SvgGraphic className={styles["svg-10"]} html={"<svg style=\"width:100%;height:100%;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"3125\"><use href=\"#svg-584424782_783\" data-f2c-idx=\"3126\"></use></svg>"} />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles["testimonial-group-13"]}>
              <div className={styles["create-ads-emails-landing-pages-and-social-content-without-starting-from-scratch-quickly-generate-multiple-variations-test-different-angles-and-adapt-your-message-for-every-platform-in-seconds-3"]}>
                <p className={styles["p-22"]}>{slots[1] ?? "\"We tested several AI writing tools, but Verseo felt the most practical. It's fast, intuitive, and fits naturally into our workflow.\""}</p>
              </div>
            </div>
          </div>
          <div className={styles["client-story-author"]}>
            <div className={styles["photo-of-a-client"]}>
              <div className={styles["div-22"]}>
                <img className={styles["img-13"]} src={slots[2] ?? "https://framerusercontent.com/images/DtEuMSNQCQcQFR1rext984GIaRw.png?width=80&height=80"} alt="" />
              </div>
            </div>
            <div className={styles["client-story-author-info"]}>
              <div className={styles["subtitle-200"]}>
                <p className={styles["p-23"]}>{slots[3] ?? "Emma Rodriguez"}</p>
              </div>
              <div className={styles["content-description-satisfied-teams"]}>
                <p className={styles["p-24"]}>{slots[4] ?? "Content Strategist"}</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["testimonial-group-14"]}>
          <div className={styles["div"]}>
            <div className={styles["div-2"]}>
              <SvgGraphic className={styles["svg"]} html={"<svg style=\"width:100%;height:100%;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"3142\"><use href=\"#svg1527700876_422\" data-f2c-idx=\"3143\"></use></svg>"} />
            </div>
          </div>
        </div>
        <div className={styles["testimonial-group-15"]}>
          <div className={styles["div"]}>
            <div className={styles["div-2"]}>
              <SvgGraphic className={styles["svg"]} html={"<svg style=\"width:100%;height:100%;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"3147\"><use href=\"#svg334393695_407\" data-f2c-idx=\"3148\"></use></svg>"} />
            </div>
          </div>
        </div>
        <div className={styles["testimonial-group-16"]}>
          <div className={styles["div"]}>
            <div className={styles["div-2"]}>
              <SvgGraphic className={styles["svg"]} html={"<svg style=\"width:100%;height:100%;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"3152\"><use href=\"#svg172319957_405\" data-f2c-idx=\"3153\"></use></svg>"} />
            </div>
          </div>
        </div>
        <div className={styles["testimonial-group-17"]}>
          <div className={styles["div"]}>
            <div className={styles["div-2"]}>
              <SvgGraphic className={styles["svg"]} html={"<svg style=\"width:100%;height:100%;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"3157\"><use href=\"#svg-2126597858_420\" data-f2c-idx=\"3158\"></use></svg>"} />
            </div>
          </div>
        </div>
      </div>
  )
}
