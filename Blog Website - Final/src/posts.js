
// BlogSphere - posts.js
// Get Posts from LocalStorage

let posts = JSON.parse(localStorage.getItem("posts")) || [];
function fetchPosts() {
    let allPosts = document.getElementById("allPosts");
    allPosts.innerHTML = "";
    // Empty State
if (posts.length === 0) {
    allPosts.innerHTML = `
    <div class="col-span-3 text-center py-20">
        <h2 class="text-4xl font-bold text-gray-500">No Blog Found</h2>
        <p class="text-gray-400 mt-4">Publish your first blog. </p>
    </div>
    `;
    return;
}
    // Show All Posts

    posts.forEach((post,index)=>{
       allPosts.innerHTML += `
       <div class="bg-white w-full max-w-[700px] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-3 duration-300">

    <!-- Image -->
    <div class="overflow-hidden">
        <img src="${post.image || 'https://picsum.photos/700/450'}" alt="${post.title}" class="w-full h-50 object-cover hover:scale-110 duration-500">
    </div>
    <!-- Content -->
    <div class="p-8">
        <!-- Title -->
        <h2 class="text-4xl font-bold text-gray-800 mb-4"> ${post.title}</h2>
        <!-- Author & Date -->
        <div class="flex justify-between items-center text-gray-500 mb-5">
            <span class="font-semibold text-lg">
                👤 ${post.username}
            </span>
            <span class="text-base">
                📅 ${post.date}
            </span>
        </div>
        <!-- Description -->
        <p class="text-gray-600 text-lg leading-8 h-36 overflow-hidden">
            ${post.content.substring(0,180)}...
        </p>
        <!-- Buttons -->
        <div class="grid grid-cols-3 gap-4 mt-8">
            <button onclick="EditPost(${index})" class="bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-xl font-semibold text-lg duration-300">✏️ Edit
            </button>
            <button onclick="DeletePost(${index})" class="bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl font-semibold text-lg duration-300">🗑 Delete
            </button>
            <button onclick="ReadMore(${index})" class="bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-xl font-semibold text-lg duration-300">📖 Read More
            </button>
        </div>
    </div>
</div>
`;
    });

}
// Edit Post
function EditPost(index) {
    localStorage.setItem("editPostIndex", index);
    window.location.href = "blog.html";
}
// Delete Post

function DeletePost(index) {
    let posts = JSON.parse(localStorage.getItem("posts")) || [];
    let confirmDelete = confirm("Are you sure you want to delete this post?");
    if (!confirmDelete) {
        return;
    }
    posts.splice(index, 1);
    localStorage.setItem("posts", JSON.stringify(posts));
    // Refresh Posts
    fetchPosts();
}
// Read More
function ReadMore(index) {
    localStorage.setItem("viewPostIndex", index);
    window.location.href = "individual-post.html";
}
// Initial Load

fetchPosts();
// Show Latest Post First
posts.reverse();
// Refresh Posts
function refreshPosts() {
    posts = JSON.parse(localStorage.getItem("posts")) || [];
    posts.reverse();
    fetchPosts();
}
// Empty State

function checkPosts() {
    if (posts.length === 0) {
        document.getElementById("allPosts").innerHTML = `
        <div class="col-span-3 bg-white rounded-3xl shadow-lg p-12 text-center">
            <img src="https://cdn-icons-png.flaticon.com/512/4076/4076478.png" class="w-32 mx-auto mb-6">
            <h2 class="text-4xl font-bold text-gray-700">No Blog Available</h2>
            <p class="text-gray-500 mt-4">
                Publish your first blog to see it here.
            </p>
            <a href="blog.html"class="inline-block mt-8 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl">
                Create Blog
            </a>
        </div>
        `;
    }
}

// Page Load
fetchPosts();
checkPosts();