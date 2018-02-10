export default class LightMarkerRepository {
  static findByBoundaries (northEast, southWest) {
    return this.find({
      $and: [
        { 'coordinate.latitude': { $lte: northEast.latitude } },
        { 'coordinate.longitude': { $gte: northEast.longitude } },
        { 'coordinate.latitude': { $gte: southWest.latitude } },
        { 'coordinate.longitude': { $lte: southWest.longitude } }
      ]
    })
  }
}
