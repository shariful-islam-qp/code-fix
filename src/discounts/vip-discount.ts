import { Discount } from "../interfaces/discount.interface";

export class VipDiscount implements Discount {
	private static readonly discount = 0.2;
	calculateDiscountAmount(amount: number): number {
		return amount * VipDiscount.discount;
	}
}
