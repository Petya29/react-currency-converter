import React, { FC, HTMLInputTypeAttribute, useState } from 'react';

interface ITextFieldProps {
    type?: HTMLInputTypeAttribute,
    name?: string,
    label?: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    value: any
}

export const TextField: FC<ITextFieldProps> = ({
    type = 'text',
    name,
    label = 'text',
    onChange,
    value
}) => {

    const [isActive, setIsActive] = useState(false);

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        if (value === '') setIsActive(false);
    }

    return (
        <div className="relative border rounded bg-gray-600 text-white border-white border-opacity-25">
            <input
                className={[
                    "outline-none w-full rounded bg-transparent text-sm transition-all duration-200 ease-in-out p-2",
                    isActive ? "pt-6" : ""
                ].join(" ")}
                id={name}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                onFocus={() => setIsActive(true)}
                onBlur={handleBlur}
            />
            <label
                className={[
                    "absolute top-0 left-0 flex items-center text-white text-opacity-50 p-2 transition-all duration-200 ease-in-out",
                    isActive ? "text-xs" : "text-sm"
                ].join(" ")}
                htmlFor={name}
            >
                {label}
            </label>
        </div>
    )
}
