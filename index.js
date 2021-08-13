//  Write a function which formats a duration, given as a number of seconds, in a human-friendly way.

//  The function must accept a non-negative integer. 
// If it is zero, it just returns "now". 
// Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

let timeList = {
    minute: 60,
    hour: 3600,
    day: 86400,
    year: 31536000
}

function formatDuration (seconds) {
    let time = '' 
    let remainder = seconds
    if (seconds >= timeList.year) {
        Math.floor(remainder/timeList.year) === 1 ? time = time.concat(' 1 year,') : time = time.concat(` ${Math.floor(remainder/timeList.year)} years,`) 
        remainder = remainder%timeList.year
    }
    if (remainder >= timeList.day && remainder < timeList.year) {
        remainder%timeList.day === 0 && time != '' ? time = time.slice(0, -1).concat(' and') : null
        Math.floor(remainder/timeList.day) === 1 ? time = time.concat(' 1 day,') : time = time.concat(` ${Math.floor(remainder/timeList.day)} days,`) 
        remainder = remainder%timeList.day
    }
    if (remainder >= timeList.hour && remainder < timeList.day) {
        remainder%timeList.hour === 0 && time != '' ? time = time.slice(0, -1).concat(' and') : null
        Math.floor(remainder/timeList.hour) === 1 ? time = time.concat(' 1 hour,') : time = time.concat(` ${Math.floor(remainder/timeList.hour)} hours,`) 
        remainder = remainder%timeList.hour
    }
    if (remainder >= timeList.minute && remainder < timeList.hour) {
        remainder%timeList.minute === 0 && time != '' ? time = time.slice(0, -1).concat(' and') : null
        Math.floor(remainder/timeList.minute) === 1 ? time = time.concat(' 1 minute,') : time = time.concat(` ${Math.floor(remainder/timeList.minute)} minutes,`) 
        remainder = remainder%timeList.minute
    }
    if (remainder <= 59) {
        remainder > 0 && time != '' ? time = time.slice(0, -1).concat(' and') : null
        seconds === 0 ? time = 'now' 
        : remainder === 1 ? time = time.concat(' 1 second') 
        : remainder > 1 ? time = time.concat(` ${remainder} seconds`) : null
    }
    return time.charAt(time.length - 1) === ',' ? time = time.slice(0, -1).trim() : time.trim()
} 

console.log(formatDuration(0), "now");
console.log(formatDuration(1), "1 second");
console.log(formatDuration(62), "1 minute and 2 seconds");
console.log(formatDuration(120), "2 minutes");
console.log(formatDuration(122), "2 minutes and 2 seconds");
console.log(formatDuration(3600), "1 hour");
console.log(formatDuration(3662), "1 hour, 1 minute and 2 seconds");

console.log(formatDuration(86400), "1 day");
console.log(formatDuration(172800), "2 days");
console.log(formatDuration(172800), "3 days");
console.log(formatDuration(270183), "3 days, 3 hours, 3 minutes and 3 seconds");
console.log(formatDuration(31536000 ), "1 year");
console.log(formatDuration(63072000 ), "2 years");
console.log(formatDuration(63252122), "2 years, 2 days, 2 hours, 2 minutes and 2 seconds");

console.log(formatDuration(132030240), "4 years, 68 days, 3 hours and 4 minutes");

