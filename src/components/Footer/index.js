import React from "react";
import "./styles.scss";
//
import footerLogo from "../../assets/img/logo-footer.jpg";
//
import deliveryImage01 from "../../assets/img/delivery/01.jpg";
import deliveryImage02 from "../../assets/img/delivery/02.jpg";
import deliveryImage03 from "../../assets/img/delivery/03.jpg";
import deliveryImage04 from "../../assets/img/delivery/04.jpg";
import deliveryImage05 from "../../assets/img/delivery/05.jpg";
import deliveryImage06 from "../../assets/img/delivery/06.jpg";
//
import payment from "../../assets/img/icons/payment.png";
//
import vkWidget from "../../assets/img/vk.png";
//social
import socialImage01 from "../../assets/img/icons/social/01.png";
import socialImage02 from "../../assets/img/icons/social/02.png";
import socialImage03 from "../../assets/img/icons/social/03.png";
import socialImage04 from "../../assets/img/icons/social/04.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__body">
          <div className="footer__column">
            <div className="footer__block block-footer">
              <div className="block-footer__column">
                <a href="#" className="footer__logo">
                  <img src={footerLogo} alt="footer-logo" />
                </a>
                <div className="block-footer__phones">
                  <p>
                    <a className="block-footer__phone" href="tel:84991234567">
                      8-499-123-45-67
                    </a>
                  </p>
                  <p>
                    <a className="block-footer__phone" href="tel:84991234567">
                      8-499-123-45-67
                    </a>
                  </p>
                </div>
              </div>
              <div className="block-footer__column">
                <div className="block-footer__delivery delivery-footer">
                  <div className="delivery-footer__title">
                    Доставка транспортными компаниями:
                  </div>
                  <div className="delivery-footer__items">
                    <div className="delivery-footer__item">
                      <img src={deliveryImage01} alt="delivery-item" />
                    </div>
                    <div className="delivery-footer__item">
                      <img src={deliveryImage02} alt="delivery-item" />
                    </div>
                    <div className="delivery-footer__item">
                      <img src={deliveryImage03} alt="delivery-item" />
                    </div>
                    <div className="delivery-footer__item">
                      <img src={deliveryImage04} alt="delivery-item" />
                    </div>
                    <div className="delivery-footer__item">
                      <img src={deliveryImage05} alt="delivery-item" />
                    </div>
                    <div className="delivery-footer__item">
                      <img src={deliveryImage06} alt="delivery-item" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer__payments">
              <img src={payment} alt="payments" />
            </div>
          </div>
          <div className="footer__column">
            <div className="footer__widgets widgets-footer">
              <div className="widgets-footer__column">
                <img src={vkWidget} alt="widet_01" />
              </div>
              <div className="widgets-footer__column">
                <img src={vkWidget} alt="widet_02" />
              </div>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="footer__copyright">©2015 Все права защищены.</div>
          <div className="footer__social social-icons">
            <a href="#" className="social-icons__icon">
              <img src={socialImage01} alt="social_link" />
            </a>
            <a href="#" className="social-icons__icon">
              <img src={socialImage02} alt="social_link" />
            </a>
            <a href="#" className="social-icons__icon">
              <img src={socialImage03} alt="social_link" />
            </a>
            <a href="#" className="social-icons__icon">
              <img src={socialImage04} alt="social_link" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
