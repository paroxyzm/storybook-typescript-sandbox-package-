import React from 'react';
import { storiesOf } from '@storybook/react';
import { ColorDropdown } from './ColorDropdown';

storiesOf('ColorButton', module)
  .add('red',
    () => <ColorDropdown color="red"/>,
  )
  .add('blue',
    () => <ColorDropdown color="blue"/>,
  );
