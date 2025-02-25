import { Customer } from "./customer";
import { CustomerType } from "./enums/customer-type.enum";
import { OrderSummary } from "./interfaces/order-summary";
import { Order } from "./order";

export class OrderManagementSystem {
	static main(): void {
		const customer = new Customer("John Doe", CustomerType.REGULAR);
		const order = new Order(customer);

		order.addItem({ item: "Laptop", price: 1000 });
		order.addItem({ item: "Mouse", price: 50 });
		order.addItem({ item: "Keyboard", price: 80 });

		order.printOrder();

		const orderSummary = order.getOrderSummary();
		OrderManagementSystem.generateInvoice(orderSummary);
	}

	static generateInvoice(orderSummary: OrderSummary): void {
		console.log("Generating Invoice...");
		console.log(`Customer: ${orderSummary.customerName}`);
		console.log(`Total: $${orderSummary.totalPrice}`);
		console.log(`Discounted Total: $${orderSummary.discountedPrice}`);
		console.log(
			`Items: ${orderSummary.items.map((item) => item.item).join(", ")}`
		);
		console.log("Thank you for shopping with us!");
	}
}
