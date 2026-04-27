import { CartItem } from '@/features/cart/store/useCartStore';
import { WHATSAPP_CONFIG } from '@/config/whatsapp';

interface OrderData {
  customerName: string;
  deliveryType: 'pickup' | 'delivery';
  phone?: string;
  address?: string;
  items: CartItem[];
  totalUSD: number;
}

export function generateWhatsAppLink(data: OrderData): string {
  const { customerName, deliveryType, phone, address, items } = data;

  const totalUSD = items.reduce((acc, item) => acc + item.price_usd * item.quantity, 0);
  const totalCDF = items.reduce((acc, item) => acc + item.price_cdf * item.quantity, 0);


  let message = `Nouvelle commande – Alimentation Gracias\n\n`;
  message += `*Nom client:* ${customerName}\n`;
  
  if (deliveryType === 'delivery') {
    message += `*Type:* Livraison\n`;
    message += `*Téléphone:* ${phone}\n`;
    message += `*Adresse:* ${address}\n`;
  } else {
    message += `*Type:* Retrait sur place\n`;
  }

  message += `\n*Articles:*\n`;
  items.forEach((item) => {
    message += `• ${item.name} ×${item.quantity} (${(item.price_cdf * item.quantity).toLocaleString()} FC / $${(item.price_usd * item.quantity).toFixed(2)})\n`;
  });

  message += `\n*Total:* ${totalCDF.toLocaleString()} FC ($${totalUSD.toFixed(2)})\n\n`;
  message += `Merci.`;


  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_CONFIG.ownerNumber}?text=${encodedMessage}`;
}
