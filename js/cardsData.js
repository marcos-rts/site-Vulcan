let cardsData = [{
  id: 1,
  image: 'https://source.unsplash.com/h-ACUrBngrw/1280x720',
  avatar: 'https://avatars.dicebear.com/api/initials/john%20doe.svg',
  user: {
    name: 'Okinami',
    handle: 'twitterid',
    title: 'Lead Developer'
  },
  content: 'The Beast stumbled in the dark for it could no longer see the path. It started to fracture and weaken, trying to reshape itself into the form of metal. Even the witches would no longer lay eyes upon it, for it had become hideous and twisted.'
},
{
  id: 1,
  image: 'https://source.unsplash.com/h-ACUrBngrw/1280x720',
  avatar: 'https://avatars.dicebear.com/api/initials/john%20doe.svg',
  user: {
    name: 'Okinami',
    handle: 'twitterid',
    title: 'Lead Developer'
  },
  content: 'The Beast stumbled in the dark for it could no longer see the path. It started to fracture and weaken, trying to reshape itself into the form of metal. Even the witches would no longer lay eyes upon it, for it had become hideous and twisted.'
},
{
  id: 1,
  image: 'https://source.unsplash.com/h-ACUrBngrw/1280x720',
  avatar: 'https://avatars.dicebear.com/api/initials/john%20doe.svg',
  user: {
    name: 'Okinami',
    handle: 'twitterid',
    title: 'Lead Developer'
  },
  content: 'The Beast stumbled in the dark for it could no longer see the path. It started to fracture and weaken, trying to reshape itself into the form of metal. Even the witches would no longer lay eyes upon it, for it had become hideous and twisted.'
},
{
  id: 1,
  image: 'https://source.unsplash.com/h-ACUrBngrw/1280x720',
  avatar: 'https://avatars.dicebear.com/api/initials/john%20doe.svg',
  user: {
    name: 'Okinami',
    handle: 'twitterid',
    title: 'Lead Developer'
  },
  content: 'The Beast stumbled in the dark for it could no longer see the path. It started to fracture and weaken, trying to reshape itself into the form of metal. Even the witches would no longer lay eyes upon it, for it had become hideous and twisted.'
},
{
  id: 1,
  image: 'https://source.unsplash.com/h-ACUrBngrw/1280x720',
  avatar: 'https://avatars.dicebear.com/api/initials/john%20doe.svg',
  user: {
    name: 'Okinami',
    handle: 'twitterid',
    title: 'Lead Developer'
  },
  content: 'The Beast stumbled in the dark for it could no longer see the path. It started to fracture and weaken, trying to reshape itself into the form of metal. Even the witches would no longer lay eyes upon it, for it had become hideous and twisted.'
},
{
  id: 1,
  image: 'https://source.unsplash.com/h-ACUrBngrw/1280x720',
  avatar: 'https://avatars.dicebear.com/api/initials/john%20doe.svg',
  user: {
    name: 'Okinami',
    handle: 'twitterid',
    title: 'Lead Developer'
  },
  content: 'The Beast stumbled in the dark for it could no longer see the path. It started to fracture and weaken, trying to reshape itself into the form of metal. Even the witches would no longer lay eyes upon it, for it had become hideous and twisted.'
},
{
  id: 1,
  image: 'https://source.unsplash.com/h-ACUrBngrw/1280x720',
  avatar: 'https://avatars.dicebear.com/api/initials/john%20doe.svg',
  user: {
    name: 'Okinami',
    handle: 'twitterid',
    title: 'Lead Developer'
  },
  content: 'The Beast stumbled in the dark for it could no longer see the path. It started to fracture and weaken, trying to reshape itself into the form of metal. Even the witches would no longer lay eyes upon it, for it had become hideous and twisted.'
},
]


function openModal() {
  document.getElementById('myModal').style.display = "block";
}

function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("item-slide");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}