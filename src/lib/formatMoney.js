export default function(amount = 0) {
    const options = {
      style: 'currency',
      currency: 'GBP',
      minimumFractionDigits: 2,
    };
    // if its a whole, pound amount, leave off the .00
    if (amount % 100 === 0) options.minimumFractionDigits = 0;
    const formatter = new Intl.NumberFormat('en-GB', options);
    return formatter.format(amount);
}