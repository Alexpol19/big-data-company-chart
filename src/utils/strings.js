export const numberFormat = (val) => {
  if(val !== null) {
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }
  return 0
}

export const shortenTheNumber = (val) => {
  if(val !== null) {
    const value = shortenDecimals(val)
    if(value > 1000000){
      return mFormatter(value)
    }
    return value
  }
  return 0
}

const shortenDecimals = (val) => {
  if(val !== null) {
    return val.toLocaleString('en-Us', { maximumFractionDigits: 2, minimumFractionDigits: 0 }).replaceAll(',', '')
  }
  return 0
}

function mFormatter(val) {
  return Math.abs(val) > 999999 ? Math.sign(val)*(shortenDecimals(Math.abs(val)/1000000)) + 'M' : Math.sign(val)*Math.abs(val)
}