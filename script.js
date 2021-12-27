//***Clases e instancias***
class Jugador {
    constructor(puntos){
    this.puntos = puntos
    }
    ganarptos = function (ptos) {
        this.puntos += ptos
    }
    perderptos = function () {this.puntos = 0}
}
class Pregunta {		
    constructor(texto, opciones, puntos)	{				
        this.texto	=	texto
        this.opciones = opciones
        this.puntos	=	puntos
    }

}

const pregunta1 = new Pregunta("¿De qué color es el cielo?",[{respuesta: "Azul", correcta: true},{respuesta: "Verde", correcta: false},{respuesta: "Marrón", correcta: false},{respuesta: "Violeta", correcta: false}],1)
const pregunta2 = new Pregunta("¿De qué color es el caballo blanco de Artigas?",[{respuesta: "Negro", correcta: false},{respuesta: "Marrón", correcta: false},{respuesta: "Rojo", correcta: false},{respuesta: "Blanco", correcta: true}],1)
const pregunta3 = new Pregunta("¿Cuántos integrantes tenía el grupo de los 3 chiflados?",[{respuesta: "Uno", correcta: false},{respuesta: "Dos", correcta: false},{respuesta: "Tres", correcta: true},{respuesta: "Cuatro", correcta: false}],1)
const pregunta4 = new Pregunta("¿Cuánto es 2+2?",[{respuesta: "Tres", correcta: false},{respuesta: "Cuatro", correcta: true},{respuesta: "Seis", correcta: false},{respuesta: "Ocho", correcta: false}],1)
const pregunta5 = new Pregunta("¿Cuántos kilos pesa un kilo de plumas?",[{respuesta: "Uno", correcta: true},{respuesta: "Cuatro", correcta: false},{respuesta: "Siete", correcta: false},{respuesta: "Diez", correcta: false}],1)
const pregunta6 = new Pregunta("¿Cuántos jugadores conforman un equipo de fútbol?",[{respuesta: "Tres", correcta: false},{respuesta: "Seis", correcta: false},{respuesta: "Once", correcta: true},{respuesta: "Veinte", correcta: false}],20)
const pregunta7 = new Pregunta("¿Cuántos jugadores se necesitan para un partido de tenis?",[{respuesta: "Nueve", correcta: false},{respuesta: "Dos", correcta: true},{respuesta: "Trece", correcta: false},{respuesta: "Ocho", correcta: false}],20)
const pregunta8 = new Pregunta("¿Cuántos jugadores tiene un equipo de básketball?",[{respuesta: "Cinco", correcta: true},{respuesta: "Veinte", correcta: false},{respuesta: "Ocho", correcta: false},{respuesta: "Diez", correcta: false}],20)
const pregunta9 = new Pregunta("¿Cuántas personas se requieren para un equipo de handball?", [{respuesta: "Cinco", correcta: false},{respuesta: "Dos", correcta: false},{respuesta: "Ocho", correcta: false},{respuesta: "Siete", correcta: true}],20)
const pregunta10 = new Pregunta("Excluyendo la blanca,¿cuántas bolas participan de un juego de billar clásico?",[{respuesta: "Diez", correcta: false},{respuesta: "Catorce", correcta: false},{respuesta: "Ocho", correcta: false},{respuesta: "Quince", correcta: true}],20)
const pregunta11 = new Pregunta("¿Cuál es la identidad secreta de Batman?",[{respuesta: "Ernesto el picante", correcta: false},{respuesta: "Clark Kent", correcta: false},{respuesta: "Barry Allen", correcta: false},{respuesta: "Bruce Wayne", correcta: true}],100)
const pregunta12 = new Pregunta("¿Qué requiere el anillo de Green Lantern para funcionar?",[{respuesta: "Baterías AAA", correcta: false},{respuesta: "Poder de la amistad", correcta: false},{respuesta: "Fuerza de voluntad", correcta: true},{respuesta: "Kriptonita", correcta: false}],100)
const pregunta13 = new Pregunta("¿Cuál es la identidad secreta de Superman?",[{respuesta: "Ernesto el picante", correcta: false},{respuesta: "Clark Kent", correcta: true},{respuesta: "Barry Allen", correcta: false},{respuesta: "Bruce Wayne", correcta: false}],100)
const pregunta14 = new Pregunta("¿Cuál es la fuente de poder de The Flash?",[{respuesta: "Fuerza de voluntad", correcta: false},{respuesta: "Magia", correcta: false},{respuesta: "Speed Force", correcta: true},{respuesta: "Speed Fuel", correcta: false}],100)
const pregunta15 = new Pregunta("¿Cuál es el enemigo principal de Superman?",[{respuesta: "Lex Luthor", correcta: true},{respuesta: "Piratas", correcta: false},{respuesta: "Doomsday", correcta: false},{respuesta: "Lobo", correcta: false}],100)
const pregunta16 = new Pregunta("¿Quién escribió la famosa canción de opera-rock ‘Bohemian Rhapsody’?",[{respuesta: "Freddie Mercury", correcta: true},{respuesta: "Michael Jackson", correcta: false},{respuesta: "Chacho Ramos", correcta: false},{respuesta: "Elton John", correcta: false}],789)
const pregunta17 = new Pregunta("¿Quién interpretó a Frodo Baggins en Lord Of The Rings?",[{respuesta: "Morgan Freeman", correcta: false},{respuesta: "John Travolta", correcta: false},{respuesta: "Elijah Wood", correcta: true},{respuesta: "Steven Seagal", correcta: false}],789)
const pregunta18 = new Pregunta("¿Cómo se llama el personaje ficticio que nació como una persona mayor y se hizo más joven todos los días?",[{respuesta: "John Wick", correcta: false},{respuesta: "Harry Potter", correcta: false},{respuesta: "John McClane", correcta: false},{respuesta: "Benjamin Button", correcta: true}],789)
const pregunta19 = new Pregunta("¿En qué ciudad vive la familia de Family Guy?",[{respuesta: "Springfield", correcta: false},{respuesta: "Quahog", correcta: true},{respuesta: "New York", correcta: false},{respuesta: "Gotham", correcta: false}],789)
const pregunta20 = new Pregunta(" ¿En qué año salió ‘Thriller’?",[{respuesta: "1983", correcta: true},{respuesta: "1985", correcta: false},{respuesta: "1986", correcta: false},{respuesta: "1979", correcta: false}],789)
const pregunta21 = new Pregunta("¿Qué juego ganó el premio VGX en 2013?",[{respuesta: "The Witcher 3", correcta: false},{respuesta: "Grand Theft Auto V", correcta: true},{respuesta: "The Sims", correcta: false},{respuesta: "Call of Duty", correcta: false}],1000)
const pregunta22 = new Pregunta("¿Cuántos años tenía Michael Jackson cuando murió?",[{respuesta: "47", correcta: false},{respuesta: "50", correcta: true},{respuesta: "38", correcta: false},{respuesta: "54", correcta: false}],1000)
const pregunta23 = new Pregunta("¿Qué película ganó el Oscar a la mejor película animada en el año 2014?",[{respuesta: "Up", correcta: false},{respuesta: "Toy Story", correcta: false},{respuesta: "Coco", correcta: false},{respuesta: "Frozen", correcta: true}],1000)
const pregunta24 = new Pregunta("¿En qué año lanzaron los Red Hot Chili Peppers su primer álbum?",[{respuesta: "1984", correcta: true},{respuesta: "1980", correcta: false},{respuesta: "1991", correcta: false},{respuesta: "1989", correcta: false}],1000)
const pregunta25 = new Pregunta("¿Qué banda grabó el álbum ‘Pulse’?",[{respuesta: "Queen", correcta: false},{respuesta: "Aerosmith", correcta: false},{respuesta: "Pink Floyd", correcta: true},{respuesta: "BTS", correcta: false}],1000)

const jugador = new Jugador(0)

let categorias = [[pregunta1,pregunta2,pregunta3,pregunta4,pregunta5], [pregunta6,pregunta7,pregunta8,pregunta9,pregunta10],[pregunta11,pregunta12,pregunta13,pregunta14,pregunta15],[pregunta16,pregunta17,pregunta18,pregunta19,pregunta20],[pregunta21,pregunta22,pregunta23,pregunta24,pregunta25]] // array de preguntas por categoría: [0] = categoría 1, [1] = categoría 2, etc

//***Relativo al juego y funcionamiento***

const startButton = document.getElementById("start-btn")
const nextButton = document.getElementById("next-btn")
const leaveButton = document.getElementById("leave-btn")
const statusElement = document.getElementById("player-status")
const questionContainerElement = document.getElementById("question-container")
let shuffledQuestions, currentQuestionIndex
const questionElement = document.getElementById("question")
const answerButtonsElement = document.getElementById("answer-buttons")
let categoryIndex, questions

startButton.addEventListener("click", startGame)
nextButton.addEventListener("click", setNextQuestion)
leaveButton.addEventListener("click", leave)

function startGame(){
    console.log("Started")
    statusElement.innerText = "Puntos acumulados = 0"
    jugador.perderptos() // En caso de reinicio
    categoryIndex = 0 //Inicio en la categoría 1
    questions = categorias[categoryIndex]
    startButton.classList.add("hide")
    shuffledQuestions = questions.sort(() => Math.random() - 0.5) //50% del tiempo obtendremos un valor positivo o negativo.
    currentQuestionIndex = 0
    questionContainerElement.classList.remove("hide")
    setNextQuestion()
}

function showQuestion(pregunta){
    questionElement.innerText = pregunta.texto
    pregunta.opciones.forEach(answer => {
        const button = document.createElement("button")
        button.innerText = answer.respuesta
        button.classList.add("btn")
        if(answer.correcta){
            button.dataset.correct = answer.correcta
        }
        button.addEventListener("click", selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function setNextQuestion(){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add("hide")
    leaveButton.classList.add("hide")
    while(answerButtonsElement.firstChild){
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e){
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    if(correct){
        jugador.ganarptos(questions[0].puntos) //El array de preguntas va a estar posicionado en la categoría actual y todas las preguntas tienen los mismos puntos
        statusElement.innerText = "Puntos acumulados = " + jugador.puntos
        nextButton.classList.remove("hide")
        leaveButton.classList.remove("hide")
    } else {
        jugador.perderptos()
        statusElement.innerText = "Juego perdido, no se lleva premio"
        startButton.innerText = "Restart"
        startButton.classList.remove("hide")
    }
    setStatusClass(document.body,correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if(categoryIndex == 4){
        startButton.innerText = "Restart"
        startButton.classList.remove("hide")
        resetState()
        questionContainerElement.classList.add("hide")
        statusElement.innerText = "¡Ganador del pozo! Se lleva " + jugador.puntos + " ptos equivalentes a " + jugador.puntos + " USD"
        return
    }
    categoryIndex += 1 //Cambio la categoría
    questions = categorias[categoryIndex]
    shuffledQuestions = questions.sort(() => Math.random() - 0.5) //50% del tiempo obtendremos un valor positivo o negativo.
}

function setStatusClass(element, correct){
    clearStatusClass(element)
    if(correct){
        element.classList.add("correct")
    } else {
        element.classList.add("wrong")
    }
}

function clearStatusClass(element){
    element.classList.remove("correct")
    element.classList.remove("wrong")
}

function leave(){
    statusElement.innerText = "Se retira con " + jugador.puntos +" ptos equivalentes a " + jugador.puntos + " USD"
    nextButton.classList.add("hide")
    startButton.innerText = "Restart"
    startButton.classList.remove("hide")
    leaveButton.classList.add("hide")
}