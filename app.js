function date() {
    let month = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    let weekdays = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    let now = new Date();
    console.log(now);
    let mon = now.getMonth();
    console.log(month[mon]);

    let date = now.getDate();
    console.log(date);

    let year = now.getFullYear();
    console.log(year);

    document.write(`<h1>mm/dd/yy`+'<br>');
    document.write(`<h1>${month[mon]}/${date}/${year}`)
    document.write(`<h1>${month[mon]}-${date}-${year}`)
    document.write(`<h1>${date}-${month[mon]}-${year}`)
    document.write(`<h1>${date}/${month[mon]}/${year}`)



}
date()