import { useState } from "react";
import { Container, Button } from "../../ui";
import component from "./Header.module.scss";

export default function Header() {

  const [bgHeight, setBgHeight] = useState(false);

  function scrollBar() {
    let winscroll = document.body.scrollTop || document.documentElement.scrollTop;

    if(winscroll >= window.innerHeight) {
      setBgHeight(true);
    } else {
      setBgHeight(false);
    };
  };
  window.onscroll = scrollBar;

  return (
    <header 
      className={component.header} 
      style={{background: bgHeight ? "#FFF" : "rgba(255, 255, 255, 0.3)"}}
    >
      <Container>
        <div className={component.header__content}>
          <div className={component.header__logo}>NN</div>
          <nav>
            <ul className={component.header__links}>
              <li className={component.header__link}>Home</li>
              <li className={component.header__link}>Portfolio</li>
              <li className={component.header__link}>About us</li>
              <li className={component.header__link}>Blogs</li>
            </ul>
          </nav>
          <Button cls="btn_primary" text="Заказать услугу"/>
        </div>
      </Container>
    </header>
  );
};