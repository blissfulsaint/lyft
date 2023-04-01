export default class Workout {
    constructor (name, type, muscle, equipment, difficulty, instructions) {
        this.name = name
        this.type = type
        this.muscle = muscle
        this.equipment = equipment
        this.difficulty = difficulty

        this.init()
    }

    async init() {
        let html = `<div class="card">
        <div class="img-container">
        <img src="images/placeholder.jpg" alt="exercise image">
        </div>
        <p class="exerciseName">${this.name}</p>
        <p class="exerciseCategory">${this.type}</p>
        <p class="exerciseDescription">${this.muscle}</p>
        <p class="exerciseDescription">${this.equipment}</p>
        <p class="exerciseDescription">${this.difficulty}</p>
        </div>`

        document.getElementById('exercises-home').insertAdjacentHTML('beforeend', html)
    }
}