import DataCategory from "../data/dataCategory.js";
import "../component/Button/button-category/button-seafood.js";
import "../component/Button/button-category/button-beef.js";
import "../component/Button/button-category/button-chicken.js";
import "../component/Button/button-category/button-vegetarian.js";
import "../component/Button/button-category/button-miscellaneous.js";
import "../component/Button/category-list.js";

const categoryListElement = document.querySelector("category-list");

const buttonSeafood = () =>{
    const buttonElementSeafood = document.querySelector("button-seafood")

    const OnButtonClickSeafood = () => {
        DataCategory.selectCategory(buttonElementSeafood.value)
        .then(showCategory)
        .catch(error=>{
            alert(error.message)
        })
        .finally(console.log("Get Category List is Done"))
    };

    const showCategory = results =>{
        categoryListElement.categories = results;
    }

    buttonElementSeafood.clickButton= OnButtonClickSeafood;
}

const buttonBeef = () =>{
    const buttonElementBeef = document.querySelector("button-beef")

    const OnButtonClickBeef = () => {
        DataCategory.selectCategory(buttonElementBeef.value)
        .then(showCategory)
        .catch(error=>{
            alert(error.message)
        })
        .finally(console.log("Get Category List is Done"))
    };

    const showCategory = results =>{
        categoryListElement.categories = results;
    }

    buttonElementBeef.clickButton = OnButtonClickBeef;
}

const buttonChicken = () =>{
    const buttonElementChicken = document.querySelector("button-chicken")
    const OnButtonClickChicken = () => {
        DataCategory.selectCategory(buttonElementChicken.value)
        .then(showCategory)
        .catch(error=>{
            alert(error.message)
        })
        .finally(console.log("Get Category List is Done"))
    };

    const showCategory = results =>{
        categoryListElement.categories = results;
    }

    buttonElementChicken.clickButton = OnButtonClickChicken;
}

const buttonVegetarian = () =>{
    const buttonElementVegetarian = document.querySelector("button-vegetarian")

    const OnButtonClickVegetarian = () => {
        DataCategory.selectCategory(buttonElementVegetarian.value)
        .then(showCategory)
        .catch(error=>{
            alert(error.message)
        })
        .finally(console.log("Get Category List is Done"))
    };

    const showCategory = results =>{
        categoryListElement.categories = results;
    }

    buttonElementVegetarian.clickButton = OnButtonClickVegetarian;
}

const buttonMiscellaneous = () =>{
    const buttonElementMiscellaneous = document.querySelector("button-miscellaneous")

    const OnButtonClickMiscellaneous = () => {
        DataCategory.selectCategory(buttonElementMiscellaneous.value)
        .then(showCategory)
        .catch(error=>{
            alert(error.message)
        })
        .finally(console.log("Get Category List is Done"))
    };

    const showCategory = results =>{
        categoryListElement.categories = results;
    }

    buttonElementMiscellaneous.clickButton = OnButtonClickMiscellaneous;
}

export {buttonSeafood,buttonBeef, buttonChicken, buttonVegetarian, buttonMiscellaneous};