import React from 'react';
import { View, Text, Image } from 'react-native';

const UserDetailsScreen = ({ route }) => {
  const { user } = route.params;

  return (
    <View style={{ padding: 20 }}>
      <Image source={{ uri: user.imageUrl }} style={{ width: 100, height: 100, marginBottom: 10 }} />
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>{user.name}</Text>
      <Text>{user.location}</Text>
      <Text>{user.professionalIntro || user.individualIntro || user.merchantIntro}</Text>
      <Text>Hobbies: {user.hobbies}</Text>
      <Text>Email: {user.mailId}</Text>
    </View>
  );
};

export default UserDetailsScreen;
