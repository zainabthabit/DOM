//************step3
const spaceContainer= document.getElementById("space-container")
const title =document.createElement('h2')
const planetsContainer=document.createElement('div')
const planetsListTitle = document.createElement('h3')
const planetsList=document.createElement('ul')
const universeImg=document.createElement('img')
universeImg.src="./universe.png"


//*************step4
title.textContent="The Universe."
title.style.color ='purple'
planetsListTitle.textContent='Our Planets.'
//*************step5
spaceContainer.setAttribute('style','border:2px solid black ;width: 600px;padding: 10px;background-color: gray')
//*************step6
planetsList.innerHTML="<li>mars</li> <li>earth</li> <li>moon</li>"
//*************step7
spaceContainer.appendChild(title)
spaceContainer.appendChild(universeImg)
spaceContainer.appendChild(planetsContainer)
planetsContainer.appendChild(planetsListTitle)
planetsContainer.appendChild(planetsList)
//************step8







