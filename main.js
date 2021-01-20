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
    audiobooks: ["audible-logo.png", "bn-logo-tall.png", "kindle-logo-tall.png"],
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
    books: [
      {
        title: "About Me",
        description: "Lorem ipsum dolor sit amet.",
        image: 'img/box-1.jpg',
      },
      {
        title: "My Latest Book",
        description: "Lorem ipsum dolor sit amet.",
        image: 'img/box-4.jpg',
      },
      {
        title: "Book Signing",
        description: "Lorem ipsum dolor sit amet.",
        image: 'img/box-3.jpg',
      },
    ],
    testimonials: [
      {
        title: "A true Masterpiece, Bravo!",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        logo: "theguardian-xsmall.png",
        author: "Gerald Hendley",
        journal: "The Guardian",
      },
      {
        title: "A Unique View On The World!",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        logo: "globe-xsmall.png",
        author: "Marey Maxey",
        journal: "The Globe And Mail",
      },
    ],
    articles: [
      {
        title: "What's On Your Booklist?",
        date: "January 19th 2021",
        image: "thumb-13-2x-320x202.jpg",
      },
      {
        title: "Istanbul Travel Guide",
        date: "January 19th 2021",
        image: "thumb-08-2x-320x202.jpg",
      },
    ],
    socials: ["fab fa-facebook", "fab fa-twitter", "fab fa-instagram", "fab fa-linkedin-in", "fab fa-youtube"],
  }
})
