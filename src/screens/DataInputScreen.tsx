
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { DataInputApi } from '../apis/DataInputApi';
import { User } from '../types/UserTypes';

const DataInputScreen: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const handleDataInput = async () => {
    const user: User = {
      userId: '', // You can generate a unique ID here if needed
      firstName,
      lastName,
      email,
      phone,
      address,
    };

    try {
      const response = await DataInputApi.dataInput({ user });
      console.log('Data input successful:', response);
      // Add any success handling logic here
    } catch (error) {
      console.error('Data input failed:', error);
      // Add any error handling logic here
    }
  };

  return (
    <View>
      <TextInput
        placeholder="First Name"
        value={firstName}
        onChangeText={setFirstName}
      />
      <TextInput
        placeholder="Last Name"
        value={lastName}
        onChangeText={setLastName}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Phone"
        value={phone}
        onChangeText={setPhone}
      />
      <TextInput
        placeholder="Address"
        value={address}
        onChangeText={setAddress}
      />
      <Button title="Submit" onPress={handleDataInput} />
    </View>
  );
};

export default DataInputScreen;