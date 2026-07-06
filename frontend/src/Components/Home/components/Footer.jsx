import PropTypes from 'prop-types'

import './footer.css'

const Footer = ({
  logoSrc = '/public/favicon1/favicon-32x32.png',
  logoAlt = 'DocuZen Logo',
  action1 = 'Subscribe to Newsletter',
  content2 = 'Stay updated with our latest news and features.',
  content3 = '© 2023 DocuZen. All rights reserved.',
  column1Title = 'Contact Information',
  column2Title = 'Quick Links',
  socialLinkTitleCategory = 'Follow Us',
  privacyLink = 'Privacy policy',
  termsLink = 'Terms of service',
  cookiesLink = 'Cookies Policy',
  link1 = 'support@docuzen.com',
  link2 = '123-456-7890',
  link3 = '123 Street, City, Country',
  link4 = 'FAQs',
  link5 = 'Privacy Policy',
  link6 = 'Terms of Service',
  link7 = 'Facebook',
  link8 = 'Twitter',
  link9 = 'LinkedIn',
  link10 = 'Instagram'
}) => {
  return (
    <footer className="footer-footer1 thq-section-padding">
      <div className="footer-max-width thq-section-max-width">
        <div className="footer-content">
          <div className="footer-newsletter">
            <div className="logo-container">
              <img
                alt={logoAlt}
                src={logoSrc}
                className="footer-image1"
              />
              DocuZen
            </div>
            <span className="thq-body-small">
              Subscribe to our newsletter for the latest updates on new features
              and product releases.
            </span>
            <div className="footer-actions">
              <div className="footer-form">
                <div className="footer-container">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="footer-text-input thq-input"
                  />
                </div>
                <button className="thq-button-outline footer-button">
                  <span className="thq-body-small">{action1}</span>
                </button>
              </div>
              <span className="footer-content2 thq-body-small">
                {content2}
              </span>
            </div>
          </div>
          <div className="footer-links">
            <div className="footer-column1">
              <strong className="thq-body-large footer-column1-title">
                {column1Title}
              </strong>
              <div className="footer-footer-links">
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="thq-body-small"
                >
                  {link1}
                </a>
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="thq-body-small"
                >
                  {link2}
                </a>
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="thq-body-small"
                >
                  {link3}
                </a>
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="thq-body-small"
                >
                  {link4}
                </a>
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="thq-body-small"
                >
                  {link5}
                </a>
              </div>
            </div>
            <div className="footer-column2">
              <strong className="thq-body-large footer-column2-title">
                {column2Title}
              </strong>
              <div className="footer-footer-links1">
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="thq-body-small"
                >
                  {link6}
                </a>
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="thq-body-small"
                >
                  {link7}
                </a>
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="thq-body-small"
                >
                  {link8}
                </a>
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="thq-body-small"
                >
                  {link9}
                </a>
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="thq-body-small"
                >
                  {link10}
                </a>
              </div>
            </div>
            <div className="footer-column3">
              <strong className="thq-body-large footer-social-link1-title">
                {socialLinkTitleCategory}
              </strong>
              <div className="footer-social-links">
                <div className="footer-link">
                  <svg width="16px" height="16px" viewBox="38.657999999999994 12.828 207.085 207.085" xmlns="http://www.w3.org/2000/svg" fill="#000000" stroke="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M158.232 219.912v-94.461h31.707l4.747-36.813h-36.454V65.134c0-10.658 2.96-17.922 18.245-17.922l19.494-.009V14.278c-3.373-.447-14.944-1.449-28.406-1.449-28.106 0-47.348 17.155-47.348 48.661v27.149H88.428v36.813h31.788v94.461l38.016-.001z" fill="#ffffff"></path></g></svg>
                  <span className="thq-body-small">Facebook</span>
                </div>
                <div className="footer-link1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" viewBox="0 0 16 17" fill="none"><g fill="currentColor" clipPath="url(#a)"><path d="M7.99 2.27c2.137 0 2.39.01 3.231.048.781.034 1.203.165 1.485.275.372.143.64.318.918.596.282.282.454.547.597.92.11.28.24.705.275 1.484.038.843.047 1.096.047 3.23 0 2.138-.01 2.391-.047 3.232-.034.781-.165 1.203-.275 1.484-.143.372-.319.641-.597.92a2.46 2.46 0 0 1-.918.596c-.282.11-.707.24-1.485.275-.844.037-1.097.047-3.231.047-2.137 0-2.39-.01-3.231-.047-.781-.034-1.203-.166-1.485-.275a2.472 2.472 0 0 1-.918-.597 2.46 2.46 0 0 1-.597-.919c-.11-.28-.24-.706-.275-1.484-.038-.844-.047-1.097-.047-3.231 0-2.138.01-2.39.047-3.231.034-.782.165-1.204.275-1.485.144-.372.319-.64.597-.919a2.46 2.46 0 0 1 .918-.596c.282-.11.707-.241 1.485-.275.84-.038 1.094-.047 3.231-.047Zm0-1.44c-2.172 0-2.444.01-3.297.047-.85.037-1.434.175-1.94.372a3.905 3.905 0 0 0-1.42.925A3.92 3.92 0 0 0 .41 3.589C.212 4.1.074 4.68.037 5.53c-.038.856-.047 1.128-.047 3.3 0 2.172.01 2.444.047 3.297.037.85.175 1.434.372 1.94.206.529.478.976.925 1.42.444.443.89.718 1.415.921.51.197 1.091.334 1.941.372.853.037 1.125.047 3.297.047s2.444-.01 3.297-.047c.85-.038 1.434-.175 1.94-.372a3.91 3.91 0 0 0 1.416-.922 3.91 3.91 0 0 0 .922-1.415c.197-.51.334-1.091.372-1.941.037-.853.047-1.125.047-3.297s-.01-2.444-.047-3.297c-.038-.85-.175-1.434-.372-1.94a3.748 3.748 0 0 0-.916-1.422 3.911 3.911 0 0 0-1.415-.922C12.72 1.055 12.14.918 11.29.88c-.856-.04-1.128-.05-3.3-.05Z"></path><path d="M7.99 4.72a4.11 4.11 0 0 0 0 8.22 4.11 4.11 0 0 0 0-8.22Zm0 6.776a2.666 2.666 0 1 1 0-5.332 2.666 2.666 0 0 1 0 5.332ZM13.221 4.558a.96.96 0 1 1-1.919 0 .96.96 0 0 1 1.92 0Z"></path></g></svg>
                  <span className="thq-body-small">Instagram</span>
                </div>
                <div className="footer-link2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" viewBox="0 0 17 17" fill="none"><g clipPath="url(#a)"><path fill="currentColor" d="M13.158 2.058h2.248l-4.913 5.435 5.78 7.395h-4.525l-3.545-4.485-4.056 4.485h-2.25l5.255-5.813-5.545-7.017h4.64l3.205 4.1 3.706-4.1Zm-.79 11.527h1.246L5.57 3.293H4.233l8.135 10.292Z"></path></g></svg>
                  <span className="thq-body-small">X</span>
                </div>
                <div className="footer-link3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" viewBox="0 0 17 17" fill="none"><g clipPath="url(#a)"><path fill="currentColor" d="M15.776.83H2.14C1.488.83.96 1.329.96 1.946v13.249c0 .617.528 1.119 1.181 1.119h13.635c.653 0 1.184-.502 1.184-1.116V1.946c0-.617-.531-1.116-1.184-1.116ZM5.706 14.025H3.333V6.633h2.375v7.392ZM4.52 5.626c-.762 0-1.378-.595-1.378-1.33 0-.735.616-1.33 1.378-1.33.76 0 1.375.595 1.375 1.33 0 .732-.615 1.33-1.375 1.33Zm10.075 8.399h-2.371v-3.593c0-.856-.016-1.96-1.235-1.96-1.234 0-1.422.935-1.422 1.9v3.653H7.197V6.633h2.275v1.01h.032c.315-.58 1.09-1.194 2.244-1.194 2.403 0 2.846 1.53 2.846 3.52v4.056Z"></path></g></svg>
                  <span className="thq-body-small">LinkedIn</span>
                </div>
                <div className="footer-link4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" viewBox="0 0 17 17" fill="none"><g clipPath="url(#a)"><path fill="currentColor" d="M16.79 5.475s-.156-1.067-.637-1.536c-.61-.617-1.29-.62-1.603-.656-2.238-.158-5.597-.158-5.597-.158h-.006s-3.36 0-5.597.158c-.313.036-.994.039-1.603.656-.481.469-.635 1.536-.635 1.536S.95 6.73.95 7.982v1.174c0 1.252.16 2.507.16 2.507s.156 1.067.634 1.536c.61.617 1.41.596 1.765.662 1.282.118 5.441.154 5.441.154s3.363-.006 5.6-.16c.313-.036.994-.04 1.603-.656.481-.469.638-1.536.638-1.536s.159-1.252.159-2.507V7.982c0-1.252-.16-2.507-.16-2.507ZM7.298 10.58V6.228l4.322 2.184-4.322 2.168Z"></path></g></svg>
                  <span className="thq-body-small">Youtube</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-credits">
          <div className="thq-divider-horizontal"></div>
          <div className="footer-row">
            <span className="thq-body-small">{content3}</span>
            <div className="footer-footer-links2">
              <span className="thq-body-small">{privacyLink}</span>
              <span className="thq-body-small">{termsLink}</span>
              <span className="thq-body-small">{cookiesLink}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}


Footer.propTypes = {
  column2Title: PropTypes.string,
  link7: PropTypes.string,
  link5: PropTypes.string,
  link8: PropTypes.string,
  action1: PropTypes.string,
  content3: PropTypes.string,
  link4: PropTypes.string,
  logoSrc: PropTypes.string,
  cookiesLink: PropTypes.string,
  content2: PropTypes.string,
  link9: PropTypes.string,
  link6: PropTypes.string,
  logoAlt: PropTypes.string,
  link1: PropTypes.string,
  privacyLink: PropTypes.string,
  link10: PropTypes.string,
  column1Title: PropTypes.string,
  termsLink: PropTypes.string,
  link3: PropTypes.string,
  link2: PropTypes.string,
  socialLinkTitleCategory: PropTypes.string,
}

export default Footer
