function navigateTo(path) {
  history.pushState(null, null, path);
  router();
}

function router() {
  const routes = {
    '/': '/pages/home.html',
    '/raicing': '/pages/raicing.html',
    '/adventures': '/pages/adventures.html',
    '/sports': '/pages/sports.html',
    '/horrors': '/pages/horrors.html',
    '/shooters': '/pages/shooters.html',
    '/details-page': '/pages/details-page.html'
  };

  const path = window.location.pathname;
  const route = routes[path];

  fetch(route)
  .then(response => response.text())
  .then(html => {
    document.getElementById('app').innerHTML = html;
  });
}

window.addEventListener('popstate', router);

document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', e => {
    if (e.target.matches('[data-link]')) {      
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });

  router();
});
