const express = require('express')
const router = express.Router()
const Validation = require('@validation/blogsValidation')
const Responder = require('@service/response')
const Auth = require('@middleware/Auth')
const {publishBlogs, getBlogs, approveBlog, getApprovedBlogs, getPublishedBlogs, getBlogById} = require('@controllers/Blogs')

router.post('/add',
    Auth,
    Validation.publishBlogs(),
    Responder.validate.bind(Responder),
    publishBlogs
);

router.post('/get-blogs',
    // Auth,
    getBlogs
);

router.get('/get-requested-blogs',
    Auth,
    getPublishedBlogs
);

router.get('/get-approved-blogs',
    // Auth,
    getApprovedBlogs
);

router.post('/approve-blog',
    Auth,
    Validation.approveBlogs(),
    Responder.validate.bind(Responder),
    approveBlog
);

router.get('/get-blog/:id',
    getBlogById
);

module.exports = router