const MoyshePigeon=document.getElementById('MoyshePigeon')
const YankelPigeon=document.getElementById('YankelPigeon')
const ZalmenPigeon=document.getElementById('ZalmenPigeon')
const clients = {
    Moyshe: new Client('Moyshe', 'blue', MoyshePigeon,  790, 830,"../images/MoyshePigeonDovecote.gif","../images/MoyshePigeonHouse.gif"), 
    Yankel: new Client('Yankel', 'green', YankelPigeon, 280, 810, "../images/YankelPigeonDovecote.gif","../images/YankelPigeonHouse.gif"), 
    Zalmen: new Client('Zalmen', 'red', ZalmenPigeon, 1300, 810,"../images/ZalmenPigeonDovecote.gif","../images/ZalmenPigeonHouse.gif") 
};
 
document.getElementById('MoysheSendBtn').addEventListener('click', () => {
    clients.Moyshe.sendBtn();
});
document.getElementById('YankelSendBtn').addEventListener('click', () => {
    clients.Yankel.sendBtn();
});
document.getElementById('ZalmenSendBtn').addEventListener('click', () => {
    clients.Zalmen.sendBtn();
});

function getClientByName(clientName) {
    return clients[clientName]; 
}

function showTheMessage(message) {
    const template = document.getElementById('getTemplate')
    const clone = template.content.cloneNode(true);
    const sender = clone.querySelector('#sender');
    sender.innerHTML = "";
    sender.innerHTML = `from ${message.from}`;
    const content = clone.querySelector('#content');
    content.innerHTML = "";
    content.innerHTML = message.content;
    const messageDiv = document.createElement('div');
    messageDiv.appendChild(clone);
    const contentLength = message.content.length;
    if (contentLength > 100) {
        content.style.fontSize = "1em";
    } else if (contentLength < 50) {
        content.style.fontSize = "1.2em";
    }
    
    const getDiv = document.getElementById(`${message.to}getDiv`);
    getDiv.prepend(messageDiv);
    getDiv.scrollTop = 0;
    messageDiv.style.opacity = '0';
    messageDiv.style.transform = 'translateY(-8px) scale(0.99)';
    messageDiv.style.transition = 'opacity 0.8s cubic-bezier(0.25, 0.1, 0.25, 1), transform 0.8s cubic-bezier(0.25, 0.1, 0.25, 1)';
    setTimeout(() => {
        messageDiv.style.opacity = '1';
        messageDiv.style.transform = 'translateY(0) scale(1)';
        messageDiv.classList.add('new-message');
    }, 10);
    setTimeout(() => {
        messageDiv.style.transition = 'all 1.5s cubic-bezier(0.25, 0.1, 0.25, 1)';
        messageDiv.classList.remove('new-message');
    }, 5000);
}

const dovecote=new Dovecote();
