import { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";
import ContentWrapper from "../ContentWrapper";
import logo from "../../assets/logo/motickets_logo_-.png";
import DropdownCountry from "../CountryDropdown";
import "./styles.scss";

const Header = () => {
  const [show, setShow] = useState("top");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [query, setQuery] = useState("");
  // const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow("hide");
      } else {
        setShow("show");
      }
    } else {
      setShow("top");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  const searchQueryHandler = (event: any) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
      setTimeout(() => {
        // setShowSearch(false);
      }, 1000);
    }
  };

  const openSearch = () => {
    setMobileMenu(false);
  };

  const openMobileMenu = () => {
    setMobileMenu(true);
  };

  const navigationHandler = (type: string) => {
    navigate(type);
    setMobileMenu(false);
  };

  return (
    <header className={`header ${show} ${mobileMenu ? "mobileView" : ""}`}>
      <ContentWrapper>
        <div className="logo" onClick={() => navigate("/")}>
          <img src={logo} alt="Website logo" />
        </div>
        <ul className="menuItems">
          <li className="menuItem" onClick={() => navigationHandler("/events")}>
            All Events
          </li>
          <li
            className="menuItem"
            onClick={() => navigationHandler("/create-event")}
          >
            Create Event
          </li>
          <li className="menuItem" onClick={() => navigationHandler("/login")}>
            Login
          </li>
          <li className="menuItem">
            <DropdownCountry />
          </li>
        </ul>

        <div className="mobileMenuItems">
          <HiOutlineSearch onClick={openSearch} />
          {mobileMenu ? (
            <VscChromeClose onClick={() => setMobileMenu(false)} />
          ) : (
            <SlMenu onClick={openMobileMenu} />
          )}
        </div>
      </ContentWrapper>
    </header>
  );
};
export default Header;
