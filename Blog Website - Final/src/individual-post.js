
// Get Selected Post
let index = localStorage.getItem("viewPostIndex");
let posts = JSON.parse(localStorage.getItem("posts")) || [];
// Check Post Exists
if (index === null || posts.length === 0 || !posts[index]) {
    alert("Post not found!");
    window.location.href = "blog.html";
}
// Current Post
let post = posts[index];
// Show Title
document.getElementById("postTitle").innerText = post.title;
// Show Content
document.getElementById("postContent").innerText = post.content;
// Show Author
document.getElementById("author").innerText =
"👤 " + post.username;

// Show Date
document.getElementById("date").innerText =
"📅 " + post.date;
// Show Image
let image = document.getElementById("postImage");
if (post.image && post.image.trim() !== "") {
    image.src = post.image;
} else {
    image.style.display = "none";
}