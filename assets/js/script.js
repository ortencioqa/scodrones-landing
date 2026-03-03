// Função principal WhatsApp
function falarWhatsApp() {
  const numero = "5541996128712";
  const mensagem = "Olá, gostaria de solicitar um orçamento para serviço com drone em Curitiba.";
  
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
  
  window.open(url, "_blank");
}

// Log para confirmar que o JS carregou
console.log("SCO Drones JS carregado com sucesso!");