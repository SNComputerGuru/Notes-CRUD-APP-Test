let notes = [
    {
        id: 0,
        title: 'Meeting Notes',
        content: 'Discussed the project timeline and deliverables. Action items include finalizing the design and starting the development phase.'
    },
    {
        id: 1,
        title: 'Grocery List',
        content: 'Eggs, milk, bread, tomatoes, lettuce, cheese.'
    },
    {
        id: 2,
        title: 'Workout Plan',
        content: 'Monday: Cardio (30 mins), Tuesday: Upper body workout, Wednesday: Rest day, Thursday: Lower body workout, Friday: Full-body workout.'
    },
    {
        id: 3,
        title: 'Code Snippets',
        content: '1. Function to reverse a string, 2. Fetch data from an API using fetch(), 3. Convert a string to lowercase.'
    },
    {
        id: 4,
        title: 'Vacation Ideas',
        content: '1. Beach holiday in Hawaii, 2. Road trip across Europe, 3. Explore Japan during cherry blossom season.'
    }
];

exports.getAllNotes = (req, res) => {
    res.json(notes)
}
