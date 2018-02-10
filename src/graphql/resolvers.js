import {LightMarker} from '../models/entities'

export default {
  Query: {
    _allLightMarkersMeta: async (root, _) => ({ totalCount: await LightMarker.count({ }) }),
    allLightMarkers: (parent, { first, offset }) => {
      const query = { }
      return LightMarker.find(query).sort('data').skip(offset).limit(first)
    },
    getLightMarker: (root, { id }) => LightMarker.findOne({ _id: id})
  },
  Mutation: {
  createLightMarker: (parent, args) => LightMarker.create({ ...args}),
  }
}
