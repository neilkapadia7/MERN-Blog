const express = require('express')
const router = express.Router()
const userRoutes = require('@routes/user')
const blogsRoutes = require('@routes/blogs')

router.use('/user', userRoutes)
router.use('/blogs', blogsRoutes)

router.post('/addUser', (req, res) => {
    res.json({message: 'Hey! Welcome to ProForms'})
})

module.exports = router