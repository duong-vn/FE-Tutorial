
const navItems = document.querySelectorAll('.nav-item');

navItems.forEach((item) => {
  item.addEventListener('click', () => {
    // xoa tat ca tinh trang
    navItems.forEach((nav) => {
      nav.classList.remove('active', 'text-red-600');
      nav.querySelector('.nav-indicator').classList.add('hidden');
    });

    // them trang thai
    item.classList.add('active', 'text-red-600');
    item.querySelector('.nav-indicator').classList.remove('hidden');
  });
});


const langItems = document.querySelectorAll('.lang-item');

langItems.forEach((item) => {
  item.addEventListener('click', () => {
    // xoa tat ca tinh trang
    langItems.forEach((nav) => {
      nav.classList.remove('active', 'px-[13px]', 'py-[1px]', 'border', 'rounded-sm', 'border-red', 'text-red-600');
      nav.classList.add('text-gray-400');
    });

    // them trang thai
    item.classList.add('active', 'px-[13px]', 'py-[1px]', 'border', 'rounded-sm', 'border-red', 'text-red-600');
    item.classList.remove('text-gray-600');
  });
});

const counterArea = document.querySelector('.project-counter-area');
const counters = document.querySelectorAll('.project-counter');

if (counterArea && counters.length) {
  const easeOutQuint = (progress) => 1 - Math.pow(1 - progress, 5);
  const animateCounter = (counter) => {
    const target = Number(counter.dataset.target);
    const duration = 1800;
    let startTime;
    const update = (time) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);
      counter.textContent = Math.round(target * easeOutQuint(progress));
      if (progress < 1) requestAnimationFrame(update);
      else counter.textContent = target;
    };
    requestAnimationFrame(update);
  };
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      counters.forEach(animateCounter);
      observer.disconnect();
    }
  }, { threshold: 0.35 });
  observer.observe(counterArea);
}

const projectSlides = [...document.querySelectorAll('.project-slide')];
const previousProjectButton = document.querySelector('.project-prev');
const nextProjectButton = document.querySelector('.project-next');
let activeProject = 0;
let projectAutoplay;

const showProject = (index) => {
  activeProject = (index + projectSlides.length) % projectSlides.length;
  projectSlides.forEach((slide, slideIndex) => {
    const isActive = slideIndex === activeProject;
    slide.classList.toggle('opacity-100', isActive);
    slide.classList.toggle('opacity-0', !isActive);
    slide.classList.toggle('pointer-events-none', !isActive);
    slide.setAttribute('aria-hidden', String(!isActive));
  });
};

const restartProjectAutoplay = () => {
  clearInterval(projectAutoplay);
  projectAutoplay = setInterval(() => showProject(activeProject + 1), 5000);
};

if (projectSlides.length && previousProjectButton && nextProjectButton) {
  previousProjectButton.addEventListener('click', () => {
    showProject(activeProject - 1);
    restartProjectAutoplay();
  });
  nextProjectButton.addEventListener('click', () => {
    showProject(activeProject + 1);
    restartProjectAutoplay();
  });
  showProject(0);
  restartProjectAutoplay();
}

