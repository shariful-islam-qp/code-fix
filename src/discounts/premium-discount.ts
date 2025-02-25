import { Discount } from "../interfaces/discount.interface";

export class PremiumDiscount implements Discount {
	calculateDiscountAmount(amount: number): number {
		return amount * 0.1;
	}
}
