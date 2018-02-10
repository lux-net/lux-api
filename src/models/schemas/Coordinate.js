import { Schema } from 'mongoose'

export default new Schema({
  latitude: { type: Number, default: 0 },
  longitude: { type: Number, default: 0 }
}, { timestamps: true })
