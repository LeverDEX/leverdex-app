import { lighten } from '@material-ui/core'

export const firstChartState = {
  labels: ['Aug', 'Oct', '8', '2021', '8', 'Aug', 'Oct', '8', '2021', '8'],
  datasets: [
    {
      fill: true,
      lineTension: 0.2,
      backgroundColor: lighten('#ff4488', 0.1),
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [3, 42, 47, 33, 40, 66, 65, 59, 80, 81, 56]
    }
  ]
}

export const secondChartState = {
  labels: ['Jun', 'Aug', 'Oct', '2021', 'Jun', 'Aug', 'Oct', '8', '2021', '8'],
  datasets: [
    {
      fill: true,
      lineTension: 0.2,
      backgroundColor: '#5ca8ff',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 1.5,
      data: [3, 59, 80, 81, 40, 66, 65, 80, 81, 56]
    }
  ]
}
