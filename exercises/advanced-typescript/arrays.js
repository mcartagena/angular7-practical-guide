var a = [1, 2, 3, 4, 5];
console.log(a);
console.log('accesing eleements...');
console.log(a[0]);
console.log(a[2]);
console.log('foreach');
a.forEach(function (e) {
    console.log(e);
});
console.log('deconstructing');
var b = a[0], c = a[1], d = a[2], e = a[3], f = a[4];
console.log('deconstructing b', b);
console.log('deconstructing c', c);
console.log('deconstructing d', d);
console.log('deconstructing e', e);
console.log('deconstructing f', f);
