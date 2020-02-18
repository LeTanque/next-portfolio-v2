
exports.seed = (knex) => {
  return knex('profile').del()
    .then(() => {
      return knex('profile').insert([
        { 
          block: "My path to software development is likely considered non-traditional and it is powered by an intense thirst for knowledge.",
          style: "paragraph",
        },
        { 
          block: "While working as a marketing director in 2011, I was introduced to this wild concept (bitcoin) by a mentor while backpacking deep in Yosemite. It changed my life. Soon after, I quit my day job, started dedicating more time to the bitcoin community, and started a crypto remittance company.",
          style: "paragraph",
        },
        { 
          block: "The only problem was that at the time, I didn’t know how to technically build it. Managing the team who was writing it as well as trying to build a business out of an idea was beyond my capabilities at the time and the company wasn’t able to raise another round.",
          style: "paragraph",
        },
        { 
          block: "I resolved to become a software developer myself and built an entire life around it. After learning basic HTML, CSS,  Less, PHP, Apache, wordpress, I found freelance work, took code challenges and self-taught myself as much as I could.",
          style: "paragraph",
        },
        { 
          block: "When I discovered React, I also discovered a vast area of knowledge that I had barely scratched the surface of, as well as a school that could teach me it. So I read Eloquent Javascript and joined Lambda as a Full Stack student.",
          style: "paragraph",
        },
        { 
          block: "Over the past year:",
          style: "paragraph",
        },
        { 
          block: "*** I’ve created an open source project and contributed to open source projects *** pushed over a 1000 commits to hundreds of projects *** led teams of developers as a Team Lead *** managed dozens of Team Leads as a Section Lead *** delivered lectures on React, Redux, Javascript fundamentals, advanced patterns in JS *** balanced study and work life like a pro *** completed the Full Stack Web curriculum in Lambda with consistently above average scores *** completed a 2 month build sprint, with a team of 8 developers and delivered one of the top 3 projects across the entire cohort",
          style: "list",
        },
        { 
          block: "My name is Frank and I love what I do!",
          style: "paragraph",
        },
      ]);
    });
};


