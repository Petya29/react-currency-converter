import { ReactNode } from 'react';

export const enum Sizes {
    xs = "max-w-xs",
    sm = "max-w-screen-sm",
    md = "max-w-screen-md",
    lg = "max-w-screen-lg",
    xl = "max-w-screen-xl",
    "2xl" = "max-w-screen-2xl",
    full = "max-w-full",
    none = "max-w-none"
}

interface IContainerProps {
    maxWidth?: Sizes,
    classNames?: string,
    children: ReactNode
}

export const Container = ({ maxWidth = Sizes.full, classNames = '', children }: IContainerProps) => {
    return (
        <div className={`${maxWidth} ${classNames}`}>
            {children}
        </div>
    )
}
