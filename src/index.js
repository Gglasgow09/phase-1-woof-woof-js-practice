document.addEventListener('DOMContentLoaded', fetchPups) 

function fetchPups() {
    fetch ('http://localhost:3000/pups')
    .then(response => response.json())
    //taking pups data for each element in the array we will run again 
    .then(pupsData => pupsData.forEach(pup => addAllPups(pup)))
};

function addAllPups(pups) {
    const dogBar = document.getElementById('dog-bar')
    const dogSpan = document.createElement('span')
    dogSpan.innerText = pups.name;
    dogSpan.setAttribute('data-id', pups.id)

    dogBar.addEventListener('click', handleDogClick)




    dogBar.append(dogSpan)
};

function handleDogClick(e) {
//pass in an event to pass in which dog to click
    e.target
    //targets where the event happens 
    fetch(`http://localhost:3000/pups/${e.target.dataset.id}`)
    .then(response => response.json())
    .then(pupsData => addDogInfo(pupsData))
};

function addDogInfo(pup) {
    const dogInfo = document.getElementById('dog-info')
    dogInfo.innerText= ''

    const dogImg = document.createElement('img')
    dogImg.src = pup.image

    const dogName = document.createElement('h2')
    dogName.innerText = pup.name

    const dogButton = document.createElement('button')
    dogButton.innerText = pup.isGoodDog ? 'Good Dog!' : 'Bad Dog!'

    dogButton.addEventListener('click', handleDogButtonClick)
    dogInfo.append(dogImg, dogName, dogButton)
};

function handleDogButtonClick(e) {
    if (e.target.innerText === 'Good Dog!') {
        e.target.innerText = 'Bad Dog!'
    } else {
        e.target.innerText = 'Good Dog!'
    }
};
