import React, { useState, useRef, useEffect } from 'react';
import sublinks from './data'
import { useGlobalContext } from './context';

const Submenu = () => {
  const { modal, location, text, page } = useGlobalContext();
  const refContainer = useRef(null);
  // console.log(page);
  // const data= sublinks[0]
  // console.log(data);
  useEffect(() => {
    const styles = refContainer.current;
    const { center, bottom } = location;
    styles.style.left = `${center}px`;
    styles.style.top = `${bottom}px`;
  }, [location])

  return (
    <>
      <aside ref={refContainer} className={modal ? 'submenu show ' : "submenu"}>
        <section>
          <h4>{text}</h4>
          <div className={`submenu-center col-${page.links.length}`}>
            {page.links.map((item, index) => {
              return (
                <a key={index} href={item.url}>{item.icon}{item.label}</a>
              )
            })}
          </div>
        </section>
      </aside>
    </>
  )
}

export default Submenu


