navigator.geolocation.getCurrentPosition(
    (position) => {
    const ausgabe = "Breitengrad"
    + position.coords.latitude + "<br>"
    + "Längengrad" + position.coords.longitude + "<br>"
    + "Höhe" + position.coords.altitude + "<br>"
    + "Exaktheit" + position.coords.accuracy + "<br>"
    + "Exaktheit Höhe" + position.coords.altitudeAccuracy + "<br>"
    + "Richtung" + position.coords.heading + "<br>"
    + "Geschwindigkeit" + position.coords.speed + "<br>"
    + "Zeitstempel" + position.timestamp;
    document.querySelector('.position').innerHTML = ausgabe;
});
