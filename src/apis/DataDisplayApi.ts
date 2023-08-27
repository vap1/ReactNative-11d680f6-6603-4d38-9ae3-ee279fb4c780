
import { User } from '../types/UserTypes';

interface DataDisplayResponse {
  users: User[];
}

export const getDataDisplay = async (): Promise<DataDisplayResponse> => {
  try {
    const response = await fetch('/data-display', {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error('Failed to fetch data display');
    }

    const data = await response.json();
    return data as DataDisplayResponse;
  } catch (error) {
    throw new Error(`Failed to fetch data display: ${error.message}`);
  }
};