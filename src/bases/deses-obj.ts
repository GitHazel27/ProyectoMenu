interface Hero{
    name:string;
    age: number;
    codeName: string;
    power?: string;
}

export const person: Hero = {
    name: 'Tony',
    age: 45,
    codeName: 'Iroman'
}

console.log(person.name);

const { age, name, codeName, power = 'No tiene el poder'} = person;

console.log({ age, name, power});