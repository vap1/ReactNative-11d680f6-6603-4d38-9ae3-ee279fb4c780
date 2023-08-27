
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { User } from '../types/UserTypes';
import { DataInputApi } from '../apis/DataInputApi';

interface DataInputFormProps {
  onFormSubmit: () => void;
}

const DataInputForm: React.FC<DataInputFormProps> = ({ onFormSubmit }) => {
  const [user, setUser] = useState<User>({
    userId: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
  });

  const handleInputChange = (field: keyof User, value: string) => {
    setUser((prevUser) => ({
      ...prevUser,
      [field]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      await DataInputApi.submitDataInput({ user });
      onFormSubmit();
    } catch (error) {
      console.error('Error submitting data input:', error);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="User ID"
        value={user.userId}
        onChangeText={(value) => handleInputChange('userId', value)}
      />
      <TextInput
        placeholder="First Name"
        value={user.firstName}
        onChangeText={(value) => handleInputChange('firstName', value)}
      />
      <TextInput
        placeholder="Last Name"
        value={user.lastName}
        onChangeText={(value) => handleInputChange('lastName', value)}
      />
      <TextInput
        placeholder="Email"
        value={user.email}
        onChangeText={(value) => handleInputChange('email', value)}
      />
      <TextInput
        placeholder="Phone"
        value={user.phone}
        onChangeText={(value) => handleInputChange('phone', value)}
      />
      <TextInput
        placeholder="Address"
        value={user.address}
        onChangeText={(value) => handleInputChange('address', value)}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default DataInputForm;