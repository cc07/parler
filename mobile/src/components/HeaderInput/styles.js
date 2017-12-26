import {
  StyleSheet,
  Dimensions,
} from 'react-native';

const DEVICE_WIDTH = Dimensions.get(`window`).width;

export default StyleSheet.create({
  headerInput: {
    flex: 1,
    width: DEVICE_WIDTH - 70,
    fontSize: 20,
  }
});
