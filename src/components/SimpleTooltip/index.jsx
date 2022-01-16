import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { shortenTheNumber } from '../../utils/strings';
import { Box, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  tooltipWrapper: {
    padding: theme.spacing(0.4),
    borderRadius: theme.spacing(0.6),
    paddingLeft: theme.spacing(0.5),
    paddingRight: theme.spacing(0.5),
    position: 'absolute',
    zIndex: 1,
    lineHeight: 0,
    minWidth: '35.61px',
  },
  tooltipText: {
    color: '#fff',
    lineHeight: '12px',
    fontWeight: '400'
  },
}));

const SimpleTooltip = ({ item, bgColor, top }) => {
  const classes = useStyles();
  return (
    <>
      {item !== null && top ? (
        <Box className={classes.tooltipWrapper} bgcolor={bgColor} top={top} right={-12}>
          <Typography variant="caption" className={classes.tooltipText}>{shortenTheNumber(item)}</Typography>
        </Box>
      ) : null}
    </>
  )
}


export default SimpleTooltip