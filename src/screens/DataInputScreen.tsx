
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { DataInputRequest } from '../types/UserTypes';
import { dataInputApi } from '../apis/DataInputApi';

const DataInputScreen: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const handleDataInput = async () => {
    const requestData: DataInputRequest = {
      user: {
        userId: '', // You can generate a unique userId here if needed
        firstName,
        lastName,
        email,
        phone,
        address,
      },
    };

    try {
      await dataInputApi(requestData);
      // Handle success or show a confirmation message
    } catch (error) {
      // Handle error or show an error message
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