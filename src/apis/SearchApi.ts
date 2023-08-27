
import axios from 'axios';

interface SearchRequest {
  keyword: string;
}

interface SearchResponse {
  searchResults: User[];
}

const BASE_URL = 'http://your-api-base-url.com'; // Replace with your actual API base URL

export const search = async (request: SearchRequest): Promise<SearchResponse> => {
  try {
    const response = await axios.get<SearchResponse>(`${BASE_URL}/search/${request.keyword}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to search. Please try again.'); // Handle error as per your app's requirements
  }
};