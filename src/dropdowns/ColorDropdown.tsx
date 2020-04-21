import React from 'react';

export interface Props {
    color: string;
    onClick?: (color: string) => void;
}

export const ColorDropdown = (props: Props) => {
    const { color, onClick } = props;

    return (
        <select style={{ color }} onClick={() => onClick?.(color)}>
            <option value="1">1</option>
        </select>
    );
};
