import { CSSProperties, FC, ReactElement } from 'react';

interface IPaperProps {
    shadow?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'inner' | 'none';
    rounded?: 'md' | 'lg' | 'full' | 'none',
    style?: CSSProperties,
    classNames?: string,
    children: ReactElement | string | undefined
}

export const Paper: FC<IPaperProps> = ({ shadow, rounded, style, classNames = '', children }) => {
    return (
        <div
            style={style}
            className={`shadow${shadow ? '-' + shadow : ''} rounded${rounded ? '-' + rounded : ''} bg-[#1e1e1e] p-6 ${classNames}`}
        >
            {children}
        </div>
    )
}
