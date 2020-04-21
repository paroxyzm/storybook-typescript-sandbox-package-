import React from 'react';

export interface Props {
    color: string;
}

export const ColorInput = (props: Props) => {
    const { color } = props;

    return <input type="text" value={color} style={{ backgroundColor: color }} />;
};
