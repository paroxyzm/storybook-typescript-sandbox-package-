import React from 'react';
import { storiesOf } from '@storybook/react';
import { ColorInput } from './ColorInput';

storiesOf('ColorInput', module)
  .add('red',
    () => <ColorInput color="red"/>,
  )
  .add('blue',
    () => <ColorInput color="blue"/>,
  );
