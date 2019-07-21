let a:Array<number>=[1,2,3,4,5];

console.log(a);

console.log('accesing eleements...');

console.log(a[0]);
console.log(a[2]);

console.log('foreach');

a.forEach((e) => {
    console.log(e);
});

console.log('deconstructing');

let [b,c,d,e,f] = a;

console.log('deconstructing b',b);
console.log('deconstructing c',c);
console.log('deconstructing d',d);
console.log('deconstructing e',e);
console.log('deconstructing f',f);
