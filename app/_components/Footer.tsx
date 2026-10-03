import styles from "./styles.module.css"
import { SvgGraphic } from "./RichText"

export default function Footer({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["desktop-3"]}>
        <div className={styles["vertical-grid-lines"]}>
          <div className={styles["footer-group"]}>
            <div className={styles["div-30"]}>
              <div className={styles["div-31"]}>
                <SvgGraphic className={styles["svg-14"]} html={"<svg style=\"width:100%;height:100%;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"4619\"><use href=\"#svg1508962229_448\" data-f2c-idx=\"4620\"></use></svg>"} />
              </div>
            </div>
          </div>
          <div className={styles["footer-group-2"]}>
            <div className={styles["div-30"]}>
              <div className={styles["div-31"]}>
                <SvgGraphic className={styles["svg-14"]} html={"<svg style=\"width:100%;height:100%;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"4624\"><use href=\"#svg1508962229_448\" data-f2c-idx=\"4625\"></use></svg>"} />
              </div>
            </div>
          </div>
          <div className={styles["footer-group-3"]}>
            <div className={styles["div-30"]}>
              <div className={styles["div-31"]}>
                <SvgGraphic className={styles["svg-14"]} html={"<svg style=\"width:100%;height:100%;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"4629\"><use href=\"#svg1508962229_448\" data-f2c-idx=\"4630\"></use></svg>"} />
              </div>
            </div>
          </div>
          <div className={styles["footer-group-4"]}>
            <div className={styles["div-30"]}>
              <div className={styles["div-31"]}>
                <SvgGraphic className={styles["svg-14"]} html={"<svg style=\"width:100%;height:100%;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"4634\"><use href=\"#svg1508962229_448\" data-f2c-idx=\"4635\"></use></svg>"} />
              </div>
            </div>
          </div>
          <div className={styles["vertical-2"]}>
            <div className={styles["footer-panel"]} />
            <div className={styles["footer-panel"]} />
          </div>
        </div>
        <div className={styles["content"]}>
          <div className={styles["footer-group-5"]}>
            <div className={styles["footer-panel-3"]}>
              <div className={styles["nav-link"]}>
                <div className={styles["31"]}>
                  <div className={styles["div-32"]}>
                    <SvgGraphic className={styles["svg-15"]} html={"<svg style=\"width:100%;height:100%;\" viewBox=\"0 0 49 47\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"4645\"><use href=\"#svg-1102498613_1979\" data-f2c-idx=\"4646\"></use></svg>"} />
                  </div>
                </div>
                <div className={styles["logo-5"]}>
                  <p className={styles["p-53"]}>{slots[0] ?? "Verseo"}</p>
                </div>
              </div>
              <div className={styles["verseo-helps-teams-create-refine-and-publish-high-quality-content-faster-without-complicated-workflows-or-endless-revisions"]}>
                <p className={styles["p-54"]}>{slots[1] ?? "Verseo helps teams create, refine, and publish high-quality content faster — without complicated workflows or endless revisions."}</p>
              </div>
              <div className={styles["footer-group-6"]}>
                <div className={styles["div"]}>
                  <div className={styles["div-2"]}>
                    <SvgGraphic className={styles["svg"]} html={"<svg style=\"width:100%;height:100%;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"4654\"><use href=\"#svg1527700876_422\" data-f2c-idx=\"4655\"></use></svg>"} />
                  </div>
                </div>
              </div>
              <div className={styles["footer-group-7"]}>
                <div className={styles["div"]}>
                  <div className={styles["div-2"]}>
                    <SvgGraphic className={styles["svg"]} html={"<svg style=\"width:100%;height:100%;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"4659\"><use href=\"#svg334393695_407\" data-f2c-idx=\"4660\"></use></svg>"} />
                  </div>
                </div>
              </div>
              <div className={styles["footer-group-8"]}>
                <div className={styles["div"]}>
                  <div className={styles["div-2"]}>
                    <SvgGraphic className={styles["svg"]} html={"<svg style=\"width:100%;height:100%;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"4664\"><use href=\"#svg172319957_405\" data-f2c-idx=\"4665\"></use></svg>"} />
                  </div>
                </div>
              </div>
              <div className={styles["footer-group-9"]}>
                <div className={styles["div"]}>
                  <div className={styles["div-2"]}>
                    <SvgGraphic className={styles["svg"]} html={"<svg style=\"width:100%;height:100%;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"4669\"><use href=\"#svg-2126597858_420\" data-f2c-idx=\"4670\"></use></svg>"} />
                  </div>
                </div>
              </div>
              <div className={styles["frame-2147240476"]}>
                <div className={styles["content-request-create-a-high-converting-landing-page-processing-analyzing-audience-structuring-content-optimizing-messaging-output-compelling-headline-clear-value-proposition-conversion-focused-copy-status-ready-to-publish"]}>
                  <p className={styles["p-55"]}>{slots[2] ?? "content_request:"}</p>
                  <p className={styles["p-56"]}>{slots[3] ?? "> Create a high-converting landing page"}</p>
                  <div className={styles["p-55"]} />
                  <p className={styles["p-55"]}>{slots[4] ?? "processing…"}</p>
                  <p className={styles["p-55"]}>{slots[5] ?? "→ analyzing audience"}</p>
                  <p className={styles["p-55"]}>{slots[6] ?? "→ structuring content"}</p>
                  <p className={styles["p-55"]}>{slots[7] ?? "→ optimizing messaging"}</p>
                  <div className={styles["p-55"]} />
                  <p className={styles["p-55"]}>{slots[8] ?? "output:"}</p>
                  <p className={styles["p-55"]}>{slots[9] ?? "+ compelling headline"}</p>
                  <p className={styles["p-55"]}>{slots[10] ?? "+ clear value proposition"}</p>
                  <p className={styles["p-56"]}>{slots[11] ?? "+ conversion-focused copy"}</p>
                  <div className={styles["p-55"]} />
                  <p className={styles["p-55"]}>{slots[12] ?? "status: ready to publish ✓"}</p>
                </div>
              </div>
            </div>
            <div className={styles["footer-panel-4"]}>
              <div className={styles["footer-group-10"]}>
                <div className={styles["div"]}>
                  <div className={styles["div-2"]}>
                    <SvgGraphic className={styles["svg"]} html={"<svg style=\"width:100%;height:100%;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"4691\"><use href=\"#svg1527700876_422\" data-f2c-idx=\"4692\"></use></svg>"} />
                  </div>
                </div>
              </div>
              <div className={styles["footer-group-11"]}>
                <div className={styles["div"]}>
                  <div className={styles["div-2"]}>
                    <SvgGraphic className={styles["svg"]} html={"<svg style=\"width:100%;height:100%;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"4696\"><use href=\"#svg334393695_407\" data-f2c-idx=\"4697\"></use></svg>"} />
                  </div>
                </div>
              </div>
              <div className={styles["footer-group-12"]}>
                <div className={styles["div"]}>
                  <div className={styles["div-2"]}>
                    <SvgGraphic className={styles["svg"]} html={"<svg style=\"width:100%;height:100%;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"4701\"><use href=\"#svg172319957_405\" data-f2c-idx=\"4702\"></use></svg>"} />
                  </div>
                </div>
              </div>
              <div className={styles["footer-group-13"]}>
                <div className={styles["div"]}>
                  <div className={styles["div-2"]}>
                    <SvgGraphic className={styles["svg"]} html={"<svg style=\"width:100%;height:100%;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"4706\"><use href=\"#svg-2126597858_420\" data-f2c-idx=\"4707\"></use></svg>"} />
                  </div>
                </div>
              </div>
              <div className={styles["frame-2147240461"]}>
                <div className={styles["contact-us-through-e-mail"]}>
                  <p className={styles["p-57"]}>{slots[13] ?? "[ Contact us through e-mail ]"}</p>
                </div>
                <div className={styles["content-title"]}>
                  <div className={styles["p-58"]}>
                    <a className={styles["a-2"]} href="mailto:verseo@gmail.com">{slots[14] ?? "verseo@gmail.com"}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles["footer-group-14"]}>
            <div className={styles["footer-panel-5"]}>
              <div className={styles["footer-group-15"]}>
                <div className={styles["div"]}>
                  <div className={styles["div-2"]}>
                    <SvgGraphic className={styles["svg"]} html={"<svg style=\"width:100%;height:100%;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"4719\"><use href=\"#svg1527700876_422\" data-f2c-idx=\"4720\"></use></svg>"} />
                  </div>
                </div>
              </div>
              <div className={styles["footer-group-16"]}>
                <div className={styles["div"]}>
                  <div className={styles["div-2"]}>
                    <SvgGraphic className={styles["svg"]} html={"<svg style=\"width:100%;height:100%;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"4724\"><use href=\"#svg334393695_407\" data-f2c-idx=\"4725\"></use></svg>"} />
                  </div>
                </div>
              </div>
              <div className={styles["footer-group-17"]}>
                <div className={styles["div"]}>
                  <div className={styles["div-2"]}>
                    <SvgGraphic className={styles["svg"]} html={"<svg style=\"width:100%;height:100%;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"4729\"><use href=\"#svg172319957_405\" data-f2c-idx=\"4730\"></use></svg>"} />
                  </div>
                </div>
              </div>
              <div className={styles["footer-group-18"]}>
                <div className={styles["div"]}>
                  <div className={styles["div-2"]}>
                    <SvgGraphic className={styles["svg"]} html={"<svg style=\"width:100%;height:100%;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"4734\"><use href=\"#svg-2126597858_420\" data-f2c-idx=\"4735\"></use></svg>"} />
                  </div>
                </div>
              </div>
              <div className={styles["newsletter"]}>
                <p className={styles["p-59"]}>{slots[15] ?? "[ Newsletter ]"}</p>
              </div>
              <div className={styles["syntiq-ai-systems-for-structured-growth-heading-2-scientific-ai-systems-for-structured-growth-2"]}>
                <p className={styles["p-60"]}>{slots[16] ?? "Stay connected"}</p>
              </div>
              <form className={styles["form"]}>
                <label className={styles["footer-surface"]}>
                  <div className={styles["input"]}>
                    <div className={styles["input-2"]} />
                  </div>
                </label>
                <div className={styles["footer-instance"]}>
                  <button className={styles["default-3"]}>
                    <div className={styles["text-container-7"]}>
                      <div className={styles["get-template-6"]}>
                        <p className={styles["p-61"]}>{slots[17] ?? "Join"}</p>
                      </div>
                      <div className={styles["get-template-6"]}>
                        <p className={styles["p-61"]}>{slots[18] ?? "Join"}</p>
                      </div>
                    </div>
                  </button>
                </div>
                <div className={styles["input-3"]} />
                <div className={styles["input-3"]} />
                <div className={styles["input-3"]} />
                <div className={styles["input-3"]} />
                <div className={styles["input-3"]} />
                <div className={styles["input-3"]} />
                <div className={styles["input-3"]} />
                <div className={styles["input-3"]} />
                <div className={styles["input-3"]} />
                <div className={styles["input-3"]} />
                <div className={styles["input-3"]} />
              </form>
            </div>
            <div className={styles["footer-group-19"]}>
              <div className={styles["footer-panel-6"]}>
                <div className={styles["footer-group-20"]}>
                  <div className={styles["div"]}>
                    <div className={styles["div-2"]}>
                      <SvgGraphic className={styles["svg"]} html={"<svg style=\"width:100%;height:100%;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"4767\"><use href=\"#svg1527700876_422\" data-f2c-idx=\"4768\"></use></svg>"} />
                    </div>
                  </div>
                </div>
                <div className={styles["footer-group-21"]}>
                  <div className={styles["div"]}>
                    <div className={styles["div-2"]}>
                      <SvgGraphic className={styles["svg"]} html={"<svg style=\"width:100%;height:100%;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"4772\"><use href=\"#svg334393695_407\" data-f2c-idx=\"4773\"></use></svg>"} />
                    </div>
                  </div>
                </div>
                <div className={styles["footer-group-22"]}>
                  <div className={styles["div"]}>
                    <div className={styles["div-2"]}>
                      <SvgGraphic className={styles["svg"]} html={"<svg style=\"width:100%;height:100%;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"4777\"><use href=\"#svg172319957_405\" data-f2c-idx=\"4778\"></use></svg>"} />
                    </div>
                  </div>
                </div>
                <div className={styles["footer-group-23"]}>
                  <div className={styles["div"]}>
                    <div className={styles["div-2"]}>
                      <SvgGraphic className={styles["svg"]} html={"<svg style=\"width:100%;height:100%;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"4782\"><use href=\"#svg-2126597858_420\" data-f2c-idx=\"4783\"></use></svg>"} />
                    </div>
                  </div>
                </div>
                <div className={styles["resources"]}>
                  <p className={styles["p-62"]}>{slots[19] ?? "[ resources ]"}</p>
                </div>
                <div className={styles["frame-2147239693"]}>
                  <div className={styles["label-privacy-policy"]}>
                    <div className={styles["p-63"]}>
                      <a className={styles["a"]} href="./privacy-policy">{slots[20] ?? "Privacy Policy"}</a>
                    </div>
                  </div>
                  <div className={styles["label-terms-of-service"]}>
                    <div className={styles["p-64"]}>
                      <a className={styles["a"]} href="./terms-of-service">{slots[21] ?? "Terms of Service"}</a>
                    </div>
                  </div>
                  <div className={styles["label-404-page"]}>
                    <div className={styles["p-65"]}>
                      <a className={styles["a"]} href="./404">{slots[22] ?? "404 page"}</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles["footer-panel-6"]}>
                <div className={styles["footer-group-20"]}>
                  <div className={styles["div"]}>
                    <div className={styles["div-2"]}>
                      <SvgGraphic className={styles["svg"]} html={"<svg style=\"width:100%;height:100%;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"4800\"><use href=\"#svg1527700876_422\" data-f2c-idx=\"4801\"></use></svg>"} />
                    </div>
                  </div>
                </div>
                <div className={styles["footer-group-21"]}>
                  <div className={styles["div"]}>
                    <div className={styles["div-2"]}>
                      <SvgGraphic className={styles["svg"]} html={"<svg style=\"width:100%;height:100%;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"4805\"><use href=\"#svg334393695_407\" data-f2c-idx=\"4806\"></use></svg>"} />
                    </div>
                  </div>
                </div>
                <div className={styles["footer-group-22"]}>
                  <div className={styles["div"]}>
                    <div className={styles["div-2"]}>
                      <SvgGraphic className={styles["svg"]} html={"<svg style=\"width:100%;height:100%;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"4810\"><use href=\"#svg172319957_405\" data-f2c-idx=\"4811\"></use></svg>"} />
                    </div>
                  </div>
                </div>
                <div className={styles["footer-group-23"]}>
                  <div className={styles["div"]}>
                    <div className={styles["div-2"]}>
                      <SvgGraphic className={styles["svg"]} html={"<svg style=\"width:100%;height:100%;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"4815\"><use href=\"#svg-2126597858_420\" data-f2c-idx=\"4816\"></use></svg>"} />
                    </div>
                  </div>
                </div>
                <div className={styles["resources"]}>
                  <p className={styles["p-62"]}>{slots[23] ?? "[ Navigation ]"}</p>
                </div>
                <div className={styles["frame-2147239693-2"]}>
                  <div className={styles["label-product"]}>
                    <div className={styles["p-42"]}>
                      <a className={styles["a"]} href="./#features">{slots[24] ?? "Product"}</a>
                    </div>
                  </div>
                  <div className={styles["label-use-cases"]}>
                    <div className={styles["p-43"]}>
                      <a className={styles["a"]} href="./#use-cases">{slots[25] ?? "Use Cases"}</a>
                    </div>
                  </div>
                  <div className={styles["label-examples"]}>
                    <div className={styles["p-44"]}>
                      <a className={styles["a"]} href="./#examples">{slots[26] ?? "Examples"}</a>
                    </div>
                  </div>
                  <div className={styles["label-pricing"]}>
                    <div className={styles["p-45"]}>
                      <a className={styles["a"]} href="./#pricing">{slots[27] ?? "Pricing"}</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles["footer-panel-6"]}>
                <div className={styles["footer-group-20"]}>
                  <div className={styles["div"]}>
                    <div className={styles["div-2"]}>
                      <SvgGraphic className={styles["svg"]} html={"<svg style=\"width:100%;height:100%;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"4836\"><use href=\"#svg1527700876_422\" data-f2c-idx=\"4837\"></use></svg>"} />
                    </div>
                  </div>
                </div>
                <div className={styles["footer-group-21"]}>
                  <div className={styles["div"]}>
                    <div className={styles["div-2"]}>
                      <SvgGraphic className={styles["svg"]} html={"<svg style=\"width:100%;height:100%;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"4841\"><use href=\"#svg334393695_407\" data-f2c-idx=\"4842\"></use></svg>"} />
                    </div>
                  </div>
                </div>
                <div className={styles["footer-group-22"]}>
                  <div className={styles["div"]}>
                    <div className={styles["div-2"]}>
                      <SvgGraphic className={styles["svg"]} html={"<svg style=\"width:100%;height:100%;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"4846\"><use href=\"#svg172319957_405\" data-f2c-idx=\"4847\"></use></svg>"} />
                    </div>
                  </div>
                </div>
                <div className={styles["footer-group-23"]}>
                  <div className={styles["div"]}>
                    <div className={styles["div-2"]}>
                      <SvgGraphic className={styles["svg"]} html={"<svg style=\"width:100%;height:100%;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"4851\"><use href=\"#svg-2126597858_420\" data-f2c-idx=\"4852\"></use></svg>"} />
                    </div>
                  </div>
                </div>
                <div className={styles["resources"]}>
                  <p className={styles["p-62"]}>{slots[28] ?? "[ Social ]"}</p>
                </div>
                <div className={styles["frame-2147239693"]}>
                  <div className={styles["label-x"]}>
                    <div className={styles["p-66"]}>
                      <a className={styles["a"]} href="https://x.com/YTsyhanenko">{slots[29] ?? "X"}</a>
                    </div>
                  </div>
                  <div className={styles["label-instagram"]}>
                    <div className={styles["p-67"]}>
                      <a className={styles["a"]} href="https://www.instagram.com/">{slots[30] ?? "Instagram"}</a>
                    </div>
                  </div>
                  <div className={styles["label-linkedin"]}>
                    <div className={styles["p-68"]}>
                      <a className={styles["a"]} href="https://www.linkedin.com/">{slots[31] ?? "Linkedin"}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles["footer-group-32"]}>
            <div className={styles["footer-panel-9"]}>
              <div className={styles["footer-group-33"]}>
                <div className={styles["div"]}>
                  <div className={styles["div-2"]}>
                    <SvgGraphic className={styles["svg"]} html={"<svg style=\"width:100%;height:100%;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"4870\"><use href=\"#svg1527700876_422\" data-f2c-idx=\"4871\"></use></svg>"} />
                  </div>
                </div>
              </div>
              <div className={styles["footer-group-34"]}>
                <div className={styles["div"]}>
                  <div className={styles["div-2"]}>
                    <SvgGraphic className={styles["svg"]} html={"<svg style=\"width:100%;height:100%;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"4875\"><use href=\"#svg334393695_407\" data-f2c-idx=\"4876\"></use></svg>"} />
                  </div>
                </div>
              </div>
              <div className={styles["footer-group-35"]}>
                <div className={styles["div"]}>
                  <div className={styles["div-2"]}>
                    <SvgGraphic className={styles["svg"]} html={"<svg style=\"width:100%;height:100%;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"4880\"><use href=\"#svg172319957_405\" data-f2c-idx=\"4881\"></use></svg>"} />
                  </div>
                </div>
              </div>
              <div className={styles["footer-group-36"]}>
                <div className={styles["div"]}>
                  <div className={styles["div-2"]}>
                    <SvgGraphic className={styles["svg"]} html={"<svg style=\"width:100%;height:100%;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"4885\"><use href=\"#svg-2126597858_420\" data-f2c-idx=\"4886\"></use></svg>"} />
                  </div>
                </div>
              </div>
              <div className={styles["footer-group-37"]}>
                <div className={styles["body"]}>
                  <p className={styles["p-69"]}>{slots[32] ?? "© 2026 Verseo | All Rights Reserved"}</p>
                </div>
                <div className={styles["footer-instance-2"]}>
                  <a className={styles["desktop-4"]} href="https://framer.link/yulia95">
                    <div className={styles["vector"]}>
                      <div className={styles["div-33"]}>
                        <SvgGraphic className={styles["svg-16"]} html={"<svg style=\"width:100%;height:100%;\" data-f2c-idx=\"4894\"><use href=\"#svg10444124753\" data-f2c-idx=\"4895\"></use></svg>"} />
                      </div>
                    </div>
                    <div className={styles["linkbuiltin-group"]}>
                      <div className={styles["label-built-in-framer"]}>
                        <p className={styles["p-70"]}>{slots[33] ?? "Built in Framer"}</p>
                      </div>
                      <div className={styles["label-built-in-framer-2"]}>
                        <p className={styles["p-70"]}>{slots[34] ?? "Built in Framer"}</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className={styles["footer-instance-3"]}>
                <a className={styles["desktop-5"]} href="https://tvorbadesign.com/">
                  <div className={styles["created-by"]}>
                    <p className={styles["p-71"]}>{slots[35] ?? "Created by"}</p>
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
                    <p className={styles["p-72"]}>{slots[36] ?? "Tvorba"}</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["gradient"]} />
      </div>
  )
}
