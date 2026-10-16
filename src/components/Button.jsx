export default function Button({ children, variant = "primary", full = false, ...rest }) {
  const className = ["btn", variant === "outline" ? "out" : "", full ? "full" : ""].join(" ").trim();
  return (
    <button type="button" className={className} {...rest}>
      {children}
    </button>
  );
}
