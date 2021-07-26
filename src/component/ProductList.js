//import { Product } from "./Product";
import { basketData } from "./BasketData";
import {productsData} from "./ProductData";


function addBasket(item){
  
    console.log(item);
    console.log("addBasket()");
    console.log(item.id+"-"+item.title);
    // const moviesUpDate = 
    //     this.state.movies.filter((item) =>item.id!==movie.id);
  
//    const newItem= [item];
//    basketData.push(newItem);
basketData.push(item);
   console.log(basketData);

    // BasketData=this.state.item.filter((item) =>item.id===item.id);
    // BasketData=item.filter((item) =>item.id===item.id);
//   return this.setState({
//     productsData: this.state.item.filter((item) =>item.id!==item.id)
//   });
  
  }

function Products(){
    // let product = new Product("Чашка",100 ,"Чашка для кофе");
// this.addBasket=addBasket();
    return(
        
<div>
    <ul>
        {productsData.map(p => 
        <li>
            <img className ="imgProduct" src={p.img} alt={p.name}/> 
            {p.inf()} 
            {/* <button onClick={addBasket}>add Basket</button> */}
            <button onClick={()=>addBasket(p)}>add Basket</button>
            {/* <input type="submit" value ="Купить" /> */}
        </li> ) }     
        
    </ul>
</div>
    )
    
}

export default Products;