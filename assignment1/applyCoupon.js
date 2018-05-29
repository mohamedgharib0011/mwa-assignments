(function(){
/***
* create currable function that takes as arguments (in this order):
*   - Category
*   - Discount between 0 and 1(a 100$ a0.1 discount will cost 90$)
*   - An item
* and returns the item with the correct price. Implemnent applyCoupon() as a currable function
*
**/

  const item= {
         "name":"Biscuits",
         "type":"regular",
         "category":"food",
         "price":100
   }

applyCoupon=cat=>discount=>item=>{ item.price=item.price - (discount*item.price); return item};

console.log(applyCoupon("food")(0.1)(item));
})();
