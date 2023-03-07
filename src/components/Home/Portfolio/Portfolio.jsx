import { Container, Button } from "../../../ui"
import component from "./Portfolio.module.scss";

export default function Portfolio() {
  return (
    <div className={component.portfolio}>
      <Container>
        <div className={component.portfolio__content}>
            <h2 className="title">Hello World</h2>
        </div>
      </Container>
    </div>
  );
};