
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

