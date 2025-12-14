import './style.css'
import { profileData } from './data/profile'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="container">
    <header style="padding: 1.5rem 0; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
      <h1 style="font-size: 1.5rem; font-weight: bold;">Portfólio</h1>
      <nav style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
        <a href="#" data-tab="hero" class="active">Início</a>
        <a href="#" data-tab="about">Sobre</a>
        <a href="#" data-tab="experience">Experiência</a>
        <a href="#" data-tab="education">Educação</a>
        <a href="#" data-tab="projects">Projetos</a>
        <a href="#" data-tab="skills">Habilidades</a>
        <a href="#" data-tab="contact">Contato</a>
      </nav>
    </header>

    <main>
      <section id="hero" class="tab-content" style="min-height: 80vh; display: flex; flex-direction: column; justify-content: center;">
        <h2 style="font-size: 3rem; margin-bottom: 1rem; line-height: 1.2;">${profileData.title}</h2>
        <p style="font-size: 1.2rem; color: #aaa; max-width: 600px; margin-bottom: 2rem;">${profileData.about.split('\n')[0]}</p>
        <div style="display: flex; gap: 1rem;">
          <a href="${profileData.social.linkedin}" target="_blank" class="btn">LinkedIn</a>
          <a href="${profileData.social.github}" target="_blank" class="btn">GitHub</a>
          <button onclick="document.querySelector('[data-tab=contact]').click()" class="btn" style="background: transparent; border: 1px solid currentColor;">Entre em contato</button>
        </div>
      </section>

      <section id="about" class="tab-content hidden" style="padding: 4rem 0;">
        <h2 style="font-size: 2rem; margin-bottom: 2rem;">Sobre Mim</h2>
        <div style="white-space: pre-line; color: #ccc; line-height: 1.6;">
          ${profileData.about}
        </div>
      </section>

      <section id="experience" class="tab-content hidden" style="padding: 4rem 0;">
        <h2 style="font-size: 2rem; margin-bottom: 2rem;">Experiência</h2>
        <div style="display: grid; gap: 2rem;">
          ${profileData.experiences.map(exp => `
            <div class="card">
              <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                <h3 style="font-size: 1.2rem; font-weight: bold;">${exp.role}</h3>
                <span style="color: #888;">${exp.period}</span>
              </div>
              <div style="color: #aaa; margin-bottom: 0.5rem;">${exp.company}</div>
              <p>${exp.description}</p>
            </div>
          `).join('')}
        </div>
      </section>

      <section id="education" class="tab-content hidden" style="padding: 4rem 0;">
        <h2 style="font-size: 2rem; margin-bottom: 2rem;">Educação</h2>
        <div style="display: grid; gap: 2rem;">
          ${profileData.education.map(edu => `
            <div class="card">
              <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                <h3 style="font-size: 1.2rem; font-weight: bold;">${edu.course}</h3>
                <span style="color: #888;">${edu.period}</span>
              </div>
              <div style="color: #aaa; margin-bottom: 0.5rem;">${edu.institution}</div>
              ${edu.description ? `<p>${edu.description}</p>` : ''}
            </div>
          `).join('')}
        </div>
      </section>

      <section id="projects" class="tab-content hidden" style="padding: 4rem 0;">
        <h2 style="font-size: 2rem; margin-bottom: 2rem;">Projetos</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
          ${profileData.projects.map(project => `
            <div class="card">
              ${project.imageUrl ? `<img src="${project.imageUrl}" alt="${project.title}" class="project-image">` : ''}
              <h3 style="font-size: 1.5rem; margin-bottom: 1rem;">${project.title}</h3>
              <p style="margin-bottom: 1.5rem; color: #ccc;">${project.description}</p>
              <div style="margin-bottom: 1.5rem; display: flex; flex-wrap: wrap; gap: 0.5rem;">
                ${project.technologies.map(tech => `
                  <span style="background: #333; padding: 0.2rem 0.6rem; border-radius: 4px; font-size: 0.9rem;">${tech}</span>
                `).join('')}
              </div>
              <div style="display: flex; gap: 1rem;">
                ${project.link ? `<a href="${project.link}" target="_blank" class="btn">Ver Projeto</a>` : ''}
                ${project.repoUrl ? `<a href="${project.repoUrl}" target="_blank" class="btn btn-secondary">Repositório</a>` : ''}
              </div>
            </div>
          `).join('')}
        </div>
      </section>

      <section id="skills" class="tab-content hidden" style="padding: 4rem 0;">
        <h2 style="font-size: 2rem; margin-bottom: 2rem;">Habilidades</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem;">
          ${profileData.skills.map(skill => `
            <div>
              <h3 style="font-size: 1.2rem; margin-bottom: 1rem; color: #aaa;">${skill.category}</h3>
              <ul style="list-style: none; padding: 0;">
                ${skill.items.map(item => `
                  <li style="margin-bottom: 0.5rem; padding-left: 1rem; border-left: 2px solid #646cff;">${item}</li>
                `).join('')}
              </ul>
            </div>
          `).join('')}
        </div>
      </section>

      <section id="contact" class="tab-content hidden" style="padding: 4rem 0; margin-bottom: 4rem;">
        <h2 style="font-size: 2rem; margin-bottom: 2rem;">Contato</h2>
        <div class="card" style="text-align: center;">
          <p style="font-size: 1.2rem; margin-bottom: 2rem;">Interessado em trabalhar juntos? Entre em contato!</p>
          <div style="display: flex; justify-content: center; gap: 2rem; flex-wrap: wrap;">
            <a href="mailto:${profileData.email}" style="color: inherit; text-decoration: none; display: flex; align-items: center; gap: 0.5rem;">
              <span>✉️</span> ${profileData.email}
            </a>
            <a href="tel:${profileData.phone.replace(/\D/g, '')}" style="color: inherit; text-decoration: none; display: flex; align-items: center; gap: 0.5rem;">
              <span>📱</span> ${profileData.phone}
            </a>
            <a href="${profileData.social.linkedin}" target="_blank" style="color: inherit; text-decoration: none; display: flex; align-items: center; gap: 0.5rem;">
              <span>🔗</span> LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
    
    <footer style="text-align: center; padding: 2rem 0; color: #666; border-top: 1px solid #333;">
      <p>&copy; ${new Date().getFullYear()} ${profileData.name}. Todos os direitos reservados.</p>
    </footer>
  </div>
`

// Tab Logic
const navLinks = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('.tab-content');

function switchTab(targetId: string) {
  // Update Nav
  navLinks.forEach(l => {
    if (l.getAttribute('data-tab') === targetId) {
      l.classList.add('active');
    } else {
      l.classList.remove('active');
    }
  });

  // Update Sections
  sections.forEach(section => {
    if (section.id === targetId) {
      section.classList.remove('hidden');
    } else {
      section.classList.add('hidden');
    }
  });
}

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = (e.target as HTMLElement).getAttribute('data-tab');
    if (targetId) {
      switchTab(targetId);
    }
  });
});

