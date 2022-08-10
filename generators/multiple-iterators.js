// Source: https://www.oreilly.com/library/view/you-dont-know/9781491905197/ch04.html
function* foo() {
  var x = yield 2;
  z++;
  var y = yield x * z;
  console.log(x, y, z);
}

var z = 1;

var it1 = foo();
var it2 = foo();

var val1 = it1.next().value; // 2 <-- yield 2
var val2 = it2.next().value; // 2 <-- yield 2

val1 = it1.next(val2 * 10).value; // 40 <-- x:2*10=20, z:2
val2 = it2.next(val1 * 5).value; // 600 <-- x:40*5=200, z:3

it1.next(val2 / 2); // y:300, 20 300 3
it2.next(val1 / 4); // y:10, 200 10 3
