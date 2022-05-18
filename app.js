const form = document.querySelector('form')
const finalScoreContainer = document.querySelector('.final-score-container')
const greenAnswers = document.querySelectorAll('.green')
const correctAnswers = ['B', 'B', 'B', 'A', 'D', 'C', 'A', 'D', 'B', 'A']
const h1 = document.querySelector('h1')

let correct = 0
let wrong = 0

const getUserAnswers = () => {
    let userAnswers = []
    correctAnswers.forEach((_, index) => {
        const userAnswer = form[`inputQuestion${index +1}`].value
        userAnswers.push(userAnswer)
    })
    return userAnswers
}

const logMessageResult = (correctAnswers, wrongAnswers) => {
    scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
    finalScoreContainer.classList.remove('d-none')

    if(correctAnswers > wrongAnswers){
        h1.innerHTML = 'GANHOU!!!'
        h1.classList.remove('d-none')
        h1.classList.add('ganhou')
    }else if(correctAnswers === wrongAnswers){
        h1.innerHTML = 'EMPATOU'
        h1.classList.remove('d-none')
        h1.classList.add('empatou')
    }else{
        h1.innerHTML = 'PERDEU...'
        h1.classList.remove('d-none')
        h1.classList.add('perdeu')
    }
}

const calculateUserScore = arrayOfUsersAnswers => {
    arrayOfUsersAnswers.forEach((userAnswer, index) => {
        const isUserAnswersCorrect = userAnswer === correctAnswers[index] 

        return isUserAnswersCorrect
            ? correct += 1
            : wrong += 1
    })
}

const markingInGreenACorrectAnswer = () => {
    greenAnswers.forEach(greenAnswer => {
        greenAnswer.style.color = 'green'
    })
}

const counterScores = (correct, wrong) => {
    for(let i = 0; i < 10; i++){
        finalScoreContainer.querySelector('.errou').textContent = `${wrong}`
        finalScoreContainer.querySelector('.acertou').textContent = `${correct}`
    }
}

form.addEventListener('submit', event => {
    event.preventDefault()

    const userAnswers = getUserAnswers()

    calculateUserScore(userAnswers)
    markingInGreenACorrectAnswer()
    counterScores(correct, wrong)
    logMessageResult(correct, wrong)
})
