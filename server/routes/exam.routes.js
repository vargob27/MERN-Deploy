const ExamController = require('../controllers/exam.controller');
module.exports = function(app) {
    app.get('/api', ExamController.index);
    app.post('/api/pets', ExamController.createPet);
    app.get('/api/pets', ExamController.getAllPets);
    app.get('/api/pet/:_id', ExamController.getPet);
    app.put('/api/pet/:_id', ExamController.updatePet);
    app.delete('/api/pet/:_id', ExamController.adoptPet);
}