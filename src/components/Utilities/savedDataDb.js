let savedCart = [];
const getSavedData = () =>{
    const getItems = localStorage.getItem('pickedCart');
    if(getItems){
        savedCart = JSON.parse(getItems);
    }
    return savedCart;
}
const savedDataToDb = (item)=>{
    const getPreviousItem = getSavedData();
    if(getPreviousItem){
        savedCart = [...getPreviousItem, item]
        localStorage.setItem('pickedCart', JSON.stringify(savedCart))
    }
    else{
        savedCart.push(item)
        localStorage.setItem('pickedCart', JSON.stringify(savedCart))
    }
}
export{
    savedDataToDb, 
    getSavedData
}