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

export class Shop{
  constructor(shopInfo){
    this.shopLogo = shopInfo.shopLogo,
    this.name = shopInfo.name,
    this.cSells = shopInfo.cSells,
    this.cGoods = shopInfo.cGoods,
    this.score = shopInfo.score
    this.allGoodsUrl = shopInfo.allGoodsUrl
  }
}

export class GoodsParam {
  constructor(info, rule) {
    // 注: images可能没有值(某些商品有值, 某些没有值)
    this.image = info.images ? info.images[0] : '';
    this.infos = info.set;
    this.sizes = rule.tables;
  }
}
