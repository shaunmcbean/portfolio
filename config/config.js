import profile from './headshot.jpeg';
import { faAppStore, faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';
import upenn from './upenn.png';
import wpi from './wpi.png';

export const navigation = {
  name: "shivank",
  links: [
    {
      title: "about",
      link: "#about",
    },
    {
      title: "projects",
      link: "#projects",
    },
    {
      title: "contact",
      link: "#contact",
    },
    {
      title: "links",
      link: "/links",
    },
    {
      title: "tbd",
      link: "",
    }
  ],
}
export const intro = {
  title: "shivank gupta.",
  description: "a mechanical and robotics engineer",
  image: profile.src,
  buttons: [
    {
      title: "contact me",
      link: "#contact",
      isPrimary: true,
    },
    {
      title: "resume",
      link: "",
      isPrimary: false,
    },
  ],
}

export const about = {
  title: "about me",
  description: [
    "a first-year robotics masters student at the University of Pennsylvania",
    "an engineer with a passion for new product development, control and optimization, human-robot interaction, and learning in robotics",
    "outside of work you can find me cooking, dancing bollywood and bhangra, playing the saxophone, hiking with my dog, or working out",
  ],
}

export const work = {
  title: "education",
  cards: [
    {
      title: "University of Pennsylvania",
      years: "2024-2026",
      description:
          "MSE in Robotics, GRASP Lab",
      image: upenn.src,
      icons: null,
    },
    {
      title: "Worcester Polytechnic Institute",
      years: "2020-2024",
      description: "B.S. in Mechanical Engineering",
      image: wpi.src,
      icons: null,
    },
    {
      title: "Worcester Polytechnic Institute",
      years: "2020-2024",
      description: "B.S. in Robotics Engineering",
      image: wpi.src,
      icons: null,
    }
  ],
}

export const projects = {
  title: "projects",
  cards: [
    {
      title: "Finley: 3-D Printed Humanoid",
      description: "• Redesigned and assembled humanoid for elderly at-home assistive care, printed entirely from resin and PLA\n" +
          "• Introduced pick and place system, sensor integration, human-robot interaction, and end effector modularity\n" +
          "• Integrated AI model for human-robot conversation, function invocation, and speech to motion capabilities",
      icons: [
        {
          icon: faAppStore,
          link: "",
        },
        {
          icon: faGithub,
          link: "",
        },
      ]
    },
    {
      title: "Turtlebot SLAM",
      description: "• Implemented path planning, localization, and frontier exploration to control a TurtleBot to navigate a maze in a simulated and physical environment\n" +
          "• Used ROS to implement control of smart motors, LiDAR, Raspberry Pi, and SLAM algorithms",
      icons: [
        {
          icon: faAppStore,
          link: "",
        },
        {
          icon: faGooglePlay,
          link: "",
        },
      ]
    },
    {
      title: "Full Stack Website for Mass Hospital",
      description: "• Served as Scrum master on an 11-person team to apply Agile development methodologies and software design patterns in the creation " +
          "of a full-stack web application for hospital pathfinding and integrated service requests",
      icons: [
        {
          icon: faGithub,
          link: "",
        },
      ]
    },
    {
      title: "3 DoF Robotic Arm",
      description: "• Performed forward, inverse kinematics, and trajectory planning for a 3 DOF articulated RRR manipulator\n" +
          "• Explored robotic vision, camera calibration, and feedback control in MATLAB to identify and move objects",
      icons: [
        {
          icon: faAppStore,
          link: "",
        },
        {
          icon: faGooglePlay,
          link: "",
        },
      ]
    },
  ],
}

export const contact = {
  title: "get in touch",
  description: "feel free to reach out directly by email at gshivank7@gmail.com",
  buttons: [
    {
      title: "email me",
      link: "mailto:gshivank7@gmail.com",
      isPrimary: true,
    },
    // {
    //   title: "schedule meeting",
    //   link: "https://topmate.io/hashirshoaeb",
    //   isPrimary: false,
    // },
  ]
}

// SEARCH ENGINE 
export const SEO = {
  // 50 - 60 char  
  title: "shivank gupta | engineer",
  description: "description",
  image: profile.src,
}

export const links = {
  image: profile.src,
  title: "@shivvvank",
  // description: "Computer Engineer | Flutter | Reactjs Developer",
  cards: [
    {
      title: "website",
      link: "",
    },
    {
      title: "linkedin",
      link: "https://www.linkedin.com/in/shivankgupta02/",
    },
    {
      title: "grasp profile",
      link: "https://www.grasp.upenn.edu/people/shivank-gupta/",
    },
    {
      title: "github",
      link: "https://github.com/shaunmcbean/",
    },
    {
      title: "instagram",
      link: "https://www.instagram.com/shivvvank/",
    },
  ]
}