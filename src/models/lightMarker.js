
import mongoose, { Schema } from 'mongoose'

const CoordinateSchmea = new Schema({
  latitude: Number,
  longitude: Number,
}, { timestamps: true })

const LightMarkerSchema = new Schema({
  iluminated: Boolean,
  coordinate: CoordinateSchmea,
  confirmedAt: Date
}, { timestamps: true })

export default mongoose.model('LightMarker', LightMarkerSchema)
