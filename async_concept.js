var async = require('async');
//=============================||async.series||=====================================

console.log('=============||async.waterfall||=============')
console.log('async.waterfall Start');
async.waterfall([
	(callback)=>{
		console.log('Firsts Step --> ');
		callback(null,'first','second');
	},
	(arg1, arg2, callback)=>{
		console.log('second Step ---> '+arg1+' '+arg2);
		callback(null, 'third');
	},
	(arg1, callback)=>{
		console.log('third Step ---> '+arg1);
		callback('error', 'Final execution statement');
	}
],(err,result)=>{
	console.log('Main Callback ---> '+result);;
});
console.log('async.waterfall End');

//================================||async.series||===================================

console.log('=============||async.series||=============')
console.log('async.series Start')
async.series([
        (callback)=>{
                console.log('Firsts Step --> ');
                callback(null,'first');
        },
        (callback)=>{
                console.log('second Step --> ');
                callback('error', 'second');
        }
],(err,result)=>{
        console.log('Main Callback ---> '+result);;
});
console.log('async.series End')

//================================||async.parallel||===================================

console.log('=============||async.parallel||=============')
console.log('async.parallel start');
async.parallel([
  (callback)=> {
    setTimeout(()=> {
      console.log('Task One');
      callback(null, 1);
    }, 900);
  },
  (callback)=> {
    setTimeout(()=> {
      console.log('Task Two');
      callback(null, 2);
    }, 500);
  }
],
(err, results)=> {
  console.log(results);
})
console.log('async.parallel End')

//==================||output||========================

// =============||async.waterfall||=============
// async.waterfall Start
// Firsts Step --> 
// second Step ---> first second
// third Step ---> third
// Main Callback ---> Final execution statement
// async.waterfall End
// =============||async.series||=============
// async.series Start
// Firsts Step --> 
// second Step --> 
// Main Callback ---> first,second
// async.series End
// =============||async.parallel||=============
// async.parallel start
// async.parallel End
// Task Two
// Task One
// [ 1, 2 ]
