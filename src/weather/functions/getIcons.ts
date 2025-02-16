
export const getIcons = (id: string) => {

    switch (id) {
      case 'Clouds':
        return '3d-clouds.svg'
      case 'Clear':
        return '3d-clear.svg'
      case 'Rain':
        return '3d-rain.svg'
      case 'Thunderstorm':
        return '3d-thunder.svg'
      case 'Snow':
        return '3d-snow.svg'
      default:
        return '3d-clouds.svg'
    }
}