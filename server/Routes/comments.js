import express from 'express'

import auth from '../middleware/auth.js'
import { getComment, postComment } from '../Controllers/comments.js'
const router= express.Router()


router.post('/post',postComment)
router.get('/get',getComment)
// router.delete('/delete/:id',auth,deleteComment)
// router.patch('/edit/:id',auth,editComment)

export default router