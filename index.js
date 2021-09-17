let rangeStartTime = ''
let rangeEndTime = ''
let startTime = 8;
let endTime = 21;
let selectedColor = 'Tomato';
let editable = true;
let timesArray = [];

// Scope of TimePicker dates
timePickerStartTimeSelect.addEventListener('change', (e) => {
    startTime = +e.target.value
    createEndTimeOptions(startTime, endTime, timePickerEndTimeSelect)

})
timePickerEndTimeSelect.addEventListener('change', (e) => endTime = +e.target.value)

// Time range restrictions for the array of ranges
rangeStartTimeSelect.addEventListener('change', (e) => {
    rangeStartTime = +e.target.value
    createEndTimeOptions(rangeStartTime, rangeEndTime, rangeEndTimeSelect)
})
rangeEndTimeSelect.addEventListener('change', (e) => rangeEndTime = +e.target.value)


// Select if Datepicker will be editable
selectIfEditable.addEventListener('change', (e) => {
    editable = e.target.value === '1' ? true : false
})

// Render Array of ranges
renderArrayButton.addEventListener('click', () => {
    if (rangeStartTime && rangeEndTime) {
        timesArray = createTimesArray(rangeStartTime, rangeEndTime)
        renderTimePicker(component, startTime, endTime, selectedColor, editable, timesArray);
    }
})

// Render TimePicker again
renderTimePickerButton.addEventListener('click', () => {
    timesArray = []
    rangeStartTime = startTime
    rangeEndTime = endTime
    resetSelect(rangeStartTimeSelect, 'End Time')
    resetSelect(rangeEndTimeSelect, 'Start Time')
    resetSelect(timePickerStartTimeSelect, 'End Time')
    resetSelect(timePickerEndTimeSelect, 'Start Time')
    createStartTimeOptions(rangeStartTime, rangeEndTime, rangeStartTimeSelect)
    renderTimePicker(component, startTime, endTime, selectedColor, editable, timesArray);
    createStartTimeOptions(8, 20, timePickerStartTimeSelect)
    createEndTimeOptions(8, 21, timePickerStartTimeSelect)
})

// Ad colors to colors select and listen for change
colorSelect.addEventListener('change', (e) => selectedColor = e.target.value)
addColorsToSelect(colorSelect)


// add event listener to output
output.addEventListener('click', () => getArrayOfSelectedDates())

// Create range of times for first rendering the datepicker
createStartTimeOptions(startTime, endTime, timePickerStartTimeSelect)


