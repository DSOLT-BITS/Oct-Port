export const profile = {
  name: "David Solt",
  role: "Web Developer & IT Specialist",
  location: "Cleveland, Ohio",
  email: "David.solt@gmail.com",
  resume: "/David-Solt-Resume.pdf",
  seeking:
    "Open to web development and IT roles in the Cleveland, Ohio area and remote.",
  links: [
    { label: "GitHub", href: "https://github.com/DSOLT-BITS" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/david-solt-117a5a274" },
    { label: "ClearanceJobs", href: "https://www.clearancejobs.com/profile" },
    { label: "Indeed", href: "https://profile.indeed.com/?hl=en_US&co=US&from=gnav-homepage" },
  ],
  references: "/David-Solt-References.pdf",
  summary:
    "U.S. Army veteran and certified HTML/CSS web designer. I spent nearly four years keeping communication systems running, supporting users and leading soldiers, and I now build for the web with HTML, CSS and JavaScript. I install, configure and troubleshoot hardware, networks and radio systems, and I take responsibility for the equipment and people in my care.",
};

export const stats = [
  { value: "$2M", label: "Equipment managed with zero loss" },
  { value: "3+", label: "Years as a Radio System Specialist" },
  { value: "2 yrs", label: "Leading multiple soldiers" },
];

export const experience = [
  {
    title: "Staff Member",
    org: "D&A Armory",
    place: "Grafton, Ohio",
    period: "December 2025 – Present",
    points: [
      "Assist customers with product selection and provide general support for daily operations.",
      "Manage both in-store and online sales operations.",
      "Handle customer phone calls and inquiries.",
      "Maintain and track store inventory.",
      "Take and process photographs of used firearms for online sales listings.",
    ],
  },  {
    title: "Radio System Specialist",
    org: "US Army",
    place: "Schofield Barracks, Hawaii",
    period: "March 2021 – November 2024",
    points: [
      "Maintained and supported radio communication systems for military operations.",
      "Provided IT help desk support, troubleshooting technical issues for personnel.",
      "In charge of $2 million worth of equipment with zero missing or lost equipment for over 2 years.",
      "Managed and led multiple soldiers, ensuring mission readiness and discipline.",
      "Installed multiple radio kits in vehicles and taught radio operator classes.",
      "Collaborated with teams to ensure seamless communication infrastructure.",
    ],
  },
  {
    title: "IT Assistant",
    org: "Keystone Local School",
    place: "LaGrange, Ohio",
    period: "May 2019 – June 2020",
    points: [
      "Assisted in maintaining the school's computer systems and network infrastructure.",
      "Provided technical support to students and staff.",
      "Implemented new software and hardware solutions.",
    ],
  },
  {
    title: "Landscaping",
    org: "Various Locations",
    place: "Ohio",
    period: "June 2018 – September 2019",
    points: [
      "Provided landscaping services including lawn maintenance and gardening.",
      "Worked under different supervisors, gaining experience in outdoor labor and teamwork.",
    ],
  },
];

export const skills: Array<{
  group: string;
  items: Array<{ name: string; level: "expert" | "intermediate" | "beginner" }>;
}> = [
  {
    group: "Web Development",
    items: [
      { name: "HTML5 & CSS3", level: "expert" },
      { name: "JavaScript & TypeScript", level: "intermediate" },
      { name: "React & Next.js", level: "intermediate" },
      { name: "Responsive Design", level: "expert" },
    ],
  },
  {
    group: "IT & Networking",
    items: [
      { name: "Hardware Installation & Troubleshooting", level: "expert" },
      { name: "Windows System Administration", level: "expert" },
      { name: "Network Design & Support", level: "intermediate" },
      { name: "Help Desk Support", level: "expert" },
    ],
  },
  {
    group: "Radio & RF Systems",
    items: [
      { name: "Radio Communication Systems", level: "expert" },
      { name: "Antenna Installation & Maintenance", level: "expert" },
      { name: "RF VHF/UHF/HF Systems", level: "expert" },
      { name: "Radio Operator Training", level: "expert" },
    ],
  },
  {
    group: "Leadership & Management",
    items: [
      { name: "Team Leadership", level: "expert" },
      { name: "Equipment Accountability", level: "expert" },
      { name: "Personnel Training", level: "expert" },
      { name: "Mission-Critical Operations", level: "expert" },
    ],
  },
];

export const certifications = [
  {
    title: "Professional JavaScript Course",
    org: "ERA Solutions",
    date: "November 2025",
    file: "/certifications/professional-javascript-course.pdf",
  },
  {
    title: "Certified HTML/CSS Web Designer",
    org: "Coalition of Information Technology Businesses (COITB)",
    date: "October 2025",
    file: "/certifications/certified-html-css-web-designer.pdf",
  },
];
export const education = [
  {
    title: "Network Communications Technology Program",
    org: "Lorain County JVS",
    place: "Oberlin, Ohio",
    date: "May 2020",
  },
  {
    title: "High School Diploma",
    org: "Keystone High School",
    place: "LaGrange, Ohio",
    date: "May 2020",
  },
  {
    title: "Army Basic Combat Training (BCT)",
    org: "Fort Jackson",
    place: "South Carolina",
    date: "September 2020",
  },
  {
    title: "Army Advanced Individual Training (AIT)",
    org: "Fort Gordon",
    place: "Georgia",
    date: "February 2021",
  },
];

export const references = [
  {
    name: "Frank Guizar",
    title: "USARPAC G6 Project Officer",
    org: "U.S. Army",
    phone: "(619) 315-4311",
    email: "frank.r.guizar.mil@army.mil",
  },
  {
    name: "Edward Cruz",
    title: "Senior Info Tech Specialist",
    org: "U.S. Army",
    phone: "(803) 458-6996",
    email: "edward.e.cruz3.mil@army.mil",
  },
  {
    name: "Joshua Pace",
    title: "Team Leader / Supervisor",
    org: "U.S. Army",
    phone: "(915) 740-3288",
    email: undefined as string | undefined,
  },
];
export const projects = [
  {
    title: "AI Tool Portfolio Site",
    description: "Professional portfolio website built with Next.js and TypeScript showcasing experience, skills, and credentials.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    link: "https://github.com/DSOLT-BITS/Oct-Port",
    featured: true,
  },
  {
    title: "Portfolio Website",
    description: "Full-stack portfolio site with responsive design, smooth animations, and PDF document integration.",
    technologies: ["HTML5", "CSS3", "JavaScript", "React"],
    link: "#",
    featured: true,
  },
];

export const activities = [
  "Completed Army BCT and AIT for MOS 25U (Signal Support Systems Specialist)",
  "Ambassador, People to People Ambassadors Program",
  "Ambassador, Ohana Motorsports Foundation",
  "Member, Boy Scouts of America",
  "Volunteer, Lorain County Fair",
  "Member, Keystone Schools Choir",
  "Participant, Keystone High School Tech Team",
];

export const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "references", label: "References" },
  { id: "contact", label: "Contact" },
];
