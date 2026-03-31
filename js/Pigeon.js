class Pigeon {
    constructor(_pigeonOwner, _image, _x, _y, imgTodovecote, imgToHouse) {
        this.location = "house";
        this.atRest = true;
        this.pigeonOwner = _pigeonOwner;
        this.image = _image;
        this.ownerHouseLocationX = _x;
        this.ownerHouseLocationY = _y;
        this.flyingToDovecoteImageSrc = imgTodovecote;
        this.flyingToHouseImageSrc = imgToHouse
        this.restingImageSrc = this.image.src;
        this.lettersOnHoldPigeon = [];
        this.checkMessageOnHold();
        this.sizePigeon = 0;
        this.currentDelivery = null;
        this.dovecoteLocationX = 1610;
        this.dovecoteLocationY = 630;
    }

    waitingToSend(message) {
        this.lettersOnHoldPigeon.push(message);
        (this.sizePigeon)++;
    }

    checkMessageOnHold() {
        setInterval(() => {
            if (this.sizePigeon != 0 && this.atRest && this.currentDelivery == null) {
                let message = this.lettersOnHoldPigeon.shift();
                this.currentDelivery = message;
                if (message.sendToHouse) {
                    if (this.location == "house")
                        this.backToDovecote();
                    setTimeout(() => {
                        this.sendToClient(message);
                    }, 3400)
                }
                else {
                    if (this.location == "dovecote")
                        this.backToHouse();
                    setTimeout(() => {
                        this.sendToDovecote(message);
                    }, 3400)
                }
                (this.sizePigeon)--;
            }
        }, 1000)
    }

    setFlyingToDovecoteImage() {
        this.image.src = this.flyingToDovecoteImageSrc;
        this.image.style.marginLeft = "-10px";
        this.image.style.marginTop = "-10px";
    }

    setFlyingToHouseImage() {
        this.image.src = this.flyingToHouseImageSrc;
        this.image.style.marginLeft = "-10px";
        this.image.style.marginTop = "-10px";
    }

    setRestingImage() {
        this.image.src = this.restingImageSrc;
        this.image.style.marginLeft = "0";
        this.image.style.marginTop = "0";
    }

    move(x, y) {
        this.image.style.left = x + 'px';
        this.image.style.top = y + 'px';
    }

    sendToDovecote(message) {
        this.atRest = false;
        this.setFlyingToDovecoteImage();
        this.move(this.dovecoteLocationX, this.dovecoteLocationY);
        setTimeout(() => {
            this.location = "dovecote";
            this.atRest = true;
            this.setRestingImage();
            dovecote.callThePigeon(message);
            setTimeout(() => {
                this.image.style.display = "none";
                this.currentDelivery = null;
            }, 500)
        }, 3400)
    }

    sendToClient(message) {
        this.image.style.display = "inline-block";
        this.atRest = false;
        setTimeout(() => {
            this.setFlyingToHouseImage();
            this.move(this.ownerHouseLocationX, this.ownerHouseLocationY);
            setTimeout(() => {
                this.atRest = true;
                this.location = "house";
                this.setRestingImage();
                const client = getClientByName(this.pigeonOwner);
               showTheMessage(message);
                this.currentDelivery = null;
            }, 3400)
        }, 500)
    }

    backToHouse() {
        this.image.style.display = "inline-block";
        this.atRest = false;
        setTimeout(() => {
            this.setFlyingToHouseImage();
            this.move(this.ownerHouseLocationX, this.ownerHouseLocationY);
        }, 500)
    }

    backToDovecote() {
        this.atRest = false;
        this.setFlyingToDovecoteImage();
        this.move(this.dovecoteLocationX, this.dovecoteLocationY);
    }
}