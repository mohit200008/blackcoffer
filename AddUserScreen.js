import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { useNavigation } from '@react-navigation/native';
import usersData from './userData';

const defaultImageUrl = 'https://example.com/default-image.jpg';

const AddUserScreen = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [userType, setUserType] = useState('Individual');
  const [mailId, setMailId] = useState('');
  const [imageUrl, setImageUrl] = useState(defaultImageUrl);

  const navigation = useNavigation();

  const addUser = () => {
    const finalImageUrl = imageUrl.trim() === '' ? defaultImageUrl : imageUrl;

    const newUser = {
      id: usersData.length + 1,
      name,
      location,
      [userType.toLowerCase() + 'Intro']: 'Enter a brief intro here...',
      mailId,
      imageUrl: finalImageUrl,
    };

    usersData.push(newUser);

    // Pass the updated usersData back to the Explore screen
    navigation.navigate('Explore', {
      updatedUsersData: usersData,
    });
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Name:</Text>
      <TextInput onChangeText={setName} value={name} placeholder="Enter name" />
      <Text>Location:</Text>
      <TextInput onChangeText={setLocation} value={location} placeholder="Enter location" />
      <Text>Type of User:</Text>
      <RNPickerSelect
        onValueChange={(value) => setUserType(value)}
        value={userType}
        items={[
          { label: 'Professional', value: 'Professional' },
          { label: 'Individual', value: 'Individual' },
          { label: 'Merchant', value: 'Merchant' },
        ]}
      />
      <Text>Mail ID:</Text>
      <TextInput onChangeText={setMailId} value={mailId} placeholder="Enter mail ID" />
      <Text>Image URL (optional):</Text>
      <TextInput
        onChangeText={setImageUrl}
        value={imageUrl}
        placeholder="Enter image URL (or leave empty for default)"
      />
      <Image source={{ uri: imageUrl }} style={{ width: 100, height: 100, backgroundColor: 'lightgray' }} />
      <Button title="Add" onPress={addUser} />
    </View>
  );
};

export default AddUserScreen;
