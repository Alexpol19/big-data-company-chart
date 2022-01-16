import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, useTheme } from '@material-ui/core';
import { numberFormat } from '../../utils/strings';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles({
  successColor: {
    color: '#0ada0a'
  }
});

const CompanyDataBox = ({ companyData }) => {
  const theme = useTheme()
  const mobileScreen = useMediaQuery(theme.breakpoints.down('xs'));
  const classes = useStyles();
  return (
    <Grid container justifyContent="space-between">
      <Grid item xs={12} sm={8}>
        <Typography variant="h3" color="primary">
          {companyData.symbol}
        </Typography>
        <Box paddingTop={0.5} paddingBottom={mobileScreen ? 0 : 1}>
          <Typography variant="body2" color="secondary">
            {companyData.companyName}.
            &nbsp;&#183;&nbsp;Telecommunications Equipment
          </Typography>
        </Box>
        <Typography variant="body2" color="primary">
          Earnings: 2021-02-25 (BMO)
        </Typography>
        <Typography variant="caption" color="secondary">
          Market Cap:
          &nbsp;
          {companyData.currency === 'USD' ? '$' : ''}
          {numberFormat(companyData.marketCap)}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Grid container alignItems={mobileScreen ? "flex-start" : "flex-end"}  direction="column">
          <Typography variant={mobileScreen ? 'body1' : "h3"} color="primary">
            {companyData.latestPrice}
          </Typography>
          <Box paddingTop={mobileScreen ? 0 : 0.5} />
          {typeof companyData.change === 'number' ? (
            <Typography variant="body2" color={companyData.change > 0 ? 'primary' : "error"} className={classes.successColor}>
              {companyData.change > 0 ? '+' : '-'}{companyData.change}%
            </Typography>
          ) : null}
        </Grid>
      </Grid>
    </Grid>
  )
}


export default CompanyDataBox