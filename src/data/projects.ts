export interface ProjectFeature {
  name: string;
  description: string;
}

export interface TechStack {
  frontend?: string;
  backend?: string;
  deployment?: string;
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  color: string;
  role?: string;
  timeline?: string;
  tools?: string[];
  team?: string;
  overview?: string;
  problem?: string;
  process?: string;
  solution?: string;
  results?: string;
  features?: ProjectFeature[];
  techStack?: TechStack;
  architecture?: string;
  liveDemo?: string;
  image?: string;
  imagePosition?: string;
}

export const projects: Project[] = [
{
  slug: 'litboxd',
  title: 'Litboxd',
  category: 'Full-Stack Dev',
  description:
  'A better social media platform for readers. Think Goodreads meets Letterboxd.',
  color: '#4c7ce5',
  image: "/Screenshot_2026-03-29_at_10.54.17_PM.png",

  role: 'Full-Stack Developer',
  timeline: '1 Month',
  tools: [
  'React 18',
  'Vite',
  'Tailwind CSS',
  'Framer Motion',
  'Node.js',
  'Express.js',
  'Prisma',
  'PostgreSQL',
  'Socket.IO',
  'Firebase',
  'AWS S3',
  'Docker',
  'Fly.io'],

  team: 'Gretchen Kerfoot, Max Konzerowsky, Liam Murray, Jada Jones',
  overview:
  'For my final project for COSC 52: Full Stack Web Development, I collaborated with three other students to develop Litboxd, a social media platform for book lovers. We found key design issues with the current leading platform, Goodreads, and sought to model our app after Letterboxd, the predominant film review social platform.',
  problem:
  'Goodreads, despite its large user base, suffers from an outdated interface, limited social features, and a cumbersome user experience. We identified several pain points: clunky book logging, minimal community engagement tools, and a lack of modern social features like real-time messaging and dynamic book clubs. Letterboxd, in contrast, has successfully created an engaging, visually appealing platform for film enthusiasts\u2014complete with half-star ratings, curated lists, and varied social interactions. We aimed to bring that same experience to readers.',
  features: [
  {
    name: 'Book Discovery & Tracking',
    description:
    'Users can search millions of books via Open Library integration, track their reading status (Want to Read, Currently Reading, Read, Did Not Finish), and log start/finish dates. The platform supports half-star rating precision (0.5\u20135.0) for nuanced reviews.'
  },
  {
    name: 'Social Profiles',
    description:
    'Customizable profiles with avatars, banners (with crop adjustments), display names, favorite genres, and reading statistics. Users can follow each other and view personalized activity feeds.'
  },
  {
    name: 'Reviews & Lists',
    description:
    'Written reviews with spoiler flags, nested comment threads, and a like system. Users can create public or private curated book lists with custom ordering.'
  },
  {
    name: 'Book Clubs',
    description:
    'A robust club system featuring public/private visibility, role-based membership (owner, admin, member), discussion threads, book nominations with voting deadlines, reading milestones, and a "sitting out" feature for temporarily inactive members.'
  },
  {
    name: 'Community Forum',
    description:
    'A discussion board with posts, nested comments, upvote/downvote functionality, tags, and spoiler flagging\u2014sorted by hot, new, or top.'
  },
  {
    name: 'Real-Time Messaging',
    description:
    'Direct messaging powered by Socket.IO, supporting both 1-on-1 and group conversations with live message delivery and unread count tracking.'
  },
  {
    name: 'AI Recommendations',
    description:
    'Personalized book suggestions powered by Claude, using an agentic loop with tool use to search Open Library and generate tailored recommendations based on reading history.'
  },
  {
    name: 'Data Import',
    description:
    'Users can import their existing reading history from Goodreads, StoryGraph, or generic CSV files, preserving ratings and shelf assignments.'
  },
  {
    name: 'Badge System',
    description:
    '16+ achievement badges computed dynamically from user activity, including secret badges that remain hidden until earned.'
  }],

  techStack: {
    frontend:
    'React 18 with Vite as the build tool, React Router v7 for navigation, and Tailwind CSS for styling. We used Framer Motion for smooth animations, Firebase for authentication (supporting both email/password and Google OAuth), and Socket.IO for real-time features. Additional libraries include Papa Parse for CSV parsing and Marked + DOMPurify for safe markdown rendering.',
    backend:
    "Node.js with Express.js, using Prisma as our ORM for type-safe database interactions. PostgreSQL serves as our database (hosted on Neon), with AWS S3 handling file storage for user avatars, banners, and club covers. The backend integrates with multiple external APIs: Open Library for book data, Wikidata for series information, TMDB for movie adaptations, and Anthropic's Claude SDK for AI recommendations.",
    deployment:
    'Both frontend and backend are containerized with Docker (multi-stage builds for optimized image sizes) and deployed on Fly.io.'
  },
  architecture:
  'Our database schema consists of 23+ Prisma models, carefully designed to handle complex relationships\u2014particularly for the book club system, which includes nested structures for nominations, voting, milestones, and threaded discussions. We implemented a hybrid authentication strategy: Firebase handles credentials and OAuth, while our backend maintains user records in PostgreSQL. This gave us the security benefits of Firebase with full control over user data and relationships. Real-time features use Socket.IO with room-based broadcasting. Users join personal rooms for notifications and conversation-specific rooms for live chat, enabling efficient message delivery without unnecessary broadcasts. For security, we used Prisma to prevent SQL injection, DOMPurify to sanitize user-generated markdown content against XSS attacks, and cascading foreign keys for clean data deletion.',
  liveDemo: 'https://litboxd-frontend.fly.dev',
  solution: undefined,
  process: undefined,
  results: undefined
},
{
  slug: 'dartmouth-housing',
  title: 'Dartmouth Housing Project',
  category: 'Design Research',
  description:
  'How might we make Dartmouth students identify further with their residential house?',
  color: '#e8a87c',
  image: "/housing_project.jpg",

  role: 'UX Researcher',
  timeline: '8 Weeks',
  tools: ['Figma', 'Qualtrics', 'Miro'],
  team: '3 Designers',
  overview:
  'A comprehensive research project aimed at understanding and improving the residential house system at Dartmouth College, focusing on student identity and community building.',
  problem:
  'Students often feel disconnected from their assigned residential houses, leading to a lack of community engagement and participation in house events.',
  process:
  'We conducted 30+ user interviews, distributed surveys to the student body, and facilitated co-design workshops to understand the root causes of this disconnect.',
  solution:
  'We proposed a series of digital and physical interventions, including a redesigned house app for event discovery and a new onboarding experience for incoming students.',
  results:
  'Our findings and proposals were presented to the Office of Residential Life, influencing their strategy for the upcoming academic year.'
},
{
  slug: 'adapt-a-mask',
  title: 'Adapt-a-Mask',
  category: 'Engineering Design',
  description:
  'How might we improve airway seal consistency for novice emergency medical responders operating in cold, prehospital environments?',
  color: '#7bc5ae',
  image: "/image-1.jpg",

  role: 'Product Designer',
  timeline: '10 Weeks',
  tools: ['SolidWorks', '3D Printing', 'User Testing'],
  team: '4 Engineers',
  overview:
  'A novel approach to CPR mask design that ensures a proper seal on diverse facial structures, improving the efficacy of emergency resuscitation.',
  problem:
  'Standard CPR masks often fail to create an adequate seal on patients with facial hair, different jaw structures, or facial trauma, leading to ineffective ventilation.',
  process:
  'Iterative prototyping using various materials to find a substance that could quickly conform to any face shape while maintaining structural integrity under pressure.',
  solution:
  'A mask featuring a conforming gel ring that instantly adapts to the patients face, creating an airtight seal regardless of facial hair or structure.',
  results:
  'Patent pending status achieved. Testing showed a 95% success rate in achieving a proper seal on diverse test subjects, compared to 60% with standard masks.'
},
{
  slug: 'sentry',
  title: 'Sentry',
  category: 'UI/UX Design',
  description:
  'A community network designed to keep immigrants informed and prepared.',
  color: '#b8a9d4',
  image: "/Screenshot_2026-03-29_at_11.16.05_PM.png",

  imagePosition: 'object-left-top',
  role: 'UX/UI Designer',
  timeline: '6 Weeks',
  tools: ['Figma', 'Illustrator', 'Protopie'],
  team: '2 Designers, 2 Developers',
  overview:
  'Sentry is a secure, localized information-sharing platform designed specifically for immigrant communities to stay informed about local events, resources, and potential risks.',
  problem:
  'Immigrant communities often rely on fragmented, unverified information spread through word-of-mouth or generic social media, which can lead to misinformation and vulnerability.',
  process:
  'Extensive user research with community organizers to understand information flow and trust dynamics. Designed with a focus on privacy, accessibility, and multi-language support.',
  solution:
  'A mobile-first platform featuring verified community alerts, resource mapping, and secure peer-to-peer communication, all wrapped in an intuitive, accessible interface.',
  results:
  'Winner of the campus social impact hackathon. Currently in pilot testing with a local community organization.'
}];