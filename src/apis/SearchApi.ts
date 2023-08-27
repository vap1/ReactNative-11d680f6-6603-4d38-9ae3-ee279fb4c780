
import axios from 'axios';
import { SearchRequest, SearchResponse } from '../types/SearchTypes';

const BASE_URL = 'http://your-api-base-url.com'; // Replace with your actual API base URL

export const search = async (keyword: string): Promise<SearchResponse> => {
  try {
    const response = await axios.get<SearchResponse>(`${BASE_URL}/search/${keyword}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to perform search');
  }
};