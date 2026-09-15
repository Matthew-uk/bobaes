/**
 * Institutional copy. Everything in this file is taken from the school's own
 * documents (BOBAES_Profile.docx, BOBAES_About_Us.docx) and should only be
 * changed by the school. Framing sentences written for the web are marked.
 */

export const WELCOME = {
  heading: "Welcome to BOBAES Edu-Excellence Schools",
  body: "Exclusive education based on Nigerian and International standards.",
} as const;

export const GOAL =
  "Our goal is to equip young people with the skills and mindset to thrive and then take on the world.";

export const MISSION =
  "To provide high quality education and child care in a safe, respectful and inclusive environment that builds a foundation for life-long learning.";

export const VISION =
  "To develop well-rounded, confident and responsible children who aspire to achieve their full potential and become global citizens.";

export const FOCUS =
  "To provide a stimulating early learning and child's care experience which promotes each child's social, emotional, physical and cognitive development.";

export const CORE_VALUES = [
  {
    title: "Honesty and integrity",
    body: "Honesty and integrity in all we say and do.",
  },
  {
    title: "Respect and dignity",
    body: "Respect and dignity for all humankind.",
  },
  {
    title: "Compassion",
    body: "Compassion to those we serve and to each other.",
  },
  {
    title: "Accountability",
    body: "Accountability to society, our community and each other.",
  },
  {
    title: "Teamwork",
    body: "Teamwork to achieve our vision, mission and values.",
  },
] as const;

/** The three pillars from BOBAES_About_Us.docx — "What Makes Us a Top Private School". */
export const PILLARS = [
  {
    id: "preeminence-of-christ",
    title: "Preeminence of Christ",
    scripture: "Colossians 1:15–18",
    body: "Christ is preeminent in all things. Central to education in Bobaes Edu-Excellence Schools is training pupils and students to explore and express Christ's preeminence in every area of thought and life.",
    mediaKey: "aboutChristianFoundation",
  },
  {
    id: "partnering-with-parents",
    title: "Partnering with Parents",
    body: "Educating children demands parental involvement; therefore, the school enters into a partnership with parents to achieve success. Teachers work closely with pupils and students to clarify the standards and expectations of the classroom, and with parents to optimise academic success in and out of the school environment. In the same vein, teachers work with parents to provide pupils and students with methods to help them become independent learners through the gradual release of responsibility.",
    mediaKey: "aboutPartnership",
  },
  {
    id: "safety-and-security",
    title: "Safety and Security",
    body: "BEES makes extensive investments to ensure that our environment is safe, every child is protected, and staff are prepared to deal with crisis scenarios.",
    mediaKey: "aboutSafety",
  },
] as const;

/**
 * Teaching philosophy — verbatim in substance from BOBAES_Superior_Academic.docx.
 */
export const PHILOSOPHY = {
  opening:
    "The greatest gift we can give children during the formative years is a driving curiosity, a belief in their abilities, a thirst for knowledge and a passion to grow.",
  body: [
    "Bobaes Edu-Excellence Schools offer an educational experience for children of all ages, from Nursery through to the end of the Senior Secondary Certificate Examinations.",
    "Our teaching philosophy is based on our commitment to teach pupils and students through metacognition, and to recognise the importance of brain science to teaching and learning.",
    "Embedded in this philosophy are the principles of multiple intelligences (Howard Gardner, 1983), which facilitate and inspire learning for all young people. Through our inquiry-based approach, pupils and students develop a natural curiosity for learning and for the world outside the classroom.",
    "We believe that our philosophy of education instils a love for learning, challenges children to develop their own minds and unique personalities, and allows us to truly know our learners and guide us in addressing their individual needs.",
  ],
} as const;

/** E-learning — verbatim in substance from E-Learning_Software.docx. */
export const ELEARNING = {
  title: "E-Learning and the Brainfield curriculum",
  body: [
    "Bobaes Edu-Excellence Schools strive to ensure pupils and students learn with the use of digital curriculum and collaboration tools such as the Brainfield software.",
    "The changing landscape of the world's information to digital form requires today's pupils and students to have a different set of skills than what was required just a decade ago. We equip our children not just with the three R's, but also with the 21st century skills of problem-solving, critical thinking, communication and technological literacy.",
    "We want children to develop the skills and knowledge necessary to responsibly navigate the emerging modern world. This is done by incorporating the use of technological devices with traditional classroom studies. The use of technology increases retention rates because children are excited about their discoveries and are actively engaged in their lessons in a way they could not be without the technological devices.",
  ],
} as const;

/**
 * ⚠️ DRAFT CONTENT — facilities detail was not supplied by the school.
 * Replace with the real facility list before launch. See docs/CONTENT-TODO.md.
 */
export const FACILITIES = [
  {
    name: "Classrooms",
    body: "Bright, well-ventilated classrooms kept deliberately small so every child is known and none is lost at the back of the room.",
    mediaKey: "facilityClassroom",
    draft: true,
  },
  {
    name: "Computer Laboratory",
    body: "Where the Brainfield digital curriculum lives. Pupils work on real devices from the primary years upward, building technological literacy alongside the three R's.",
    mediaKey: "facilityComputerLab",
    draft: true,
  },
  {
    name: "Science Laboratory",
    body: "A laboratory for practical work in the sciences, where students carry out and record experiments for themselves.",
    mediaKey: "facilityScienceLab",
    draft: true,
  },
  {
    name: "Home Economics Room",
    body: "A dedicated room with long worktables for home economics lessons, where pupils learn practical skills hands-on.",
    mediaKey: "facilityHomeEconomics",
    draft: true,
  },
  {
    name: "Library",
    body: "A quiet reading room stocked for every level, from picture books for the creche to reference texts for WAEC and NECO candidates.",
    mediaKey: "facilityLibrary",
    draft: true,
  },
  {
    name: "Playground",
    body: "Safe, supervised outdoor play — because physical development sits alongside the social, emotional and cognitive in how we think about a child.",
    mediaKey: "facilityPlayground",
    draft: true,
  },
  {
    name: "Safety and Security",
    body: "A secured, gated campus with controlled access, supervised drop-off and pick-up, and staff trained to respond in a crisis.",
    mediaKey: "facilitySecurity",
    draft: true,
  },
] as const;
