import { Discount } from "../interfaces/discount.interface";

export class RegularDiscount implements Discount {
	calculateDiscountAmount(amount: number): number {
		return amount * 0.05;
	}
}
