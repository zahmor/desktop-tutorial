//Tzach Mordechai.  

const people = ["Greg", "Mary", "Devon", "James"];


// //1
for (i = 0; i < people.length; i++) {
   console.log(` ${people[i]} `);
}

// //2 remove "Greg" from the array. first element
people.shift()

// //3 last element
people.pop()


// //4 add as first element
people.unshift('Matt');

// //5 add as last element
people.push('Tzach');

// //6 Exist after Mary
for (i = 0; i < people.length; i++) {
  console.log(` ${people[i]} `);
  if(people[i]==='Mary') { break; }
}

// //7 slice
let peopleReplica = people.slice(0,0);
for (i = 0; i < peopleReplica.length; i++) {
  console.log(` ${peopleReplica[i]} `);
}

// //8 
for (i = 0; i < people.length; i++) {  
  if(people[i]==='Mary') { console.log(` ${i} `); }
}
console.log(people.indexOf('Mary'));


// //9
let flag = 0;
for (i = 0; i < people.length; i++) {  
  if(people[i]==='Foo') { 
    console.log(` ${i} `);  
    flag = 1;
  }  
}
flag===0 ? console.log('-1') : 1;

console.log(people.indexOf('Foo'));


//10
//// people.splice(2,1);
people.splice(2,1,'Elizabeth', 'Artie');

for (i = 0; i < people.length; i++) {
   console.log(` ${people[i]} `);
}

//11
var withBob = people.concat(['Bob']);

for (i = 0; i < withBob.length; i++) {
  console.log(` ${withBob[i]} `);
}