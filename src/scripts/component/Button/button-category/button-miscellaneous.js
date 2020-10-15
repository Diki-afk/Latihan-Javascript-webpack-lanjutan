class ButtonMiscellaneous extends HTMLElement{
    constructor(){
        super();
        this.shadowDom = this.attachShadow({mode:"open"});
    }

    set clickButton(event){
        this._clickButton = event;
        this.show();
    }
    get value(){
        return this.shadowDom.querySelector("#miscellaneous").value;
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
                margin: 10px;
                padding: 10px;
                text-decoration: none;
                text-align: center;
                text-transform: uppercase;
                font-family: "Alegreya Sans";
            }
            button:hover{
                color:white;
                box-shadow: 0 0 40px 40px black inset;
            }
            @media screen and (max-width: 513px) {
                button{
                    font-size: 0.8em;
                    margin: 3px;
                    padding: 3px;
                }
            }
        </style>
        
        <button value="Miscellaneous" id="miscellaneous" type="submit">Miscellaneous</button>
        `;
        this.shadowDom.getElementById("miscellaneous").addEventListener("click", this._clickButton);
    }
}

customElements.define("button-miscellaneous", ButtonMiscellaneous);