const mapboxgl = require("mapbox-gl");
const createMarkerEl = require("./marker").createMarkerEl;

mapboxgl.accessToken = 'pk.eyJ1IjoidmFscGlsIiwiYSI6ImNqZXp0Z2s0djBoNmgycG9kMXdxdmV3NzAifQ.BjZfykYhuok4b9k_ZfnFnQ';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const markerDomEl = createMarkerEl('activity', [-74.009, 40.705]);

new mapboxgl.Marker(markerDomEl).setLngLat(markerDomEl.coordinates).addTo(map);

console.log("Hello from JavaScript");
