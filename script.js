function updateTextContent() {
  const messageElement = document.getElementById("messageText");
  const bitAmountElement = document.getElementById("bitAmountText");

  messageElement.textContent = message ? `($userdisplayname): ${message}` : "";
  bitAmountElement.textContent = bitAmount ? `Just cheered ${bitAmount} bitties!` : "";
}