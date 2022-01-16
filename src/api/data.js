import * as axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_IEXCLOUD_URL,
  headers: {'Content-Type': 'application/json'},
});

export const getCompanyData = (symbol = 'aapl', field) => {
  return instance.get(`stable/stock/${symbol}/quote${field ? `/${field}` : ''}?token=${process.env.REACT_APP_IEXCLOUD_API_TOKEN}`)
    .then((res) => {
      return res
    })
    .catch((e) => {
      throw e
    })
}

export const getChartData = (symbol = 'aapl', range = '1m') => {
  return instance.get(`stable/stock/${symbol}/chart/${range}?token=${process.env.REACT_APP_IEXCLOUD_API_TOKEN}`)
    .then((res) => {
      return res
    })
    .catch((e) => {
      throw e
    })
}