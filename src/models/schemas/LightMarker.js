import { Schema } from 'mongoose'
import CoordinateSchema from './Coordinate'

export default new Schema({
  iluminated: Boolean,
  coordinate: {type: CoordinateSchema, default: {latitude:0, longitude:0}},
  confirmedAt: Date
}, { timestamps: true }) 