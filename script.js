'use strict'

// start here
const API_URL =
  'https://the-trivia-api.com/api/questions?categories=sport_and_leisure&limit=5&region=DE&difficulty=easy'
const btnSubmit = document.querySelector('#submit')
const quiz = document.querySelector('#quiz')
const answers = document.querySelectorAll('.answer')
const question = document.querySelector('#question')
const a_text = document.querySelector('#a_text')
const b_text = document.querySelector('#b_text')
const c_text = document.querySelector('#c_text')
const d_text = document.querySelector('#d_text')
const questions_total = document.querySelector('#questions_total')
const questions_current = document.querySelector('#questions_current')

let counterCorrect = 0
let counterTotal = 0
let counterCurrent = 1

let quizData = [
  {
    correctAnswer: 'd',
    allAnswers: ['Basketball', 'Volleyball', 'Rugby', 'Soccer'],
    question: 'With which sport is Pelé associated?',
  },
  {
    correctAnswer: 'd',
    allAnswers: ['Figure skating', 'Motor racing', 'Athletics', 'Ice Hockey'],
    question: 'With which sport is Wayne Douglas Gretzky associated?',
  },
  {
    correctAnswer: 'd',
    allAnswers: ['Gymnastics', 'Rowing', 'Volleyball', 'Basketball'],
    question: 'With which sport is Michael Jordan associated?',
  },
  {
    correctAnswer: 'd',
    allAnswers: ['Dragonfly', 'Mayfly', 'Horsefly', 'Butterfly'],
    question: 'Which Swimming Stroke Was Introduced Into Competition In 1952?',
  },
  {
    correctAnswer: 'd',
    allAnswers: ['Volleyball', 'Boxing', 'Table tennis', 'Baseball'],
    question: 'With which sport is Joe DiMaggio associated?',
  },
]

// show initial question
createQuestion(quizData[counterTotal])

function createQuestion(questionData) {
  deselectAnswers()
  questions_total.innerText = quizData.length
  questions_current.innerText = counterCurrent
  question.innerText = questionData.question
  a_text.innerText = questionData.allAnswers[0]
  b_text.innerText = questionData.allAnswers[1]
  c_text.innerText = questionData.allAnswers[2]
  d_text.innerText = questionData.allAnswers[3]
}

btnSubmit.addEventListener('click', () => {
  const answerSelected = getSelectedAnswer()

  // check if selected answer is correct answer
  if (answerSelected) {
    if (answerSelected === quizData[counterTotal].correctAnswer) {
      counterCorrect++
    }
  }
  counterTotal++
  counterCurrent++

  if (counterTotal < quizData.length) {
    createQuestion(quizData[counterTotal])
  } else {
    finishQuiz()
  }
})

function deselectAnswers() {
  answers.forEach(ans => {
    ans.checked = false
  })
}

function getSelectedAnswer() {
  let answer

  answers.forEach(ansEl => {
    if (ansEl.checked) {
      answer = ansEl.id
    }
  })

  return answer
}

function finishQuiz() {
  const questionHTML = `
    <h2 id="question">Congratulations! You scored ${counterCorrect}/${counterTotal} questions correct!</h2>
    <button onclick=location.reload()>Reload</button>
  `
  quiz.innerHTML = questionHTML

  counterCorrect = 0
  counterTotal = 0
  counterCurrent = 1
}
