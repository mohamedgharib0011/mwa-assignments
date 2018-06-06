/**
 * Q#1-Sol:  db.zips.aggregate([{$match:{state:"IA"}}]);
 * 
 */

 /**
 * Q#2-Sol:  db.zips.aggregate([{$match:{pop:{$lt:1000}}}]);
 * 
 */


 /**
 * Q#3-Sol:  db.zips.aggregate([{$group:{_id:{'state':'$state', 'city':'$city'},zipcount:{$sum:1}}}, {$match:{zipcount:{$gt:1}}},{$sort:{"_id.state":1,"_id.city":1}} ]);
 * 
 */

 /**
 * Q#4-Sol:  db.zips.aggregate([{$group:{_id:{'state':'$state', 'city':'$city'}, population:{$sum:'$pop'}}}, {$sort:{"_id.state":1,"_id.city":1,population:1}}, {$group:{_id:{state:"$_id.state"},city:{$first:"$_id.city"}, population:{$first:"$population"}}}]);
 * 
 */