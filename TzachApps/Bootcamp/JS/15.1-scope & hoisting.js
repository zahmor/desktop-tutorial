// Tzach Mordechai. 

//output:
//undifened
//2
//Need to move a declaration up before console. 

//Block 1
function funcA() {
  console.log(a);
  console.log(foo());

  var a = 1;
  function foo() {
    return 2;
  }
}
funcA();

//output
//'Aurelio De Rosa'
//John Doe as it return "this.fullName" and on this scop after using the () it run a function on it and brings John Snow.

//Need to write: obj.FullName  in case it wants to log 'Colin Ihrig'. or just fullName in case you wanna log 'John Doe'
//need to console log test without perentesis. 
//Block 2
var fullName = 'John Doe';
var obj = {
  fullName: 'Colin Ihrig',
  prop: {
    fullName: 'Aurelio De Rosa',
    getFullName: function () {
      return this.fullName;
    }
  }
};
console.log(obj.prop.getFullName());
var test = obj.prop.getFullName;
console.log(test());


//Output
//undefined
//number
//console should be in the func itself or console the value returned for a type. 
//b isn't defined in const or let so it's a window varible
//block 3
// debugger;

function funcB() {
  let a = b = 0;
  a++;
  return a;
}

funcB(); //a=1
console.log(typeof a);
console.log(typeof b);


//2
//2
//Last declaration wins. 
//Should rename so we have two diffrent name: Func1 and Func2
//  Block 4
// debugger;
function funcC() {
  console.log("1");
}
funcC();
function funcC() {
  console.log("2");
}
funcC();
//1
//error. e is defined only in the function
//Should return e and console the value returned. or remove the 'var' so it would be window var and return 1
//Block 5
function funcD1() {
  d = 1;
}
funcD1();
console.log(d);
function funcD2() {
    e = 1;
}
funcD2();
console.log(e);

//Value of f in global scope: undefined
//Value of f in global scope: 1
//Should define the var f at the begining
//Block 6
var f = 1;
function funcE() {
  console.log("Value of f in local scope: ", f);
}
console.log("Value of f in global scope: ", f);
funcE();