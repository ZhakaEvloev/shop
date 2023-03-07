import { Container, Button } from "../../ui";
import component from "./Header.module.scss";

export default function Header() {
  return (
    <header className={component.header}>
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