import { CSSProperties, HTMLAttributes, HTMLInputTypeAttribute } from 'react';
import './TextField.css';

interface ITextFieldProps extends HTMLAttributes<HTMLInputElement> {
    name?: string,
    type?: HTMLInputTypeAttribute,
    label?: string,
    value: any,
    variant?: 'outlined' | 'lined',
    styles?: CSSProperties,
    inputStyles?: CSSProperties
}

export const TextField = ({
    name,
    type = 'text',
    label,
    value,
    variant = 'outlined',
    styles,
    inputStyles,
    ...rest
}: ITextFieldProps) => {
    return (
        <div style={styles}>
            <label className="relative">
                <input
                    name={name}
                    type={type}
                    className={[
                        variant === 'outlined' ? "border rounded-lg p-5" : "border-b",
                        "h-14",
                        "w-72",
                        "text-xl",
                        "bg-transparent",
                        "border-white",
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
                            value ? "input-label" : "empty-input-label",
                            variant === 'outlined' ? "px-1 mx-4 -bottom-[6%]" : "top-0",
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
