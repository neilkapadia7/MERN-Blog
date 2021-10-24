const User = require('@models/Users')
const Blogs = require('@models/Blogs')
const Responder = require('@service/response')
const Token = require('@service/token')

/**
    @route POST api/blogs/add
    @description Publish Blog
*/ 
module.exports = {
    async publishBlogs(req, res) {
        try {
            const checkUser = await User.findOne({_id: req.user._id});
            if(!checkUser) 
                return Responder.respondWithFalseSuccess(req, res, {}, 'Invalid Request');

            const blogs = await new Blogs({
                ...req.body,
                userId: req.user._id
            }).save();

            return Responder.respondWithSuccess(req, res, blogs , 'Successfully Submitted!');    
        }
        catch(err) {
            console.log(err)
            return Responder.respondWithError(req, res, 'Error')
        }
    },

/**
    @route POST api/blogs/get-blogs
    @description Get All Blogs
*/ 
    async getBlogs (req, res) {  
        console.log('Triggered')  
        try {
            const checkUser = await User.findOne({_id: req.user._id});
            if(!checkUser) 
                return Responder.respondWithFalseSuccess(req, res, {}, 'Invalid Request');

            const blogs = await Blogs.find({userId: req.user._id})
            let count = blogs.length
                
            return Responder.respondWithSuccess(req, res, {blogs, count}, 'All Blogs Fetched')   
            
        } catch (err) {
            console.log(err)
            return Responder.respondWithError(req, res, 'Error')
        }
    },

/**
    @route GET api/blogs/get-blog/:id
    @description Get Single Blog
*/ 
    async getBlogById (req, res) {  
        try {
            const blog = await Blogs.findOne({_id: req.params.id}).populate('userId', 'name email')
            if(!blog)    
                return Responder.respondWithFalseSuccess(req, res, [] , 'Blog Not Found')

            return Responder.respondWithSuccess(req, res, blog, 'Blog Successfully Fetched')   
            
        } catch (err) {
            console.log(err)
            return Responder.respondWithError(req, res, 'Error')
        }
    },


/**
    @route GET api/blogs/get-requested-blogs
    @description Get Published Blogs
*/ 
    async getPublishedBlogs (req, res) {    
        try {
            const checkUser = await User.findOne({_id: req.user._id});
            if(!checkUser || (checkUser && checkUser.userType !== 1)) 
                return Responder.respondWithFalseSuccess(req, res, {}, 'Not Enough Permissions');

            const blogs = await Blogs.find({isApproved: false}).populate('userId', 'name email')
            let count = blogs.length
                
            return Responder.respondWithSuccess(req, res, {blogs, count}, 'Published Blogs Fetched')   
            
        } catch (err) {
            console.log(err)
            return Responder.respondWithError(req, res, 'Error')
        }
    },

/**
    @route GET api/blogs/get-approved-blogs
    @description Get Published Blogs
*/ 
    async getApprovedBlogs (req, res) {    
        try {
        //     const checkUser = await User.findOne({_id: req.user._id});
        //     if(!checkUser || (checkUser && checkUser.userType !== 1)) 
        //         return Responder.respondWithFalseSuccess(req, res, {}, 'Not Enough Permissions');

            const blogs = await Blogs.find({isApproved: true}).populate('userId', 'name email')
            let count = blogs.length
                
            return Responder.respondWithSuccess(req, res, {blogs, count}, 'Approved Blogs Fetched')   
            
        } catch (err) {
            console.log(err)
            return Responder.respondWithError(req, res, 'Error')
        }
    },

/**
    @route POST api/blogs/approve-blog
    @description Approve Blog
*/ 
    async approveBlog (req, res) {    
        try {
            const checkUser = await User.findOne({_id: req.user._id});
            if(!checkUser || (checkUser && checkUser.userType !== 1)) 
                return Responder.respondWithFalseSuccess(req, res, {}, 'Not Enough Permissions');

            const blogs = await Blogs.findOne({_id: req.body.blogId, isApproved: false})
            if(!blogs)
                return Responder.respondWithFalseSuccess(req, res, {}, 'Blog Does not Exist');

            blogs.isApproved = true
            blogs.approvedOn = Date.now()
            await blogs.save()

            return Responder.respondWithSuccess(req, res, blogs, 'Favourites Fetched')   
            
        } catch (err) {
            console.log(err)
            return Responder.respondWithError(req, res, 'Error')
        }
    }

}
