import { Discount } from "../interfaces/discount.interface";

export class PremiumDiscount implements Discount {
	private static readonly discount = 0.1;
	calculateDiscountAmount(amount: number): number {
		return amount * PremiumDiscount.discount;
	}
}
