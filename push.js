var push = require('web-push');

let vapidKeys = {
    publicKey: 'BAkBoSuHYI-LMu7ATcP8haf1WCJlVv0yqBSI5C7euGQU4FHd80mwHeqM6ddIIFrqyRzO686hP9pYBgvCbcDngBU',
    privateKey: '2ydR57ngSOqqerd-HoRd-G-sPj1RQtcgYdkC5y8OfiQ'
}

push.setVapidDetails('mailto:ree.arua@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey);

let sub = {}

push.sendNotification(sub, 'Teste Mensagem!');