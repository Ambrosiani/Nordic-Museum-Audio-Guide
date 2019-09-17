import React, {Component} from 'react';
import {View} from 'react-native';

import {NAV_BAR_TEXT, NAV_BAR_BACKGROUND} from '../styles';

class Search extends Component {
  static options(passProps) {
    return {
      topBar: {
        background: {
          color: NAV_BAR_BACKGROUND,
        },
        title: {
          text: 'Search #',
          fontSize: 17,
          fontFamily: 'Helvetica',
          color: NAV_BAR_TEXT,
        },
      },
    };
  }

  render() {
    return <View />;
  }
}

export default Search;
