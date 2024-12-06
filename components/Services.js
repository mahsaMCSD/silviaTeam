import Link from "next/link";

const Services = ({ extraClass }) => {
  const services = [
    {
      id: 1,
      title: "Frontend Development",
      text: "React.js & Next.js & Vue.js & Nuxt.js for modern, reactive applications",
    },
    {
      id: 2,
      title: "Website Design",
      text: "Custom WordPress Design",
    },
    {
      id: 3,
      title: "Modern Web Applications",
      text: "Modern Web Applications using Next.js and Nuxt.js",
    },
    {
      id: 3,
      title: "Backend Development",
      text: "Python and Django and Nodejs for robust server-side solutions",
    },
    {
      id: 4,
      title: "UI/UX Design",
      text: "User-centered design to ensure a seamless experience",
    },
    {
      id: 5,
      title: "E-commerce Solutions",
      text: "Building fully-functional online stores using WooCommerce, Shopify, or custom solutions with React or Vue.",
    },
  ];
  return (
    <section
      id="services"
      className={`services-area pt-130 rpt-100 pb-100 rpb-70 rel z-1 ${extraClass}`}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8">
            <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
              <span className="sub-title mb-15">Popular Services</span>
              <h2>
                Our <span>Special Service</span> For your Business Development
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          {services.map((service) => (
            <div className="col-lg-6" key={service.id}>
              <div className="service-item wow fadeInUp delay-0-2s">
                <div className="number">
                  {service.id >= 9 ? service.id : `0${service.id}`}.
                </div>
                <div className="content">
                  <h4>{service.title}</h4>
                  <p>{service.text}</p>
                </div>
                <Link legacyBehavior href="/#">
                  <a className="details-btn">
                    <i className="fas fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          ))}
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
export default Services;
