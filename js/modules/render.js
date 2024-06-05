const template = document.querySelector('[exercise-card-template]');

// This Function render the exercises into the DOM
function renderExercises(exercises) {
    exercises.forEach((exercise,index) => {
        const card = template.content.cloneNode(true).children[0];
        const name = card.querySelector('[exercise-card-name]');
        const type = card.querySelector('[exercise-card-type]');
        const level = card.querySelector('[exercise-card-level]');
        //const obstacle = card.querySelector('[exercise-card-obstacle]');
        //const category = card.querySelector('[exercise-card-category]');
        const description = card.querySelector('[exercise-card-description]');

        name.textContent = exercise.name;
        type.textContent = exercise.attributes.type;
        level.textContent = exercise.attributes.level;
        //obstacle.textContent = exercise.attributes.obstacles;
        //category.textContent = exercise.attributes.category;
        description.textContent = exercise.attributes.description;
        card.setAttribute("id", index);

        document.querySelector('#exercises-grid').append(card);
    });
}

export default renderExercises;