// Avatar.js
import React from 'react';
import { View, Image } from 'react-native';
import { avatarStyles } from './styles';

const Avatar = () => {
  return (
    <View style={avatarStyles.container}>
      <Image source={require('../components/piolo.jpg')} style={avatarStyles.image} />
    </View>
  );
};

export default Avatar;