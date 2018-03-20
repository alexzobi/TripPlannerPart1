function createMarkerEl(type, coordinates) {
  const markerImages = {
    activity: "url(http://i.imgur.com/WbMOfMl.png)",
    hotel: "url(http://i.imgur.com/D9574Cu.png)",
    restaurant: "url(http://i.imgur.com/cqR6pUI.png)"
  }
  const markerDomEl = document.createElement("div");
  markerDomEl.style.width = "32px";
  markerDomEl.style.height = "39px";
  markerDomEl.style.backgroundImage = markerImages[type];
  markerDomEl.coordinates = coordinates;
  return markerDomEl;
}

module.exports = {
  createMarkerEl
}
