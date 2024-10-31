// Literal objek yang ditingkatkan, diperkenalkan di ECMAScript 6 (ES6), adalah serangkaian peningkatan sintaksis untuk mendefinisikan objek dalam javascript. Peningkatan ini membuatnya lebih mudah dan ringkas untuk mendefinisikan properti objek dan metode

function user(name, age, work) {
    return {
        name: name,
        age: age,
        work: work,
        intro: function () {
            console.log(`My name is ${name} & I'm ${age} years old & I'm ${work}`);
        },
    };
}

const shandika = user("shandika", 18, "Programmer");
console.log(shandika.intro());

//=========================================================//

function obj(a, b, c) {
  return {
      a: a,
      b: b,
      c: c,
      intro: function () {
          console.log(`var a = ${a}
var b = ${b}
var c = ${c}`);
      },
  };
}

const jon = obj(1, 2, 3);
console.log(jon.intro());

//==========================================================//

// REFACTOR ES5 CODE TO ES6 (Enchanced Object Literals)
// ES5 code
//const a = 1;
//const b = 2;
//const c = 3;

//const obj = { a, b, c };

//console.log(obj);

//==========================================================//

//ES5 code
const lib = {
  sum: (a, b) => a + b,
  mult: (a, b) => a * b,
};

console.log(lib.sum(2, 3)); //5
console.log(lib.mult(2, 3)); //6

//===========================================================//

function getPersionES5(name, age, height) {
    return { name, age, height };
}

const res = getPersionES5 ("Shandika", 18, 168);
console.log(res);
// Expected output: { name: 'Shandika', age: 18, height: 168 }

//===========================================================//