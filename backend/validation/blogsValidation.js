const ValidationRule = require('@service/validation')
module.exports = {
  publishBlogs() {
    return [
      ValidationRule.isString('title'),
      ValidationRule.isString('content'),
    ]
  },
  approveBlogs() {
    return [
      ValidationRule.requiredObjectId('blogId'),
    ]
  },
}