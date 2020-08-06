import React from 'react';
import { Image, Text, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { Asset } from 'expo-asset';

export default class App extends React.Component {
  state = {
    isReady: false,
  };

  componentDidMount() {
    SplashScreen.preventAutoHideAsync();
  }

  render() {
    if (!this.state.isReady) {
      return (
        <View style={{ flex: 1 }}>
          <Image
            source={require('../assets/IMG_20190807_181010.jpg')}
            onLoad={this._cacheResourcesAsync}
          />
        </View>
      );
    }

    return (
      <View style={{ flex: 1 }}>
        <Image source={require('../assets/IMG_20190807_181010.jpg')} />
        <Image source={require('../assets/IMG_20190807_181010.jpg')} />
      </View>
    );
  }

  _cacheSplashResourcesAsync = async () => {
    const gif = require('../assets/IMG_20190807_181010.jpg');
    return Asset.fromModule(gif).downloadAsync();
  };

  _cacheResourcesAsync = async () => {
    SplashScreen.hideAsync();
    const images = [
      require('../assets/IMG_20190807_181010.jpg'),
      require('../assets/IMG_20190807_181010.jpg'),
    ];

    const cacheImages = images.map(image => {
      return Asset.fromModule(image).downloadAsync();
    });

    await Promise.all(cacheImages);
    this.setState({ isReady: true });
  };}
