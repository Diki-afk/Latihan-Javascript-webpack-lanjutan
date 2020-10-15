class ProductItem extends HTMLElement{
    constructor(){
        super();
        this.shadowDom = this.attachShadow({mode:"open"});
    }

    set product(product){
        this._product = product;
        this.show();
    }

    show(){
        this.shadowDom.innerHTML = `
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Alegreya+Sans:wght@500&family=Noto+Serif&family=Play&display=swap');

            *{
                margin: 0;
                padding: 15px;
                box-sizing: border-box;
                border-radius: 10px; 
                font-family:"Alegreya Sans";
            }

            :host{
                display: block;
                margin-bottom: 10px;
                box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2);
                border-radius: 5px;
                overflow: hidden;
            }
            
            .image-meal {
                width: 100%;
                max-height: 500px;
                object-fit: cover;
                object-position: center;
                border-radius:50px; 
            }
            
            h2 {
                font-weight: bold;
                font-size: 2em;
                text-align:center;
                text-shadow: 1px 1px grey;
            }

            * > p{
                font-size:20px;
            }
            
            .description-meal > p {
                margin-top: 10px;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 10; 
            }
            @media screen and (max-width: 513px) {
                * > p{
                    font-size:15px;
                }
                h2{
                    font-size: 22px;
                }
                .image-meal{
                    max-height:300px;
                }
            }
        </style>

        <h2>${this._product.strMeal}</h2>
        <img class="image-meal" src="${this._product.strMealThumb}" alt="Meal">
        <div class="desciption-meal">
            <p>${this._product.strInstructions}</p>
        </div>`;
    }

}

customElements.define("product-item", ProductItem);