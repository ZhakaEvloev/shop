import { Container } from "../../../ui";
import component from "./HeaderUp.module.scss";

export default function HeaderUp() {
  return (
    <Container>
      <div className={component["header-up"]}>
        <a href="#">
          <img className={component["header-up__logo"]} src="/images/svg/logo.svg" alt="logo" />
        </a>
        <nav className={component["header-up__nav"]}>
          <a href="#" className={component["header-up__link"]}>
            <p>Магазины</p>
          </a>
          <a href="#" className={component["header-up__link"]}>
            <p>Акции</p>
          </a>
          <a href="#" className={component["header-up__link"]}>
            <p>Доставка и оплата</p>
          </a>
        </nav>
        <div className={component["header-up__icons"]}>
          <img className={component["header-up__icon"]} src="/images/svg/like.svg" alt="like" />
          <img className={component["header-up__icon"]} src="/images/svg/account.svg" alt="account" />
          <img className={component["header-up__icon"]} src="/images/svg/basket.svg" alt="basket" />
        </div>
      </div>
    </Container>
  );
};