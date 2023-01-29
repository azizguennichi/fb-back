import express from 'express'
import {
    getUser,
    getUserFriends,
    addRemoveFriend,

}from '../controllers/users.js'
import {veifyToken} from "../middleware/auth.js"

const router = express.Router()

/* READ */

router.get('/:id',veifyToken,getUser)
router.get('/:id/friends',veifyToken,getUserFriends)


/* Update */

router.patch("/:id/:friendId",veifyToken, addRemoveFriend)


export default router