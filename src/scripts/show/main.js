import Data from "../data/data.js";
import "../component/Search/product-list.js";
import "../component/Search/search.js";

const mainSearch = () =>{
    const SearchElement = document.querySelector("search-item");
    const produtListElement = document.querySelector("product-list");

    const OnButtonClickSearch = () => {
        Data.searchProduct(SearchElement.value)
        .then(showProduct)
        .catch(error=>{
            alert(error.message)
        })
        .finally(console.log("Get Product List is Done"))
    };

    const showProduct = results =>{
        produtListElement.products = results;
    }

    SearchElement.clickItem = OnButtonClickSearch;
}

export default mainSearch;