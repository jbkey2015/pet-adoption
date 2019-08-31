const pets = [
    {
        image:"https://i.redd.it/w3nknyzbqo201.jpg",
        name:"Fred",
        color:"Black",
        specialSkill:"Being Cute",
        typeOfPet:"Cat",
    },
    {
        image:"https://vetstreet.brightspotcdn.com/dims4/default/38e16fc/2147483647/thumbnail/320x275/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F04%2F09%2F1a9bfeea41e5b32f71c5cebd393d%2Fkitten-playing-with-toy.jpg",
        name:"Bobo",
        color:"Grey",
        specialSkill:"Mouse Killer",
        typeOfPet:"Cat",
    },
    {
        image:"https://feline-nutrition.org/images/features/theres-no-kibble-at-the-big-cat-rescue/features_feeding_big_cats_01.jpg",
        name:"Stripes",
        color:"Orange And White With Black Stripes",
        specialSkill:"Protection",
        typeOfPet:"Cat",
    },
    {
        image:"https://cdn3-www.dogtime.com/assets/uploads/2018/08/national-dog-day-1.jpg",
        name:"Michael",
        color:"Brown And White",
        specialSkill:"Party Planner",
        typeOfPet:"Dog",
    },
    {
        image:"https://cdn.vox-cdn.com/thumbor/G2qCMneMQbetwAXpd6bViSjDVek=/0x0:1124x1688/1200x800/filters:focal(307x697:485x875)/cdn.vox-cdn.com/uploads/chorus_image/image/64045111/finn_1.0.jpg",
        name:"Max",
        color:"Black",
        specialSkill:"Fetch",
        typeOfPet:"Dog",
    },
    {
        image:"http://6packbeach.com/wp-content/uploads/2017/07/IMG-20140416-WA005.jpg",
        name:"Tank",
        color:"Grayish",
        specialSkill:"Team Building",
        typeOfPet:"Dino",
    },
];

const printToDom = (message, divId) => {
    document.getElementById(divId).innerHTML = message
}

const printPets = (petsArray) => {
    let stringToPrint = '';
    for (let i = 0; i < petsArray.length; i++) {
        const pet = petsArray[i]
        stringToPrint += `
        <div class = "card">
            <h2>${pet.name}</h2>
            <img src = ${pet.image} alt="Image of ${pet.name}"
            <p>${pet.color}</p>
            <p>${pet.specialSkill}</p>
            <p class = "type">${pet.typeOfPet}</p>
        </div>
        `
    }
    printToDom(stringToPrint, 'pet-zone')
}

printPets(pets);

const buttonClick = (e) => {
    const name = e.target.id
    if (name === "All") {
        printPets(pets);
        return;
    }
    const selectedPets = []
    for (let i = 0; i < pets.length; i++) {
        const pet = pets[i]
        if (pet.typeOfPet === name) {
            selectedPets.push(pet);
        }        
    }
    printPets(selectedPets);
}    

document.getElementById('Dog').addEventListener('click', buttonClick)
document.getElementById('Cat').addEventListener('click', buttonClick)
document.getElementById('Dino').addEventListener('click', buttonClick)
document.getElementById('All').addEventListener('click', buttonClick)