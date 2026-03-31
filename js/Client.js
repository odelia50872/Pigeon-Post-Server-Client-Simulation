class Client {
    constructor(myName, myColor, myPigeon, locationX, locationY,imgTodovecote,imgToHouse) {
        this.name = myName;
        this.color = myColor;
        this.pigeon = new Pigeon(this.name, myPigeon, locationX, locationY,imgTodovecote,imgToHouse);

    }
    sendBtn() {
        let content = document.getElementById(`${this.name}Message`).value;
        let to = document.getElementById(`${this.name}Addressee`).value;
        if ((to != "Yankel" && to != "Moyshe" && to != "Zalmen") || (to == this.name)) {
            alert('The adressee is incorrect , please re-enter a correct adressee.')
            return;
        }
        const from = this.name;
        const message = new Message(from, to, content);
        this.pigeon.waitingToSend(message);
        document.getElementById(`${this.name}Message`).value = "";
        document.getElementById(`${this.name}Addressee`).value = "";
        }
}