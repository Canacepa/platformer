class Sprite {
    constructor({position, imageSrc}){
        this.position = position;
        this.image = new Image()
        this.image.src = imageSrc
        this.loaded = false
        console.log(this.image)
    }
    draw() {
        if (this.loaded) return
        c.drawImage(this.image, this.position.x, this.position.y, this.position.width, this.position.height)
    }
}