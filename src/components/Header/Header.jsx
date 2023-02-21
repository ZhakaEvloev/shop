import { HeaderDown, HeaderUp } from "../../components"
import component from "./Header.module.scss";

export default function Header() {
  return (
    <header className={component.header}>
      <HeaderUp />
      <HeaderDown />
    </header>
  );
};