import Counter from "./Counter";
import Link from "next/link";

const About = () => {
  return (
    <section className="about-page-area py-130 rpy-100 rel z-1">
    <div className="container">
      <div className="row align-items-center justify-content-between">
        <div className="col-lg-6">
          <div className="about-page-content-part rel z-2 rmb-55">
            <div className="section-title mb-35 wow fadeInUp delay-0-2s">
              <span className="sub-title mb-15">About Me</span>
              <h2>
                Professional <span>Problem Solutions</span> For Digital
                Products
              </h2>
              <p>
              We are a dedicated team of frontend and backend developers, UI/UX designers, and problem-solvers. With expertise in modern frameworks like Vue.js, Nuxt, and backend technologies like Python and Django, we bring your ideas to life with precision and creativity. From seamless user interfaces to scalable backend systems, we deliver solutions that meet your needs.

              </p>
            </div>
            <ul className="list-style-one two-column wow fadeInUp delay-0-2s mb-35">                 
                  <li>Web Design</li>
                  <li>Web Development</li>
                  <li>Product Design</li>
                </ul>
            <Link legacyBehavior href="/">
              <a className="theme-btn wow fadeInUp delay-0-2s">
                Learn More <i className="far fa-angle-right" />
              </a>
            </Link>
          </div>
        </div>
        <div className="col-xl-5 col-lg-6">
          <div className="about-right-part wow fadeInLeft delay-0-3s">
            <div className="experience-years">
              <b>10+</b>
              <h5>Years Of Experience</h5>
            </div>
            <div className="about-btn one wow fadeInRight delay-0-4s">
              <img src="assets/images/about/btn-image1.png" alt="Image" />
              <h6>Experience Designers</h6>
              <i className="fas fa-arrow-right" />
            </div>
            <div className="about-btn two wow fadeInRight delay-0-5s">
              <img src="assets/images/about/btn-image2.png" alt="Image" />
              <h6>Experience Frontend Developers</h6>
              <i className="fas fa-arrow-right" />
            </div>
            <div className="about-btn three wow fadeInRight delay-0-4s">
              <img src="assets/images/about/btn-image1.png" alt="Image" />
              <h6>Experience Fullstack Developers</h6>
              <i className="fas fa-arrow-right" />
            </div>
            <div className="dot-shape one">
              <img
                src="assets/images/shape/about-dots-two.png"
                alt="Shape"
              />
            </div>
            <div className="dot-shape two">
              <img
                src="assets/images/shape/about-dots-two.png"
                alt="Shape"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-lines">
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
    </div>
  </section>
   
  );
};
export default About;

export const About2 = () => {
  return (
    <section
      id="about"
      className="about-area-two rel z-1 pt-130 rpt-100 pb-130 rpb-100"
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="about-content-two rel z-2 rmb-55">
              <div className="section-title mb-35 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">
                  <i className="flaticon-asterisk-1" />
                  Introduction of Myself
                </span>
                <h2>
                  i,m a digital <span>designer</span> studio connecting brands
                  to people through
                </h2>
              </div>
              <div className="text pb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
              <div className="row">
                <div className="col-xl-3 col-sm-4 col-6">
                  <div className="about-info-item wow fadeInUp delay-0-2s">
                    <small>born In</small>
                    <b>New york</b>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-4 col-6">
                  <div className="about-info-item wow fadeInUp delay-0-3s">
                    <small>experience</small>
                    <b>20+ Years</b>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-4 col-6">
                  <div className="about-info-item wow fadeInUp delay-0-4s">
                    <small>date of birth</small>
                    <b>27 June 1983</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="about-counter-wrap">
              <div className="row gap-40 justify-content-center">
                <div className="col-lg-5 col-6 mx-5">
                  <div className="counter-item counter-text-wrap mb-25 wow fadeInUp delay-0-2s">
                    <Counter end={8} extraClass={"k"} />
                    <span className="counter-title">project completed</span>
                  </div>
                </div>
                <div className="col-lg-5 col-6">
                  <div className="counter-item counter-text-wrap wow fadeInDown delay-0-2s">
                    <Counter end={8} extraClass={"k"} />
                    <span className="counter-title">Awward achievmentd</span>
                  </div>
                </div>
                <div className="col-lg-5 col-6">
                  <div className="counter-item counter-text-wrap wow fadeInDown delay-0-2s">
                    <Counter end={80} extraClass={"k"} />
                    <span className="counter-title">Satisfied customers</span>
                  </div>
                </div>
              </div>
              <div className="counter-logo">
                <img
                  className="wow zoomIn delay-0-2s"
                  src="assets/images/shape/circle-logo.png"
                  alt="Logo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
