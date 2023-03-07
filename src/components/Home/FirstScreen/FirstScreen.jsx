import { useState } from "react";
import { Container, Button } from "../../../ui"
import component from "./FirstScreen.module.scss";

export default function FirstScreen() {

  const [changeWords] = useState("developers"); // добавить динамиические слова

  return (
    <div className={component["first-screen"]}>
      <Container>
        <div className={component["first-screen__content"]}>
          <div className={component["first-screen__info"]}>
            <h2 className={component["first-screen__greeting"]}>Hello</h2>
            <h1 className={component["first-screen__title"]}>We're <span>{changeWords}</span></h1>
            <p className={component["first-screen__subtitle"]}>Наша команда профессиональных разработчиков и дизайнеров готова предложить вам комплексное решение для создания веб-сайта, который будет соответствовать вашим потребностям и бизнес-целям. Мы учитываем все детали, начиная от дизайна и заканчивая функциональностью, чтобы создать сайт, который будет эффективным инструментом для вашего бизнеса.</p>
            <div className={component["first-screen__btn"]}>
              <Button cls="btn_primary" text="Хочу совй сайт!"/>
            </div>
          </div>
          <div className={component["first-screen__image"]}>
            <img className={component["first-screen__img"]} src="images/img/first_screen/woman-2.png" alt="man" width={500}/>
          </div>
        </div>
      </Container>
    </div>
  );
};