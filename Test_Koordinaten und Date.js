
/*var lat1 = 49.00380085;
var lon1 = 8.34454316;
var lat2 = 49.01084452;
var lon2 = 8.37611017;

 */

var lat1 = 49.00380085;
var lon1 = 8.34454316;
var lat2 = 49.00151027;
var lon2 = 8.34511168;

var maxLaenge = 1000;

const R = 6371e3; // metres
const φ1 = lat1 * Math.PI/180; // φ, λ in radians
const φ2 = lat2 * Math.PI/180;
const Δφ = (lat2-lat1) * Math.PI/180;
const Δλ = (lon2-lon1) * Math.PI/180;

const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
    Math.cos(φ1) * Math.cos(φ2) *
    Math.sin(Δλ/2) * Math.sin(Δλ/2);
const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

const d = R * c; // in metres


console.log("Distanz in Metern");
console.log(d);

if (d <= maxLaenge){
    console.log("Distanz unter Grenzwert");
    console.log("Nehme Wert");
} else {
    console.log("Distanz über Grenzwert");
}



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

// auxiliary functions

const apply = f => x => f(x);
const uncurry = f => (x, y) => f(x) (y);
const createSet = xs => new Set(xs);
const filter = f => xs => xs.filter(apply(f));
const foldl = f => acc => xs => xs.reduce(uncurry(f), acc);


// intersection

const intersect = xs => ys => {
    const zs = createSet(ys);
    return filter(x => zs.has(x)
        ? true
        : false
    ) (xs);
};


// intersection of an arbitrarily number of Arrays

const intersectn = (head, ...tail) => foldl(intersect) (head) (tail);


// mock data

const xs = [
    {"WegeID 1": '58dcf53b-6e21-4616-86c9-f101bd8aded0', "WegeID 2": 'dae1d8c2-73a4-49a9-b0cd-a23a2687b53c', "UserID": 'Wegepaar mit gleicher UserID'},
    {"WegeID 1": 'bfa56dfb-8c12-47ce-bea6-2f40eb9455e6', "WegeID 2": '58dcf53b-6e21-4616-86c9-f101bd8aded0', "UserID": 'Wegepaar mit gleicher UserID'},
    {"WegeID 1": 'bfa56dfb-8c12-47ce-bea6-2f40eb9455e6', "WegeID 2": 'dae1d8c2-73a4-49a9-b0cd-a23a2687b53c', "UserID": 'Wegepaar mit gleicher UserID'}
];

const ys = [
    {"WegeID 1": '58dcf53b-6e21-4616-86c9-f101bd8aded0', "WegeID 2": 'dae1d8c2-73a4-49a9-b0cd-a23a2687b53c', "UserID": 'Wegepaar mit gleicher UserID'},
    {"WegeID 1": 'bfa56dfb-8c12-47ce-bea6-2f40eb9455e6', "WegeID 2": '58dcf53b-6e21-4616-86c9-f101bd8aded0', "UserID": 'Wegepaar mit gleicher UserID'}
];

const zs = [
    {"WegeID 1": '58dcf53b-6e21-4616-86c9-f101bd8aded0', "WegeID 2": 'dae1d8c2-73a4-49a9-b0cd-a23a2687b53c', "UserID": 'Wegepaar mit gleicher UserID'}

];

// run

console.log( intersectn(xs, ys) );


// Generic helper function that can be used for the three operations:
function operation(list1, list2, isUnion) {
    var result = [];

    for (var i = 0; i < list1.length; i++) {
        var item1 = list1[i],
            found = false;
        for (var j = 0; j < list2.length && !found; j++) {
            found = (item1["WegeID 1"] === list2[j]["WegeID 1"] && item1["WegeID 2"] === list2[j]["WegeID 2"]);
        }
        if (found === !!isUnion) { // isUnion is coerced to boolean
            result.push(item1);
        }
    }
    return result;
}

// Following functions are to be used:
function inBoth(list1, list2) {
    return operation(list1, list2, true);
}

console.log('inBoth:', inBoth(xs, ys));


var x = [
    {"WegeID 1": '58dcf53b-6e21-4616-86c9-f101bd8aded0', "WegeID 2": 'dae1d8c2-73a4-49a9-b0cd-a23a2687b53c', "UserID": 'Wegepaar mit gleicher UserID'},
    {"WegeID 1": 'bfa56dfb-8c12-47ce-bea6-2f40eb9455e6', "WegeID 2": '58dcf53b-6e21-4616-86c9-f101bd8aded0', "UserID": 'Wegepaar mit gleicher UserID'},
    {"WegeID 1": 'bfa56dfb-8c12-47ce-bea6-2f40eb9455e6', "WegeID 2": 'dae1d8c2-73a4-49a9-b0cd-a23a2687b53c', "UserID": 'Wegepaar mit gleicher UserID'}
    ],
    y = [
    {"WegeID 1": '58dcf53b-6e21-4616-86c9-f101bd8aded0', "WegeID 2": 'dae1d8c2-73a4-49a9-b0cd-a23a2687b53c', "UserID": 'Wegepaar mit gleicher UserID'},
    {"WegeID 1": 'bfa56dfb-8c12-47ce-bea6-2f40eb9455e6', "WegeID 2": '58dcf53b-6e21-4616-86c9-f101bd8aded0', "UserID": 'Wegepaar mit gleicher UserID'}
    ],
    z = [
    {"WegeID 1": '58dcf53b-6e21-4616-86c9-f101bd8aded0', "WegeID 2": 'dae1d8c2-73a4-49a9-b0cd-a23a2687b53c', "UserID": 'Wegepaar mit gleicher UserID'}

    ];
    data = [x, y, z],
    result = data.reduce((a, b) => a.filter(c => b.includes(c)));

console.log(result);


function getArraysIntersection(list1, list2, ...otherLists) {
    const result = [];

    for (let i = 0; i < list1.length; i++) {
        let item1 = list1[i];
        let found = false;
        for (var j = 0; j < list2.length && !found; j++) {
            found = (item1["WegeID 1"] === list2[j]["WegeID 1"] && item1["WegeID 2"] === list2[j]["WegeID 2"]);
        }
        if (found === true) {
            result.push(item1);
        }
    }
    if (otherLists.length) {
        return getArraysIntersection(result, otherLists.shift(), ...otherLists);
    }
    else {
        return result;
    }
}

console.log(getArraysIntersection(x,y,z))

