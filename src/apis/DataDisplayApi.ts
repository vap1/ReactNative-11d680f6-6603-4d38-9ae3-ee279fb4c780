
import axios from 'axios';
import { User } from '../types/UserTypes';

export interface DataDisplayRequest {}

export interface DataDisplayResponse {
  users: User[];
}

export const getDataDisplay = async (): Promise<DataDisplayResponse> => {
  try {
    const response = await axios.get<DataDisplayResponse>('/data-display');
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch data display');
  }
};