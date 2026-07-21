/* Roger Perez — portfolio. i18n EN (fuente en el HTML) / ES (overrides aquí) + limpieza del SW viejo. */
(function () {
  'use strict';

  /* ── 1. Matar el service worker del sitio de 2020 ─────────────────────────
     La CRA vieja registró un SW que cachea agresivamente; sin esto, quien ya
     visitó el sitio seguiría viendo la versión de 2020 para siempre. */
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

    hero_hi: 'Hola, soy',
    hero_role: 'Desarrollador Full-Stack',
    hero_tag: 'Seis aplicaciones en producción — diseñadas, construidas, publicadas y operadas de punta a punta. Todo lo de abajo está <strong>vivo y clicable</strong>, no son repos de tutorial.',
    cta_projects: 'Ver los proyectos ↓',
    hero_loc: 'Miami, FL',
    hero_open: 'abierto a roles full-stack, backend e IT',

    sec_projects: 'Proyectos — todos en producción',
    sec_projects_sub: 'Construidos en solitario, de punta a punta: código, tests, CI, deploys, DNS, backups y endurecimiento de seguridad.',
    b_live: 'EN VIVO',
    b_private: 'INFRA PRIVADA',
    l_app: 'App ↗', l_landing: 'Landing ↗', l_demo: 'Demo en vivo ↗', l_code: 'Código ↗', l_site: 'Sitio ↗',
    l_private_code: 'código privado — demo bajo petición',

    p_expedai_what: 'SaaS de load board AI-native para el nicho expedite de EE. UU. — un marketplace de dos lados en tiempo real.',
    p_expedai_1: 'Tablero en tiempo real con el ciclo completo publicar → pujar → adjudicar (change streams de Socket.IO)',
    p_expedai_2: 'Millas de conducción reales con un motor OSRM self-hosted (mapa de EE. UU. de 72 GB)',
    p_expedai_3: 'Analítica de mercado sobre 424K+ cargas históricas reales (mapa de calor + explorador de lanes)',
    p_expedai_4: 'Copilot de IA que redacta pujas — un humano siempre aprueba; cada llamada de IA queda registrada',

    p_closing_what: 'Plataforma de cierres inmobiliarios — la prueba relacional: PostgreSQL, transacciones y agregados SQL.',
    p_closing_1: 'Grafo del deal (partes + checklist de documentos) creado en una sola transacción',
    p_closing_2: 'Transiciones de documentos auditadas (de → a) y milestones de escrow en centavos enteros',
    p_closing_3: 'Dashboard calculado en SQL — GROUP BY / SUM / joins, no en código de aplicación',

    p_kryndel_what: 'Observabilidad open-source de smart contracts para el ecosistema XRPL (EVM Sidechain + XLS-0101 nativo), en mainnet.',
    p_kryndel_1: 'Alertas de eventos decodificados en tiempo real → Telegram, Discord, webhooks firmados',
    p_kryndel_2: 'Cascada de decodificación ABI de 3 niveles y despacho con guardia SSRF (protección DNS-rebinding)',
    p_kryndel_3: 'Billing con Stripe, API keys con rate limiting, 288 tests — Vercel + worker 24/7 self-hosted',

    p_careflow_what: 'Dashboard de operaciones de cuidado (MERN + TypeScript): pacientes, tareas de seguimiento y auditoría, tras auth por roles.',
    p_careflow_1: 'Acceso por roles (admin/staff/viewer), escrituras auditadas, dashboard con $facet de MongoDB',
    p_careflow_2: 'Tablero en vivo por WebSockets; el CI corre los tests contra un MongoDB real en contenedor',
    p_careflow_3: 'Backups nocturnos con restauración probada y documentada',

    p_uscashout_what: 'Dashboard cripto multi-moneda bilingüe — frontend vanilla JS cero-build, backend Express + MongoDB.',
    p_uscashout_1: '9 monedas: técnico, derivados, noticias, ballenas on-chain y watcher de quema XRPL (WebSocket)',
    p_uscashout_2: 'Vista de portafolio con P&L histórico (snapshots diarios + reconstrucción por precios)',
    p_uscashout_3: 'Endurecido tras arreglar un XSS almacenado real: CSP estricta, Chart.js self-hosted, datos etiquetados con honestidad',

    p_hermes_what: 'El agente de IA self-hosted que opera todo lo anterior — mi flota de producción en un servidor Linux.',
    p_hermes_1: 'Ejecuta runbooks de deploy con gates de verificación duros: salida cruda o no pasó',
    p_hermes_2: 'Operaciones de PRs/CI en GitHub, jobs programados, alertas por Telegram, bitácora append-only',
    p_hermes_3: 'Pipeline de búsqueda de empleo con una regla innegociable: nada se envía solo',
    p_hermes_note: 'se cuenta en entrevista — screenshots y bitácora disponibles',

    sec_how: 'Cómo trabajo',
    how_1_t: 'Como un equipo, aun en solitario',
    how_1_p: 'GitHub Flow con main protegida, PRs revisados, Conventional Commits y CI (lint + type-check + tests + build) en cada push.',
    how_2_t: 'Operaciones basadas en evidencia',
    how_2_p: '"Exige la evidencia del efecto, no el relato del efecto." Health checks que tocan la BD, backups que se restauran, deploys verificados con salida cruda.',
    how_3_t: 'Dueño del ciclo completo',
    how_3_p: 'Self-hosted: pm2, MongoDB/PostgreSQL con auth, binds a loopback tras Cloudflare Tunnels, backups nocturnos probados, endurecimiento (CSP, XSS, SSRF).',
    how_4_t: 'IA con adultos en la sala',
    how_4_p: 'Integro LLMs donde ayudan (redacción, triaje, operaciones) con salida validada por esquema, logging, y un humano aprobando lo que importa.',

    sec_exp: 'Experiencia',
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

    sec_skills: 'Habilidades',
    sk_test: 'Testing/CI:',
    sk_sec: 'Seguridad:',
    sk_also: 'Además:',

    sec_contact: 'Hablemos',
    contact_p: '¿Contratas para full-stack, backend o IT? La forma más rápida de evaluarme es clicar los proyectos de arriba — y luego escribirme.',

    foot_1: 'Hecho sin dependencias — HTML/CSS/JS puro, sin framework, sin build step.',
    foot_src: 'Ver el código ↗'
  };

  /* ── 3. Motor i18n ──────────────────────────────────────────────────────── */
  var EN = {};                      // se llena con el contenido original del HTML
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
