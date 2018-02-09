const paginationMeta = `totalCount: Int`

export default `
type Coordinate {
  latitude: Float
  longitude: Float
  createdAt: String!
  updatedAt: String!
}

type LightMarker {
  id: ID
  coordinate: Coordinate!
  confirmedAt: String
  createdAt: String!
  updatedAt: String!
}

type LightMarkersMeta {
  ${paginationMeta}
}

type Query {
  _allLightMarkersMeta: LightMarkersMeta
  allLightMarkers(first: Int = 50, offset: Int = 0): [LightMarker!]!
  getLightMarker(id: ID): LightMarker!
}
`
