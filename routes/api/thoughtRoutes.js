const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addThoughtResponse,
  removeThoughtResponse,
} = require('../../controllers/thoughtController');

// /api/Thoughtss
router.route('/').get(getThoughts).post(createThought);

// /api/Thoughtss/:ThoughtsId
router
  .route('/:ThoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// /api/Thoughtss/:ThoughtsId/responses
router.route('/:ThoughtId/responses').post(addThoughtResponse);

// /api/Thoughtss/:ThoughtsId/responses/:responseId
router.route('/:ThoughtId/responses/:responseId').delete(removeThoughtResponse);

module.exports = router;
