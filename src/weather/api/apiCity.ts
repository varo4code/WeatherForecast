import axios from 'axios'

export const apiCity = axios.create({
  baseURL: 'https://api.openweathermap.org/geo/1.0',
  headers: {
    'Content-Type': 'application/json',
  },
  params: {
    appid: import.meta.env.VITE_APP_ID,
  },
})
