var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car(num) {
        this.num = num;
        this.numPriv = num + 1;
        this.numReadOnly = num + 2;
        this.numProtected = num + 3;
    }
    Car.prototype.printNum = function () {
        console.log(this.num);
    };
    return Car;
}());
var lexus = new Car(1);
console.log(lexus.num);
lexus.printNum();
// console.log(lexus.numPriv);  // error property private
// lexus.numReadOnly = 2; // error property read only we can't assign a value
var b = lexus.numReadOnly;
console.log(b);
var Van = /** @class */ (function (_super) {
    __extends(Van, _super);
    function Van() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Van.prototype.printNum = function () {
        console.log(this.numProtected);
    };
    return Van;
}(Car));
var mazda = new Van(1);
mazda.printNum();
