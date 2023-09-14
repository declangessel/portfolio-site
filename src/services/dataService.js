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
            "Studying Computer Science",
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
                'A subscription-based SaaS education platform fueled by high school boredom and a passion for sneakers.',
                'Grew to $350,000 in revenue, 5000+ customers.',
              ],
            },
            {
              jobTitle: 'Co-Founder',
              company: <div style={{display: 'inline'}} dangerouslySetInnerHTML={{__html: '<a href="https://avoalarm.com/" target="_blank">Avo</a>'}} />,
              period: 'JUN 2023 – PRESENT',
              accomplishments: [
                'Avo is an AI alarm app that wakes you up with AI-generated messages, delivered by voices of popular figures, and tailored to your daily schedule and local weather.',
                'Available on the App Store.'
              ],
            },
            {
              jobTitle: 'Co-Founder',
              company: <div style={{display: 'inline'}} dangerouslySetInnerHTML={{__html: '<a href="https://myjotbot.com/" target="_blank">JotBot</a>'}} />,
              period: 'AUG 2023 – PRESENT',
              accomplishments: [
                'JotBot is an AI-powered writing assistant that uses ML and Language Style Matching (LSM) to create content in your unique tone, style, and voice.',
              ],
            },
            {
              jobTitle: 'Co-Founder',
              company: <div style={{display: 'inline'}} dangerouslySetInnerHTML={{__html: '<a href="https://youup.io/" target="_blank">You Up</a>'}} />,
              period: 'JUL 2022 – PRESENT',
              accomplishments: [
                'YouUp is a social alarm app that replaces your alarm sound with personalized, surprise messages from friends and family.',
                'Live on App Store. 20k+ downloads.',
              ],
            },
            {
              jobTitle: 'Founder & CEO',
              company: <div style={{display: 'inline'}} dangerouslySetInnerHTML={{__html: '<a href="https://vortexproxies.com/" target="_blank">Vortex Proxies</a>'}} />,
              period: 'JUL 2020 – NOV 2021',
              accomplishments: [
                'Maintained a proxy network with multiple ISP DC subnets and over 20 million residential IPs.',
                'Grew to $40,000 in revenue, 2000+ customers.',
              ],
            },
            {
              jobTitle: 'Startup Founder',
              company: <div style={{display: 'inline'}} dangerouslySetInnerHTML={{__html: '<a href="https://www.inacademy.eu/" target="_blank">European Innovation Academy</a>'}} />,
              period: 'JUL 2020 – AUG 2022',
              accomplishments: [
                'A month-long hyper-accelerator program with 500+ international students.',
              ],
            },
            
          ],
          education: [
            {
              credit: 'B.A. in Computer Science',
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
              name: 'FaTwitter',
              link: 'https://twitter.com/declangessel_/',
            },
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
