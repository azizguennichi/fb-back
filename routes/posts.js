import express from 'express'
import {getFeedPosts,getUserPosts,likePost} from '../controllers/posts.js'
import { veifyToken } from '../middleware/auth.js'

const router = express.Router()


/* Read */
router.get("/",veifyToken,getFeedPosts)
router.get('/:userId/posts',veifyToken,getUserPosts)


/* UPDATE */
router.patch('/:id/like',veifyToken,likePost)

export default router