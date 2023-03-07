import ui from "./Button.module.scss";

export default function Button({ cls, text }) {
  return (
    <div className={ui[cls]}>
      <button>
        {text}
      </button>
    </div>
  );
};