import React from 'react';

export interface IProps {
  color: string
  onClick?: (color: string) => void
}

export const ColorDropdown = (props: IProps) => {
  const { color, onClick } = props;
  return <select style={ { color } } onClick={ () => onClick && onClick(color) }>
    <option value="1">1</option>
  </select>;
}
