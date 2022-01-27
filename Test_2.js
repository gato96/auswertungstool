/*function sendAfter(value, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(value), delay);
    });
}

function runTest() {
    console.log("Gleich geht's los!");
    sendAfter("Hallo", 500)
        .then(wert => console.log(wert));
}
/*async function runTest() {
    console.log("Gleich geht's los!");
    let wert = await sendAfter("Hallo", 500);
    console.log(wert));
}

 */
/*runTest();
console.log("Bitte etwas Geduld!");*/

var exampleTimestamp = 1634728085000;
var date = new Date(exampleTimestamp);

// Now let's convert a date into a timestamp
var jqPlotTimestamp = date.getTime();

console.log(date);



var exampleTimestamp2 = 1634728339000;
var date2 = new Date(exampleTimestamp2);

// Now let's convert a date into a timestamp
var jqPlotTimestamp2 = date2.getTime();

console.log(date2);


