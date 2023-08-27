
import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text } from 'react-native';
import { User } from '../types/UserTypes';
import { search } from '../apis/SearchApi';

const SearchScreen: React.FC = () => {
  const [keyword, setKeyword] = useState('');
  const [searchResults, setSearchResults] = useState<User[]>([]);

  const handleSearch = async () => {
    try {
      const response = await search(keyword);
      setSearchResults(response.searchResults);
    } catch (error) {
      console.error('Error searching:', error);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Enter keyword"
        value={keyword}
        onChangeText={setKeyword}
      />
      <Button title="Search" onPress={handleSearch} />
      <FlatList
        data={searchResults}
        keyExtractor={(item) => item.userId}
        renderItem={({ item }) => (
          <View>
            <Text>{item.firstName} {item.lastName}</Text>
            <Text>Email: {item.email}</Text>
            <Text>Phone: {item.phone}</Text>
            <Text>Address: {item.address}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default SearchScreen;