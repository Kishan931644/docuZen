import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './features2.css'

const Features2 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className="thq-section-padding">
      <div className="features2-container1 thq-section-max-width">
        <div className="features2-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="features2-tab-horizontal"
          >
            <div className="features2-divider-container">
              {activeTab === 0 && <div className="features2-container2"></div>}
            </div>
            <div className="features2-content">
              <h2 className="thq-heading-2">{props.feature1Title}</h2>
              <span className="thq-body-small">
                {props.feature1Description}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="features2-tab-horizontal1"
          >
            <div className="features2-divider-container1">
              {activeTab === 1 && <div className="features2-container3"></div>}
            </div>
            <div className="features2-content1">
              <h2 className="thq-heading-2">{props.feature2Title}</h2>
              <span className="thq-body-small">
                {props.feature2Description}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="features2-tab-horizontal2"
          >
            <div className="features2-divider-container2">
              {activeTab === 2 && <div className="features2-container4"></div>}
            </div>
            <div className="features2-content2">
              <h2 className="thq-heading-2">{props.feature3Title}</h2>
              <span className="thq-body-small">
                {props.feature3Description}
              </span>
            </div>
          </div>
        </div>
        <div className="features2-image-container">
          {activeTab === 0 && (
            <img
              alt={props.feature1ImgAlt}
              src={props.feature1ImgSrc}
              className="features2-image thq-img-ratio-16-9"
            />
          )}
          {activeTab === 1 && (
            <img
              alt={props.feature2ImgAlt}
              src={props.feature2ImgSrc}
              className="features2-image1 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt={props.feature3ImgAlt}
              src={props.feature3ImgSrc}
              className="features2-image2 thq-img-ratio-16-9"
            />
          )}
        </div>
      </div>
    </div>
  )
}

Features2.defaultProps = {
  feature3Description: 'Tailor the documentation to suit your specific needs.',
  feature1ImgAlt: 'AI Icon',
  feature1Description:
    'Automate the documentation process with advanced AI technology.',
  feature3ImgAlt: 'Customization Icon',
  feature2Title: 'User-Friendly Interface',
  feature1Title: 'AI-Powered Documentation',
  feature1ImgSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  feature3ImgSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  feature2Description: 'Enjoy a seamless experience with our intuitive design.',
  feature3Title: 'Customizable Output',
  feature2ImgAlt: 'User Interface Icon',
  feature2ImgSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
}

Features2.propTypes = {
  feature3Description: PropTypes.string,
  feature1ImgAlt: PropTypes.string,
  feature1Description: PropTypes.string,
  feature3ImgAlt: PropTypes.string,
  feature2Title: PropTypes.string,
  feature1Title: PropTypes.string,
  feature1ImgSrc: PropTypes.string,
  feature3ImgSrc: PropTypes.string,
  feature2Description: PropTypes.string,
  feature3Title: PropTypes.string,
  feature2ImgAlt: PropTypes.string,
  feature2ImgSrc: PropTypes.string,
}

export default Features2
