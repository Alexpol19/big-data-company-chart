import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { shortenTheNumber } from '../../utils/strings';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  tooltipWrapper: {
    border: '2px solid #e9e9e9',
    borderRadius: theme.spacing(1),
    backgroundColor: '#fff',
    padding: theme.spacing(1),
    position: 'absolute',
    top: '69px',
    left: '17px',
    zIndex: 1
  },
  tooltipWrapperMobile: {
    top: '42px',
    left: '2px',
  },
  tooltipTextLine: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tooltipTextRight: {
    paddingLeft: '60px',
  }
}));

const TooltipDetailed = React.memo(({ tooltipData, mobile }) => {
  const classes = useStyles();
  return (
    <>
      {tooltipData ? (
        <div className={`${classes.tooltipWrapper} ${mobile ? classes.tooltipWrapperMobile : undefined}`}>
          <Typography className={classes.tooltipTextLine}>
            <Typography variant="caption" color="secondary">Open</Typography>
            <Typography variant="caption" className={classes.tooltipTextRight}>{shortenTheNumber(tooltipData.open)}</Typography>
          </Typography>
          <Typography className={classes.tooltipTextLine}>
            <Typography variant="caption" color="secondary">High</Typography>
            <Typography variant="caption" className={classes.tooltipTextRight}>{shortenTheNumber(tooltipData.high)}</Typography>
          </Typography>
          <Typography className={classes.tooltipTextLine}>
            <Typography variant="caption" color="secondary">Low</Typography>
            <Typography variant="caption" className={classes.tooltipTextRight}>{shortenTheNumber(tooltipData.low)}</Typography>
          </Typography>
          <Typography className={classes.tooltipTextLine}>
            <Typography variant="caption" color="secondary">Close</Typography>
            <Typography variant="caption" className={classes.tooltipTextRight}>{shortenTheNumber(tooltipData.close)}</Typography>
          </Typography>
          <Typography className={classes.tooltipTextLine}>
            <Typography variant="caption" color="secondary">Volume</Typography>
            <Typography variant="caption" className={classes.tooltipTextRight}>{shortenTheNumber(tooltipData.volume)}</Typography>
          </Typography>
          <Typography className={classes.tooltipTextLine}>
            <Typography variant="caption" color="secondary">% Change</Typography>
            <Typography variant="caption" className={classes.tooltipTextRight}>{shortenTheNumber(tooltipData.change)}%</Typography>
          </Typography>
        </div>
      ) : null}
    </>
  )
})


export default TooltipDetailed