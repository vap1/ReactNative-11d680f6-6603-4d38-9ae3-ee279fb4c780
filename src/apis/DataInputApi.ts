
import { DataInputRequest, DataInputResponse } from '../types/UserTypes';

export const postDataInput = async (request: DataInputRequest): Promise<DataInputResponse> => {
  try {
    const response = await fetch('/data-input', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    });

    if (!response.ok) {
      throw new Error('Failed to submit data input');
    }

    const data: DataInputResponse = await response.json();
    return data;
  } catch (error) {
    throw new Error('Failed to submit data input');
  }
};