import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './hero.css'

const Hero = (props) => {
  return (
    <div className="hero-header78">
      <div className="hero-column thq-section-padding thq-section-max-width">
        <div className="hero-content">
          <h1 className="hero-text thq-heading-1">{props.heading1}</h1>
          <p className="hero-text1 thq-body-large">{props.content1}</p>
        </div>
        <div className="hero-actions">
          <button className="hero-button thq-button-filled">
            <Link to='/register'><span className="hero-text2 thq-body-small">{props.action1}</span></Link>
          </button>
        </div>
      </div>
      <div>
        <div className="hero-container1">

        </div>
      </div>
    </div>
  )
}
Hero.defaultProps = {
  action1: 'Try Now',
  heading1: 'Revolutionize Your API Documentation with DocuZen',
  content1: 'Effortlessly generate and manage comprehensive API docs with our cutting-edge AI tool.',
}
Hero.propTypes = {
  action2: PropTypes.string,
  action1: PropTypes.string,
  heading1: PropTypes.string,
  content1: PropTypes.string,
  image10Src: PropTypes.string,
  image9Alt: PropTypes.string,
}

export default Hero
