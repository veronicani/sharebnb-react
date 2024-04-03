import "./Footer.scss";

/** Footer for ShareBnb.
 *
 * Props:
 * - none.
 * 
 * State:
 * - none.
 *
 * App -> Footer
 */

function Footer() {
  return (
    <footer className="Footer mt-auto">
      <div className="container">
        <div className="row">
          <div className="col d-flex justify-content-between align-items-center py-4">
            <p className="mb-0">&#169; Sharebnb 2024.</p>
            <a href="https://github.com/veronicani/sharebnb-react">
              <i className="bi bi-github"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;