import React from 'react';
import {
  Text,
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import * as R from 'ramda';

import {
  HeaderIcon,
  HeaderInput,
  LoadingSpinnerIcon,
} from 'src/components';
import {
  fetchQuery,
  requestDownload,
  getDownload,
} from './service/action'
import styles from './styles';

export default class Search extends React.Component {

  static navigationOptions = ({ navigation, screenProps }) => {

    const handleSearch = R.pathOr(
                           R.always,
                           ['state', 'params', 'handleSearch'],
                           navigation
                         );
    return {
      headerLeft: <HeaderIcon name={ 'arrow-left' }
                              align="left"
                              onPress={ () => { navigation.goBack() }} />,
      headerTitle: <HeaderInput
                     onSubmitEditing={ handleSearch }
                   />,
    }
  };

  constructor(props) {
    super(props);

    this.renderListItem = this.renderListItem.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.onListItemPress = this.onListItemPress.bind(this);
    this.state = {
      videoList: [
      ],
    }
  }

  componentDidMount() {
    this.props.navigation.setParams({ handleSearch: this.handleSearch });
  }

  handleSearch(value) {
    fetchQuery(value).then(response => {
      this.setState({
        videoList: response,
      });
    });
  }

  async onListItemPress(videoId) {
    const result = await requestDownload(videoId);
    getDownload(result.filename);
  }

  renderListItem(listData) {
    return (
      <TouchableOpacity
        key={ listData.item.videoId }
        onPress={ () => this.onListItemPress(listData.item.videoId) }
        >
        <View style={ styles.flatListItem }>
          <Text
            style={ styles.flatListItemText }>
            { listData.item.title }
          </Text>
          { listData.item.requested &&
            <LoadingSpinnerIcon size={ 24 } />
          }
        </View>
      </TouchableOpacity>
    )
  }

  render() {

    const { videoList } = this.state;

    return (
      <View style={ styles.container }>
        <FlatList
          style={ styles.flatList }
          data={ videoList }
          renderItem={ this.renderListItem }
        />
      </View>
    );
  }
}
