function runepic() {
  const webhookURL =
    'Your Webhook';
  const messageContent = {
    content: 'Message is here',
  };
  fetch(webhookURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(messageContent),
  })
    .then((response) => response.json())
    .catch((error) => console.error('Error sending message:', error));
}
