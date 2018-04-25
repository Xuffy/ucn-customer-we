export default {
  containerNo: {
    type: 'text'
  },
  sealNumber: {
    type: 'text'
  },
  containerWeight: {
    type: 'text'
  },
  containerType: {
    type: 'select',
    select: ['fob', 'exw', '其他']
  },
  vgm: {
    type: 'text'
  },
  totalQuantityInContainer: {
    type: 'text'
  },
  totalVolumeInContainer: {
    type: 'text'
  },
  totalNetWeightInContainer: {
    type: 'text'
  },
  totalQuantityOfOuterCartonsInContainer: {
    type: 'text'
  },
  totalSkuPriceInContainer: {
    type: 'text'
  },
  exchangeCurrency: {
    type: 'text'
  }
}