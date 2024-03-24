import "react";
import "./footer.css";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-left">
          <div className="footer-left-upper">Find us on:</div>

          <div className="footer-left-lower">
            <div className="social-media">
            Facebook
            </div>
            <div className="social-media">
            Twitter
            </div>
            <div className="social-media">
            Instagram
            </div>
          </div>
        </div>

        <div className="footer-right">
          <div className="footer-right-upper">© Fireplace Palace</div>

          <div className="footer-right-lower">
            <a href="https://www.fireplacepalace.com">info@firepalace.co.uk</a>
          </div>
        </div>
      </footer>
    </>
  );
}
