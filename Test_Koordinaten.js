
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