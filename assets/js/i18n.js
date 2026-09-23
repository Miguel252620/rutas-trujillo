/* ===========================================================
   i18n.js — alterna español / inglés en toda la página
   Cada página define window.PAGE_I18N = { es: {...}, en: {...} }
   y marca los elementos con data-i18n="clave"
   =========================================================== */
(function(){
  const STORAGE_KEY = 'rutas-trujillo-lang';

  function getLang(){
    return localStorage.getItem(STORAGE_KEY) || 'es';
  }

  function setLang(lang){
    localStorage.setItem(STORAGE_KEY, lang);
    applyLang(lang);
  }

  function applyLang(lang){
    const dict = (window.PAGE_I18N && window.PAGE_I18N[lang]) || {};

    document.querySelectorAll('[data-i18n]').forEach(function(el){
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined){
        el.innerHTML = dict[key];
      }
    });

    document.documentElement.setAttribute('lang', lang === 'en' ? 'en' : 'es');

    const toggleBtn = document.getElementById('lang-toggle');
    if (toggleBtn){
      toggleBtn.textContent = lang === 'es' ? 'EN' : 'ES';
      toggleBtn.setAttribute('aria-label', lang === 'es' ? 'Switch to English' : 'Cambiar a español');
    }
  }

  document.addEventListener('DOMContentLoaded', function(){
    const lang = getLang();
    applyLang(lang);

    const toggleBtn = document.getElementById('lang-toggle');
    if (toggleBtn){
      toggleBtn.addEventListener('click', function(){
        setLang(getLang() === 'es' ? 'en' : 'es');
      });
    }
  });
})();
