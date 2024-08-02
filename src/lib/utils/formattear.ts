function formatNumber(value) {
   if (value >= 1e9) {
      return `$${(value / 1e9).toFixed(1)}B COP`
   } else if (value >= 1e6) {
      return `$${(value / 1e6).toFixed(1)}M COP`
   } else {
      return `$${value} COP`
   }
}

export { formatNumber }
