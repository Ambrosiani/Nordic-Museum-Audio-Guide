import React, {Component} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

// import { analyticsTrackScreen } from '../actions/analytics';

import Grid from '../components/grid';
import TourStop from './tourStop';

//import { BOTTOMBARHEIGHT } from './rootScreen';
//import { BOTTOMPLAYERHEIGHT } from './bottomPlayer';
//import { TAB_STORIES } from '../actions/navigation';

import {Navigation} from 'react-native-navigation';

import {
  NAV_BAR_TEXT,
  NAV_BAR_BACKGROUND,
  OFF_BLACK,
  LIGHT_GRAY,
} from '../styles';

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    alignSelf: 'center',
  },
  container: {
    alignItems: 'stretch',
    flex: 1,
    backgroundColor: '#ffffff',
    marginTop: 64,
  },
  statusBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 20,
    backgroundColor: NAV_BAR_BACKGROUND,
  },
});

const pushToTourStop = (componentId, passedProps) => {
  Navigation.push(componentId, {
    component: {
      name: 'tourStop',
      passProps: passedProps,
      options: {
        topBar: {
          title: {
            text: passedProps.title,
          },
        },
      },
    },
  });
};

class Tours extends Component {
  static options(passProps) {
    return {
      topBar: {
        background: {
          color: NAV_BAR_BACKGROUND,
        },
        title: {
          text: 'Browse',
          fontSize: 17,
          fontFamily: 'Helvetica',
          color: NAV_BAR_TEXT,
        },
      },
    };
  }

  render() {
    var BOTTOMBARHEIGHT = 0;
    var BOTTOMPLAYERHEIGHT = 0;

    let containerMargin = BOTTOMBARHEIGHT;
    if (this.props.playerOpen) {
      containerMargin = BOTTOMPLAYERHEIGHT + BOTTOMBARHEIGHT;
    }

    return (
      <View style={styles.container}>
        <Button
          onPress={() => {
            const passedProps = {
              title: 'Tour Stop 1',
            };

            pushToTourStop(this.props.componentId, passedProps);
          }}
          title="Push to Tour Stop 1"
          color="#841584"
          accessibilityLabel="Push to Tour Stop 1"
        />
        <View style={{flex: 1}}>
          <View style={[styles.container, {marginBottom: containerMargin}]}>
            <Grid
              locale={this.props.locale}
              items={this.props.tourStops}
              selected={this.props.currentStopUUID}
              onCellPress={item => {
                // this.props.navigator.push({
                //   title: item.shortTitle,
                //   component: TourStop,
                //   barTintColor: '#ffffff',
                //   titleTextColor: OFF_BLACK,
                //   shadowHidden: true,
                //   navigationBarHidden: true,
                //   passProps: {
                //     tab: TAB_STORIES,
                //     floor: item.floor,
                //     duration: item.duration[this.props.locale],
                //     tourStop: item,
                //     initialCategory: item.initialAudio,
                //     imageURL: item.imageURL,
                //   },
                // });
              }}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default Tours;
