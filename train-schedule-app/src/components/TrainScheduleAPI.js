import axios from 'axios';

const API_BASE_URL = 'https://api.example.com'; // Replace this with your API endpoint

export const getTrainSchedule = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/trainschedule`);
    return response.data;
  } catch (error) {
    console.error('Error fetching train schedule:', error);
    return [];
  }
};
