console.log("Tip: You can use URL parameters to customise some aspects of this site, try setting 'updateTime' and 'decimalLength' to something...");

window.onload = function() {
    const currentYear = new Date().getFullYear();
    const yearText = document.querySelector('.year-text');
    const yearPercentage = document.querySelector('.year-percentage');
  
    yearText.textContent = currentYear;
  
    if (yearPercentage) {
      const urlParams = new URLSearchParams(window.location.search);
      const updateInterval = urlParams.get('updateTime');
      const decimalLength = urlParams.get('decimalLength');
  
      const parsedUpdateInterval = updateInterval ? parseInt(updateInterval) : 100;
      const parsedDecimalLength = decimalLength ? parseInt(decimalLength) : 6;
  
      updatePercentage(parsedDecimalLength);
      setInterval(() => { updatePercentage(parsedDecimalLength) }, parsedUpdateInterval);
    }
  
    function updatePercentage(decimalLength) {
      const isLeapYear = (currentYear % 400 === 0) || (currentYear % 4 === 0 && currentYear % 100 !== 0);
      const totalDaysInYear = isLeapYear ? 366 : 365;
      const elapsedDays = (new Date() - new Date(currentYear, 0, 1)) / 86400000;
      const percentage = (elapsedDays / totalDaysInYear * 100).toFixed(decimalLength);
    
      yearPercentage.textContent = percentage + '%';
      document.body.style.setProperty('--percentage', percentage + '%');
    }
  };
  