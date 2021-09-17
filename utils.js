const createTimesArray = (start, end) => {
  const startTime = +start;
  const endTime = +end;
  let timesArray = [];
  for (let i = startTime; i < endTime; i++) {
    const date1 = setHour(new Date(), i);
    const date2 = setHour(new Date(), i + 1);
    timesArray.push([date1, date2]);
  }
  return timesArray;
};

const createStartTimeOptions = (startTime, endTime, element) => {
  for (let i = startTime; i < endTime; i++) {
    const option = document.createElement('option');
    option.value = i;
    option.innerText = i + ':00';
    element.appendChild(option);
  }
};

const createEndTimeOptions = (startTime, endTime, element) => {
  for (let i = startTime + 1; i <= endTime; i++) {
    const option = document.createElement('option');
    option.value = i;
    option.innerText = i + ':00';
    element.appendChild(option);
  }
};

const setHour = (date, hourNumber) => {
  date.setHours(hourNumber);
  date.setMinutes(0);
  date.setSeconds(0);
  return date;
};

const resetSelect = (element, text) => {
  element.innerHTML = ` <option value="" disabled selected>${text}</option>`;
};

const addColorsToSelect = element => {
  for (const color of CSS_COLOR_NAMES) {
    const option = document.createElement('option');
    option.value = color;
    option.innerText = color;
    element.appendChild(option);
  }
};

const getArrayOfSelectedDates = () => {
  const timeDivs = document.querySelectorAll('.bafian_timepicker_hour');
  let array = []
  for (const div of timeDivs) {
      if (div.dataset.selected === 'true') {
          const date = new Date().toLocaleDateString('en-EN')
          const date1 = new Date(`${date} ${div.dataset.startTime}`)
          const date2 = new Date(`${date} ${div.dataset.endTime}`)
          array.push([date1, date2])
      }
  }
  console.log(array);
};
