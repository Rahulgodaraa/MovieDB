// Button.js
export const Button = ({ children, onClick, disabled, variant = "primary", className = "" }) => (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`btn btn-${variant} ${className}`}
    >
      {children}
    </button>
  );
  
  