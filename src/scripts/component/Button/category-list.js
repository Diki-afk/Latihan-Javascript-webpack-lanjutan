import "./category-item.js";

class CategoryList extends HTMLElement{
    constructor(){
        super();
        this.shadowDom = this.attachShadow({mode: "open"});
    }

    set categories(categories){
        this._categories = categories;
        this.show();
    }

    show(){
        this.shadowDom.innerHTML = "";
        this._categories.forEach(category => {
            const categoryItemElement = document.createElement("category-item");
            categoryItemElement.category = category
            this.shadowDom.appendChild(categoryItemElement);
        })
    }
}

customElements.define("category-list", CategoryList);