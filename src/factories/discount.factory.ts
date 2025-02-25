import { DefaultDiscount } from "../discounts/default-discount";
import { PremiumDiscount } from "../discounts/premium-discount";
import { RegularDiscount } from "../discounts/regular-discount";
import { VipDiscount } from "../discounts/vip-discount";
import { CustomerType } from "../enums/customer-type.enum";
import { Discount } from "../interfaces/discount.interface";

export class DiscountFactory {
	static getDiscount(type: string): Discount {
		switch (type) {
			case CustomerType.REGULAR:
				return new RegularDiscount();
			case CustomerType.PREMIUM:
				return new PremiumDiscount();
			case CustomerType.VIP:
				return new VipDiscount();
			default:
				return new DefaultDiscount();
		}
	}
}
