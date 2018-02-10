import mongoose from 'mongoose'
import LightMarkerRepository from '../repositories/LightMarkerRepository'
import {LightMarkerSchema} from '../schemas'

LightMarkerSchema.loadClass(LightMarkerRepository)

export default mongoose.model('LightMarker', LightMarkerSchema)