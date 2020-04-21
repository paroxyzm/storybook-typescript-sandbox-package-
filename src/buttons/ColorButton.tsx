import React from 'react';

export interface Props {
    color: string;
    onClick?: (color: string) => void;
}

export const ColorButton = (props: Props): JSX.Element => {
    const { color, onClick } = props;

    return (
        <button
            style={ { color } }
            onClick={() => onClick?.(color)}
        >
            Color Button
        </button>
    );
};
