export const PROJECTS = [
    {
      id: 1,
      title: "My UC",
      tags: ["UX/UI", "Design", "Figma"],
      description: "This is project 1.",
      link: "",
      image: "https://picsum.photos/200/300",
    },
    {
      id: 2,
      title: "Shake it!",
      tags: ["Web Dev", "Coding", "APIs", "React", "NodeJS"],
      description: "This is project 2.",
      link: "",
      image: "https://picsum.photos/200/300",
    },
    {
      id: 3,
      title: "SDoH",
      tags: ["Web Dev", "Coding", "APIs", "React", "NodeJS", "AWS", "JavaScript"],
      description: "This is project 3.",
      link: "",
      image: "https://picsum.photos/200/300",
    },
    {
      id: 4,
      title: "Battleship",
      tags: ["Coding", "Java"],
      description: "This is project 4.",
      link: "",
      image: "https://picsum.photos/200/300",
    },
  ];

export const TAGS = PROJECTS.reduce((tags, project) => {
  project.tags.forEach((tag) => {
    if (!Object.values(tags).includes(tag)) {
      const nextKey = Object.keys(tags).length + 1;
      tags[nextKey] = tag;
    }
  });
  return tags;
}, {});