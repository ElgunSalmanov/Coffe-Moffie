import "../../scss/_reset.scss";
import "./footer.scss";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="about">
            <h3 className="about-content">About Us</h3>
            <ul className="about-list">
              <li className="about-list_item">
                Address <p>9 Islam Safarli Street, Bakı 1005</p>
              </li>
              <li className="about-list_item">
                Working hours <p>09:00-00:00</p>
              </li>
              <li className="about-list_item">
                Phone <p>+994509641880</p>
              </li>
            </ul>
          </div>
          <div className="social">
            <h3 className="social-content">Find us on social media</h3>
            <ul className="social-list">
              <li className="social-list_item">
                <a
                  className="social-list_link"
                  href="https://www.instagram.com/coffeemoffie/"
                >
                  <img
                    src="../../../src/assets/icon/instagram.png"
                    alt="instagram"
                  />{" "}
                  Instagram
                </a>
              </li>
              <li className="social-list_item">
                <a
                  className="social-list_link"
                  href="https://www.facebook.com/coffeemoffiebaku"
                >
                  <img
                    src="../../../src/assets/icon/facebook.png"
                    alt="facebook"
                  />{" "}
                  Facebook
                </a>
              </li>
            </ul>
          </div>
          <div className="map">
            <h3 className="map-content">On the map</h3>
            <a href="https://www.google.com/maps/place/Coffee+Moffie/@40.371727,49.835279,17z/data=!4m6!3m5!1s0x40307db0adc2b105:0x5f6b9a32ec814c56!8m2!3d40.3717268!4d49.8352794!16s%2Fg%2F11c4tmyzqv?hl=en&entry=ttu">
              <img
                className="map-img"
                src="../../../src/assets/img/map.png"
                alt="map"
              />
            </a>
          </div>
        </div>
        <div className="powered">
          <p className="powered-year">© 2023 Coffeemoffie</p>
          <p className="powered-by">Powered by Coders</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
