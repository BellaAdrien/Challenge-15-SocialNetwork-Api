const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReactions,
  removeReactions,
} = require('../../controllers/thoughtController');

// /api/Thoughtss
router.route('/').get(getThoughts).post(createThought);

// /api/Thoughtss/:ThoughtsId
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// /api/Thoughtss/:ThoughtsId/responses
router.route('/:thoughtId/reactions').post(addReactions);

// /api/Thoughtss/:ThoughtsId/responses/:responseId
router.route('/:thoughtId/reactions/:reactionId').delete(removeReactions);

module.exports = router;
