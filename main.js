let app = new Vue ({
  el: "#app",
  data: {
    navbarLinks: ["Home", "About Me", "Testimonials", "My Blog", "Meetups", "Shop", "Contact Me"],
    creditLinks: ["Latest Book", "Upcoming Events", "Recent Articles", "Buisness Enquiries", "Visit My Fundation"],
    brands: [
      "ebay-logotan-2x-200x66.png",
      "audible-logotan-2x-200x66.png",
      "bb-logotan-2x-200x66.png",
      "kindlefire-logotan-2x-200x66.png",
    ],
    events: [
      {
        image: "event-05.jpg",
        title: "Chicago Book Singing",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas repellat mollitia quae reprehenderit ex, dolorem!",
      },
      {
        image: "event-04.jpg",
        title: "Meet & Greet With Amanda",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas repellat mollitia quae reprehenderit ex, dolorem!",
      },
      {
      image: "event-07.jpg",
      title: "Open Book Dialogues",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas repellat mollitia quae reprehenderit ex, dolorem!",
    }
    ],
  }
})
