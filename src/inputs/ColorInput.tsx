import React from 'react';

export interface IProps {
  color: string
}

export const ColorInput = (props: IProps) => {
  const { color } = props;
  return <input type='text' value={color} style={ { backgroundColor: color } }/>;
};
