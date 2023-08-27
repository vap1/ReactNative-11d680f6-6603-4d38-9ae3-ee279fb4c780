
import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { User } from '../types/UserTypes';
import { SearchResponse } from '../apis/SearchApi';

type SearchResultsProps = {
  searchResults: User[];
};

const SearchResults: React.FC<SearchResultsProps> = ({ searchResults }) => {
  return (
    <View>
      <Text>Search Results:</Text>
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

export default SearchResults;