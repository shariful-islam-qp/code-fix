import { OrderItem } from "./order-item.interface";

export interface OrderSummary {
	customerName: string;
	items: OrderItem[];
	totalPrice: number;
	discountAmount: number;
	discountedPrice: number;
}
