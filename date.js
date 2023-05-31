var c=new Date
var day=c.toISOString().split('T')
var year=c.getFullYear()
var month=c.getMonth()
console.log(c);

var date=parseInt(day[0])
var min=date-18;



var x= c.getMonth()+1
if(x<10){
    var month=x.toString()
    var month2='0'+month
}
console.log("month "+month2);
var y=c.getDay()*10
console.log(x);
console.log(y);
console.log(min);
// console.log(year);
// console.log(month);


