import React from 'react'
export default class DataService {
  _data = {
    projectRepo: 'https://github.com/declangessel/portfolio-site',
    react95Repo: 'https://github.com/React95/React95',
    items: [
      {
        id: 'about',
        name: 'About.txt',
        icon: 'info_bubble',
        content: {
          paragraphs: [
            "Studying Computer Science & Economics",
            "University of California, Berkeley",
          ],
        },
      },

      {
        id: 'resume',
        name: 'Resume.txt',
        icon: 'notepad_2',
        content: {
          resumeLink:
            'https://docs.google.com/document/d/1hAhNktHRrfwLPlPECqicOBSTWvufPPWcNDvgK8aWjr8/export?format=pdf',
          workExperience: [
            {
              jobTitle: 'Founder & CEO',
              company: <div style={{display: 'inline'}} dangerouslySetInnerHTML={{__html: '<a href="https://steadysoles.com/" target="_blank">Steady Soles</a>'}} />,
              period: 'DEC 2018 – PRESENT',
              accomplishments: [
                'Global subscription-based information and analytical service empowering the next generation of alternative asset investors.',
                'An educational platform bringing together entrepreneurs and sneaker enthusiasts following a community-driven and software-backed approach.',
                'Led software development efforts, utilizing Python, Java, HTML/CSS/JS, SwiftUI.',
                'Successfully executed social media marketing campaigns on Twitter, Instagram, and TikTok, resulting in millions of impressions and 25,0000 followers.',
                'Grew to $350,000 in revenue and served over 5000 customers.',
              ],
            },
            {
              jobTitle: 'Founder & CEO',
              company: <div style={{display: 'inline'}} dangerouslySetInnerHTML={{__html: '<a href="https://vortexproxies.com/" target="_blank">Vortex Proxies</a>'}} />,
              period: 'JUL 2020 – NOV 2021',
              accomplishments: [
                'Provided data center and residential web proxies for a variety of use cases.',
                'Maintained a proxy network with multiple ISP DC subnets and over 20 million residential IPs.',
                'Utilized expertise in web proxy technologies (HTTP, HTTPS, SOCKS) to provide reliable and secure services to customers, and implemented IP management practices (provisioning, rotation) to optimize proxy performance and mitigate security risks.',
                'Grew to $40,000 in revenue and served over 2000 customers.',
              ],
            },
            {
              jobTitle: 'Founder',
              company: <div style={{display: 'inline'}} dangerouslySetInnerHTML={{__html: '<a href="https://youup.io/" target="_blank">You Up</a>'}} />,
              period: 'JUL 2022 – PRESENT',
              accomplishments: [
                'Developed an social media alarm clock app that utilizes personalized messages from a users selected social group to help them wake up feeling energized and appreciated.',
                'Built MVP using SwiftUI, Figma, MySQL, and Firebase.',
                'Completed during a 3-week hyper accelerator program.',
              ],
            },
            {
              jobTitle: 'Startup Founder',
              company: <div style={{display: 'inline'}} dangerouslySetInnerHTML={{__html: '<a href="https://www.inacademy.eu/" target="_blank">European Innovation Academy</a>'}} />,
              period: 'JUL 2020 – AUG 2022',
              accomplishments: [
                'A month-long entrepreneurship program with 500+ international students. Led a team in the creation of a new startup, YouUp, from concept to implementation.',
                'Utilized design thinking and agile methodologies to rapidly prototype and iterate on the product.',
                'Developed strong leadership and problem-solving skills, as well as a growth mindset through immersive training in innovation and entrepreneurship.',
              ],
            },
            
          ],
          education: [
            {
              credit: 'B.A. in Computer Science + Economics',
              place: 'University of California, Berkeley',
              period: 'AUG 2021 – MAY 2025',
            },
          ],
          
        },
      },
      {
        id: 'projects',
        name: 'Projects and Hobbies.txt',
        icon: 'flying_through_space_100',
        content: {
          projects: [
            {
              title: 'TSA Approved Self Defense Devices - DesInv15',
              description: `Section 1: Team Project Overview
            Our team worked on developing a TSA-approved self-defense device designed to provide travelers with a sense of security while adhering to strict airport regulations. The project focused on creating a compact, user-friendly, and effective device that could be carried in hand luggage without causing any issues during security checks.
            
            Section 2: Individual Contributions & Course Learning Reflection
            Throughout the project, I played an active role in various stages of the development process, including research, ideation, prototyping, and testing. My primary responsibilities involved conducting thorough research on TSA regulations, analyzing existing self-defense products, and identifying gaps in the market.
            
            I also contributed to brainstorming sessions and helped generate innovative ideas to address the unique challenges faced by travelers in need of self-defense tools. This project allowed me to apply human-centered design principles learned in the course, resulting in a product that effectively meets the needs and preferences of our target users.
            
            Section 3: Excerpts from Design Journal
            - Research: Explored TSA regulations and guidelines for carry-on items, identifying constraints for our design.
            - Ideation: Brainstormed multiple concepts, including wearable devices, discreet tools, and multi-functional gadgets.
            - Prototyping: Developed various prototypes using 3D printing, iterating and refining the design based on user feedback.
            - Testing: Conducted usability tests, ensuring the device's effectiveness in various self-defense scenarios without compromising user safety.
            
            Section 4: Design Process & Project Outcome
            Our design process began with extensive research on TSA guidelines and an analysis of existing self-defense products. Based on our findings, we identified opportunities to create a non-threatening, easily accessible, and effective self-defense device for travelers. We then proceeded with ideation, sketching, and prototyping, followed by rigorous testing and refinement.
            
            The final prototype is a compact, ergonomic self-defense device that incorporates a discreet and non-threatening design, making it suitable for carry-on luggage. The device is easy to grip and has an intuitive activation mechanism, ensuring that users can quickly and effectively deploy it in emergency situations. Our TSA-approved self-defense device offers peace of mind for travelers, addressing a gap in the market and demonstrating the power of human-centered design.`,
              url: 'https://drive.google.com/drive/folders/1aoxwzWDNMz4hqCf5bx3o8YHXbaEZgs9w?usp=sharing',
            },            
            {
              title: 'Handstitched Leather Soccer Ball',
              description:
                'I loved watching the World Cup last year and took on a personal project to learn how to create a leather football. My first ball was a classic 32-panel design, and I just finished working on a 212-panel piece. I used Adobe Illustrator for the design and my universitys makerlab to laser cut the pieces. I handstitched the ball together, and the project took approximately 40 hours to complete.',
              url: 'https://drive.google.com/file/d/1R1_aECBcdIhz2EaAyZXmPtC8ae1iSnA3/view?usp=share_link',
            },
          
          ],
        },
      },
      {
        id: 'skills',
        name: 'Skills.txt',
        icon: 'progman_11',
        content: {
          hard: [
            {
              name: 'Python',
              progress: 100,
            },
            {
              name: 'Java',
              progress: 100,
            },
            {
              name: 'Swift/SwiftUI',
              progress: 100,
            },
            {
              name: 'Javascript',
              progress: 80,
            },
            {
              name: 'HTML/CSS',
              progress: 90,
            },
            {
              name: 'Node.js',
              progress: 90,
            },
            {
              name: 'Typescript',
              progress: 90,
            },
            {
              name: 'React',
              progress: 80,
            },
            {
              name: 'SQL',
              progress: 70,
            },
            {
              name: 'Pandas',
              progress: 70,
            },
            {
              name: 'NumPy',
              progress: 80,
            },
            {
              name: 'SpaCy',
              progress: 70,
            },
            {
              name: 'Pytorch',
              progress: 70,
            },
          ],
          soft: 'Entrepreneurship, Leadership, Creative Problem Solving, Analytical Thinking, Emotional Intelligence, Conflict Management',
        },
      },
      {
        id: 'photography',
        name: 'Photography.txt',
        icon: 'camera',
      },
      {
        id: 'contact',
        name: 'Contact.txt',
        icon: 'inetcfg_2301',
        content: {
          emailText:
            'Send me an email @ ',
          email: 'declan@berkeley.edu',
          socialText: 'Or reach out below:',
          social: [
            {
              name: 'FaLinkedin',
              link: 'https://www.linkedin.com/in/declangessel/',
            },
            {
              name: 'FaGithub',
              link: 'https://github.com/declangessel',
            },
            {
              name: 'FaInstagram',
              link: 'https://www.instagram.com/declangessel/',
            },
            {
              name: 'FaSpotify',
              link: 'https://open.spotify.com/user/dghrnim2uztw50sl6jwa4lgez?si=9beefce7d7a24733/',
            },

          ],
        },
      },
    ],
  };

  getItems() {
    return this._data.items.map(({ id, name, icon }) => ({ id, name, icon }));
  }

  getItem(id) {
    return this._data.items.find((x) => x.id === id);
  }

  getProjectInfo() {
    return {
      projectRepo: this._data.projectRepo,
      react95Repo: this._data.react95Repo,
    };
  }
}
