console.log("Typescript tutorial LWS video 9");
console.log("Hello Tutai");
//Working With Class
var Player = /** @class */ (function () {
    function Player(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    Player.prototype.play = function () {
        console.log(this.name + " from " + this.country + " age " + this.age + " is playing.");
    };
    return Player;
}());
var sourav = new Player('SouravG', 50, 'India');
var sakib = new Player('Sakib', 40, 'Bangladesh');
sourav.play();
sakib.play();
//class type er array banalam
var players = [];
players.push(sourav);
players.push(sakib);
//ENUM Type
var RType;
(function (RType) {
    RType[RType["SUCCESS"] = 0] = "SUCCESS";
    RType[RType["FAILURE"] = 1] = "FAILURE";
    RType[RType["UNAUTHENTICATED"] = 2] = "UNAUTHENTICATED";
    RType[RType["FORBIDDEN"] = 3] = "FORBIDDEN";
})(RType || (RType = {}));
var response1 = {
    status: 200,
    type: RType.SUCCESS,
    data: "Test"
};
console.log(response1);
//Tuple
var bArr = [4, 'Hello', { baby: 'jalabi' }];
