export class Product {
    constructor(name, price, description,img) {
        this.id = new Date();
        this.name = name;
        this.price = price;
        this.description = description;
        this.img = img;
    }
    inf() {
        console.log("Product-  name: " + this.name + ", price: " + this.price + ", description: " + this.description);
        return (this.name + ", price: " + this.price + ", " + this.description);
    }
}
