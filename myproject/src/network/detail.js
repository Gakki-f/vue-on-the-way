import { request } from './request'

export function getDetail(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}

export class Goods {
  constructor(columns, itemInfo, services){
    this.title = itemInfo.title,
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.realPrice = itemInfo.lowNowPrice
    this.discountDesc = itemInfo.discountDesc,
    this.discountBgColor = itemInfo.discountBgColor
    this.columns = columns
    this.services = services
  }
}
