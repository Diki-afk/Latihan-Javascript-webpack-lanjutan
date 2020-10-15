class DataCategory {
    static selectCategory(keyword){
        return fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${keyword}`)

        .then(response=>{
            return response.json();
        })
        .then(responseJson=>{
            if(responseJson.meals){
                return Promise.resolve(responseJson.meals);
            }else{
                return Promise.reject(`${keyword} is not found`)
            }
        })
    }
}

export default DataCategory;