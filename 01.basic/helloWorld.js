const GREETING = "Hola Mundo";

const fn = function(param) {
    console.log(param);
}

const fnarrow = (param) => console.log(param);


fn(GREETING);
fnarrow(GREETING);