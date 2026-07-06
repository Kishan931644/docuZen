import { Fragment } from 'react'

import PropTypes from 'prop-types'

import './navbar.css'

const Navbar = ({
  imageAlt = 'image',
  text = undefined,
}) => {
  return (
    <header className="navbar-container">
      <div data-thq="thq-navbar" className="navbar-navbar-interactive">
        <img
          src="/public/favicon1/favicon-32x32.png"
          alt={imageAlt}
          className="navbar-image"
        />
        <span>
          {text ?? (
            <Fragment>
              <span className="navbar-text1">
                <span className="navbar-text2">Docu</span>
                <span className="navbar-text3">Zen</span>
              </span>
            </Fragment>
          )}
        </span>
        <nav className="navbar-links">
        </nav>

        <div className="navbar-buttons1">
          <a href="/login"><button className="thq-button-filled">Login</button></a>
          <a href="/register"><button className="thq-button-outline">Register</button></a>
        </div>

      </div>
    </header>
  )
}


Navbar.propTypes = {
  link1: PropTypes.string,
  link5: PropTypes.string,
  link2: PropTypes.string,
  logoSrc: PropTypes.string,
  action2: PropTypes.string,
  logoAlt: PropTypes.string,
  link3: PropTypes.string,
  action1: PropTypes.string,
  link4: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  text: PropTypes.element,
}

export default Navbar
