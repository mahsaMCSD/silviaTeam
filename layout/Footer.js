import Link from "next/link";
import { useEffect, useState } from "react";

// const Footer = ({ footer }) => {
//   switch (footer) {
//     case 1:
//       return <Footer1 />;

//     case 2:
//       return <Footer2 />;

//     default:
//       return <Footer1 />;
//   }
// };

// export default Footer;

const Footer = () => {
  const [date, setDate] = useState();
  useEffect(() => {
    setDate(new Date().getFullYear());
  }, []);

  return (
    <footer className="main-footer rel z-1">
      <div className="footer-top-wrap bgc-black">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-12">
              <div className="footer-widget widget_logo wow fadeInUp delay-0-2s">
                <div className="footer-logo">
                  <Link legacyBehavior href="/">
                    <a>
                      <img src="assets/images/logos/Silvia.png" alt="Logo" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-10 col-md-7">
              <div className="widget_nav_menu wow fadeInUp delay-0-4s m-45">
                <h6 className="footer-title">Quick Link</h6>
                <ul>
                  <li>
                    <Link legacyBehavior href="services">
                      Service
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="projects">
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="services#pricing">
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="about#faqs">
                      Faqs
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="contact">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
             
            </div>
           
          </div>
        </div>
      </div>
      <div className="footer-bottom pt-20 pb-5 rpt-25">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="copyright-text">
                <p>
                  Copyright @{date},{" "}
                  <Link legacyBehavior href="/">
                    Silvia
                  </Link>{" "}
                  All Rights Reserved
                </p>
              </div>
            </div>
            <div className="col-lg-6 text-lg-end">
              <ul className="footer-bottom-nav">                        
                <li>
                  <a href="#">LinkedIn</a>
                </li>
              </ul>
            </div>
          </div>
          {/* Scroll Top Button */}
          <a href="#" className="scroll-top scroll-to-target d-inline-block">
            <span className="fas fa-angle-double-up" />
          </a>
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
      </div>
    </footer>
  );
};
export default Footer;
