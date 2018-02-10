import { Schema } from 'mongoose'

export default new Schema({
  latitude: Number,
  longitude: Number
}, { timestamps: true })
