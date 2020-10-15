class CategoryItem extends HTMLElement{
    constructor(){
        super();
        this.shadowDom = this.attachShadow({mode:"open"});
    }

    set category(category){
        this._category = category;
        this.show();
    }

    show(){
        this.shadowDom.innerHTML = `
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Alegreya+Sans:wght@500&family=Noto+Serif&family=Play&display=swap');
                
                *{
                    margin: 0;
                    padding: 20px;
                    box-sizing: border-box;
                    font-family:"Alegreya Sans";
                    border-radius: 10px;
                }

                :host{
                    display: block;
                    margin-bottom: 10px;
                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                    border-radius: 5px;
                    overflow: hidden;
                }
                
                .image-meal {
                    width: 100%;
                    max-height: 400px;
                    object-fit: cover;
                    object-position: center;
                    border-radius:50px;
                }
                
                h2 {
                    text-align:center;
                    font-weight: bold;
                    text-shadow: 1px 1px grey;
                }

                @media screen and (max-width: 513px) {
                    h2{
                        font-size: 22px;
                    }
                    .image-meal{
                        max-height:300px;
                    }
                }
            </style>

            <h2>${this._category.strMeal}</h2>
            <img class="image-meal" src="${this._category.strMealThumb}" alt="Meal">
        `;
    }
}

customElements.define("category-item", CategoryItem);