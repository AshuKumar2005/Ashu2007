import React from "react";

function Projects() {
  const projectList = [
    { title: "Random User Fetcher", desc: "Fetch random users using API", tech: "React + Bootstrap" },
    { title: "Hospital Appointment System", desc: "C project using linked lists", tech: "C Language" },
    { title: "Rakat Setu", desc: "Blood donation portal with Flask", tech: "Python + HTML" },
  ];

  return (
    <section id="projects" className="py-5 bg-light">
      <div className="container text-center">
        <h2>Projects</h2>
        <div className="row mt-4">
          {projectList.map((proj, i) => (
            <div className="col-md-4 mb-4" key={i}>
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{proj.title}</h5>
                  <p className="card-text">{proj.desc}</p>
                  <span className="badge bg-secondary">{proj.tech}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
