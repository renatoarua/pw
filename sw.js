

self.addEventListener('push', () => {
    self.registration.sendnotification('Teste mensagem!', {})
});