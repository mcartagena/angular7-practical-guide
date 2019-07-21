// there are the follow code you have to build the father class and the getDimensions methods
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
var Furniture = /** @class */ (function () {
    function Furniture(highArg, deepArg, withArg) {
        this.highFurniture = highArg;
        this.withFurniture = withArg;
        this.deepFurniture = deepArg;
    }
    return Furniture;
}());
var TV = /** @class */ (function (_super) {
    __extends(TV, _super);
    function TV() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TV.prototype.getDimensions = function () {
        return this.highFurniture * this.withFurniture;
    };
    return TV;
}(Furniture));
var Couch = /** @class */ (function (_super) {
    __extends(Couch, _super);
    function Couch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Couch.prototype.getDimensions = function () {
        return this.highFurniture * this.withFurniture * this.deepFurniture;
    };
    return Couch;
}(Furniture));
var tv = new TV(12, 2, 5);
var couch = new Couch(6, 6, 12);
console.log(tv.getDimensions());
console.log(couch.getDimensions());
