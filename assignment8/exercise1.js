 /**  
  * First, we need to import the file so, we can use the following command:
  * 'mongoimport -d test -c restaurants E:\mum\MWA\assignments\repo\mwa-assignments\assignment8\restaurants.json'
  */

  /** 
   * Q#1-Solution: db.restaurants.find()
   */

  /** 
   * Q#2-Solution: db.restaurants.find({},{restaurant_id:1,name:1,district:1,cuisine:1})
   */

  /** 
   * Q#3-Solution: db.restaurants.find({},{restaurant_id:1,name:1,district:1,cuisine:1,_id:0})
   */

  /** 
   * Q#4-Solution: db.restaurants.find({},{restaurant_id:1,name:1,district:1,zipcode:1,_id:0})
   */

  /** 
   * Q#5-Solution:  db.restaurants.find({district:{$eq:"Bronx"}})
   */

  /** 
   * Q#6-Solution: db.restaurants.find({district:{$eq:"Bronx"}}).limit(5)
   */

  /** 
   * Q#7-Solution: db.restaurants.find({district:{$eq:"Bronx"}}).limit(5).skip(5) 
   */

  /** 
   * Q#8-Solution: db.restaurants.find({"address.coord.0":{$lt:-95.754168}})
   */

  /** 
   * Q#9-Solution: db.restaurants.find({$and:[ {"address.coord.0":{$lt:-65.754168}}, {cuisine:{$not:{$eq:"American"}}}, {"grades.score":{$gt:70}}]})
   */

  /** 
   * Q#10-Solution: db.restaurants.find({name:{$regex:"^Wil"}},{name:1,restaurant_id:1,district:1,_id:0})
   */

  /** 
   * Q#11-Solution: db.restaurants.find({name:{$regex:"ces$"}},{name:1,restaurant_id:1,district:1,_id:0})
   */

  /** 
   * Q#12-Solution: db.restaurants.find({name:{$regex:"Reg"}},{name:1,restaurant_id:1,district:1,_id:0})
   */

  /** 
   * Q#13-Solution: db.restaurants.find({$and:[{district:"Bronx"}, {cuisine:{$in:["American","Chinese"]}}]})
   */

  /** 
   * Q#14-Solution: db.restaurants.find({district:{$in:["Staten Island","Queens","Bronx", "Brooklyn"]}},{restaurant_id:1,name:1,district:1, cuisine:1,_id:0})
   */

  /** 
   * Q#15-Solution: db.restaurants.find({district:{$not:{$in:["Staten Island","Queens","Bronx", "Brooklyn"]}}},{restaurant_id:1,name:1,district:1, cuisine:1,_id:0})
   */

  /** 
   * Q#16-Solution: db.restaurants.find({"grades.score":{$not:{$gt:10}}},{restaurant_id:1,name:1,district:1, cuisine:1,_id:0,"grades.score":1})
   */

  /** 
   * Q#17-Solution: db.restaurants.find({"address.coord.1":{$gt:42,$lte:52}},{restaurant_id:1,name:1,district:1, cuisine:1,_id:0,"address":1})
   */

  /** 
   * Q#18-Solution: db.restaurants.find({},{name:1}).sort({"name":1})
   */

  /** 
   * Q#19-Solution: db.restaurants.find({}).sort({name:-1})
   */
  
  /** 
   * Q#20-Solution: db.restaurants.find({},{name:1,cuisine:1,district:1}).sort({cuisine:1,district:-1})
   */
  
  /** 
   * Q#21-Solution: db.restaurants.find({"address.street":{$exists:true}})
   */
  
  /** 
   * Q#22-Solution: db.restaurants.find({"address.coord":{$type:"double"}})
   */
  
  /** 
   * Q#23-Solution: db.restaurants.find({name:{$regex:"^Mad"}},{name:1,cuisine:1,district:1,_id:0,"address.coord":1})
   */
