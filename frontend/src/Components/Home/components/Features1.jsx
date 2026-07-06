import { useState } from 'react'

import PropTypes from 'prop-types'

import './features1.css'

const Features1 = (props) => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="thq-section-padding">
      <div className="features1-container1 thq-section-max-width">
        <div className="features1-image-container">
          <video
            alt={props.feature1ImgAlt}
            src='/DocZen.mp4'
            loop
            autoPlay={true}
            muted
            className="features1-image thq-img-ratio-16-9"
          />

        </div>
        <div className="features1-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="features1-tab-horizontal"
          >
            <div className="features1-divider-container">
              {activeTab === 0 && <div className="features1-container2"></div>}
            </div>
            <div className="features1-content">
              <h2 className="thq-heading-2">{props.feature1Title}</h2>
              <span className="thq-body-small">
                {props.feature1Description}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="features1-tab-horizontal1"
          >
            <div className="features1-divider-container1">
              {activeTab === 1 && <div className="features1-container3"></div>}
            </div>
            <div className="features1-content1">
              <h2 className="thq-heading-2">{props.feature2Title}</h2>
              <span className="thq-body-small">
                {props.feature2Description}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="features1-tab-horizontal2"
          >
            <div className="features1-divider-container2">
              {activeTab === 2 && <div className="features1-container4"></div>}
            </div>
            <div className="features1-content2">
              <h2 className="thq-heading-2">{props.feature3Title}</h2>
              <span className="thq-body-small">
                {props.feature3Description}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Features1.defaultProps = {
  feature1ImgAlt: 'AI-Powered Documentation',
  feature3Description:
    'Explain how users can tailor the documentation to their needs.',
  feature3Title: 'Customizable Output',
  feature3ImgSrc: '/public/Macbook-Air-localhost.png',
  feature1ImgSrc: '/public/Macbook-Air-localhost.png',
  feature2Description: 'Highlight the intuitive design for ease of use.',
  feature1Title: 'AI-Powered Documentation',
  feature3ImgAlt: 'Customizable Output',
  feature1Description: 'Describe how AI automates the documentation process.',
  feature2ImgSrc: '/public/Macbook-Air-localhost.png',
  feature2ImgAlt: 'User-Friendly Interface',
  feature2Title: 'User-Friendly Interface',
}

Features1.propTypes = {
  feature1ImgAlt: PropTypes.string,
  feature3Description: PropTypes.string,
  feature3Title: PropTypes.string,
  feature3ImgSrc: PropTypes.string,
  feature1ImgSrc: PropTypes.string,
  feature2Description: PropTypes.string,
  feature1Title: PropTypes.string,
  feature3ImgAlt: PropTypes.string,
  feature1Description: PropTypes.string,
  feature2ImgSrc: PropTypes.string,
  feature2ImgAlt: PropTypes.string,
  feature2Title: PropTypes.string,
}

export default Features1
