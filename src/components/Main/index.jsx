import React, { useEffect, useState } from 'react';
import { getChartData, getCompanyData } from '../../api';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Chart from '../Chart';
import CompanyDataBox from '../CompanyDataBox';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core';

const Main = () => {
  const [initialized, setInitialized] = useState(false)
  const [companyData, setCompanyData] = useState(null)
  const [chartData, setChartData] = useState(null)

  const theme = useTheme()
  const mobileScreen = useMediaQuery(theme.breakpoints.down('xs'));

  const fetchCompanyData = async () => {
    const resp = await getCompanyData()
    if (resp && resp.data) {
      setCompanyData({
        symbol: resp.data.symbol,
        companyName: resp.data.companyName,
        currency: resp.data.currency,

        latestPrice: resp.data.latestPrice,
        change: resp.data.change,
        marketCap: resp.data.marketCap,
      })
    }
    return resp
  }

  const fetchChartData = async () => {
    const resp = await getChartData()
    if (resp && resp.data) {
      setChartData(resp.data)
    }
    return resp
  }

  useEffect(() => {
    async function initialize() {
      await fetchCompanyData()
      await fetchChartData()
      setInitialized(true)
    }
    initialize()
  }, [])

  if (!initialized) return <Grid container justifyContent="center" style={{ paddingTop: 100 }}><CircularProgress color="secondary" /></Grid>

  return (
    <Container maxWidth='md'>
      <Box paddingTop={mobileScreen ? 3.5 : 6.5}>
        <CompanyDataBox companyData={companyData} />
        <Box pt={mobileScreen ? 2 : 3} />
        <Chart chartData={chartData} />
      </Box>
    </Container>
  );
}

export default Main;
