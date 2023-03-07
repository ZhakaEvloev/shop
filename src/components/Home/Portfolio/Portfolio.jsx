import { Container, Title } from "../../../ui"
import component from "./Portfolio.module.scss";

export default function Portfolio() {

  const cards = [
    {
      id: 1,
      src: "images/img/portfolio/card-1.jpg"
    },
    {
      id: 2,
      src: "images/img/portfolio/card-2.jpg"
    },
    {
      id: 3,
      src: "images/img/portfolio/card-2.jpg"
    },
    {
      id: 4,
      src: "images/img/portfolio/card-1.jpg"
    },
    {
      id: 5,
      src: "images/img/portfolio/card-1.jpg"
    },
    {
      id: 6,
      src: "images/img/portfolio/card-2.jpg"
    },
    {
      id: 7,
      src: "images/img/portfolio/card-1.jpg"
    },
    {
      id: 8,
      src: "images/img/portfolio/card-2.jpg"
    },
  ]

  return (
    <div className={component.portfolio}>
      <Container>
        <div className={component.portfolio__content}>

          <div className={component.portfolio__title}>
            <Title cls="violet_light" color="#262626">Portfolio</Title>
          </div>
          <div className={component.portfolio__cards}>
            {cards.map(({id, src}) => (
              <div 
                key={id} 
                className={component.portfolio__card}
                style={{
                  background: `url(${src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "left",
                }}
              >

              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};