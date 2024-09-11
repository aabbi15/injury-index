function convertToMongoDateTime(dateTimeStr) {
    // Split the date and time

    if(!dateTimeStr) {
        return"";
    }

    const [datePart, timePart] = dateTimeStr.split(' ');

    // console.log(datePart, "hi", timePart, "bye");
    

    // Split the date into year, month, and day
    const [year, month, day] = datePart.split('-').map(Number);

    // Split the time into hours, minutes, and seconds
    const [hours, minutes, seconds] = timePart.split(':').map(Number);

    // Create a new Date object
    const date = new Date(Date.UTC(year, month - 1, day, hours, minutes, seconds));

    return date.toISOString();
}

export { convertToMongoDateTime };