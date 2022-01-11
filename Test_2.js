function sendAfter(value, delay) {
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
runTest();
console.log("Bitte etwas Geduld!");