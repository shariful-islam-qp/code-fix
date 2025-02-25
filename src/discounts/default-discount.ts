import { Discount } from "../interfaces/discount.interface";
export class DefaultDiscount implements Discount {
	private static readonly discount = 0;
	calculateDiscountAmount(_amount: number): number {
		return DefaultDiscount.discount;
	}
}
