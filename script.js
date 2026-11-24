/* Skylingoo Faridabad — nav, reveal animations, demo form -> WhatsApp */

(function () {
  var nav = document.getElementById('nav');
  var toggle = document.getElementById('nav-toggle');
  var links = document.getElementById('nav-links');

  // Sticky nav border once scrolled
  var onScroll = function () {
    nav.classList.toggle('scrolled', window.scrollY > 10);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Mobile menu
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    links.addEventListener('click', function (event) {
      if (event.target.closest('a')) {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Scroll reveal
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var reveals = document.querySelectorAll('.reveal');

  if (!reduced && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    reveals.forEach(function (el) { observer.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }

  // Demo form -> prefilled WhatsApp message (no backend needed)
  var form = document.getElementById('demo-form');
  var ok = document.getElementById('form-ok');
  var PHONE = '919315295511';

  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();

      var data = new FormData(form);
      var name = String(data.get('name') || '').trim();
      var phone = String(data.get('phone') || '').trim();
      var level = String(data.get('level') || 'Not sure yet');
      var batch = String(data.get('batch') || 'Either works');

      var message =
        'Hello Skylingoo, I would like to book a free demo class.\n\n' +
        'Name: ' + name + '\n' +
        'Phone: ' + phone + '\n' +
        'Level: ' + level + '\n' +
        'Preferred batch: ' + batch;

      var url = 'https://wa.me/' + PHONE + '?text=' + encodeURIComponent(message);

      window.open(url, '_blank', 'noopener');

      if (ok) {
        var fallback = ok.querySelector('a');
        if (fallback) fallback.href = url;
        ok.classList.add('show');
      }
    });
  }
})();
