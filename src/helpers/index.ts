import type { IColors } from '@/types/colors'

export const getMonthLabel = (month: number) => {
  const months = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
  return months[month-1]
}

export const getColorTypeDetails = (colorType?: keyof IColors) => {
  const colorsDetails: IColors = {
    red: {
      first: '#ee2737',
      secondary: '#c6313dcc',
    },
    orange: {
      first: '#ff5e1c',
      secondary: '#9e573acc',
    },
    yellow: {
      first: '#ffc42b',
      secondary: '#9e8440cc',
    },
    green: {
      first: '#00e0c2',
      secondary: '#2e9083cc',
    },
    blue: {
      first: '#35cdec',
      secondary: '#458896cc',
    },
    pink: {
      first: '#eb2e8a',
      secondary: '#95426bcc',
    },
    purple: {
      first: '#6560f8',
      secondary: '#5a589bcc',
    },
  }

  return colorsDetails[colorType || 'red']
}