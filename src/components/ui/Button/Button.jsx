import "./Button.scss";

export default function Button({
  children,
  height = "s",      
  color = "brown",   // brown, gray, white
  padding = "--pad-in",    
  type = "button",
  className = "",
  onClick,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn btn--${height} btn--${color} btn${padding} ${className}`}
    >
      {children}
    </button>
  );
}
