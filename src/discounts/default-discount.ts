import { Discount } from "../interfaces/discount.interface";

export class DefaultDiscount implements Discount {
	calculateDiscountAmount(amount: number): number {
		return 0;
	}
}
