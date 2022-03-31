import React from "react";
import logo from "./images/logo.svg";
import { useGlobalContext } from "./Context";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();

//   display sunmenu function
  const displaySubmenu = (e) =>{
    //   geting the text inside the button
    const page = e.target.textContent;

    // get location using usin getbounding clientrect 
    // getBoundingClientRect give the x and y axis, width and height
    const tempBtn = e.target.getBoundingClientRect();
    // to get the center we add the left and the right value tempBtn results/2
    const center = (tempBtn.left + tempBtn.right)/2;
    // lifting submenu 3px up
    const bottom = tempBtn.bottom-3
  
    // here we call the openSubmenu function the have a setState of true which will also set the function displaymenu as true when moused over
    //now we will pass 
openSubmenu(page,{center,bottom})
  }

//   close submenu function for navbar
  const handleSubmenu = (e)=>{
    //   if the target/area am hovering over does not contain link button the close menu
      if(!e.target.classList.contains('link-btn')){
        closeSubmenu()
      }

  }
  return (
    //   onmouseover to close submenu when the mouse is on the navbar
    <nav className="nav" onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="stripe logo" />
          <button className="btn toggle-btn" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          {/* the value in the buttons must match what we have in the data 
                the value needs to match the text value where we have the object */}
          <li>
            
            <button className="link-btn" onMouseOver={displaySubmenu}>products</button>{" "}
          </li>
          <li>
            
            <button className="link-btn" onMouseOver={displaySubmenu}>developers</button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>company</button>
          </li>
        </ul>
        <button className="btn signin-btn">sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;
