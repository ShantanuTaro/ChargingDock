export const convertTo12HourFormat = (time24hr) => {
    const [hours, minutes, seconds] = time24hr.split(':');
    const parsedDate = new Date(2000, 0, 1, hours, minutes, seconds);
  
    const options = { hour: 'numeric', minute: '2-digit', hour12: true };
    const time12hr = parsedDate.toLocaleTimeString('en-US', options);
  
    return time12hr;
  }