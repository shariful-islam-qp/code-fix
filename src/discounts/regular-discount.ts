import { Discount } from "../interfaces/discount.interface";

export class RegularDiscount implements Discount {
	private static readonly discount = 0.05;
	calculateDiscountAmount(amount: number): number {
		return amount * RegularDiscount.discount;
	}
}
