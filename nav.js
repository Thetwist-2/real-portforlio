/* nav.js — shared navigation injected into every page
   -------------------------------------------------------
   MOD: To add a new page to the nav, add an entry to `navLinks` below.
*/

const navLinks = [
  { label: 'About',    href: 'index.html' },
  { label: 'Projects', href: 'projects.html' },
  { label: 'Contacts',  href: 'contacts.html' },
];

function buildNav() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  const nav = document.createElement('nav');
  nav.innerHTML = `
    <a class="logo" href="index.html">KG.</a>
    <ul class="nav-links">
      ${navLinks.map(link => `
        <li>
          <a href="${link.href}" class="${currentPage === link.href ? 'active' : ''}">
            ${link.label}
          </a>
        </li>
      `).join('')}
    </ul>
  `;

  document.body.prepend(nav);
}

function buildFooter() {
  const footer = document.createElement('footer');
  footer.innerHTML = `
    <a class="footer-logo" href="index.html">KG.</a>
    <p>&copy; ${new Date().getFullYear()} Kingsley Gyan. Built with care.</p>
    <p style="font-size:0.78rem; color: var(--muted);">GCTU · Ghana · Open to work</p>
  `;
  document.body.appendChild(footer);
}

document.addEventListener('DOMContentLoaded', () => {
  buildNav();
  buildFooter();
});