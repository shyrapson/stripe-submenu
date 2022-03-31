import React, {useState,useRef, useEffect } from "react";
import { useGlobalContext } from "./Context";
const Submenu = () => {
  const {
    isSubmenuOpen,
    location,
    page: { page, links },
  } = useGlobalContext();
// setting the width of the submenu
const [columns, setColumns] = useState('col-2')

  // i will want to access my submenu container here
  const container = useRef(null);
  useEffect(() => {
    //   setColumns by default
    setColumns('col-2')
    // get the container in oder to add inline css
    // container.current gets the node
    const submenu = container.current;

    // distructuring location
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;

    // if statement for the width
    if(links.length === 3){
        setColumns('col-3');
    }
    if(links.length > 3){
        setColumns('col-4')
    }

    //    anytime location changes
  }, [location]);
  return (
    <aside
      className={`${isSubmenuOpen ? "submenu show" : "submenu"}`}
      ref={container}
    >
      <h4>{page}</h4>
      <div className={`submenu-center ${columns}`}>
        {links.map((link, index) => {
          const { label, icon, url } = link;
          return (
            <a key={index} href={url}>
              {icon} {label}
            </a>
          );
        })}
      </div>
    </aside>
  );
};

export default Submenu;
