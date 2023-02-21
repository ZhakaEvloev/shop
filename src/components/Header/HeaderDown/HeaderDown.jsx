import { useState } from "react";
import { DesktopContainer } from "../../../ui";
import { links } from "./links";
import component from "./HeaderDown.module.scss";

export default function HeaderDown() {

  const [active, setActive] = useState(0);

  return (
    <div className={component["header-down"]}>
      <DesktopContainer>
        <div className={component["header-down__wrap"]}>
          {links.map(({id, link, href}) => (
            <a key={id} href={href} onClick={() => setActive(id)}>
              <div className={`${component["header-down__wrapper"]} ${active === id && component["header-down__wrapper--active"]}`}>
                <p className={component["header-down__link"]}>{link}</p>
              </div>
            </a>
          ))}
        </div>
      </DesktopContainer>
    </div>
  );
};