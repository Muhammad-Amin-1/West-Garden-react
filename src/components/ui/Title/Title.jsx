import './Title.scss'

export default function Title({
  tag = "h2",
  children,
  size = "md",       // s, m, l, x
  weight = "medium", // medium, bold
  align = "center",    // left, center, right
  className = "",
}) {
  const Tag = tag;

  return (
    <Tag className={`title title--${size} title--${weight} title--${align} ${className}`}>
      {children}
    </Tag>
  );
}
