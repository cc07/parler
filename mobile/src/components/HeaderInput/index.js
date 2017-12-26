import React from 'react';
import {
  TextInput,
} from 'react-native';

import styles from './styles';

const HeaderInput = ({ ...props }) => (
  <TextInput style={ styles.headerInput } { ...props } />
)

export default HeaderInput;
