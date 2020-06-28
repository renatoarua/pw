var push = require('web-push');

let vapidKeys = {
    publicKey: 'BAkBoSuHYI-LMu7ATcP8haf1WCJlVv0yqBSI5C7euGQU4FHd80mwHeqM6ddIIFrqyRzO686hP9pYBgvCbcDngBU',
    privateKey: '2ydR57ngSOqqerd-HoRd-G-sPj1RQtcgYdkC5y8OfiQ'
}

push.setVapidDetails('mailto:ree.arua@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey);

let sub = {
    endpoint: 'https://fcm.googleapis.com/fcm/send/dhNEATEws-w:APA91bGHPJaNnmxZqVOhqOqHOQLfVPOEi1GY5WtaiNOC7jansqttqqjK2zNiBrFhtqw2q0HS0Gyj3d0RIMnF41tCNPj9sFOi3wzizdN4PzZ6vyx-zRPWA0jXbL3Hz6RX53eBtSic3dyP","expirationTime":null',
    keys: {
        p256dh: 'BBmiM4D99_ngCYzRLQyD1PHWORI80IQ0I3sfp8AF5OPgbzidfCL_yXZo6G3OoaR5CZ36X4j52U-HzmWfxLj6Afk',
        auth: 'CtO1_Wza6MNK0uAGy9T9eg'
    }
};

push.sendNotification(sub, 'Teste Mensagem!');