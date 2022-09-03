// constant variables

const post = {
    status: "I am hiking today!"
}
console.log(post)
// "I am hiking today!"

post.status = "I was hiking today!";
console.log(post)
// "I was hiking today!"

const posts = [
    {
        status: "I am going to the movies today!"
    }
]
// posts = []
// cannot set post to different array/value

posts.push({status:"I got my license today!"})
console.log(posts)
// will give array of posts