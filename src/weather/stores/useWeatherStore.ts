import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { CityInterface } from '../interfaces/city.interface'
import { apiCity } from '../api/apiCity'
import { apiWeather } from '../api/apiWeather'
import type { Weather } from '../interfaces/weather.interface'

export const useWeatherStore = defineStore('weather', () => {
  const isLoading = ref(false)
  const isError = ref(false)
  const city = ref<CityInterface | null>(null)
  const weather = ref<Weather | null>(null)

  const showError = () => {
    isError.value = true
    setTimeout(() => {
      isError.value = false
    }, 500);
  }

  // Search city and returns its data
  const getCity = async (search: string) => {
    try {
      //Search city
      const res = await apiCity.get<CityInterface[]>('direct', {
        params: {
          q: search,
        },
      })

      return res.data
    } catch (error) {
      throw new Error('Error searching the city: ' + error)
    }
  }

  const getWeather = async() => {

    try {
      const res = apiWeather.get<Weather>('/weather', {
        params: {
          lat: city.value?.lat,
          lon: city.value?.lon
        }
      })

      return res

    } catch (error) {
      throw new Error('Error getting the weather: ' + error)
    }

  }

  const getCityWeather = async (search: string) => {
    if (search.trim().length == 0) {
      console.warn('Empty search')
      showError()
      return
    }
    isLoading.value = true
    const resCity = await getCity(search)
    // If cant find the city
    if (resCity?.length == 0) {
      showError()
      return
    }

    getWeather()
    
    isLoading.value = false
    return city.value = resCity[0]
  }

  return {
    isLoading,
    isError,
    city,
    weather,
    getCityWeather,
  }
})
