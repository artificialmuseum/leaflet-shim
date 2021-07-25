import { is } from '@magic/test'

import * as shim from '../src/index.js'

const keys = [
  'Control',
  'DomEvent',
  'DomUtil',
  'FeatureGroup',
  'Icon',
  'LayerGroup',
  'Marker',
  'Util',
  'circle',
  'control',
  'divIcon',
  'extend',
  'map',
  'marker',
  'popup',
  'tileLayer',
]

const extended = ['Marker', 'Control', 'Icon']

export default [
  ...keys.map(key => ({ fn: () => shim[key], expect: is.fn, info: `shim.${key} is a function` })),
  ...extended.map(key => ({
    fn: () => shim[key].extend,
    expect: is.fn,
    info: `shim.${key}.extend is a function`,
  })),

  ...keys.map(key => ({ fn: shim[key], expect: undefined, info: `shim.${key} can be called` })),
  ...extended.map(key => ({
    fn: shim[key].extend,
    expect: undefined,
    info: `shim.${key}.extend can be called`,
  })),
]
