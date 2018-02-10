
import mongoose, { Schema } from 'mongoose'

const CoordinateSchma = new Schema({
  latitude: Number,
  longitude: Number,
}, { timestamps: true })

const LightMarkerSchema = new Schema({
  iluminated: Boolean,
  coordinate: CoordinateSchma,
  confirmedAt: Date
}, { timestamps: true })

class LightMarkerRepository {
  static findByBoundaries(northEast, southWest) {
    return this.find({
      $and: [
        { 'coordinate.latitude': { $lte: northEast.latitude } },
        { 'coordinate.longitude': { $gte: northEast.longitude } },
        { 'coordinate.latitude': { $gte: southWest.latitude } },
        { 'coordinate.longitude': { $lte: southWest.longitude } },
      ]
    })
  }
}

LightMarkerSchema.loadClass(LightMarkerRepository)

export default mongoose.model('LightMarker', LightMarkerSchema)
