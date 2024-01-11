var Person = /** @class */ (function () {
    function Person(name, weight, height, gender) {
        this.name = name;
        this.weight = weight;
        this.height = height;
        this.gender = gender;
    }
    return Person;
}());
var PersonBuilder = /** @class */ (function () {
    function PersonBuilder(name, gender) {
        this.weight = 0;
        this.height = 0;
        this.name = name;
        this.gender = gender;
    }
    PersonBuilder.prototype.setWeight = function (weight) {
        this.weight = weight;
        return this;
    };
    PersonBuilder.prototype.setHeight = function (height) {
        this.height = height;
        return this;
    };
    PersonBuilder.prototype.build = function () {
        return new Person(this.name, this.weight, this.height, this.gender);
    };
    return PersonBuilder;
}());
var john = new PersonBuilder("John Doe", "male")
    .setHeight(70)
    .setHeight(180)
    .build();
console.log(john);
