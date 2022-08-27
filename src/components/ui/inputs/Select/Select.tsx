import { CSSProperties, HTMLAttributes, useId } from 'react';
import './Select.css';

interface ISelectProps extends HTMLAttributes<HTMLSelectElement> {
  label?: string,
  value: any,
  styles?: CSSProperties,
  inputStyles?: CSSProperties,
}

export const Select = ({
  label,
  value,
  styles,
  inputStyles,
  ...rest
}: ISelectProps) => {

  const id = useId();

  return (
    <div style={styles}>
      <label className="relative">
        <select
          id={'select' + id}
          className={[
            "h-14",
            "w-72",
            "px-4",
            "text-lg",
            "bg-transparent",
            "border-white",
            "border rounded-lg",
            "border-opacity-50",
            "outline-none",
            "placeholder-transparent",
            "focus:placeholder-[#ffffff80]",
            "focus:border-blue-500",
            "transition duration-200"
          ].join(" ")}
          style={inputStyles}
          {...rest}
        />
        {label &&
          <span
            className={[
              value !== '' ? "input-label" : "empty-input-label",
              "px-1 mx-4 -bottom-[6%]",
              "cursor-text",
              "text-xl",
              "text-[#ffffff80]",
              "absolute",
              "left-0.5",
              "transition duration-200"
            ].join(" ")}
          >
            {label}
          </span>
        }
      </label>
    </div>
  )
}
