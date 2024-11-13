import portfolioImg01 from "../images/portfolio-01.jpg";
import portfolioImg02 from "../images/portfolio-02.jpg";
import portfolioImg03 from "../images/portfolio-03.jpg";
import portfolioImg04 from "../images/portfolio-04.jpg";
import portfolioImg05 from "../images/portfolio-05.jpg";
import portfolioImg06 from "../images/portfolio-06.jpg";
import portfolioImg07 from "../images/portfolio-07.jpg";
import portfolioImg08 from "../images/portfolio-08.jpg";
import portfolioImg09 from "../images/portfolio-09.jpg";
import portfolioImg10 from "../images/portfolio-10.jpg";
import portfolioImg11 from "../images/portfolio-11.jpg";
import portfolioImg12 from "../images/portfolio-12.jpg";
import portfolioImg13 from "../images/portfolio-13.jpg";

const portfolios = [
  {
    id: "01",
    imgUrl: portfolioImg01,
    category: "Ux",
    title: "Joshua Doore Furniture Store Website",
    description:
      "As a Front-End Developer, I have designed and built a functional online shopping cart for a furniture store utilizing the Vue.js CLI, SaaS and incorporating various NPM packages, including Font Awesome icons. This project showcases my ability to develop interactive and user-friendly web applications, as well as my proficiency in utilizing front-end technologies to enhance the user experience. My strong attention to detail and commitment to delivering high-quality results, combined with my technical skills, make me a valuable asset to any team.",
    technologies: ["HTML", "JavaScript", "Vue.js, SaSS"],
    siteUrl: "https://joshuadoore.netlify.app/",
  },
  {
    id: "02",
    imgUrl: portfolioImg04,
    category: "Web Design",
    title: "Pick n Pay Eswatini",
    description:
      "Webiste for pick 'n Pay Eswatini",
    technologies: ["Wordpress", "Woocommerce", "Elementor", "ACF"],
    siteUrl: "https://picknpayeswatini.com/",
  },
  {
    id: "03",
    imgUrl: portfolioImg02,
    category: "Ux",
    title: "Netflix Clone Website",
    description:
      "I have developed a complete and fully functional front-end application for a Netflix clone, featuring a log-in page, profile selection and landing page. The project leverages the TMDB APiI to import and dynamically display film data in their respective carousels. I utilized Vue.js as the primary framework, using it as a CDN to enhance the dynamic and interactive elements of the application. This project showcases my ability to integrate API data and build complex, user-friendly web applications utilizing the latest front-end technologies.",
    technologies: ["Vue.js", "API calling", "HTML", "JavaScript", "CSS"],
    siteUrl: "https://netflixclonevelko.netlify.app/",
  },
  {
    id: "04",
    imgUrl: portfolioImg05,
    category: "Web Design",
    title: "Niche Electronics Website",
    description:
      "My personal website I created to manage our family-run business, aptly named Niche Electronics. The site is a one-stop-shop for all second hand electronic sales, which conveniently redirects to the add-on domain for vacuum tubes sales set up via cPanel. To ensure a seamless customer experience, I have integrated PayFast for hassle-free payments for second-hand product sales. The site was built using the powerful Elementor and WooCommerce plugins, making it a visually stunning and easy-to-navigate platform.",
    technologies: ["Wordpress", "Woocommerce", "Elementor"],
    siteUrl: "https://nichelectronics.co.za/",
  },
  {
    id: "05",
    imgUrl: portfolioImg03,
    category: "Web Design",
    title: "Vacuum Tubes Sales Webite",
    description:
      "I have developed a personalized website utilizing WordPress and PayFast gateway integration. The site is built with Elementor and utilizes WooCommerce to display products. The product information was seamlessly imported from eBay and dynamically inserted into the database through PHP. I embarked on this project after experiencing success with my eBay business and seeking alternative payment options while reducing dependence on eBay's integrated systems.",
    technologies: ["Wordpress", "WooCommerce", "Elementor"],
    siteUrl: "https://vacuumtubes.nichelectronics.co.za/",
  },

  {
    id: "06",
    imgUrl: portfolioImg06,
    category: "Web Design",
    title: "Planet Fitness",
    description:
      "Planet Fitness Website",
    technologies: ["Wordpress", "Elementor", "PHP", "API Calling", "ACF"],
    siteUrl: "https://www.planetfitness.co.za",
  },
  {
    id: "07",
    imgUrl: portfolioImg07,
    category: "Ux",
    title: "President Hyper",
    description:
      "President Hyper Website",
    technologies: ["Wordpress", "Elementor", "PHP", "API Calling", "ACF"],
    siteUrl: "https://www.presidenthyper.co.za",
  },
  {
    id: "08",
    imgUrl: portfolioImg08,
    category: "Ux",
    title: "This Portfolio Website",
    description:
      "This website represents one of my recent projects, for which I utilized Tailwind.css and React to build it. The website features a visually appealing design, and I incorporated additional animations using npm. I focused on optimizing the website's performance and improving its user experience by ensuring seamless navigation and fast load times. In addition, I made sure that the website is fully responsive, ensuring it looks great on all devices, from desktops to mobile devices.",
    technologies: ["React.js", "Tailwind CSS", "Node.js"],
    siteUrl: "https://www.velkomijalkovic.com",
  },
  {
    id: "09",
    imgUrl: portfolioImg09,
    category: "Ux",
    title: "Sofnfree Website",
    description:
      "Sofnfree Website",
    technologies: ["Wordpress", "Elementor", "PHP", "API Calling", "ACF"],
    siteUrl: "https://www.sofnfree.com",
  },
  {
    id: "10",
    imgUrl: portfolioImg10,
    category: "Web Design",
    title: "Brainjar website",
    description:
      "During my internship at Wired Web Services, I was responsible for designing and developing the user interface (UI) for the Brainjar website, which was built on the WordPress platform using Elementor. My work involved creating a visually appealing design, ensuring a seamless user experience, and optimizing the website's performance for faster load times.",
    technologies: ["Elementor", "Wordpress"],
    siteUrl: "https://brainjarskillsdev.co.za/",
  },
  {
    id: "11",
    imgUrl: portfolioImg11,
    category: "Web Design",
    title: "Mobicel Website",
    description:
      "Mobicel Website",
    technologies: ["Elementor", "Wordpress"],
    siteUrl: "https://mobicel.co.za",
  },
  {
    id: "12",
    imgUrl: portfolioImg12,
    category: "Web Design",
    title: "Sea Cargo Website",
    description:
      "Sea Cargo Website",
    technologies: ["Elementor", "Wordpress"],
    siteUrl: "https://seacargoza.com/",
  },
  {
    id: "13",
    imgUrl: portfolioImg13,
    category: "Web Design",
    title: "Sofnfree AR application",
    description:
      "A Deepar augmented reality application which changes your hair according to selection, allows the user to take a picture with a Sofnfree border then a QR code is presented for the user to download the image, was featured at the Clicks Playground 2024",
    technologies: ["DeepAR", "Node", "Javascript", "AWS"],
    siteUrl: "#",
  }
  
];

export default portfolios;
