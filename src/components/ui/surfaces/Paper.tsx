import { CSSProperties, ReactNode } from 'react';

export const enum Shadows {
    sm = "shadow-sm",
    md = "shadow-md",
    lg = "shadow-md",
    xl = "shadow-xl",
    "2xl" = "shadow-2xl",
    inner = "shadow-inner",
    none = "shadow-none"
}

export const enum Rounds {
    md = "rounded-md",
    lg = "rounded-lg",
    full = "rounded-full",
    none = "rounded-none"
}

interface IPaperProps {
    shadow?: Shadows;
    rounded?: Rounds,
    style?: CSSProperties,
    classNames?: string,
    children: ReactNode
}

export const Paper = ({ shadow = Shadows.sm, rounded, style, classNames = '', children }: IPaperProps) => {
    return (
        <div
            style={style}
            className={`${shadow} ${rounded ? rounded : 'rounded'} bg-[#1e1e1e] p-6 ${classNames}`}
        >
            {children}
        </div>
    )
}
