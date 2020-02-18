
exports.seed = (knex) => {
  return knex("skills").del()
    .then(() => {
      return knex("skills").insert([
        { skill: "Python", type: "technology", },
        { skill: "deadlines", type: "personal", },
        { skill: "Django", type: "technology", },
        { skill: "Flask", type: "technology", },
        { skill: "three.js", type: "technology", },
        { skill: "passion", type: "personal", },
        { skill: "teams", type: "personal", },
        { skill: "friends", type: "personal", },
        { skill: "open-source", type: "personal", },
        { skill: "Raspberry Pi", type: "technology", },
        { skill: "Arduino", type: "technology", },
        { skill: "Next.js", type: "technology", },
        { skill: "React", type: "technology", },
        { skill: "Redux", type: "technology", },
        { skill: "GraphQL", type: "technology", },
        { skill: "Node.js", type: "technology", },
        { skill: "JavaScript", type: "technology", },
        { skill: "PostgreSQL", type: "technology", },
        { skill: "Apache", type: "technology", },
        { skill: "Docker", type: "technology", },
        { skill: "Debian", type: "technology", },
        { skill: "Linux", type: "technology", },
        { skill: "Adobe Illustrator", type: "technology", },
        { skill: "GIMP", type: "technology", },
        { skill: "Sass", type: "technology", },
        { skill: "Ripple", type: "technology", },
        { skill: "Mapbox", type: "technology", },
        { skill: "created an open source project", type: "year", },
        { skill: "contributed to open source projects", type: "year", },
        { skill: "pushed over a 1000 commits", type: "year", },
        { skill: "pushed to hundreds of projects", type: "year", },
        { skill: "led teams of developers as a Team Lead", type: "year", },
        { skill: "managed dozens of Team Leads as a Section Lead", type: "year", },
        { skill: "delivered lectures on React", type: "year", },
        { skill: "delivered lectures on Redux", type: "year", },
        { skill: "delivered lectures on JS fundamentals", type: "year", },
        { skill: "delivered lectures on advanced JS patterns", type: "year", },
        { skill: "delivered lectures on Node", type: "year", },
        { skill: "delivered lectures on HTML", type: "year", },
        { skill: "delivered lectures on SASS", type: "year", },
        { skill: "balanced study and work life like a pro", type: "year", },
        { skill: "completed the FSW Lambda curriculum", type: "year", },
        { skill: "completed a 2 month build sprint", type: "year", },
        { skill: "worked with a team of 8 developers", type: "year", },
        { skill: "worked with UX designers", type: "year", },
      ]);
    });
};






