import { FC, ReactElement } from 'react';

interface IContainerProps {
    maxWidth?:
    'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | 'full'
    | 'none',
    classNames?: string,
    children: ReactElement | string | undefined
}

const formatClassName = (maxWidth: string): string => {
    if (maxWidth === 'full' || maxWidth === 'none' || maxWidth === 'xs') {
        return `max-w-${maxWidth}`;
    }

    return `max-w-screen-${maxWidth}`;
}

export const Container: FC<IContainerProps> = ({ maxWidth = 'full', classNames = '', children }) => {
    return (
        <div className={`${formatClassName(maxWidth)} ${classNames}`}>
            {children}
        </div>
    )
}
