export const sendToTelegram = async (appointmentData: {
  name: string;
  phone: string;
  email: string;
  preferredDate: string;
  treatment: string;
  message: string;
}): Promise<boolean> => {
  const botToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
  const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    console.error("Telegram credentials not configured");
    return false;
  }

  const formattedDate = appointmentData.preferredDate
    ? new Date(appointmentData.preferredDate).toLocaleString()
    : "Not specified";

  const messageText = `
📋 <b>New Appointment Request</b>

👤 <b>Name:</b> ${appointmentData.name}
📱 <b>Phone:</b> ${appointmentData.phone}
📧 <b>Email:</b> ${appointmentData.email || "Not provided"}
📅 <b>Preferred Date & Time:</b> ${formattedDate}
🦷 <b>Treatment Type:</b> ${appointmentData.treatment || "Not specified"}
📝 <b>Message/Notes:</b> ${appointmentData.message || "None"}
  `.trim();

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: messageText,
          parse_mode: "HTML",
        }),
      }
    );

    if (!response.ok) {
      console.error("Failed to send Telegram message:", response.statusText);
      return false;
    }

    return true;
  } catch (error) {
    console.error("Error sending to Telegram:", error);
    return false;
  }
};
