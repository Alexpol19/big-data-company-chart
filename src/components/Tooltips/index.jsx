import React from 'react';
import SimpleTooltip from '../SimpleTooltip';
import TooltipDetailed from '../TooltipDetailed';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const Tooltips = ({ tooltipData, tooltipTopPosition }) => {
  const mobileChart = useMediaQuery('(max-width: 651px)');
  return (
    <>
      <TooltipDetailed tooltipData={tooltipData} mobile={mobileChart} />
      {!mobileChart ? (
        <>
          <SimpleTooltip
            item={tooltipData && tooltipData.open ? tooltipData.open : null}
            bgColor="#24be05"
            top={tooltipTopPosition}
          />
          <SimpleTooltip
            item={tooltipData && tooltipData.close ? tooltipData.close : null}
            bgColor="#000"
            top={tooltipTopPosition !== null ? tooltipTopPosition + 14 : tooltipTopPosition}
          />
        </>
      ) : null}
    </>
  )
}


export default Tooltips