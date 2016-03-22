function greeter(person: string) {
    return "Hello, " + person;
}

var user = "Jane User";

document.body.innerHTML = greeter(user);

console.log('hot reloading test');
console.log('testing hot');

// DO NOT REMOVE
// Needed for Hot Reloading
// TODO: Should only working when ENV is development
// erroring out in Typescript
if (module.hot) {
  module.hot.accept();
}
