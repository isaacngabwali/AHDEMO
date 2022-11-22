import footerData from "@/data/footerData";
import Link from "next/link";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { useFetch } from "../../hooks/useSWR";

const {
  exploreList,
  social,
  email,
  tel,
  officeAddress,
  about,
  link,
  copyrightYear,
  bottomLogo,
  footerBg,
} = footerData;

const SiteFooter = () => {
    // SWR call for all permissions
    const { GetContact } = useFetch();
    const { data: contact } = GetContact();
  
    console.log("index - response", contact);
  
  return (
    <footer className="site-footer">
      <div
        className="site-footer-bg"
        style={{ backgroundImage: `url(${footerBg})` }}
      ></div>
      <Container>    
        <div className="site-footer__top">
          {contact?.map((contact) => ( 
          <Row key={contact.contactpage_id}>
            <Col xl={6} lg={12} md={12} className="fadeInUp">
              <div className="footer-widget__column footer-widget__about">
                <h3 className="footer-widget__title">About</h3>
                <p className="footer-widget__text">{contact.contactpage_about_footer}</p>
                <a href="#" className="footer-widget__about-btn">
                  <i className="fa fa-heart"></i>Donate
                </a>
              </div>
            </Col>
            
            <Col xl={3} lg={6} md={6} className="fadeInUp">
              <div className="footer-widget__column footer-widget__contact">
                <h3 className="footer-widget__title">Contact</h3>
                <ul className="list-unstyled footer-widget__contact-list">
                  <li>
                    <div className="icon">
                      <i className="icon-chat"></i>
                    </div>
                    <div className="text">
                      <p>
                        <span>Call Anytime</span>
                        <a href={`tel:${contact.contactpage_phone}`}>{contact.contactpage_phone}</a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="icon-message"></i>
                    </div>
                    <div className="text">
                      <p>
                        <span>Send Email</span>
                        <a href={`mailto:${contact.contactpage_email}`}>{contact.contactpage_email}</a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="icon-address"></i>
                    </div>
                    <div className="text">
                      <p>
                        <span>Visit Office</span>
                        {contact.contactpage_address}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </Col>
            <Col
              xl={3}
              lg={6}
              md={6}
              className="wow fadeInUp"
              data-wow-delay="400ms"
            >
              <div className="footer-widget__column footer-widget__newsletter">
                <h3 className="footer-widget__title">Newsletter</h3>
                <p className="footer-widget__newsletter-text">
                  Join our Newsletter for updates
                </p>
                <form className="footer-widget__newsletter-form">
                  <input
                    type="email"
                    placeholder="Email address"
                    name="email"
                  />
                  <button
                    type="submit"
                    className="footer-widget__newsletter-btn"
                  >
                    <i className="fas fa-arrow-circle-right"></i>Send
                  </button>
                </form>
              </div>
            </Col>
          </Row>
          ))}
        </div>
        <div className="site-footer__bottom">
          <Row>
            <Col xl={12}>
              <div className="site-footer__bottom-inner">
                <div className="site-footer__bottom-logo-social">
                  <div className="site-footer__bottom-logo">
                    <Link href="/">
                      <a>
                        <Image src={bottomLogo} alt="" />
                      </a>
                    </Link>
                  </div>
                  <div className="site-footer__bottom-social">
                    {social.map(({ id, icon, href }) => (
                      <a href={href} key={id}>
                        <i className={`fab ${icon}`}></i>
                      </a>
                    ))}
                  </div>
                </div>
                <div className="site-footer__bottom-copy-right">
                  <p>
                    © Copyright {copyrightYear} | African Hearts Community Organisation
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </footer>
  );
};

export default SiteFooter;
