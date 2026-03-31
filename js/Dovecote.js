class Dovecote {
    callThePigeon(message) {
        const client = getClientByName(message.to);
        message.sendToHouse=true;
        client.pigeon.waitingToSend(message);
    }
}