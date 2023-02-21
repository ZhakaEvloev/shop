import ui from "./Container.module.scss";

export default function Container({ children }) {
  return (
    <div className={ui.container}>
      {children}
    </div>
  );
};