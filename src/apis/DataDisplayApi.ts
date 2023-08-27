
import { SearchRequest, SearchResponse } from '../types/SearchApiTypes';

export const getDataDisplay = async (): Promise<SearchResponse> => {
  try {
    const response = await fetch('/data-display', {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error('Failed to fetch data display');
    }

    const data = await response.json();
    return data as SearchResponse;
  } catch (error) {
    throw new Error(`Failed to fetch data display: ${error.message}`);
  }
};