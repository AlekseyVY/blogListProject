const dummy = (blogs) => {
    return 1
}

const totalLikes = (blogs) => {
    if (blogs.length === 0) {
        return 0
    } else {
        let x = 0
        blogs.map(blog => x += blog.likes)
        return x
    }
}

const favoriteBlog = (blogs) => {
    let mostFamous = 0

}


module.exports = {
    dummy,
    totalLikes
}