// all image include in arr

let arr = [
  {
    dp: "https://images.pexels.com/photos/103123/pexels-photo-103123.jpeg?auto=compress&cs=tinysrgb&w=800",
    story:
      "https://images.pexels.com/photos/977796/pexels-photo-977796.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    dp: "https://images.unsplash.com/photo-1728287031290-b4b0a0843c91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDl8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D",
    story:
      "https://images.unsplash.com/photo-1728028254879-2d7b4a276cf1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI2fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
  },
  {
    dp: "https://media.istockphoto.com/id/691910455/photo/smiling-businessman-with-brown-bag-walking-in-city.jpg?s=1024x1024&w=is&k=20&c=DK0hJR6L2uVHyREU7VJ_W12ePs5EB0OfnKG-GubULr4=",
    story:
      "https://images.unsplash.com/photo-1558487661-9d4f01e2ad64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fG1hbnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    dp: "https://images.unsplash.com/photo-1536318533971-7a25565daefc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D",
    story:
      "https://images.unsplash.com/photo-1728075770776-33201a4f2623?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0MHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    dp: "https://images.unsplash.com/photo-1726068464437-877fd9e923be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE1OXx0b3dKWkZza3BHZ3x8ZW58MHx8fHx8",
    story:
      "https://images.unsplash.com/photo-1673182122218-c63ff9007fc8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D",
  },
];

let like_btn = document.querySelector("#like-btn");
let like_btn2 = document.querySelector("#like-btn2");
let like_btn3 = document.querySelector("#like-btn3");
let postimg = document.querySelector(".post img");
let postimg2 = document.querySelector(".sec-post img");
let postimg3 = document.querySelector(".third-post img");
let heart = document.querySelector("#heart");
let heart2 = document.querySelector("#heart2");
let heart3 = document.querySelector("#heart3");
let blockdisplay = document.querySelector(".name-pro");
let post_block = document.querySelector(".post");
let insta = document.querySelector(".insta-story");
let hide = document.querySelector(".instagram");
let fill = "";
// all image travle to all index and element
arr.forEach(function (elm, idx) {
  fill += ` <div  class="story"><img  id = "${idx}" src="${elm.dp}" alt=""></div>`;
});
// when user click to the story visible all story img
insta.innerHTML = fill;
insta.addEventListener("click", function (dets) {
  hide.style.display = "none";
  post_block.style.display = "none";
  blockdisplay.style.display = "none";
  document.querySelector(".full-screen").style.display = "block";
  document.querySelector(".full-screen").style.backgroundImage = `url(${
    arr[dets.target.id].story
  })`;
  setTimeout(function () {
    post_block.style.display = "block";
    blockdisplay.style.display = "flex";
    hide.style.display = "flex";
    document.querySelector(".full-screen").style.display = "none";
  }, 2000);
});

// addevent like button ,if u dubble click pop the like button
let addLikeEventListener = (postLikeElement, likeButton, heartElement) => {
  postLikeElement.addEventListener("dblclick", () => {
    heartElement.style.color = "red";
    likeButton.style.transition = "all 0.2s ease-in-out";
    likeButton.style.transform = "translate(-50%, -50%)scale(1)";
    likeButton.style.opacity = "1";

    setTimeout(() => {
      likeButton.style.transform = "translate(-50%, -50%)scale(0)";
    }, 3000);
    setTimeout(() => {
      likeButton.style.opacity = "0";
    }, 2000);
  });
};

// call the function
addLikeEventListener(postimg, like_btn, heart);
addLikeEventListener(postimg2, like_btn2, heart2);
addLikeEventListener(postimg3, like_btn3, heart3);
// if u click the like button then like button color will be red and post will like ...
let singl_likeBtn = (heartbtn, likeops) => {
  heartbtn.addEventListener("click", () => {
    likeops.style.opacity = "1";
    if (heartbtn.style.color == "red") {
      heartbtn.style.color = "white";
      likeops.style.transform = "translate(-50%, -50%)scale(0)";
    } else {
      heartbtn.style.color = "red";
      likeops.style.transform = "translate(-50%, -50%)scale(1)";
      likeops.style.transition = "all 0.2s ease-in-out";
    }
    setTimeout(() => {
      likeops.style.transform = "translate(-50%, -50%)scale(0)";
    }, 3000);
    setTimeout(() => {
      likeops.style.opacity = "0";
    }, 2000);
  });
};
//call the function
singl_likeBtn(heart, like_btn);
singl_likeBtn(heart2, like_btn2);
singl_likeBtn(heart3, like_btn3);
