import React from 'react';
import {
  Animated,
  Easing,
} from 'react-native';

import { AnimatedIcon } from '../';

class LoadingSpinnerIcon extends React.Component {

  constructor(props) {
    super(props)
    this.spinValue = new Animated.Value(0)
}

  componentDidMount() {
    this.spin();
  }

  spin() {

    this.spinValue.setValue(0)

    Animated.timing(
      this.spinValue, {
        toValue: 1,
        duration: 2500,
        easing: Easing.linear
      }
    ).start(() => this.spin())
}

  render() {

    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    })

    return (
      <AnimatedIcon
        name='circle-o-notch'
        style={{
          transform: [{ rotate: spin }],
        }}
        { ...this.props }
      />
    )
  }

}

export default LoadingSpinnerIcon;
