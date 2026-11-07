import type { CartItem } from "@/context/CartContext";

export type OrderCustomerDetails = {
  fullName: string;
  phone: string;
  deliveryLocation: string;
  paymentMethod: "MTN MoMo" | "Telecel Cash" | "Bank Transfer" | "Cash on Delivery";
  notes?: string;
};

export const WHATSAPP_BUSINESS_NUMBER = "233547319261"; // +233 54 731 9261

export function generateOrderReference(): string {
  const randomNum = Math.floor(1000 + Math.random() * 9000);
  return `#NAKPRI-${randomNum}`;
}

export function formatWhatsAppOrderMessage(
  orderRef: string,
  customer: OrderCustomerDetails,
  items: CartItem[],
  subtotal: number
): string {
  const itemsList = items
    .map(
      (item, idx) =>
        `${idx + 1}. *${item.name}*\n   • Option / Spec: ${item.size}\n   • Qty: ${item.quantity}\n   • Price: GH₵ ${item.price.toLocaleString()} (Total: GH₵ ${(
          item.price * item.quantity
        ).toLocaleString()})`
    )
    .join("\n\n");

  const text = `💻 *NEW ORDER — NAKPRI LAPTOPS & ACCESSORIES*
Order Ref: *${orderRef}*

👤 *Customer Details:*
• Name: ${customer.fullName}
• Phone: ${customer.phone}
• Delivery Destination: ${customer.deliveryLocation}
• Payment Method: ${customer.paymentMethod}
${customer.notes ? `• Order Notes / Specs: ${customer.notes}\n` : ""}
📦 *Items Ordered:*
${itemsList}

----------------------------------
💰 *Subtotal*: GH₵ ${subtotal.toLocaleString()}
🚚 *Shipping*: Express Delivery (Accra & Nationwide Ghana)
*ESTIMATED TOTAL*: *GH₵ ${subtotal.toLocaleString()}*

Please confirm model availability and provide dispatch/payment details. Thank you!`;

  return text;
}

export function buildWhatsAppCheckoutUrl(
  orderRef: string,
  customer: OrderCustomerDetails,
  items: CartItem[],
  subtotal: number,
  phone = WHATSAPP_BUSINESS_NUMBER
): string {
  const rawMessage = formatWhatsAppOrderMessage(orderRef, customer, items, subtotal);
  const encodedText = encodeURIComponent(rawMessage);
  return `https://wa.me/${phone}?text=${encodedText}`;
}
