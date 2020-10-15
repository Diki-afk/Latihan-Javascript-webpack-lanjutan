class SearchItem extends HTMLElement{
    constructor(){
        super();
        this.shadowDom = this.attachShadow({mode:"open"});
    }

    set clickItem(event){
        this._clickItem = event;
        this.show();
    }
    get value(){
        return this.shadowDom.querySelector("#SearchList").value;
    }

    show(){
        this.shadowDom.innerHTML = `
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Alegreya+Sans:wght@500&family=Noto+Serif&family=Play&display=swap');
            button{
                display:inline ;
                box-sizing: border-box;
                background-color: transparent;
                border-radius: 8px;
                border: 1px solid black;
                color: black;
                cursor: pointer;
                align-self: center;
                font-size: 1em;
                line-height: 1;
                padding: 10px;
                text-decoration: none;
                text-align: center;
                text-transform: uppercase;
                font-family: "Alegreya Sans";
                font-weight: 200;
            }
            button:hover{
                color:white;
                box-shadow: 0 0 40px 40px black inset;
            }

            input{
                border: 1px solid black;
                padding : 10px;
                font-family: "Alegreya Sans";
                font-size: 1em;
                border-radius: 8px;
                margin-bottom: 10px
            }
            @media screen and (max-width: 513px) {
                button{
                    font-size: 0.8em;
                    margin: 3px;
                    padding: 3px;
                }
                input{
                    font-size: 0.8em;
                    padding: 3px;
                }
            }
        </style>
            <div class="searchContainer">
                <input  type="search" placeholder="Search" aria-label="Search" id="SearchList">
                <button type="submit" id="clickItem">Search</button>
            </div>
        `;
        this.shadowDom.getElementById("clickItem").addEventListener("click", this._clickItem);
    }
}

customElements.define("search-item", SearchItem);