document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('.collapsible h2');
  sections.forEach(h2 => {
    h2.addEventListener('click', () => {
      const section = h2.parentElement;
      section.classList.toggle('collapsed');
      const content = section.querySelector('ul');
      if (content) {
        content.style.display = content.style.display === 'none' ? 'block' : 'none';
      }
    });
  });
});