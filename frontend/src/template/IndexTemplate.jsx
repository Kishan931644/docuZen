import ScreenWrapper from '../Components/ScreenWrapper';
import SideBar from '../Components/SideBar/SideBar';

import "./IndexTemplate.css"

function IndexTemplate() {
  return (
    <div className="indexTemplete" style={{ width: "100%" }}>
      <SideBar />
      <ScreenWrapper />
    </div>
  )
}

export default IndexTemplate
