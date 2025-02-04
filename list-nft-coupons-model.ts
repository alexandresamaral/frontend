import { NFTCouponModel } from './nft-coupon-model'

export interface ListNFTCouponsModel {
  id: string
  imageUrl: string
  name: string
  collection: string
  coupons: NFTCouponModel[]
}
