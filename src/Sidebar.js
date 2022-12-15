import React from "react";
import { FaTimes } from "react-icons/fa";
import sublinks from "./data";
import { useGlobalContext } from "./context";


const Sidebar = () => {
  const {sidebar, handleSidebar}= useGlobalContext();

  return (
    <div className={sidebar ? "sidebar-wrapper show" : "sidebar-wrapper"}>
      <aside className="sidebar">
        <button className="close-btn" onClick={()=>handleSidebar()}>
          <FaTimes />
        </button>
        <div className="sidebar-links">
          {sublinks.map((item,index) => {
            return (
              <article key={index}>
                <h4>{item.page}</h4>
                <div className="sidebar-sublinks">
                  {item.links.map((link,id) => {
                    return (
                      <a href={link.url} key={id}>
                        {link.icon}
                        {link.label}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
