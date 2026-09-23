/* ===========================================================
   main.js — sistema de sellos (logros) tipo "pasaporte de viajero"
   Guarda en localStorage qué experiencias ha "sellado" el usuario.
   =========================================================== */
(function(){
  const STORAGE_KEY = 'rutas-trujillo-stamps';

  function getStamps(){
    try{
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    }catch(e){ return []; }
  }

  function saveStamps(list){
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  }

  function toggleStamp(id){
    let stamps = getStamps();
    if (stamps.includes(id)){
      stamps = stamps.filter(s => s !== id);
    } else {
      stamps.push(id);
    }
    saveStamps(stamps);
    return stamps;
  }

  function renderStampButtons(){
    const stamps = getStamps();
    document.querySelectorAll('.stamp-btn').forEach(function(btn){
      const id = btn.getAttribute('data-experience-id');
      if (!id) return;
      const isStamped = stamps.includes(id);
      btn.setAttribute('data-stamped', isStamped ? 'true' : 'false');
      const label = btn.querySelector('.stamp-label');
      if (label){
        const lang = localStorage.getItem('rutas-trujillo-lang') || 'es';
        if (lang === 'en'){
          label.textContent = isStamped ? 'Stamped' : 'Stamp this stop';
        } else {
          label.textContent = isStamped ? 'Sellado' : 'Sellar esta parada';
        }
      }
      btn.addEventListener('click', function(){
        toggleStamp(id);
        renderStampButtons();
        updatePassportBar();
      }, { once:true });
    });
  }

  function updatePassportBar(){
    const totalEl = document.querySelector('[data-total-experiences]');
    const fillEl = document.querySelector('.passport-fill');
    const countEl = document.querySelector('[data-stamp-count]');
    if (!totalEl || !fillEl) return;
    const total = parseInt(totalEl.getAttribute('data-total-experiences'), 10) || 0;
    const stamps = getStamps();
    const relevant = stamps.filter(id => id.indexOf(totalEl.getAttribute('data-route-prefix')) === 0);
    const pct = total ? Math.min(100, Math.round((relevant.length / total) * 100)) : 0;
    fillEl.style.width = pct + '%';
    if (countEl) countEl.textContent = relevant.length + '/' + total;
  }

  document.addEventListener('DOMContentLoaded', function(){
    renderStampButtons();
    updatePassportBar();
  });
})();
