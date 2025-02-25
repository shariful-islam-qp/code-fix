import { Discount } from "../interfaces/discount.interface";

export class VipDiscount implements Discount {
	calculateDiscountAmount(amount: number): number {
		return amount * 0.2;
	}
}
