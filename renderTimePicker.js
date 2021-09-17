const getHour = date => date.toLocaleTimeString('es-CL');

const renderTimePicker = (element, startTime, endTime, selectedColor, editable, timesArray) => {
  element.innerHTML= ''
  for (let i = startTime; i < endTime; i++) {
    // creating elements
    const div = document.createElement('div');
    const coloredDiv = document.createElement('div');
    const span = document.createElement('span');
    const spanText = document.createTextNode(i);

    // add class to div
    div.classList.add("bafian_timepicker_hour");

    // setting ranges to div
    div.dataset.startTime = (i < 10 ? '0' + i : i) + ':00:00';
    div.dataset.endTime = ((i < 9 ? '0' + (i + 1) : (i + 1))) + ':00:00';

    // preparing DOM
    span.appendChild(spanText);
    div.appendChild(span);
    div.appendChild(coloredDiv);

    // div style
    div.style.display = 'flex';
    div.style.height = '50px';

    // span style with hour display
    span.style.display = 'block';
    span.style.minWidth = '30px';
    span.style.alignSelf = 'center';

    // div that is beeing colored
    coloredDiv.style.width = '100%';
    coloredDiv.style.cursor = 'pointer';
    coloredDiv.style.borderBottom = endTime - 1 !== i ? '1px solid grey' : '';

    // color array of times if an array comes in
    if (timesArray && timesArray.length) {
    for (const date of timesArray) {
      const startTime = getHour(date[0]);
      const endTime = getHour(date[1]);
      if (
        startTime === div.dataset.startTime &&
        endTime === div.dataset.endTime
      ) {
        coloredDiv.style.backgroundColor = selectedColor;
        div.dataset.selected = true
        break;
      }
    }
  }
    // set - unset time if editable
    if (editable) {
      coloredDiv.addEventListener('click', function () {
        this.style.backgroundColor
          ? (this.style.backgroundColor = '')
          : (this.style.backgroundColor = selectedColor);
      });
      div.addEventListener('click', function () {
        this.dataset.selected == 'true'
          ? (this.dataset.selected = '')
          : (this.dataset.selected = 'true');
      });

    }

    // render component
    element.appendChild(div);
  }
};


