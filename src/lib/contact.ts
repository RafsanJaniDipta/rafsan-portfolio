/**
 * Single source of truth for contact details.
 * Update the number here and every link on the site follows.
 */

/** Local Bangladesh format, for display. */
export const PHONE_LOCAL = "01325252970";

/** International format without "+" — what wa.me expects. */
export const PHONE_INTL = "8801325252970";

/** Pretty form used in the contact list. */
export const PHONE_DISPLAY = "+880 1325-252970";

export const EMAIL = "rafsanjanidipto@gmail.com";

const DEFAULT_WHATSAPP_MESSAGE =
  "Hi Rafsan, I found your portfolio and I'd like to talk about an opportunity.";

/**
 * Builds a wa.me link. WhatsApp opens the native app when installed and
 * falls back to WhatsApp Web otherwise, so one URL covers desktop and mobile.
 */
export function whatsappLink(message: string = DEFAULT_WHATSAPP_MESSAGE) {
  return `https://wa.me/${PHONE_INTL}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_URL = whatsappLink();
export const PHONE_URL = `tel:+${PHONE_INTL}`;
export const EMAIL_URL = `mailto:${EMAIL}`;
