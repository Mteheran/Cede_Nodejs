const fn = function(filename, fn = () => {}){
    fn(null, filename);
    return new Promise((res, rej) => {
        res(filename);
    });
}

fn('hello')
    .then((data) => {
        console.log(data);
    })

fn('hello', (err, data) => {
    console.log(data);
});