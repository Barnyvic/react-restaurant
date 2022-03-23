import { images } from "../../constants";
import SubHeading from "../SubHeading/SubHeading";

const Header = () => {
  return (
    <div id="home" className="app_header_wrapper app_wrapper">
      <div className="app_header_wrapper_content">
        <SubHeading title="Chase The New Flavour" />
        <h1 className="app_header-h1">The Key To Fine Dining</h1>
        <p className="app_header-p">
          Sit Tellus Lobortis Sed Senectus Vivamus Molestie. Condimentum
          Volutpat Morbi Facilisis Quam Scelerisque Sapien. Et, Penatibus
          Aliquam Amet Tellus
        </p>
        <button className="app_header-btn">Explore menu</button>
      </div>
      <div className="app_header_img">
        <img src={images.welcome} alt="" />
      </div>
    </div>
  );
};

export default Header;
