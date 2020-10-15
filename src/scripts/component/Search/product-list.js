import "./product-item.js";

class ProductList extends HTMLElement{
    constructor(){
        super();
        this.shadowDom = this.attachShadow({mode:"open"});
    }

    set products(products){
        this._products = products;
        this.show();
    }

    show(){
        this.shadowDom.innerHTML = "";

        this._products.forEach(product => {
            const productItemElement = document.createElement("product-item");
            productItemElement.product = product
            this.shadowDom.appendChild(productItemElement);
        })
    }
}

customElements.define("product-list", ProductList);