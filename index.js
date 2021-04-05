function wakeDog(dogName, dogBreed) {
  console.log(`Wake ${dogName} the ${dogBreed}`);
  return `Wake ${dogName} the ${dogBreed}`;
}
function leashDog(dogName, dogBreed) {
  console.log(`leash ${dogName} the ${dogBreed}`);
  return `leash ${dogName} the ${dogBreed}`;
}
function walkToPark(dogName, dogBreed) {
  console.log(`walk ${dogName} the ${dogBreed}`);
  return `walk ${dogName} the ${dogBreed}`;
}
function throwFrisbee(dogName, dogBreed) {
  console.log(`Throw Frisbee ${dogName} the ${dogBreed}`);
  return `Throw Frisbee ${dogName} the ${dogBreed}`;
}
function walkHome(dogName, dogBreed) {
  console.log(`walk Home ${dogName} the ${dogBreed}`);
  return `walk home ${dogName} the ${dogBreed}`;
}
function unleashDog(dogName, dogBreed) {
  console.log(`unleash ${dogName} the ${dogBreed}`);
  return `Unleash ${dogName} the ${dogBreed}`;
}

let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];
function exerciseDog(dogName, dogBreed){
   let finalRoutne= [];
  for (let i =0; i < routine.length; i++){
    finalRoutne.push(routine[i](dogName, dogBreed));
  }
  return finalRoutne;
  
}

exerciseDog("Esther","Dalmation");
wakeDog("Xerox","Border Collie");
leashDog("Boo Radley","Pibble");
walkToPark("Bunny","Labrador");
throwFrisbee("Mary J. Blige","Papillon");
walkHome("Santa Paws","Husky");
unleashDog("Lauren","Golden Retriever");


