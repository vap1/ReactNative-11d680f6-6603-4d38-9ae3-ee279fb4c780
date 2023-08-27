
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { SearchRequest, SearchResponse } from '../types/SearchTypes';
import { search } from '../apis/SearchApi';

const SearchScreen: React.FC = () => {
  const [keyword, setKeyword] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResponse[]>([]);

  const handleSearch = async () => {
    try {
      const request: SearchRequest = {
        keyword: keyword,
      };

      const response = await search(request);
      setSearchResults(response.searchResults);
    } catch (error) {
      console.error('Error searching:', error);
    }
  };

  return (
    <View>
      <Text>Search Screen</Text>
      <TextInput
        placeholder="Enter keyword"
        value={keyword}
        onChangeText={setKeyword}
      />
      <Button title="Search" onPress={handleSearch} />
      {searchResults.map((result, index) => (
        <View key={index}>
          <Text>{result.userId}</Text>
          <Text>{result.firstName}</Text>
          <Text>{result.lastName}</Text>
          <Text>{result.email}</Text>
          <Text>{result.phone}</Text>
          <Text>{result.address}</Text>
        </View>
      ))}
    </View>
  );
};

export default SearchScreen;