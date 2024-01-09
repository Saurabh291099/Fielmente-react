import React from "react";
import { Link } from "react-router-dom";

function Section6() {
  const heading1 =
    "Hire us as your hospitality marketing agency and unlock the full potential of your business.";
  const peraText1 =
    "Experience our expertise, results-driven approach, and personalized hospitality marketing service that set us apart.";

  return (
    <div className="container web-dev-section-3 my-4 p-2 ">
      <div className="container text-center">
        <h2 className="ff-p h2-lg c-fw-6 text-clr-gray">{heading1}</h2>
      </div>
      <div className="container text-center  p-0">
        <p className="ff-p p-text-lg c-fw-4">{peraText1}</p>
      </div>
      <div className="text-center py-3">
        <Link
          to=""
          className="px-4 py-2 text-white rounded m-auto"
          style={{ backgroundColor: "#2cbca5" }}
        >
          {" "}
          Contact us
        </Link>
      </div>
      <div className="container my-2">
        <h2 className="text-center text-capitalize ff-p c-fw-6 h2-lg text-clr-gray5">brand we work with</h2>
      </div>
      {/* <div class="elementor-widget-container two_elementor_element">
        <div class="elementor-swiper two_elementor_element">
          <div
            class="elementor-main-swiper swiper-container two_elementor_element swiper-container-initialized swiper-container-horizontal"
            style="cursor: grab;"
          >
            <div
              class="swiper-wrapper two_elementor_element"
              style="transition-duration: 0ms; transform: translate3d(-1371.6px, 0px, 0px);"
            >
              <div
                class="swiper-slide two_elementor_element swiper-slide-duplicate"
                data-swiper-slide-index="10"
                style="width: 218.6px; margin-right: 10px;"
              >
                <div
                  class="elementor-carousel-image swiper-lazy two_elementor_element swiper-lazy-loaded"
                  role="img"
                  aria-label="kung food logo"
                  style='background-image: url("https://fielmente.com/wp-content/uploads/2022/05/Kung-Food-PNG.png");'
                ></div>
              </div>
              <div
                class="swiper-slide two_elementor_element swiper-slide-duplicate"
                data-swiper-slide-index="11"
                style="width: 218.6px; margin-right: 10px;"
              >
                <div
                  class="elementor-carousel-image swiper-lazy two_elementor_element swiper-lazy-loaded"
                  role="img"
                  aria-label="wah malvan logo"
                  style='background-image: url("https://fielmente.com/wp-content/uploads/2022/05/Wah-Malvan-PNG.png");'
                ></div>
              </div>
              <div
                class="swiper-slide two_elementor_element swiper-slide-duplicate"
                data-swiper-slide-index="12"
                style="width: 218.6px; margin-right: 10px;"
              >
                <div
                  class="elementor-carousel-image swiper-lazy two_elementor_element swiper-lazy-loaded"
                  role="img"
                  aria-label="ministry of kababs logo"
                  style='background-image: url("https://fielmente.com/wp-content/uploads/2022/05/Ministry-of-Kababs_logo-Final-1-e1655802564334.png");'
                ></div>
              </div>
              <div
                class="swiper-slide two_elementor_element swiper-slide-duplicate"
                data-swiper-slide-index="13"
                style="width: 218.6px; margin-right: 10px;"
              >
                <div
                  class="elementor-carousel-image swiper-lazy two_elementor_element swiper-lazy-loaded"
                  role="img"
                  aria-label="vegnic logo"
                  style='background-image: url("https://fielmente.com/wp-content/uploads/2022/05/Logo-Designs-2..png");'
                ></div>
              </div>
              <div
                class="swiper-slide two_elementor_element swiper-slide-duplicate"
                data-swiper-slide-index="14"
                style="width: 218.6px; margin-right: 10px;"
              >
                <div
                  class="elementor-carousel-image swiper-lazy two_elementor_element swiper-lazy-loaded"
                  role="img"
                  aria-label="agraharam"
                  style='background-image: url("https://fielmente.com/wp-content/uploads/2022/05/01-1.jpg");'
                ></div>
              </div>
              <div
                class="swiper-slide two_elementor_element swiper-slide-prev"
                data-swiper-slide-index="0"
                style="width: 218.6px; margin-right: 10px;"
              >
                <div
                  class="elementor-carousel-image swiper-lazy two_elementor_element swiper-lazy-loaded"
                  role="img"
                  aria-label="dorven foods"
                  style='background-image: url("https://fielmente.com/wp-content/uploads/2023/09/Frame-137.png");'
                ></div>
              </div>
              <div
                class="swiper-slide two_elementor_element swiper-slide-active"
                data-swiper-slide-index="1"
                style="width: 218.6px; margin-right: 10px;"
              >
                <a
                  href="https://aaoji-restaurant-cafe.business.site/"
                  class="two_elementor_element"
                >
                  {" "}
                  <div
                    class="elementor-carousel-image swiper-lazy two_elementor_element swiper-lazy-loaded"
                    role="img"
                    aria-label="Aaoji Restaurant"
                    style='background-image: url("https://fielmente.com/wp-content/uploads/2023/02/Aaoji-Logo-PNG-WHITE-1536x511.png");'
                  ></div>
                </a>{" "}
              </div>
              <div
                class="swiper-slide two_elementor_element swiper-slide-next"
                data-swiper-slide-index="2"
                style="width: 218.6px; margin-right: 10px;"
              >
                <a
                  href="https://www.instagram.com/bewafa_biryani/?hl=en"
                  class="two_elementor_element"
                >
                  {" "}
                  <div
                    class="elementor-carousel-image swiper-lazy two_elementor_element swiper-lazy-loaded"
                    role="img"
                    aria-label="bewafa biryani logo"
                    style='background-image: url("https://fielmente.com/wp-content/uploads/2022/05/A8-Page-e1655802401376.jpg");'
                  ></div>
                </a>{" "}
              </div>
              <div
                class="swiper-slide two_elementor_element"
                data-swiper-slide-index="3"
                style="width: 218.6px; margin-right: 10px;"
              >
                <a
                  href="https://www.kamatsindia.com/"
                  class="two_elementor_element"
                >
                  {" "}
                  <div
                    class="elementor-carousel-image swiper-lazy two_elementor_element swiper-lazy-loaded"
                    role="img"
                    aria-label="house of kamats"
                    style='background-image: url("https://fielmente.com/wp-content/uploads/2022/05/House-of-Kamats_New-Logo-1-1536x1087.png");'
                  ></div>
                </a>{" "}
              </div>
              <div
                class="swiper-slide two_elementor_element"
                data-swiper-slide-index="4"
                style="width: 218.6px; margin-right: 10px;"
              >
                <a
                  href="https://donerandgyros.com/"
                  class="two_elementor_element"
                >
                  {" "}
                  <div
                    class="elementor-carousel-image swiper-lazy two_elementor_element swiper-lazy-loaded"
                    role="img"
                    aria-label="Doner &amp; Gyros"
                    style='background-image: url("https://fielmente.com/wp-content/uploads/2023/02/DG-logo-03-2-1536x585.png");'
                  ></div>
                </a>{" "}
              </div>
              <div
                class="swiper-slide two_elementor_element"
                data-swiper-slide-index="5"
                style="width: 218.6px; margin-right: 10px;"
              >
                <a
                  href="https://www.instagram.com/snack__a__boo/"
                  class="two_elementor_element"
                >
                  {" "}
                  <div
                    class="elementor-carousel-image swiper-lazy two_elementor_element swiper-lazy-loaded"
                    role="img"
                    aria-label="snacka boo logo"
                    style='background-image: url("https://fielmente.com/wp-content/uploads/2022/05/Transparent_Image_2.png");'
                  ></div>
                </a>{" "}
              </div>
              <div
                class="swiper-slide two_elementor_element"
                data-swiper-slide-index="6"
                style="width: 218.6px; margin-right: 10px;"
              >
                <div
                  class="elementor-carousel-image swiper-lazy two_elementor_element swiper-lazy-loaded"
                  role="img"
                  aria-label="Burkey"
                  style='background-image: url("https://fielmente.com/wp-content/uploads/2023/06/burkey-logo.png");'
                ></div>
              </div>
              <div
                class="swiper-slide two_elementor_element"
                data-swiper-slide-index="7"
                style="width: 218.6px; margin-right: 10px;"
              >
                <div
                  class="elementor-carousel-image swiper-lazy two_elementor_element swiper-lazy-loaded"
                  role="img"
                  aria-label="gharsekhana logo"
                  style='background-image: url("https://fielmente.com/wp-content/uploads/2022/05/logo-1536x652.png");'
                ></div>
              </div>
              <div
                class="swiper-slide two_elementor_element"
                data-swiper-slide-index="8"
                style="width: 218.6px; margin-right: 10px;"
              >
                <div
                  class="elementor-carousel-image swiper-lazy two_elementor_element swiper-lazy-loaded"
                  role="img"
                  aria-label="vidli logo"
                  style='background-image: url("https://fielmente.com/wp-content/uploads/2022/05/Vidli-Cloud-Kitchens_-Logo-1-1536x1083.jpg");'
                ></div>
              </div>
              <div
                class="swiper-slide two_elementor_element"
                data-swiper-slide-index="9"
                style="width: 218.6px; margin-right: 10px;"
              >
                <div
                  class="elementor-carousel-image swiper-lazy two_elementor_element swiper-lazy-loaded"
                  role="img"
                  aria-label="wah maratha logo"
                  style='background-image: url("https://fielmente.com/wp-content/uploads/2022/05/Wah-Maratha-1.png");'
                ></div>
              </div>
              <div
                class="swiper-slide two_elementor_element"
                data-swiper-slide-index="10"
                style="width: 218.6px; margin-right: 10px;"
              >
                <div
                  class="elementor-carousel-image swiper-lazy two_elementor_element swiper-lazy-loaded"
                  role="img"
                  aria-label="kung food logo"
                  style='background-image: url("https://fielmente.com/wp-content/uploads/2022/05/Kung-Food-PNG.png");'
                ></div>
              </div>
              <div
                class="swiper-slide two_elementor_element"
                data-swiper-slide-index="11"
                style="width: 218.6px; margin-right: 10px;"
              >
                <div
                  class="elementor-carousel-image swiper-lazy two_elementor_element swiper-lazy-loaded"
                  role="img"
                  aria-label="wah malvan logo"
                  style='background-image: url("https://fielmente.com/wp-content/uploads/2022/05/Wah-Malvan-PNG.png");'
                ></div>
              </div>
              <div
                class="swiper-slide two_elementor_element"
                data-swiper-slide-index="12"
                style="width: 218.6px; margin-right: 10px;"
              >
                <div
                  class="elementor-carousel-image swiper-lazy two_elementor_element swiper-lazy-loaded"
                  role="img"
                  aria-label="ministry of kababs logo"
                  style='background-image: url("https://fielmente.com/wp-content/uploads/2022/05/Ministry-of-Kababs_logo-Final-1-e1655802564334.png");'
                ></div>
              </div>
              <div
                class="swiper-slide two_elementor_element"
                data-swiper-slide-index="13"
                style="width: 218.6px; margin-right: 10px;"
              >
                <div
                  class="elementor-carousel-image swiper-lazy two_elementor_element swiper-lazy-loaded"
                  role="img"
                  aria-label="vegnic logo"
                  style='background-image: url("https://fielmente.com/wp-content/uploads/2022/05/Logo-Designs-2..png");'
                ></div>
              </div>
              <div
                class="swiper-slide two_elementor_element"
                data-swiper-slide-index="14"
                style="width: 218.6px; margin-right: 10px;"
              >
                <div
                  class="elementor-carousel-image swiper-lazy two_elementor_element swiper-lazy-loaded"
                  role="img"
                  aria-label="agraharam"
                  style='background-image: url("https://fielmente.com/wp-content/uploads/2022/05/01-1.jpg");'
                ></div>
              </div>
              <div
                class="swiper-slide two_elementor_element swiper-slide-duplicate swiper-slide-duplicate-prev"
                data-swiper-slide-index="0"
                style="width: 218.6px; margin-right: 10px;"
              >
                <div
                  class="elementor-carousel-image swiper-lazy two_elementor_element swiper-lazy-loaded"
                  role="img"
                  aria-label="dorven foods"
                  style='background-image: url("https://fielmente.com/wp-content/uploads/2023/09/Frame-137.png");'
                ></div>
              </div>
              <div
                class="swiper-slide two_elementor_element swiper-slide-duplicate swiper-slide-duplicate-active"
                data-swiper-slide-index="1"
                style="width: 218.6px; margin-right: 10px;"
              >
                <a
                  href="https://aaoji-restaurant-cafe.business.site/"
                  class="two_elementor_element"
                >
                  {" "}
                  <div
                    class="elementor-carousel-image swiper-lazy two_elementor_element swiper-lazy-loaded"
                    role="img"
                    aria-label="Aaoji Restaurant"
                    style='background-image: url("https://fielmente.com/wp-content/uploads/2023/02/Aaoji-Logo-PNG-WHITE-1536x511.png");'
                  ></div>
                </a>{" "}
              </div>
              <div
                class="swiper-slide two_elementor_element swiper-slide-duplicate swiper-slide-duplicate-next"
                data-swiper-slide-index="2"
                style="width: 218.6px; margin-right: 10px;"
              >
                <a
                  href="https://www.instagram.com/bewafa_biryani/?hl=en"
                  class="two_elementor_element"
                >
                  {" "}
                  <div
                    class="elementor-carousel-image swiper-lazy two_elementor_element swiper-lazy-loaded"
                    role="img"
                    aria-label="bewafa biryani logo"
                    style='background-image: url("https://fielmente.com/wp-content/uploads/2022/05/A8-Page-e1655802401376.jpg");'
                  ></div>
                </a>{" "}
              </div>
              <div
                class="swiper-slide two_elementor_element swiper-slide-duplicate"
                data-swiper-slide-index="3"
                style="width: 218.6px; margin-right: 10px;"
              >
                <a
                  href="https://www.kamatsindia.com/"
                  class="two_elementor_element"
                >
                  {" "}
                  <div
                    class="elementor-carousel-image swiper-lazy two_elementor_element swiper-lazy-loaded"
                    role="img"
                    aria-label="house of kamats"
                    style='background-image: url("https://fielmente.com/wp-content/uploads/2022/05/House-of-Kamats_New-Logo-1-1536x1087.png");'
                  ></div>
                </a>{" "}
              </div>
              <div
                class="swiper-slide two_elementor_element swiper-slide-duplicate"
                data-swiper-slide-index="4"
                style="width: 218.6px; margin-right: 10px;"
              >
                <a
                  href="https://donerandgyros.com/"
                  class="two_elementor_element"
                >
                  {" "}
                  <div
                    class="elementor-carousel-image swiper-lazy two_elementor_element swiper-lazy-loaded"
                    role="img"
                    aria-label="Doner &amp; Gyros"
                    style='background-image: url("https://fielmente.com/wp-content/uploads/2023/02/DG-logo-03-2-1536x585.png");'
                  ></div>
                </a>{" "}
              </div>
            </div>
            <div class="swiper-pagination two_elementor_element swiper-pagination-progressbar">
              <span
                class="swiper-pagination-progressbar-fill"
                style="transform: translate3d(0px, 0px, 0px) scaleX(0.133333) scaleY(1); transition-duration: 800ms;"
              ></span>
            </div>
            <div
              class="elementor-swiper-button elementor-swiper-button-prev two_elementor_element"
              role="button"
              tabindex="0"
              aria-label="Previous slide"
            >
              <i
                aria-hidden="true"
                class="eicon-chevron-left two_elementor_element"
              ></i>{" "}
              <span class="elementor-screen-only two_elementor_element">
                Previous
              </span>
            </div>
            <div
              class="elementor-swiper-button elementor-swiper-button-next two_elementor_element"
              role="button"
              tabindex="0"
              aria-label="Next slide"
            >
              <i
                aria-hidden="true"
                class="eicon-chevron-right two_elementor_element"
              ></i>{" "}
              <span class="elementor-screen-only two_elementor_element">
                Next
              </span>
            </div>
            <span
              class="swiper-notification"
              aria-live="assertive"
              aria-atomic="true"
            ></span>
          </div>
        </div>
      </div> */}
      <div className="container my-2">
        <h2 className="text-center text-capitalize ff-p h2-lg text-gray5 c-fw-6">
          what people say about us
        </h2>
        <div
          className="row mt-lg-5 justify-content-center m-auto"
          style={{ width: "min(100%,75rem)" }}
        >
          <div className="col-lg-4 col-md-6 col-12">
            <div className="d-flex flex-column p-3 border rounded-2">
              <div className="top-content-wrap d-flex align-items-center justify-content-between">
                <div className="img-div-rev border">
                  <img
                    src=""
                    className="img-fluid rounded-circle"
                    alt="profile-img"
                  />
                </div>
                <div className="content-wrap">
                  <h3 className="text-capitalize">Naveen sanga</h3>
                  <ul className="d-flex p-0">
                    <li style={{ listStyle: "none" }}>⭐</li>
                    <li style={{ listStyle: "none" }}>⭐</li>
                    <li style={{ listStyle: "none" }}>⭐</li>
                    <li style={{ listStyle: "none" }}>⭐</li>
                    <li style={{ listStyle: "none" }}>⭐</li>
                  </ul>
                </div>
                <div>Trustpilot</div>
              </div>
              <div className="content">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dignissimos saepe in tempore illo velit, mollitia excepturi
                impedit ex veritatis itaque esse odit voluptates blanditiis
                nostrum sunt asperiores deserunt reprehenderit ratione.
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="d-flex flex-column p-3 border rounded-2">
              <div className="top-content-wrap d-flex align-items-center justify-content-between">
                <div className="img-div-rev border">
                  <img
                    src=""
                    className="img-fluid rounded-circle"
                    alt="profile-img"
                  />
                </div>
                <div className="content-wrap">
                  <h3 className="text-capitalize">Naveen sanga</h3>
                  <ul className="d-flex p-0">
                    <li style={{ listStyle: "none" }}>⭐</li>
                    <li style={{ listStyle: "none" }}>⭐</li>
                    <li style={{ listStyle: "none" }}>⭐</li>
                    <li style={{ listStyle: "none" }}>⭐</li>
                    <li style={{ listStyle: "none" }}>⭐</li>
                  </ul>
                </div>
                <div>Trustpilot</div>
              </div>
              <div className="content">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dignissimos saepe in tempore illo velit, mollitia excepturi
                impedit ex veritatis itaque esse odit voluptates blanditiis
                nostrum sunt asperiores deserunt reprehenderit ratione.
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="d-flex flex-column p-3 border rounded-2">
              <div className="top-content-wrap d-flex align-items-center justify-content-between">
                <div className="img-div-rev border">
                  <img
                    src=""
                    className="img-fluid rounded-circle"
                    alt="profile-img"
                  />
                </div>
                <div className="content-wrap">
                  <h3 className="text-capitalize">Naveen sanga</h3>
                  <ul className="d-flex p-0">
                    <li style={{ listStyle: "none" }}>⭐</li>
                    <li style={{ listStyle: "none" }}>⭐</li>
                    <li style={{ listStyle: "none" }}>⭐</li>
                    <li style={{ listStyle: "none" }}>⭐</li>
                    <li style={{ listStyle: "none" }}>⭐</li>
                  </ul>
                </div>
                <div>Trustpilot</div>
              </div>
              <div className="content">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dignissimos saepe in tempore illo velit, mollitia excepturi
                impedit ex veritatis itaque esse odit voluptates blanditiis
                nostrum sunt asperiores deserunt reprehenderit ratione.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section6;
