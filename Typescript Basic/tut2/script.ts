console.log("Typescript tutorial LWS video 9");
console.log("Hello Tutai");

//Working With Class
class Player {


    constructor(
        private name: string,
        private age: number,
        readonly country: string
    ) {

    }

    play() {
        console.log(`${this.name} from ${this.country} age ${this.age} is playing.`);
    }
}

const sourav = new Player('SouravG', 50, 'India');
const sakib = new Player('Sakib', 40, 'Bangladesh');

sourav.play();
sakib.play();

//class type er array banalam
const players: Player[] = [];
players.push(sourav);
players.push(sakib);

//ENUM Type

enum RType {
    SUCCESS,
    FAILURE,
    UNAUTHENTICATED,
    FORBIDDEN
}

interface APIResponse<T>{
    status: number;
    type: RType;
    data: T
}

const response1: APIResponse<string> = {
    status: 200,
    type: RType.SUCCESS,
    data: "Test"
};

console.log(response1);

//Tuple

let bArr: [number, string, object] = [4, 'Hello', {baby: 'jalabi'}];