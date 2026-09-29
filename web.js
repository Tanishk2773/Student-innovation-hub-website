(() => {
  // Website content is kept here so the site can run as static files.
  const categories = [
    { name: 'AI & Data', description: 'Patterns, predictions and smarter decisions.', icon: 'AI', color: '#c9ff53' },
    { name: 'IoT & Robotics', description: 'Connected devices that work in the real world.', icon: 'IO', color: '#58f0cf' },
    { name: 'Web & Apps', description: 'Digital tools for everyday challenges.', icon: '</>', color: '#ac85ff' },
    { name: 'Green Tech', description: 'A lighter footprint, a brighter future.', icon: 'GT', color: '#9de778' },
    { name: 'Health Tech', description: 'Better care through thoughtful design.', icon: '+', color: '#ff8878' }
  ];

  const projects = [
    {
      id: 'campus-energy-lens',
      name: 'Campus Energy Lens',
      category: 'AI & Data',
      description: 'A live dashboard that helps campus buildings spot energy waste and make smarter use of power.',
      members: [
        { name: 'Aarav Mehta', initials: 'AM' },
        { name: 'Riya Kapoor', initials: 'RK' },
        { name: 'Jay Shah', initials: 'JS' }
      ],
      art: 'ai',
      status: 'In progress'
    },
    {
      id: 'sproutsense',
      name: 'SproutSense',
      category: 'IoT & Robotics',
      description: 'An affordable sensor kit that gives community gardens the data they need to grow with less water.',
      members: [
        { name: 'Nisha Patel', initials: 'NP' },
        { name: 'Vihaan Desai', initials: 'VD' },
        { name: 'Aarav Mehta', initials: 'AM' }
      ],
      art: 'iot',
      status: 'In progress'
    },
    {
      id: 'openshelf',
      name: 'OpenShelf',
      category: 'Web & Apps',
      description: 'A student-built book exchange that makes it easier to lend, discover and pass on great reads.',
      members: [
        { name: 'Leena Bose', initials: 'LB' },
        { name: 'Ethan Kim', initials: 'EK' }
      ],
      art: 'web',
      status: 'Prototype'
    },
    {
      id: 'second-life-studio',
      name: 'Second Life Studio',
      category: 'Green Tech',
      description: 'A materials library connecting student makers with reusable supplies from local businesses.',
      members: [
        { name: 'Tara Rao', initials: 'TR' },
        { name: 'Chris Nair', initials: 'CN' },
        { name: 'Dev Malhotra', initials: 'DM' }
      ],
      art: 'green',
      status: 'In progress'
    },
    {
      id: 'pulsepath',
      name: 'PulsePath',
      category: 'Health Tech',
      description: 'A gentle habit companion designed with students to make everyday wellbeing feel more achievable.',
      members: [
        { name: 'Sara Khan', initials: 'SK' },
        { name: 'Jamie Roy', initials: 'JR' }
      ],
      art: 'health',
      status: 'Research'
    },
    {
      id: 'wayfinder',
      name: 'Wayfinder',
      category: 'Web & Apps',
      description: 'An accessible campus map with quieter routes, step-free entrances and student-submitted tips.',
      members: [
        { name: 'Mina Ellis', initials: 'ME' },
        { name: 'Asha Singh', initials: 'AS' },
        { name: 'Priya Kulkarni', initials: 'PK' }
      ],
      art: 'web',
      status: 'Prototype'
    }
  ];

  const team = [
    {
      name: 'Maya Chen',
      role: 'Hub Coordinator',
      initials: 'MC',
      bio: 'Keeps the hub open, welcoming and full of possibility.'
    },
    {
      name: 'Dr. Arjun Rao',
      role: 'Faculty Mentor - Engineering',
      initials: 'AR',
      bio: 'Helps teams turn first sketches into working prototypes.'
    },
    {
      name: 'Leila Brooks',
      role: 'Faculty Mentor - Design',
      initials: 'LB',
      bio: 'Guides human-centred research and clear, thoughtful design.'
    },
    {
      name: 'Samir Patel',
      role: 'Student Community Lead',
      initials: 'SP',
      bio: 'Connects curious students with projects and collaborators.'
    }
  ];

  const $ = selector => document.querySelector(selector);
  const escapeHTML = value => String(value).replace(/[&<>"']/g, character => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  })[character]);

  function observeReveals(elements) {
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      elements.forEach(element => element.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12 });

    elements.forEach(element => observer.observe(element));
  }

  function setupNavigation() {
    const menuButton = $('.menu-toggle');
    const navLinks = $('.nav-links');

    menuButton?.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(isOpen));
    });

    navLinks?.addEventListener('click', event => {
      if (!event.target.closest('a')) return;
      navLinks.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
    });
  }

  function projectCard(project, index) {
    const teamNames = project.members.map(member => member.name);

    return `
      <article class="project-card reveal">
        <a
          class="project-card-link"
          href="project.html?id=${encodeURIComponent(project.id)}"
          aria-label="View ${escapeHTML(project.name)} project"
        >
          <div
            class="project-art ${escapeHTML(project.art)}"
            role="img"
            aria-label="Abstract project preview for ${escapeHTML(project.name)}"
          >
            <span class="art-stamp">STUDENT PROJECT / 0${index + 1}</span>
            <span class="art-num">HUB &mdash; ${String(index + 1).padStart(2, '0')}</span>
          </div>
          <div class="project-info">
            <div class="project-meta">
              <span class="tag">${escapeHTML(project.category)}</span>
              <span class="project-status">${escapeHTML(project.status)}</span>
            </div>
            <h3>${escapeHTML(project.name)}</h3>
            <p>${escapeHTML(project.description)}</p>
            <div class="project-foot">
              <span class="mini-avatars" aria-label="${teamNames.map(escapeHTML).join(', ')}">
                ${project.members.map(member => `
                  <i
                    class="mini-avatar"
                    title="${escapeHTML(member.name)}"
                    aria-hidden="true"
                  >${escapeHTML(member.initials)}</i>
                `).join('')}
              </span>
              <span>${teamNames.length} makers <span class="project-open">VIEW PROJECT &#8599;</span></span>
            </div>
          </div>
        </a>
      </article>`;
  }

  function renderTeam(people) {
    return people.map(person => `
      <article class="person reveal">
        <div class="person-top">
          <span class="person-avatar" aria-hidden="true">${escapeHTML(person.initials)}</span>
          <div>
            <h3>${escapeHTML(person.name)}</h3>
            <p class="role">${escapeHTML(person.role)}</p>
          </div>
        </div>
        <p>${escapeHTML(person.bio)}</p>
      </article>`).join('');
  }

  function renderProjectDetail() {
    const projectId = new URLSearchParams(location.search).get('id');
    const project = projects.find(item => item.id === projectId);

    if (!project) {
      $('#project-detail').innerHTML = `
        <section class="section wrap">
          <p class="load-error">That project could not be found. Browse the projects page to see all projects.</p>
          <a class="text-link" href="projects.html">Browse projects <span>&#8599;</span></a>
        </section>`;
      return;
    }

    const index = projects.indexOf(project);
    const memberNames = project.members.map(member => member.name);

    $('#project-detail').innerHTML = `
      <section class="project-detail wrap">
        <a class="back-link" href="projects.html">&#8592; ALL PROJECTS</a>
        <div class="project-art detail-hero-art ${escapeHTML(project.art)}">
          <span class="art-stamp">STUDENT PROJECT / 0${index + 1}</span>
          <span class="art-num">HUB &mdash; ${String(index + 1).padStart(2, '0')}</span>
        </div>
        <div class="detail-layout">
          <div class="detail-main">
            <span class="tag">${escapeHTML(project.category)}</span>
            <h1>${escapeHTML(project.name)}</h1>
            <p>${escapeHTML(project.description)}</p>
            <p>This student-led team is shaping an early idea into a useful, thoughtful solution. The Hub brings together skills in research, design and prototyping to explore the challenge and test what works.</p>
          </div>
          <aside class="detail-aside">
            <div class="eyebrow">PROJECT SNAPSHOT</div>
            <div class="project-status">${escapeHTML(project.status)}</div>
            <div class="mini-avatars" aria-label="${memberNames.map(escapeHTML).join(', ')}">
              ${project.members.map(member => `
                <i class="mini-avatar" title="${escapeHTML(member.name)}">${escapeHTML(member.initials)}</i>
              `).join('')}
            </div>
            <p><b>Team members</b><br>${memberNames.map(escapeHTML).join('<br>')}</p>
            <a class="button primary" href="contact.html">Ask about this project <span>&#8599;</span></a>
          </aside>
        </div>
      </section>`;
  }

  function setupContactForm() {
    const form = $('#contact-form');
    if (!form) return;

    const feedback = $('#form-feedback');
    const submitButton = form.querySelector('[type="submit"]');

    form.addEventListener('submit', event => {
      event.preventDefault();
      if (!form.reportValidity()) return;

      const formData = new FormData(form);
      const submission = {
        name: formData.get('name').trim(),
        email: formData.get('email').trim(),
        interest: formData.get('interest').trim(),
        message: formData.get('message').trim(),
        createdAt: new Date().toISOString()
      };

      submitButton.disabled = true;
      feedback.classList.remove('error');

      try {
        const savedMessages = JSON.parse(localStorage.getItem('student-hub-messages') || '[]');
        savedMessages.push(submission);
        localStorage.setItem('student-hub-messages', JSON.stringify(savedMessages));
        feedback.textContent = 'Thanks! Your note has been saved in this browser.';
        form.reset();
      } catch {
        feedback.textContent = 'Your browser could not save the note. Please try again in a regular browser window.';
        feedback.classList.add('error');
      } finally {
        submitButton.disabled = false;
      }
    });
  }

  function renderHome() {
    $('#project-count').textContent = String(projects.length).padStart(2, '0');

    $('#category-grid').innerHTML = categories.map((category, index) => {
      const count = projects.filter(project => project.category === category.name).length;
      return `
        <a
          class="focus-card reveal"
          style="--accent:${category.color}"
          href="projects.html?category=${encodeURIComponent(category.name)}"
        >
          <span class="focus-num">0${index + 1} / ${count} PROJECTS</span>
          <span class="focus-icon">${escapeHTML(category.icon)}</span>
          <h3>${escapeHTML(category.name)}</h3>
          <p>${escapeHTML(category.description)}</p>
        </a>`;
    }).join('');

    $('#featured-projects').innerHTML = projects.slice(0, 3).map(projectCard).join('');
    $('#featured-team').innerHTML = renderTeam(team);
    observeReveals(document.querySelectorAll('#category-grid .reveal, #featured-projects .reveal, #featured-team .reveal'));
  }

  function renderProjects() {
    const filterWrap = $('#filters');
    const search = $('#project-search');
    const params = new URLSearchParams(location.search);
    let activeCategory = categories.some(category => category.name === params.get('category'))
      ? params.get('category')
      : 'All';

    filterWrap.innerHTML = ['All', ...categories.map(category => category.name)].map(category => {
      const count = category === 'All'
        ? projects.length
        : projects.filter(project => project.category === category).length;

      return `
        <button
          class="filter"
          type="button"
          aria-pressed="${activeCategory === category}"
          data-filter="${escapeHTML(category)}"
        >${escapeHTML(category)} (${count})</button>`;
    }).join('');

    function updateResults() {
      const query = search.value.trim().toLowerCase();
      const visibleProjects = projects.filter(project => {
        const matchesCategory = activeCategory === 'All' || project.category === activeCategory;
        const searchableText = `${project.name} ${project.description} ${project.category}`.toLowerCase();
        return matchesCategory && searchableText.includes(query);
      });

      $('#project-grid').innerHTML = visibleProjects.length
        ? visibleProjects.map(projectCard).join('')
        : '<p class="load-error">No projects match. Try another search or category.</p>';

      observeReveals(document.querySelectorAll('#project-grid .reveal'));
    }

    filterWrap.addEventListener('click', event => {
      const button = event.target.closest('[data-filter]');
      if (!button) return;

      activeCategory = button.dataset.filter;
      filterWrap.querySelectorAll('.filter').forEach(filter => {
        filter.setAttribute('aria-pressed', String(filter === button));
      });
      updateResults();
    });

    search.addEventListener('input', updateResults);
    updateResults();
  }

  function initializePage() {
    const page = document.body.dataset.page;

    setupNavigation();
    observeReveals(document.querySelectorAll('.reveal'));

    if (page === 'home') renderHome();
    if (page === 'projects') renderProjects();
    if (page === 'team') $('#team-grid').innerHTML = renderTeam(team);
    if (page === 'project') renderProjectDetail();
    if (page === 'contact') setupContactForm();

    observeReveals(document.querySelectorAll('.reveal:not(.is-visible)'));
  }

  initializePage();
})();
