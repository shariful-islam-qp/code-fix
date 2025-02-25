import { Customer } from "./customer";
import { OrderItem } from "./interfaces/order-item.interface";
import { OrderSummary } from "./interfaces/order-summary";

export class Order {
	constructor(private readonly customer: Customer) {}

	private readonly orderItems: OrderItem[] = [];

	addItem(orderItem: OrderItem): void {
		this.orderItems.push(orderItem);
	}

	// getOrderItems(): OrderItem[] {
	// 	return this.orderItems;
	// }

	getTotalAmount(): number {
		return this.orderItems.reduce((sum, orderItem) => sum + orderItem.price, 0);
	}

	calculateDiscountedAmount(): number {
		const totalAmount = this.getTotalAmount();
		return totalAmount - this.customer.getDiscountAmount(totalAmount);
	}

	printOrder(): void {
		console.log(`Customer: ${this.customer.getName()}`);
		console.log(
			`Items: ${this.orderItems.map((item) => item.item).join(", ")}`
		);
		console.log(`Total Price: ${this.getTotalAmount()}`);
		console.log(`Discounted Price: ${this.calculateDiscountedAmount()}`);
	}

	getOrderSummary(): OrderSummary {
		return {
			customerName: this.customer.getName(),
			items: this.orderItems,
			totalPrice: this.getTotalAmount(),
			discountAmount: this.customer.getDiscountAmount(this.getTotalAmount()),
			discountedPrice: this.calculateDiscountedAmount(),
		};
	}
}
