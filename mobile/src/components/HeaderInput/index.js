import React from 'react';
import PropTypes from 'prop-types';
import {
  TextInput,
} from 'react-native';

import styles from './styles';

class HeaderInput extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      value: '',
    }
    this.onChangeText = this.onChangeText.bind(this);
  }

  onChangeText(text) {
    this.setState({ value: text });
  }

  render() {
    const { onSubmitEditing, ...props } = this.props;
    return (
      <TextInput
        selectTextOnFocus={ true }
        style={ styles.headerInput }
        onChangeText={ this.onChangeText }
        onSubmitEditing={ () => onSubmitEditing(this.state.value) }
        { ...props }
      />
    )
  }

}

HeaderInput.defaultProps = {
  onSubmitEditing: () => {},
}

HeaderInput.propTypes = {
  onSubmitEditing: PropTypes.func,
}

export default HeaderInput;
