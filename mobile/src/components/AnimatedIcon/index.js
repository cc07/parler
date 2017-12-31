import React from 'react';
import {
  Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const IconComponent = Animated.createAnimatedComponent(Icon);
const AnimatedIcon = ({ ...props }) => (
  <IconComponent { ...props } />
)

export default AnimatedIcon;
