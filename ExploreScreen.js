import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import usersData from './userData';

const ExploreScreen = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState('Individual');

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}
      onPress={() => navigation.navigate('UserDetails', { user: item })}
    >
      <Image source={{ uri: item.imageUrl }} style={{ width: 60, height: 60, marginRight: 10 }} />
      <View>
        <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
        <Text>{item.location}</Text>
        <Text>{item.professionalIntro || item.individualIntro || item.merchantIntro}</Text>
        <Text>...</Text>
      </View>
    </TouchableOpacity>
  );

  const renderSection = (selectedCategory, users) => {
    const filteredUsers = users.filter((user) => {
      if (selectedCategory === 'Individual') {
        return !!user.individualIntro;
      }
      if (selectedCategory === 'Professional') {
        return !!user.professionalIntro;
      }
      if (selectedCategory === 'Merchant') {
        return !!user.merchantIntro;
      }
      return false;
    });

    return (
      <View style={{ marginBottom: 20 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>{selectedCategory}</Text>
        <ScrollView>
          {filteredUsers.map((user) => (
            <View key={user.id}>{renderItem({ item: user })}</View>
          ))}
        </ScrollView>
      </View>
    );
  };

  return (
    <View style={{ padding: 20 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
        <TouchableOpacity
          style={{ padding: 10, backgroundColor: selectedCategory === 'Individual' ? 'blue' : 'gray', borderRadius: 5 }}
          onPress={() => setSelectedCategory('Individual')}
        >
          <Text style={{ color: 'white' }}>Individual</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ padding: 10, backgroundColor: selectedCategory === 'Professional' ? 'blue' : 'gray', borderRadius: 5 }}
          onPress={() => setSelectedCategory('Professional')}
        >
          <Text style={{ color: 'white' }}>Professional</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ padding: 10, backgroundColor: selectedCategory === 'Merchant' ? 'blue' : 'gray', borderRadius: 5 }}
          onPress={() => setSelectedCategory('Merchant')}
        >
          <Text style={{ color: 'white' }}>Merchant</Text>
        </TouchableOpacity>
      </View>
      {renderSection(selectedCategory, usersData)}
    </View>
  );
};

export default ExploreScreen;



