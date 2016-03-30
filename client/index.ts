require('./app.scss');

function greeter(person: string) {
    return "Hello, " + person;
}

var user = "Express Spa";

document.body.innerHTML = greeter(user);

console.log('hot reloading test');
console.log('testing hot with Typescript');

// DO NOT REMOVE
// Needed for Hot Reloading
if (DEV) {
    if (module.hot) {
        module.hot.accept();
    }
}
