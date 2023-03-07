import ui from "./Title.module.scss";

export default function Title({ children, cls, color }) {
  return (
    <div className={ui[cls]}>
      <h2 className={ui.title} style={{color: color}}>
        {children}
      </h2>
    </div>
  );
};