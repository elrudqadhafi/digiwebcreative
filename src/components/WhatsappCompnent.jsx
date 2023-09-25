import React from 'react'

const WhatsappCompnent = () => {
  return (
    <div
      className="whatsapp-floating"
      onClick={() => openWhatsAppChat(message1)}
    >
      <i className="ri-whatsapp-line"></i>
    </div>
  )
}

export default WhatsappCompnent