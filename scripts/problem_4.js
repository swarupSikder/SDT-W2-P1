const isLeapYear = (year) => {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            return year % 400 === 0;
        }
        return true;
    }
    return false;
};

let year = 1900;
if (isLeapYear(year)) {
    console.log("Leap Year");
}
else {
    console.log("Not Leap Year");
}