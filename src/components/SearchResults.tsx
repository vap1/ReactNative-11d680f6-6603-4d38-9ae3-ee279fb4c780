
import React from 'react';
import { View, Text } from 'react-native';
import { User } from '../types/UserTypes';

interface SearchResultsProps {
  searchResults: User[];
}

const SearchResults: React.FC<SearchResultsProps> = ({ searchResults }) => {
  return (
    <View>
      {searchResults.map((user) => (
        <View key={user.userId}>
          <Text>{user.firstName} {user.lastName}</Text>
          <Text>Email: {user.email}</Text>
          <Text>Phone: {user.phone}</Text>
          <Text>Address: {user.address}</Text>
        </View>
      ))}
    </View>
  );
};

export default SearchResults;