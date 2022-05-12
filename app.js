const form = document.querySelector('.quiz-form')
const finalResult = document.querySelector('.result')
const greenAnswers = document.querySelectorAll('.green')
const correctAnswers = ['B', 'B', 'B', 'A', 'D', 'C', 'A', 'D', 'B', 'A']
const h1 = document.querySelector('h1')

form.addEventListener('submit', event => {
    event.preventDefault()

    let correct = 0
    let wrong = 0

    const userAnswers = [
        form.inputQuestion1.value,
        form.inputQuestion2.value, 
        form.inputQuestion3.value, 
        form.inputQuestion4.value,
        form.inputQuestion5.value,
        form.inputQuestion6.value,
        form.inputQuestion7.value,
        form.inputQuestion8.value,
        form.inputQuestion9.value,
        form.inputQuestion10.value
    ]

    userAnswers.forEach((userAnswer, index) => {
        return userAnswer === correctAnswers[index] 
            ? correct += 1
            : wrong += 1
    })

    greenAnswers.forEach(greenAnswer => {
        greenAnswer.style.color = 'green'
    })

    scrollTo(0, 0)

    
    finalResult.classList.remove('d-none')


    let counter = 0
    const timer = setInterval(() => {
        counter < 10 ? clearInterval(timer) : null
        finalResult.querySelector('.errou').textContent = `${wrong}`
        finalResult.querySelector('.acertou').textContent = `${correct}`
        
        counter++
    }, 500)


    if(correct > wrong){
        h1.innerHTML = 'GANHOU!!!'
        h1.classList.remove('d-none')
        h1.classList.add('ganhou')
    }else if(correct === wrong){
        h1.innerHTML = 'EMPATOU'
        h1.classList.remove('d-none')
        h1.classList.add('empatou')
    }else{
        h1.innerHTML = 'PERDEU...'
        h1.classList.remove('d-none')
        h1.classList.add('perdeu')
    }
})
