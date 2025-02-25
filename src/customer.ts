import { CustomerType } from "./enums/customer-type.enum";
import { DiscountFactory } from "./factories/discount.factory";
import { Discount } from "./interfaces/discount.interface";

export class Customer {
	private readonly discount: Discount;

	constructor(
		private readonly name: string,
		private readonly type: CustomerType
	) {
		this.discount = DiscountFactory.getDiscount(this.type);
	}

	getName(): string {
		return this.name;
	}

	getDiscountAmount(amount: number): number {
		return this.discount.calculateDiscountAmount(amount);
	}
}
