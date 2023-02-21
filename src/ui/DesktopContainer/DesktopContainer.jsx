import ui from "./DesktopContainer.module.scss";

export default function DesktopContainer({ children }) {
  return (
    <div className={ui.container}>
      {children}
    </div>
  );
};