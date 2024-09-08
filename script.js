document.addEventListener("DOMContentLoaded", function() {
  const experienceList = [
    { company: "Tech Corp", role: "Front-End Developer", years: "2018-2020" },
    { company: "Web Solutions", role: "Full-Stack Developer", years: "2020-2022" },
    { company: "Design Studio", role: "UI/UX Designer", years: "2022-Present" }
  ];

  const experienceContainer = document.getElementById('experienceList');

  experienceList.forEach(exp => {
    const listItem = document.createElement('li');
    listItem.textContent = `${exp.company} - ${exp.role} (${exp.years})`;
    experienceContainer.appendChild(listItem);
  });
});
