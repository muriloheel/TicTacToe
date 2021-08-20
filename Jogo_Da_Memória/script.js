document.addEventListener('DOMContentLoaded', () => {
    const cardsArray = [{name:'slifer',img:'images/slifer2.jpg'},
                        {name:'obelisk',img:'images/obelisk.jpg'},
                        {name:'dragao_ra',img:'images/dragao_ra.jfif'},
                        {name:'blueEyes',img:'images/blueEyes1.jfif'},
                        {name:'redEyes',img:'images/redEyes.jpg'},
                        {name:'darkMagician',img:'images/darkMagician1.jfif'},
                        {name:'darkMagicianGirl',img:'images/darkMagicianGirl1.jpg'},
                        {name:'mirrorForce',img:'images/mirrorForce.jfif'},
                        {name:'slifer',img:'images/slifer2.jpg'},
                        {name:'obelisk',img:'images/obelisk.jpg'},
                        {name:'dragao_ra',img:'images/dragao_ra.jfif'},
                        {name:'blueEyes',img:'images/blueEyes1.jfif'},
                        {name:'redEyes',img:'images/redEyes.jpg'},
                        {name:'darkMagician',img:'images/darkMagician1.jfif'},
                        {name:'darkMagicianGirl',img:'images/darkMagicianGirl1.jpg'},
                        {name:'mirrorForce',img:'images/mirrorForce.jfif'}
]
    cardsArray.sort(()=> 0.5 - Math.random())

    const board = document.querySelector('.board')
    const scoreDisplay = document.querySelector('#score')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []
    function createBoard(){
        for(let i=0; i<=15; i++){
            const cardHeight = '180px'
            const card = document.createElement('img')
            card.onmouseover = ()=>{
                card.style.height= "190px"
            }
            card.onmouseleave = ()=>{
                card.style.height= cardHeight
            }
            card.setAttribute('src', 'images/back.png')
            card.setAttribute('width',"125px")
            card.setAttribute('height',cardHeight)
            card.setAttribute('data-id',i)
            card.addEventListener('click', flipCard)
            board.appendChild(card)
        }
    }
    function flipCard() {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardsArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src',cardsArray[cardId].img)
        console.log(cardsArray[cardId].img)
        if(cardsChosen.length === 2){
            setTimeout(checkForMatch, 700)
        }
    }
    function checkForMatch(){
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if(cardsChosen[0] === cardsChosen[1] && optionOneId != optionTwoId){
            alert('Você achou um par!')
            cardsWon.push(cardsChosen)
            cards[optionOneId].setAttribute('src', cardsArray[optionOneId].img)
            cards[optionTwoId].setAttribute('src', cardsArray[optionOneId].img)
        }
        else if(optionOneId === optionTwoId){
            alert('você apertou na mesma carta')
            cards[optionOneId].setAttribute('src', 'images/back.png')
            cards[optionTwoId].setAttribute('src', 'images/back.png')
        }
        else{
            cards[optionOneId].setAttribute('src', 'images/back.png')
            cards[optionTwoId].setAttribute('src', 'images/back.png')
            alert('não é um par, tente de novo')
        }
        cardsChosen = []
        cardsChosenId = []
        scoreDisplay.textContent = cardsWon.length
        if(cardsWon.length === cardsArray.length/2){
            scoreDisplay.textContent = "parabéns, você achou todos os pares!"
            document.querySelector('h1').textContent = ""
        }
    }
    createBoard();
})

