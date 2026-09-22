
// Variables
let editIndex = -1;
let posts = JSON.parse(localStorage.getItem("posts")) || [];
const Loginsection = document.getElementById("Loginsection");
const Postsection = document.getElementById("Postsection");
const showUser = document.getElementById("showuser");
Postsection.classList.add("hide");
let isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));
let currentUser = JSON.parse(localStorage.getItem("user"));
if (isLoggedIn && currentUser) {
    Loginsection.classList.add("hide");
    Postsection.classList.remove("hide");
    showUser.innerHTML = `Hello ${currentUser.username}, Welcome Back!`;
    fetchPost();
}
// User Login

function UserLogin() {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let username = document.getElementById("UserName").value.trim();
    let password = document.getElementById("UserPassword").value;
    if (username === "" || password === "") {
        alert("Please fill all fields.");
        return;
    }
    let user = users.find(u =>
        u.username === username &&
        u.password === password
    );
    if (user) {
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("isLoggedIn", JSON.stringify(true));
        Loginsection.classList.add("hide");
        Postsection.classList.remove("hide");
        showUser.innerHTML = `Hello ${user.username}, Welcome Back!`;
        fetchPost();
    } else {
        alert("Wrong Username or Password!");
        document.getElementById("UserPassword").value = "";
    }
}
// Logout

function UserLogout() {
    localStorage.setItem("isLoggedIn", JSON.stringify(false));
    Loginsection.classList.remove("hide");
    Postsection.classList.add("hide");
    document.getElementById("UserName").value = "";
    document.getElementById("UserPassword").value = "";
}

// Create / Update Post

function post() {
    let title = document.getElementById("postInput").value.trim();
    let content = document.getElementById("textfield").value.trim();
    let image = document.getElementById("postImage").value.trim();
    if (title === "" || content === "") {
        alert("Please write a title and content.");
        return;
    }
    let currentUser = JSON.parse(localStorage.getItem("user"));
    let posts = JSON.parse(localStorage.getItem("posts")) || [];
    if (editIndex > -1) {
        posts[editIndex].title = title;
        posts[editIndex].content = content;
        posts[editIndex].image = image;
        editIndex = -1;
    } else {
        posts.push({
            title: title,
            content: content,
            image: image,
            username: currentUser.username,
            date: new Date().toLocaleDateString()
        });
    }
    localStorage.setItem("posts", JSON.stringify(posts));
alert("Post Published Successfully!");
window.location.href = "posts.html";
    document.getElementById("postInput").value = "";
    document.getElementById("textfield").value = "";
    document.getElementById("postImage").value = "";
    fetchPost();
}
// Show All Posts

function fetchPost() {
    let posts = JSON.parse(localStorage.getItem("posts")) || [];
    let allPosts = document.getElementById("allPosts");
    allPosts.innerHTML = "";
    posts.forEach((post, index) => {
        allPosts.innerHTML += `
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
            ${post.image ? `
            <img src="${post.image}" class="w-full h-56 object-cover">
            ` : ""}
            <div class="p-5">
                <h2 class="text-2xl font-bold mb-2">${post.title}</h2>
                <p class="text-gray-600 line-clamp-3">${post.content}
                </p>
                <div class="flex justify-between mt-5 text-sm text-gray-500">
                    <span>👤 ${post.username}</span>
                    <span>${post.date}</span>
                </div>
                <div class="grid grid-cols-3 gap-2 mt-5">
                    <button onclick="Update(${index})" class="bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-lg">Edit
                    </button>
                    <button onclick="Delete(${index})"class="bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg">Delete
                    </button>
                    <button onclick="ViewPost(${index})" class="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg">Read
                    </button>
                </div>
            </div>
        </div>
        `;
    });
}

// Update Post

function Update(index) {
    let posts = JSON.parse(localStorage.getItem("posts")) || [];
    document.getElementById("postInput").value = posts[index].title;
    document.getElementById("textfield").value = posts[index].content;
    document.getElementById("postImage").value = posts[index].image;
    editIndex = index;
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
// Delete Post

function Delete(index) {
    let posts = JSON.parse(localStorage.getItem("posts")) || [];
    let confirmDelete = confirm("Are you sure you want to delete this post?");
    if (!confirmDelete) return;
    posts.splice(index, 1);
    localStorage.setItem("posts", JSON.stringify(posts));
    fetchPost();
}
// View Single Post

function ViewPost(index) {
    localStorage.setItem("viewPostIndex", index);
    window.location.href = "individual-post.html";
}

// Initial Load
fetchPost();