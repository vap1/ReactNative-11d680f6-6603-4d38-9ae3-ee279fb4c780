
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { DataInputRequest } from '../types/UserTypes';
import { postDataInput } from '../apis/DataInputApi';

interface DataInputFormProps {
  onSuccess: () => void;
}

const DataInputForm: React.FC<DataInputFormProps> = ({ onSuccess }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const handleDataInput = async () => {
    const requestData: DataInputRequest = {
      user: {
        firstName,
        lastName,
        email,
        phone,
        address,
      },
    };

    try {
      await postDataInput(requestData);
      onSuccess();
    } catch (error) {
      console.error('Error occurred during data input:', error);
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

export default DataInputForm;