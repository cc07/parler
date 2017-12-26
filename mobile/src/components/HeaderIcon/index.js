import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const HeaderIcon = ({ name, onPress, align, ...props }) => (
  <View style={ align == 'left' ? styles.left : styles.right } { ...props }>
    <Icon name={ name } size={ 24 } onPress={ onPress } />
  </View>
)

export default HeaderIcon;
