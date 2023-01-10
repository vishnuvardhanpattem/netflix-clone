import "./Nav.css";
import { useEffect,useState } from "react";
function Nav(){
    const [show, handleShow] = useState(false);

    useEffect(() => {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
          handleShow(true);
        } else {
          handleShow(false);
        }
      });
      return () => {
        window.removeEventListener("scroll");
      };
    }, []);

    return(
        <div className={`logo_img ${show && "nav_black"}`}>
    <img className="logo1" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png" alt="Netflix-logo" />
    <img className="logo2" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117" alt="Netflix-logo"/>
    </div>
    )
};

export default Nav;