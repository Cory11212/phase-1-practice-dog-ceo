console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = "https://dog.ceo/api/breeds/list/all"
const dogPart= document.getElementById("dog-image-container")
const breedPart = document.getElementById("dog-breeds")
let wow = []
const huh = document.querySelector('#breed-dropdown')



getPics(imgUrl)
getBreed(breedUrl)

const breeds = document.getElementsByTagName('li')

wham(breeds)







    huh.addEventListener('change', function(event) {
        // Get the selected letter
        const selectedLetter = event.target.value;
        console.log(selectedLetter)
        
        for(const item of breeds){
            if(item.textContent[0] === selectedLetter){
                console.log(item)
                wow.push(item.textContent)
            }
        }
        breedPart.innerHTML= ' '
        console.log(wow)
        for(const name of wow){
            const li = document.createElement('li')
            li.textContent = name
            breedPart.appendChild(li)
        }

    })
      
        /* Filter the data based on the selected letter
        const filteredData = breeds.filter(function(item) {
          return item.textContent.charAt(0) === selectedLetter;
        });
      
        // Clear the container element
        breedPart.innerHTML = '';
      
        // Display the filtered data in the container element
        filteredData.forEach(function(item) {
          const itemElement = document.createElement('li');
          itemElement.textContent = item.textContent;
          breedPart.appendChild(itemElement);
        });
      });*/


function wham(breeds){
    for(const item of breeds){
        console.log(item.textContent)
    hot.unshift(item.textContent)
    }
}
    
function getPics(url){
    fetch(url)
    .then((res)=>res.json())
    .then(function(data){
        const pups = data.message
        pups.forEach((element)=>{
            const img = document.createElement('img')
            img.src = element
            dogPart.appendChild(img)
        })
    })
}

function getBreed(url){
   return fetch(url)
    .then((res)=>res.json())
    .then(function(data){
        const breedo = data.message
        for(const element in breedo){
            const li = document.createElement('li')
            li.textContent = element
            breedPart.appendChild(li)
            li.addEventListener('click', ()=> li.style.color = 'green')
        }
    })
} 
