const projects = [
    {
        title: "Bantu NGO Platform",
        description: "A secure donation system and community platform integrating Pesapal v3 payment gateway for live transactions.",
        tech: ["Next.js", "TypeScript", "Node.js", "MySQL"],
        icon: "fa-solid fa-globe"
    },
    {
        title: "SCMS Platform",
        description: "Student Complaint Management System featuring robust RBAC and a modernized, responsive UI interface.",
        tech: ["React", "Express", "Docker", "MySQL"],
        icon: "fa-solid fa-graduation-cap"
    },
    {
        title: "IREBAS Banking Core",
        description: "Advanced staff and transaction management system for teller operations and seamless management reversals.",
        tech: ["Vue.js", "Laravel", "PostgreSQL"],
        icon: "fa-solid fa-building-columns"
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const portfolioGrid = document.getElementById('portfolioGrid');

    if (portfolioGrid) {
        projects.forEach((proj, index) => {
            const delay = index * 0.15;
            const html = `
                <div class="portfolio-card" style="animation: fadeUp 0.8s ease forwards; animation-delay: ${delay}s; opacity: 0;">
                    <div class="card-icon">
                        <i class="${proj.icon}"></i>
                    </div>
                    <h3>${proj.title}</h3>
                    <p>${proj.description}</p>
                    <div class="tech-stack">
                        ${proj.tech.map(t => `<span>${t}</span>`).join('')}
                    </div>
                    <a href="#" class="view-btn">View System <i class="fa-solid fa-arrow-right"></i></a>
                </div>
            `;
            portfolioGrid.innerHTML += html;
        });
    }
});
