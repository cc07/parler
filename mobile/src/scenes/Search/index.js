import React from 'react';
import {
  Text,
  View,
  TextInput,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';
import {
  HeaderIcon,
  HeaderInput,
} from 'src/components';

export default class Search extends React.Component {

  static navigationOptions = ({ navigation, screenProps }) => ({
    headerLeft: <HeaderIcon name={ 'arrow-left' }
                            align="left"
                            onPress={ () => { navigation.goBack() }} />,
    headerTitle: <HeaderInput />,
  });

  renderListItem(listData) {
    return (
      <Text style={ styles.flatListItem }>
        { listData.item.value }
      </Text>
    )
  }

  render() {

    const listData = [
      { id: 1, value: 10 },
      { id: 2, value: 101 },
      { id: 3, value: 1012 },
      { id: 4, value: 10123 },
    ]

    return (
      <View style={ styles.container }>
        <FlatList
          style={ styles.flatList }
          data={ listData }
          renderItem={ this.renderListItem }
        />
      </View>
    );
  }
}
