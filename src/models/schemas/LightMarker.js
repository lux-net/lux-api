import { Schema } from 'mongoose'
import CoordinateSchema from './Coordinate'

export default new Schema({
  iluminated: Boolean,
  coordinate: { type: CoordinateSchema, default: CoordinateSchema },
  confirmedAt: Date
}, { timestamps: true })
