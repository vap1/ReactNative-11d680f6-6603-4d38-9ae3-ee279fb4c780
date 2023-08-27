
import { DataDisplayRequest, DataDisplayResponse, User } from '../types/UserTypes';

export const getDataDisplay = async (): Promise<DataDisplayResponse> => {
  try {
    const response = await fetch('/data-display', {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error('Failed to fetch data display');
    }

    const data: User[] = await response.json();

    return {
      users: data,
    };
  } catch (error: any) {
    throw new Error(`Failed to fetch data display: ${error}`);
  }
};