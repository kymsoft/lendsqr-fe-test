import * as React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  isShow?: boolean;
  showButton?: string;
  showButtonAction?: () => void;
  isSelect?: boolean;
  options?: string[];
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { className, options, isSelect, name, showButtonAction, showButton, type, isShow, ...props },
    ref
  ) => {
    return isShow ? (
      <div className="input-wrapper">
        <input type={type} className="input" ref={ref} {...props} />

        <p className="show-text" onClick={showButtonAction}>
          {showButton}
        </p>
      </div>
    ) : isSelect ? (
      <select name={name} className="input">
        {options && options.map((option, index)=>(
          <option key={index} value={option}>{option}</option>
        ))}
      </select>
    ) : (
      <input type={type} className="input" {...props} />
    );
  }
);
Input.displayName = "Input";

export { Input };
