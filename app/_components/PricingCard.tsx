import styles from "./styles.module.css"
import States from "./States"
import { SvgGraphic } from "./RichText"

export default function PricingCard({ slots = [] }: { slots?: string[] }) {
  return (
      <States
        a={<>
          <div className={styles["monthly"]}>
            <div className={styles["pricing-instance"] + " " + styles["rv-3"]} data-reveal style={{ transitionDelay: "1784ms" }}>
              <div className={styles["monthly-2"]}>
                <div className={styles["active-segment"]}>
                  <div className={styles["active-segment-sizer"]} />
                </div>
                <div className={styles["monthly-option"]}>
                  <div className={styles["button-text"]}>
                    <p className={styles["p-25"]}>{"Monthly"}</p>
                  </div>
                </div>
                <div className={styles["annual-option"]}>
                  <div className={styles["button-text-2"]}>
                    <p className={styles["p-26"]}>{"Annual"}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles["pricing-group"]}>
              <div className={styles["pricing-instance-2"] + " " + styles["rv-4"]} data-reveal>
                <div className={styles["featured-2"]}>
                  <div className={styles["price-group-10"]}>
                    <div className={styles["price-group-11"]}>
                      <div className={styles["icon-var-variable-qqo90s6et-2"]} />
                      <div className={styles["price-panel-2"]}>
                        <div className={styles["popular"]}>
                          <p className={styles["p-27"]}>{"Popular"}</p>
                        </div>
                        <div className={styles["price-group-12"]}>
                          <div className={styles["div"]}>
                            <div className={styles["div-2"]}>
                              <SvgGraphic className={styles["svg"]} html={"<svg style=\"width:100%;height:100%;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"3329\"><use href=\"#svg1527700876_422\" data-f2c-idx=\"3330\"></use></svg>"} />
                            </div>
                          </div>
                        </div>
                        <div className={styles["price-group-13"]}>
                          <div className={styles["div"]}>
                            <div className={styles["div-2"]}>
                              <SvgGraphic className={styles["svg"]} html={"<svg style=\"width:100%;height:100%;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"3334\"><use href=\"#svg334393695_407\" data-f2c-idx=\"3335\"></use></svg>"} />
                            </div>
                          </div>
                        </div>
                        <div className={styles["price-group-14"]}>
                          <div className={styles["div"]}>
                            <div className={styles["div-2"]}>
                              <SvgGraphic className={styles["svg"]} html={"<svg style=\"width:100%;height:100%;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"3339\"><use href=\"#svg172319957_405\" data-f2c-idx=\"3340\"></use></svg>"} />
                            </div>
                          </div>
                        </div>
                        <div className={styles["price-group-15"]}>
                          <div className={styles["div"]}>
                            <div className={styles["div-2"]}>
                              <SvgGraphic className={styles["svg"]} html={"<svg style=\"width:100%;height:100%;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"3344\"><use href=\"#svg-2126597858_420\" data-f2c-idx=\"3345\"></use></svg>"} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles["frame-2147240130"]}>
                      <div className={styles["frame-2147239313-2"]}>
                        <div className={styles["frame-2147239314-2"]}>
                          <div className={styles["stay-in-the-flow"]}>
                            <p className={styles["p-28"]}>{"Starter"}</p>
                          </div>
                        </div>
                        <div className={styles["fix-and-refine-in-one-click-2"]}>
                          <p className={styles["p-29"]}>{"For individuals and freelancers"}</p>
                        </div>
                      </div>
                    </div>
                    <div className={styles["12"]}>
                      <p className={styles["p-30"]}>{"$12"}</p>
                    </div>
                    <div className={styles["price-instance-2"]}>
                      <a className={styles["secondary"]} href="./contact-us">
                        <div className={styles["text-container-3"]}>
                          <div className={styles["get-template-3"]}>
                            <p className={styles["p-31"]}>{"Get Started"}</p>
                          </div>
                          <div className={styles["get-template-3"]}>
                            <p className={styles["p-31"]}>{"Get Started"}</p>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className={styles["frame-2147239122"]}>
                      <div className={styles["frame-2147238934"]}>
                        <div className={styles["frame-2147238932"]}>
                          <div className={styles["icon-minus"]} />
                          <div className={styles["ideas-don-t-translate-into-clear-content"]}>
                            <p className={styles["p-32"]}>{"AI writing assistant"}</p>
                          </div>
                        </div>
                        <div className={styles["frame-2147238932"]}>
                          <div className={styles["icon-minus"]} />
                          <div className={styles["ideas-don-t-translate-into-clear-content"]}>
                            <p className={styles["p-32"]}>{"Essential content templates"}</p>
                          </div>
                        </div>
                        <div className={styles["frame-2147238932"]}>
                          <div className={styles["icon-minus"]} />
                          <div className={styles["ideas-don-t-translate-into-clear-content"]}>
                            <p className={styles["p-32"]}>{"Rewrite and improve text"}</p>
                          </div>
                        </div>
                        <div className={styles["frame-2147238932"]}>
                          <div className={styles["icon-minus"]} />
                          <div className={styles["ideas-don-t-translate-into-clear-content"]}>
                            <p className={styles["p-32"]}>{"Standard support"}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles["price-group-16"]}>
                    <div className={styles["div"]}>
                      <div className={styles["div-2"]}>
                        <SvgGraphic className={styles["svg"]} html={"<svg style=\"width:100%;height:100%;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"3383\"><use href=\"#svg1527700876_422\" data-f2c-idx=\"3384\"></use></svg>"} />
                      </div>
                    </div>
                  </div>
                  <div className={styles["price-group-17"]}>
                    <div className={styles["div"]}>
                      <div className={styles["div-2"]}>
                        <SvgGraphic className={styles["svg"]} html={"<svg style=\"width:100%;height:100%;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"3388\"><use href=\"#svg334393695_407\" data-f2c-idx=\"3389\"></use></svg>"} />
                      </div>
                    </div>
                  </div>
                  <div className={styles["price-group-18"]}>
                    <div className={styles["div"]}>
                      <div className={styles["div-2"]}>
                        <SvgGraphic className={styles["svg"]} html={"<svg style=\"width:100%;height:100%;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"3393\"><use href=\"#svg172319957_405\" data-f2c-idx=\"3394\"></use></svg>"} />
                      </div>
                    </div>
                  </div>
                  <div className={styles["price-group-19"]}>
                    <div className={styles["div"]}>
                      <div className={styles["div-2"]}>
                        <SvgGraphic className={styles["svg"]} html={"<svg style=\"width:100%;height:100%;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"3398\"><use href=\"#svg-2126597858_420\" data-f2c-idx=\"3399\"></use></svg>"} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles["pricing-instance-3"] + " " + styles["rv-4"]} data-reveal style={{ transitionDelay: "107ms" }}>
                <div className={styles["default-2"]}>
                  <div className={styles["price-surface"]}>
                    <div className={styles["price-group"]}>
                      <div className={styles["icon-var-variable-qqo90s6et"]} />
                      <div className={styles["price-panel"]}>
                        <div className={styles["popular"]}>
                          <p className={styles["p-27"]}>{"Popular"}</p>
                        </div>
                        <div className={styles["price-group-12"]}>
                          <div className={styles["div"]}>
                            <div className={styles["div-2"]}>
                              <SvgGraphic className={styles["svg"]} html={"<svg style=\"width:100%;height:100%;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"3411\"><use href=\"#svg1527700876_422\" data-f2c-idx=\"3412\"></use></svg>"} />
                            </div>
                          </div>
                        </div>
                        <div className={styles["price-group-13"]}>
                          <div className={styles["div"]}>
                            <div className={styles["div-2"]}>
                              <SvgGraphic className={styles["svg"]} html={"<svg style=\"width:100%;height:100%;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"3416\"><use href=\"#svg334393695_407\" data-f2c-idx=\"3417\"></use></svg>"} />
                            </div>
                          </div>
                        </div>
                        <div className={styles["price-group-14"]}>
                          <div className={styles["div"]}>
                            <div className={styles["div-2"]}>
                              <SvgGraphic className={styles["svg"]} html={"<svg style=\"width:100%;height:100%;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"3421\"><use href=\"#svg172319957_405\" data-f2c-idx=\"3422\"></use></svg>"} />
                            </div>
                          </div>
                        </div>
                        <div className={styles["price-group-15"]}>
                          <div className={styles["div"]}>
                            <div className={styles["div-2"]}>
                              <SvgGraphic className={styles["svg"]} html={"<svg style=\"width:100%;height:100%;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"3426\"><use href=\"#svg-2126597858_420\" data-f2c-idx=\"3427\"></use></svg>"} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles["frame-2147240130-2"]}>
                      <div className={styles["frame-2147239313-3"]}>
                        <div className={styles["frame-2147239314-3"]}>
                          <div className={styles["stay-in-the-flow-2"]}>
                            <p className={styles["p-33"]}>{"Pro"}</p>
                          </div>
                        </div>
                        <div className={styles["fix-and-refine-in-one-click-3"]}>
                          <p className={styles["p-34"]}>{"For creators and professionals"}</p>
                        </div>
                      </div>
                    </div>
                    <div className={styles["12"]}>
                      <p className={styles["p-30"]}>{"$29"}</p>
                    </div>
                    <div className={styles["price-instance"]}>
                      <a className={styles["primary-4"]} href="./contact-us">
                        <div className={styles["text-container-3"]}>
                          <div className={styles["get-template-3"]}>
                            <p className={styles["p-35"]}>{"Get Started"}</p>
                          </div>
                          <div className={styles["get-template-3"]}>
                            <p className={styles["p-35"]}>{"Get Started"}</p>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className={styles["frame-2147239122-2"]}>
                      <div className={styles["frame-2147238934-2"]}>
                        <div className={styles["frame-2147238932-2"]}>
                          <div className={styles["icon-minus"]} />
                          <div className={styles["ideas-don-t-translate-into-clear-content-2"]}>
                            <p className={styles["p-36"]}>{"Advanced AI generation"}</p>
                          </div>
                        </div>
                        <div className={styles["frame-2147238932-2"]}>
                          <div className={styles["icon-minus"]} />
                          <div className={styles["ideas-don-t-translate-into-clear-content-2"]}>
                            <p className={styles["p-36"]}>{"Brand voice controls"}</p>
                          </div>
                        </div>
                        <div className={styles["frame-2147238932-2"]}>
                          <div className={styles["icon-minus"]} />
                          <div className={styles["ideas-don-t-translate-into-clear-content-2"]}>
                            <p className={styles["p-36"]}>{"Full template library"}</p>
                          </div>
                        </div>
                        <div className={styles["frame-2147238932-2"]}>
                          <div className={styles["icon-minus"]} />
                          <div className={styles["ideas-don-t-translate-into-clear-content-2"]}>
                            <p className={styles["p-36"]}>{"Priority content tools"}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles["price-group-6"]}>
                    <div className={styles["div"]}>
                      <div className={styles["div-2"]}>
                        <SvgGraphic className={styles["svg"]} html={"<svg style=\"width:100%;height:100%;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"3465\"><use href=\"#svg1527700876_422\" data-f2c-idx=\"3466\"></use></svg>"} />
                      </div>
                    </div>
                  </div>
                  <div className={styles["price-group-7"]}>
                    <div className={styles["div"]}>
                      <div className={styles["div-2"]}>
                        <SvgGraphic className={styles["svg"]} html={"<svg style=\"width:100%;height:100%;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"3470\"><use href=\"#svg334393695_407\" data-f2c-idx=\"3471\"></use></svg>"} />
                      </div>
                    </div>
                  </div>
                  <div className={styles["price-group-8"]}>
                    <div className={styles["div"]}>
                      <div className={styles["div-2"]}>
                        <SvgGraphic className={styles["svg"]} html={"<svg style=\"width:100%;height:100%;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"3475\"><use href=\"#svg172319957_405\" data-f2c-idx=\"3476\"></use></svg>"} />
                      </div>
                    </div>
                  </div>
                  <div className={styles["price-group-9"]}>
                    <div className={styles["div"]}>
                      <div className={styles["div-2"]}>
                        <SvgGraphic className={styles["svg"]} html={"<svg style=\"width:100%;height:100%;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"3480\"><use href=\"#svg-2126597858_420\" data-f2c-idx=\"3481\"></use></svg>"} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles["pricing-instance-2"] + " " + styles["rv-4"]} data-reveal style={{ transitionDelay: "215ms" }}>
                <div className={styles["featured-2"]}>
                  <div className={styles["price-group-10"]}>
                    <div className={styles["price-group-11"]}>
                      <div className={styles["icon-var-variable-qqo90s6et-2-2"]} />
                      <div className={styles["price-panel-2"]}>
                        <div className={styles["popular"]}>
                          <p className={styles["p-27"]}>{"Popular"}</p>
                        </div>
                        <div className={styles["price-group-12"]}>
                          <div className={styles["div"]}>
                            <div className={styles["div-2"]}>
                              <SvgGraphic className={styles["svg"]} html={"<svg style=\"width:100%;height:100%;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"3493\"><use href=\"#svg1527700876_422\" data-f2c-idx=\"3494\"></use></svg>"} />
                            </div>
                          </div>
                        </div>
                        <div className={styles["price-group-13"]}>
                          <div className={styles["div"]}>
                            <div className={styles["div-2"]}>
                              <SvgGraphic className={styles["svg"]} html={"<svg style=\"width:100%;height:100%;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"3498\"><use href=\"#svg334393695_407\" data-f2c-idx=\"3499\"></use></svg>"} />
                            </div>
                          </div>
                        </div>
                        <div className={styles["price-group-14"]}>
                          <div className={styles["div"]}>
                            <div className={styles["div-2"]}>
                              <SvgGraphic className={styles["svg"]} html={"<svg style=\"width:100%;height:100%;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"3503\"><use href=\"#svg172319957_405\" data-f2c-idx=\"3504\"></use></svg>"} />
                            </div>
                          </div>
                        </div>
                        <div className={styles["price-group-15"]}>
                          <div className={styles["div"]}>
                            <div className={styles["div-2"]}>
                              <SvgGraphic className={styles["svg"]} html={"<svg style=\"width:100%;height:100%;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"3508\"><use href=\"#svg-2126597858_420\" data-f2c-idx=\"3509\"></use></svg>"} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles["frame-2147240130"]}>
                      <div className={styles["frame-2147239313-2"]}>
                        <div className={styles["frame-2147239314-2"]}>
                          <div className={styles["stay-in-the-flow"]}>
                            <p className={styles["p-28"]}>{"Team"}</p>
                          </div>
                        </div>
                        <div className={styles["fix-and-refine-in-one-click-2"]}>
                          <p className={styles["p-29"]}>{"For agencies and growing teams"}</p>
                        </div>
                      </div>
                    </div>
                    <div className={styles["12"]}>
                      <p className={styles["p-30"]}>{"$79"}</p>
                    </div>
                    <div className={styles["price-instance-2"]}>
                      <a className={styles["secondary"]} href="./contact-us">
                        <div className={styles["text-container-3"]}>
                          <div className={styles["get-template-3"]}>
                            <p className={styles["p-31"]}>{"Get Started"}</p>
                          </div>
                          <div className={styles["get-template-3"]}>
                            <p className={styles["p-31"]}>{"Get Started"}</p>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className={styles["frame-2147239122"]}>
                      <div className={styles["frame-2147238934"]}>
                        <div className={styles["frame-2147238932"]}>
                          <div className={styles["icon-minus"]} />
                          <div className={styles["ideas-don-t-translate-into-clear-content"]}>
                            <p className={styles["p-32"]}>{"Shared workspace"}</p>
                          </div>
                        </div>
                        <div className={styles["frame-2147238932"]}>
                          <div className={styles["icon-minus"]} />
                          <div className={styles["ideas-don-t-translate-into-clear-content"]}>
                            <p className={styles["p-32"]}>{"Team collaboration tools"}</p>
                          </div>
                        </div>
                        <div className={styles["frame-2147238932"]}>
                          <div className={styles["icon-minus"]} />
                          <div className={styles["ideas-don-t-translate-into-clear-content"]}>
                            <p className={styles["p-32"]}>{"Unlimited team projects"}</p>
                          </div>
                        </div>
                        <div className={styles["frame-2147238932"]}>
                          <div className={styles["icon-minus"]} />
                          <div className={styles["ideas-don-t-translate-into-clear-content"]}>
                            <p className={styles["p-32"]}>{"Priority support"}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles["price-group-16"]}>
                    <div className={styles["div"]}>
                      <div className={styles["div-2"]}>
                        <SvgGraphic className={styles["svg"]} html={"<svg style=\"width:100%;height:100%;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"3547\"><use href=\"#svg1527700876_422\" data-f2c-idx=\"3548\"></use></svg>"} />
                      </div>
                    </div>
                  </div>
                  <div className={styles["price-group-17"]}>
                    <div className={styles["div"]}>
                      <div className={styles["div-2"]}>
                        <SvgGraphic className={styles["svg"]} html={"<svg style=\"width:100%;height:100%;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"3552\"><use href=\"#svg334393695_407\" data-f2c-idx=\"3553\"></use></svg>"} />
                      </div>
                    </div>
                  </div>
                  <div className={styles["price-group-18"]}>
                    <div className={styles["div"]}>
                      <div className={styles["div-2"]}>
                        <SvgGraphic className={styles["svg"]} html={"<svg style=\"width:100%;height:100%;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"3557\"><use href=\"#svg172319957_405\" data-f2c-idx=\"3558\"></use></svg>"} />
                      </div>
                    </div>
                  </div>
                  <div className={styles["price-group-19"]}>
                    <div className={styles["div"]}>
                      <div className={styles["div-2"]}>
                        <SvgGraphic className={styles["svg"]} html={"<svg style=\"width:100%;height:100%;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"3562\"><use href=\"#svg-2126597858_420\" data-f2c-idx=\"3563\"></use></svg>"} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>}
        b={<>
          <div className={styles["monthly"]}>
            <div className={styles["pricing-instance"]}>
              <div className={styles["annual-hover"]}>
                <div className={styles["active-segment-2"]}>
                  <div className={styles["active-segment-sizer-2"]} />
                </div>
                <div className={styles["monthly-option"]}>
                  <div className={styles["button-text"]}>
                    <p className={styles["p-37"]}>{"Monthly"}</p>
                  </div>
                </div>
                <div className={styles["annual-option"]}>
                  <div className={styles["button-text-2"]}>
                    <p className={styles["p-38"]}>{"Annual"}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles["pricing-group"]}>
              <div className={styles["pricing-instance-2"]}>
                <div className={styles["featured-2"]}>
                  <div className={styles["price-group-10-2"]}>
                    <div className={styles["price-group-11-2"]}>
                      <div className={styles["icon-var-variable-qqo90s6et-2"]} />
                      <div className={styles["price-panel-2-2"]}>
                        <div className={styles["popular"]}>
                          <p className={styles["p-27"]}>{"Popular"}</p>
                        </div>
                        <div className={styles["price-group-12-2"]}>
                          <div className={styles["div"]}>
                            <div className={styles["div-2"]}>
                              <SvgGraphic className={styles["svg-8"]} html={"<svg style=\"width:100%;height:100%;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"3329\"><use href=\"#svg1527700876_422\" data-f2c-idx=\"3330\"></use></svg>"} />
                            </div>
                          </div>
                        </div>
                        <div className={styles["price-group-13-2"]}>
                          <div className={styles["div"]}>
                            <div className={styles["div-2"]}>
                              <SvgGraphic className={styles["svg-8"]} html={"<svg style=\"width:100%;height:100%;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"3334\"><use href=\"#svg334393695_407\" data-f2c-idx=\"3335\"></use></svg>"} />
                            </div>
                          </div>
                        </div>
                        <div className={styles["price-group-14-2"]}>
                          <div className={styles["div"]}>
                            <div className={styles["div-2"]}>
                              <SvgGraphic className={styles["svg-8"]} html={"<svg style=\"width:100%;height:100%;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"3339\"><use href=\"#svg172319957_405\" data-f2c-idx=\"3340\"></use></svg>"} />
                            </div>
                          </div>
                        </div>
                        <div className={styles["price-group-15-2"]}>
                          <div className={styles["div"]}>
                            <div className={styles["div-2"]}>
                              <SvgGraphic className={styles["svg-8"]} html={"<svg style=\"width:100%;height:100%;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"3344\"><use href=\"#svg-2126597858_420\" data-f2c-idx=\"3345\"></use></svg>"} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles["frame-2147240130"]}>
                      <div className={styles["frame-2147239313-2"]}>
                        <div className={styles["frame-2147239314-2"]}>
                          <div className={styles["stay-in-the-flow"]}>
                            <p className={styles["p-28"]}>{"Starter"}</p>
                          </div>
                        </div>
                        <div className={styles["fix-and-refine-in-one-click-2"]}>
                          <p className={styles["p-29"]}>{"For individuals and freelancers"}</p>
                        </div>
                      </div>
                    </div>
                    <div className={styles["12"]}>
                      <p className={styles["p-30"]}>{"$120"}</p>
                    </div>
                    <div className={styles["price-instance-2"]}>
                      <a className={styles["secondary"]} href="./contact-us">
                        <div className={styles["text-container-4"]}>
                          <div className={styles["get-template-3"]}>
                            <p className={styles["p-31"]}>{"Get Started"}</p>
                          </div>
                          <div className={styles["get-template-3"]}>
                            <p className={styles["p-31"]}>{"Get Started"}</p>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className={styles["frame-2147239122"]}>
                      <div className={styles["frame-2147238934"]}>
                        <div className={styles["frame-2147238932"]}>
                          <div className={styles["icon-minus"]} />
                          <div className={styles["ideas-don-t-translate-into-clear-content"]}>
                            <p className={styles["p-32"]}>{"AI writing assistant"}</p>
                          </div>
                        </div>
                        <div className={styles["frame-2147238932"]}>
                          <div className={styles["icon-minus"]} />
                          <div className={styles["ideas-don-t-translate-into-clear-content"]}>
                            <p className={styles["p-32"]}>{"Essential content templates"}</p>
                          </div>
                        </div>
                        <div className={styles["frame-2147238932"]}>
                          <div className={styles["icon-minus"]} />
                          <div className={styles["ideas-don-t-translate-into-clear-content"]}>
                            <p className={styles["p-32"]}>{"Rewrite and improve text"}</p>
                          </div>
                        </div>
                        <div className={styles["frame-2147238932"]}>
                          <div className={styles["icon-minus"]} />
                          <div className={styles["ideas-don-t-translate-into-clear-content"]}>
                            <p className={styles["p-32"]}>{"Standard support"}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles["price-group-16-2"]}>
                    <div className={styles["div"]}>
                      <div className={styles["div-2"]}>
                        <SvgGraphic className={styles["svg-8"]} html={"<svg style=\"width:100%;height:100%;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"3383\"><use href=\"#svg1527700876_422\" data-f2c-idx=\"3384\"></use></svg>"} />
                      </div>
                    </div>
                  </div>
                  <div className={styles["price-group-17-2"]}>
                    <div className={styles["div"]}>
                      <div className={styles["div-2"]}>
                        <SvgGraphic className={styles["svg-8"]} html={"<svg style=\"width:100%;height:100%;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"3388\"><use href=\"#svg334393695_407\" data-f2c-idx=\"3389\"></use></svg>"} />
                      </div>
                    </div>
                  </div>
                  <div className={styles["price-group-18-2"]}>
                    <div className={styles["div"]}>
                      <div className={styles["div-2"]}>
                        <SvgGraphic className={styles["svg-8"]} html={"<svg style=\"width:100%;height:100%;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"3393\"><use href=\"#svg172319957_405\" data-f2c-idx=\"3394\"></use></svg>"} />
                      </div>
                    </div>
                  </div>
                  <div className={styles["price-group-19-2"]}>
                    <div className={styles["div"]}>
                      <div className={styles["div-2"]}>
                        <SvgGraphic className={styles["svg-8"]} html={"<svg style=\"width:100%;height:100%;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"3398\"><use href=\"#svg-2126597858_420\" data-f2c-idx=\"3399\"></use></svg>"} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles["pricing-instance-3"]}>
                <div className={styles["default-2"]}>
                  <div className={styles["price-surface-2"]}>
                    <div className={styles["price-group-2"]}>
                      <div className={styles["icon-var-variable-qqo90s6et"]} />
                      <div className={styles["price-panel-2"]}>
                        <div className={styles["popular"]}>
                          <p className={styles["p-27"]}>{"Popular"}</p>
                        </div>
                        <div className={styles["price-group-12-2"]}>
                          <div className={styles["div"]}>
                            <div className={styles["div-2"]}>
                              <SvgGraphic className={styles["svg-8"]} html={"<svg style=\"width:100%;height:100%;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"3411\"><use href=\"#svg1527700876_422\" data-f2c-idx=\"3412\"></use></svg>"} />
                            </div>
                          </div>
                        </div>
                        <div className={styles["price-group-13-2"]}>
                          <div className={styles["div"]}>
                            <div className={styles["div-2"]}>
                              <SvgGraphic className={styles["svg-8"]} html={"<svg style=\"width:100%;height:100%;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"3416\"><use href=\"#svg334393695_407\" data-f2c-idx=\"3417\"></use></svg>"} />
                            </div>
                          </div>
                        </div>
                        <div className={styles["price-group-14-2"]}>
                          <div className={styles["div"]}>
                            <div className={styles["div-2"]}>
                              <SvgGraphic className={styles["svg-8"]} html={"<svg style=\"width:100%;height:100%;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"3421\"><use href=\"#svg172319957_405\" data-f2c-idx=\"3422\"></use></svg>"} />
                            </div>
                          </div>
                        </div>
                        <div className={styles["price-group-15-2"]}>
                          <div className={styles["div"]}>
                            <div className={styles["div-2"]}>
                              <SvgGraphic className={styles["svg-8"]} html={"<svg style=\"width:100%;height:100%;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"3426\"><use href=\"#svg-2126597858_420\" data-f2c-idx=\"3427\"></use></svg>"} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles["frame-2147240130-2"]}>
                      <div className={styles["frame-2147239313-3"]}>
                        <div className={styles["frame-2147239314-3"]}>
                          <div className={styles["stay-in-the-flow-2"]}>
                            <p className={styles["p-33"]}>{"Pro"}</p>
                          </div>
                        </div>
                        <div className={styles["fix-and-refine-in-one-click-3"]}>
                          <p className={styles["p-34"]}>{"For creators and professionals"}</p>
                        </div>
                      </div>
                    </div>
                    <div className={styles["12"]}>
                      <p className={styles["p-30"]}>{"$290"}</p>
                    </div>
                    <div className={styles["price-instance"]}>
                      <a className={styles["primary-4"]} href="./contact-us">
                        <div className={styles["text-container-4"]}>
                          <div className={styles["get-template-3"]}>
                            <p className={styles["p-35"]}>{"Get Started"}</p>
                          </div>
                          <div className={styles["get-template-3"]}>
                            <p className={styles["p-35"]}>{"Get Started"}</p>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className={styles["frame-2147239122-2"]}>
                      <div className={styles["frame-2147238934-2"]}>
                        <div className={styles["frame-2147238932-2"]}>
                          <div className={styles["icon-minus"]} />
                          <div className={styles["ideas-don-t-translate-into-clear-content-2"]}>
                            <p className={styles["p-36"]}>{"Advanced AI generation"}</p>
                          </div>
                        </div>
                        <div className={styles["frame-2147238932-2"]}>
                          <div className={styles["icon-minus"]} />
                          <div className={styles["ideas-don-t-translate-into-clear-content-2"]}>
                            <p className={styles["p-36"]}>{"Brand voice controls"}</p>
                          </div>
                        </div>
                        <div className={styles["frame-2147238932-2"]}>
                          <div className={styles["icon-minus"]} />
                          <div className={styles["ideas-don-t-translate-into-clear-content-2"]}>
                            <p className={styles["p-36"]}>{"Full template library"}</p>
                          </div>
                        </div>
                        <div className={styles["frame-2147238932-2"]}>
                          <div className={styles["icon-minus"]} />
                          <div className={styles["ideas-don-t-translate-into-clear-content-2"]}>
                            <p className={styles["p-36"]}>{"Priority content tools"}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles["price-group-6-2"]}>
                    <div className={styles["div"]}>
                      <div className={styles["div-2"]}>
                        <SvgGraphic className={styles["svg-8"]} html={"<svg style=\"width:100%;height:100%;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"3465\"><use href=\"#svg1527700876_422\" data-f2c-idx=\"3466\"></use></svg>"} />
                      </div>
                    </div>
                  </div>
                  <div className={styles["price-group-7-2"]}>
                    <div className={styles["div"]}>
                      <div className={styles["div-2"]}>
                        <SvgGraphic className={styles["svg-8"]} html={"<svg style=\"width:100%;height:100%;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"3470\"><use href=\"#svg334393695_407\" data-f2c-idx=\"3471\"></use></svg>"} />
                      </div>
                    </div>
                  </div>
                  <div className={styles["price-group-8-2"]}>
                    <div className={styles["div"]}>
                      <div className={styles["div-2"]}>
                        <SvgGraphic className={styles["svg-8"]} html={"<svg style=\"width:100%;height:100%;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"3475\"><use href=\"#svg172319957_405\" data-f2c-idx=\"3476\"></use></svg>"} />
                      </div>
                    </div>
                  </div>
                  <div className={styles["price-group-9-2"]}>
                    <div className={styles["div"]}>
                      <div className={styles["div-2"]}>
                        <SvgGraphic className={styles["svg-8"]} html={"<svg style=\"width:100%;height:100%;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"3480\"><use href=\"#svg-2126597858_420\" data-f2c-idx=\"3481\"></use></svg>"} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles["pricing-instance-2"]}>
                <div className={styles["featured-2"]}>
                  <div className={styles["price-group-10-2"]}>
                    <div className={styles["price-group-11-2"]}>
                      <div className={styles["icon-var-variable-qqo90s6et-2-2"]} />
                      <div className={styles["price-panel-2-2"]}>
                        <div className={styles["popular"]}>
                          <p className={styles["p-27"]}>{"Popular"}</p>
                        </div>
                        <div className={styles["price-group-12-2"]}>
                          <div className={styles["div"]}>
                            <div className={styles["div-2"]}>
                              <SvgGraphic className={styles["svg-8"]} html={"<svg style=\"width:100%;height:100%;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"3493\"><use href=\"#svg1527700876_422\" data-f2c-idx=\"3494\"></use></svg>"} />
                            </div>
                          </div>
                        </div>
                        <div className={styles["price-group-13-2"]}>
                          <div className={styles["div"]}>
                            <div className={styles["div-2"]}>
                              <SvgGraphic className={styles["svg-8"]} html={"<svg style=\"width:100%;height:100%;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"3498\"><use href=\"#svg334393695_407\" data-f2c-idx=\"3499\"></use></svg>"} />
                            </div>
                          </div>
                        </div>
                        <div className={styles["price-group-14-2"]}>
                          <div className={styles["div"]}>
                            <div className={styles["div-2"]}>
                              <SvgGraphic className={styles["svg-8"]} html={"<svg style=\"width:100%;height:100%;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"3503\"><use href=\"#svg172319957_405\" data-f2c-idx=\"3504\"></use></svg>"} />
                            </div>
                          </div>
                        </div>
                        <div className={styles["price-group-15-2"]}>
                          <div className={styles["div"]}>
                            <div className={styles["div-2"]}>
                              <SvgGraphic className={styles["svg-8"]} html={"<svg style=\"width:100%;height:100%;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"3508\"><use href=\"#svg-2126597858_420\" data-f2c-idx=\"3509\"></use></svg>"} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles["frame-2147240130"]}>
                      <div className={styles["frame-2147239313-2"]}>
                        <div className={styles["frame-2147239314-2"]}>
                          <div className={styles["stay-in-the-flow"]}>
                            <p className={styles["p-28"]}>{"Team"}</p>
                          </div>
                        </div>
                        <div className={styles["fix-and-refine-in-one-click-2"]}>
                          <p className={styles["p-29"]}>{"For agencies and growing teams"}</p>
                        </div>
                      </div>
                    </div>
                    <div className={styles["12"]}>
                      <p className={styles["p-30"]}>{"$650"}</p>
                    </div>
                    <div className={styles["price-instance-2"]}>
                      <a className={styles["secondary"]} href="./contact-us">
                        <div className={styles["text-container-4"]}>
                          <div className={styles["get-template-3"]}>
                            <p className={styles["p-31"]}>{"Get Started"}</p>
                          </div>
                          <div className={styles["get-template-3"]}>
                            <p className={styles["p-31"]}>{"Get Started"}</p>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className={styles["frame-2147239122"]}>
                      <div className={styles["frame-2147238934"]}>
                        <div className={styles["frame-2147238932"]}>
                          <div className={styles["icon-minus"]} />
                          <div className={styles["ideas-don-t-translate-into-clear-content"]}>
                            <p className={styles["p-32"]}>{"Shared workspace"}</p>
                          </div>
                        </div>
                        <div className={styles["frame-2147238932"]}>
                          <div className={styles["icon-minus"]} />
                          <div className={styles["ideas-don-t-translate-into-clear-content"]}>
                            <p className={styles["p-32"]}>{"Team collaboration tools"}</p>
                          </div>
                        </div>
                        <div className={styles["frame-2147238932"]}>
                          <div className={styles["icon-minus"]} />
                          <div className={styles["ideas-don-t-translate-into-clear-content"]}>
                            <p className={styles["p-32"]}>{"Unlimited team projects"}</p>
                          </div>
                        </div>
                        <div className={styles["frame-2147238932"]}>
                          <div className={styles["icon-minus"]} />
                          <div className={styles["ideas-don-t-translate-into-clear-content"]}>
                            <p className={styles["p-32"]}>{"Priority support"}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles["price-group-16-2"]}>
                    <div className={styles["div"]}>
                      <div className={styles["div-2"]}>
                        <SvgGraphic className={styles["svg-8"]} html={"<svg style=\"width:100%;height:100%;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"3547\"><use href=\"#svg1527700876_422\" data-f2c-idx=\"3548\"></use></svg>"} />
                      </div>
                    </div>
                  </div>
                  <div className={styles["price-group-17-2"]}>
                    <div className={styles["div"]}>
                      <div className={styles["div-2"]}>
                        <SvgGraphic className={styles["svg-8"]} html={"<svg style=\"width:100%;height:100%;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"3552\"><use href=\"#svg334393695_407\" data-f2c-idx=\"3553\"></use></svg>"} />
                      </div>
                    </div>
                  </div>
                  <div className={styles["price-group-18-2"]}>
                    <div className={styles["div"]}>
                      <div className={styles["div-2"]}>
                        <SvgGraphic className={styles["svg-8"]} html={"<svg style=\"width:100%;height:100%;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"3557\"><use href=\"#svg172319957_405\" data-f2c-idx=\"3558\"></use></svg>"} />
                      </div>
                    </div>
                  </div>
                  <div className={styles["price-group-19-2"]}>
                    <div className={styles["div"]}>
                      <div className={styles["div-2"]}>
                        <SvgGraphic className={styles["svg-8"]} html={"<svg style=\"width:100%;height:100%;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"3562\"><use href=\"#svg-2126597858_420\" data-f2c-idx=\"3563\"></use></svg>"} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>}
      />
  )
}
