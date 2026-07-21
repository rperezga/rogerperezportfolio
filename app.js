/* Roger Perez — portfolio (Obsidian Synth). i18n EN (fuente en HTML) / ES (overrides) + limpieza SW. */
(function () {
  'use strict';

  /* ── 1. Matar el service worker del sitio de 2020 (visitantes antiguos) ── */
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations()
      .then(function (regs) { regs.forEach(function (r) { r.unregister(); }); })
      .catch(function () {});
    if (window.caches && caches.keys) {
      caches.keys().then(function (keys) { keys.forEach(function (k) { caches.delete(k); }); }).catch(function () {});
    }
  }

  /* ── 2. Diccionario ES (el inglés vive en el HTML — SEO sin JS) ─────────── */
  var ES = {
    nav_projects: 'Proyectos',
    nav_how: 'Cómo trabajo',
    nav_exp: 'Experiencia',
    nav_contact: 'Contacto',
    nav_hire: 'Contrátame',

    hero_eyebrow: 'DESARROLLADOR FULL-STACK — MIAMI, FL',
    hero_h1: 'Construyo y opero <span class="grad">software real</span>.',
    hero_tag: 'Seis aplicaciones en producción — diseñadas, construidas, publicadas y operadas de punta a punta. Todo lo de aquí está <strong>vivo y clicable</strong>, no son repos de tutorial. Del metal al navegador.',
    cta_proof: 'Ver las pruebas ↓',
    st_1: 'APPS EN PRODUCCIÓN',
    st_2: 'CARGAS REALES ANALIZADAS',
    st_3: 'TESTS EN UNA SUITE',
    st_4: 'SELF-HOSTED Y OPERADO',

    k_projects: 'PRUEBA DE TRABAJO',
    sec_projects: 'Trabajos seleccionados',
    sec_projects_sub: 'Sistemas de nivel producción que diseñé, construí y desplegué — en solitario, de punta a punta: código, tests, CI, deploys, DNS, backups y endurecimiento de seguridad.',
    b_live: 'EN VIVO',
    b_private: 'INFRA PRIVADA',
    l_live: 'En vivo ↗', l_landing: 'Landing ↗', l_code: 'Código ↗',
    l_private_code: '// código privado — demo bajo petición',

    p_expedai_what: 'SaaS de load board AI-native para el nicho expedite de EE. UU. — un marketplace de dos lados en tiempo real.',
    p_expedai_1: 'Ciclo completo publicar → pujar → adjudicar sobre change streams de Socket.IO',
    p_expedai_2: 'Millas de conducción reales con un motor OSRM self-hosted (mapa de EE. UU. de 72 GB)',
    p_expedai_3: 'Analítica de mercado sobre 424K+ cargas históricas reales',
    p_expedai_4: 'Copilot de IA que redacta pujas — un humano siempre aprueba',

    p_closing_what: 'Plataforma de cierres inmobiliarios — la prueba relacional: PostgreSQL, transacciones y agregados SQL.',
    p_closing_1: 'Grafo del deal creado en una sola transacción',
    p_closing_2: 'Transiciones de documentos auditadas · escrow en centavos enteros',
    p_closing_3: 'Dashboard calculado en SQL puro',

    p_kryndel_what: 'Observabilidad open-source de smart contracts para el ecosistema XRPL, en mainnet.',
    p_kryndel_1: 'Alertas de eventos decodificados → Telegram, Discord, webhooks firmados',
    p_kryndel_2: 'Despacho con guardia SSRF y protección DNS-rebinding',
    p_kryndel_3: 'Billing con Stripe · API keys + rate limiting · 288 tests',

    p_careflow_what: 'Dashboard de operaciones de cuidado (MERN + TypeScript): pacientes, tareas de seguimiento y auditoría.',
    p_careflow_1: 'Acceso por roles · escrituras auditadas · dashboard con $facet',
    p_careflow_2: 'Tablero en vivo por WebSockets · CI contra MongoDB real',
    p_careflow_3: 'Backups nocturnos con restauración probada',

    p_uscashout_what: 'Analítica cripto multi-moneda bilingüe — frontend vanilla JS cero-build, backend Express + MongoDB.',
    p_uscashout_1: '9 monedas · watcher de quema XRPL por WebSocket',
    p_uscashout_2: 'Portafolio con P&L histórico',
    p_uscashout_3: 'Endurecido tras arreglar un XSS almacenado real (CSP estricta)',

    p_hermes_what: 'El agente de IA self-hosted que opera todo lo anterior — mi flota de producción en un servidor Linux. Ejecuta runbooks de deploy con gates de verificación duros (salida cruda o no pasó), lleva las operaciones de PRs/CI en GitHub y los jobs programados, y conduce un pipeline de búsqueda de empleo donde nada se envía solo.',
    p_hermes_note: '// se cuenta en entrevista — screenshots y bitácora disponibles',

    k_how: 'MÉTODO',
    sec_how: 'La ética de ingeniería',
    sec_how_sub: 'No solo escribo código — diseño sistemas que siguen funcionando cuando dejo de mirarlos.',
    how_1_t: 'Como un equipo, aun en solitario',
    how_1_p: 'GitHub Flow con main protegida, PRs revisados, Conventional Commits y CI (lint + type-check + tests + build) en cada push.',
    how_2_t: 'Operaciones basadas en evidencia',
    how_2_p: '"Exige la evidencia del efecto, no el relato del efecto." Health checks que tocan la BD, backups que se restauran, deploys verificados con salida cruda.',
    how_3_t: 'Dueño del ciclo completo',
    how_3_p: 'Self-hosted: pm2, MongoDB/PostgreSQL con auth, binds a loopback tras Cloudflare Tunnels, backups nocturnos probados, endurecimiento (CSP, XSS, SSRF).',
    how_4_t: 'IA con adultos en la sala',
    how_4_p: 'LLMs donde ayudan — redacción, triaje, operaciones — con salida validada por esquema, logging, y un humano aprobando lo que importa.',

    k_exp: 'TRAYECTORIA',
    sec_exp: 'Línea de tiempo profesional',
    x_now: 'Actualidad',
    x1_role: 'Desarrollador Full-Stack independiente',
    x1_p: 'Diseñé, construí y opero las seis aplicaciones en producción de arriba — en solitario, de punta a punta.',
    x2_role: 'Especialista de Soporte IT Tier 2',
    x2_p: 'Soporte Windows empresarial: endpoints, identidad, herramientas remotas y escalaciones a gran escala.',
    x3_role: 'Administrador de Redes y Soporte Técnico',
    x3_p: 'Administración de red LAN, soporte a usuarios y mantenimiento de infraestructura para un operador de salud.',
    x4_role: 'Desarrollador Web y Soporte',
    x4_p: 'Desarrollo web y soporte técnico para software de logística.',
    x5_role: 'Ingeniería (B.Sc.)',
    x5_p: 'Título de ingeniería.',

    k_skills: 'STACK',
    sec_skills: 'El toolkit',
    tk_1: 'INGENIERÍA CORE',
    tk_2: 'TESTING Y CALIDAD',
    tk_3: 'OPS Y SEGURIDAD',
    tk_4: 'IA E INTEGRACIONES',

    sec_contact: 'La forma más rápida de evaluarme<br />es clicar mi trabajo.',
    contact_p: '¿Contratas para full-stack, backend o IT? Hablemos.',

    foot_1: 'Hecho sin dependencias — HTML/CSS/JS puro, sin framework, sin build step.',
    foot_src: 'Ver el código ↗'
  };

  /* ── 3. Motor i18n ──────────────────────────────────────────────────────── */
  var EN = {};
  var nodes = document.querySelectorAll('[data-i18n]');
  nodes.forEach(function (el) { EN[el.getAttribute('data-i18n')] = el.innerHTML; });

  function apply(lang) {
    var dict = (lang === 'es') ? ES : EN;
    nodes.forEach(function (el) {
      var k = el.getAttribute('data-i18n');
      if (dict[k] !== undefined) el.innerHTML = dict[k];
    });
    document.documentElement.lang = lang;
    var btn = document.getElementById('lang-toggle');
    if (btn) btn.textContent = (lang === 'es') ? 'EN' : 'ES';
    try { localStorage.setItem('lang', lang); } catch (e) {}
  }

  var saved = null;
  try { saved = localStorage.getItem('lang'); } catch (e) {}
  var initial = saved || ((navigator.language || '').toLowerCase().indexOf('es') === 0 ? 'es' : 'en');
  if (initial === 'es') apply('es');

  var toggle = document.getElementById('lang-toggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      apply(document.documentElement.lang === 'es' ? 'en' : 'es');
    });
  }
})();
