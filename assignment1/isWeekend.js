(function(){
/**
write isWeekend function that returns the string "weekend" or "weekday" without using if-statement
**/
function isWeekend(){
    const todayDaye=new Date();
    const day=todayDaye.getDay();

    const daysMap={0:"weekend", 6:"weekend"}

    return daysMap[day] || "weekday";

}

console.log(isWeekend());
})();
