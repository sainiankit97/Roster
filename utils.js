let monthNames = ["Jan.", "Feb.", "Mar.", "Apr.", "May.", "Jun.", "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."];
var days = new Array("Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat");

const formatDutiesByDate = (data) => {
    const dutiesByDate = data.reduce(function (r, a) {
        r[a.Date] = r[a.Date] || [];
        r[a.Date].push(a);
        return r;
    }, Object.create(null));
    return dutiesByDate;
}

export const formatDuties = (data) => {
    data.forEach((element, index) => {
        element.id = index;
        const dateParts = element.Date.split('/');
        const dateInwords = dateParts[0] + " " + monthNames[dateParts[1] % 12 - 1] + " " + dateParts[2];
        var d = new Date(dateInwords);
        var n = d.getDay();
        element.dateInwords = dateInwords
        element.day = days[n]
    });
    return formatDutiesByDate(data);
}

export const findAcronym = (stringData) => {
    const str = stringData
    const matches = str.match(/\b(\w)/g);
    const acronym = matches.join('')
    return acronym;
}