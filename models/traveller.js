const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const getStartLocal = this.journeys.map((journey) => journey.startLocation)
  return getStartLocal
};

Traveller.prototype.getJourneyEndLocations = function () {
  const getEndLocal = this.journeys.map((journey) => journey.endLocation)
  return getEndLocal
};

Traveller.prototype.getJourneysByTransport = function (transport) {

};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {

};

Traveller.prototype.calculateTotalDistanceTravelled = function () {

};

Traveller.prototype.getUniqueModesOfTransport = function () {

};


module.exports = Traveller;
