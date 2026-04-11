const demoData = {
  manufactura: {
    gerencial: {
      chat: [
        'ISO Coach: Que objetivo financiero quieres proteger este trimestre?',
        'Lider: Reducir merma y retrabajos sin frenar despachos.',
        'ISO Coach: Perfecto. Voy a traducir esto a objetivo de calidad y control de proceso.',
      ],
      twin: [
        ['Motor IA', 'Perfil Organizacional activo'],
        ['Oportunidad de ahorro', 'Merma por lote -12%'],
        ['Objetivo prioritario', 'Reducir retrabajo en linea critica'],
        ['Mapa de proceso', 'Produccion -> Inspeccion -> Liberacion'],
      ],
      progress: 24,
    },
    tecnico: {
      chat: [
        'ISO Coach: Cual es tu proceso con mayor variacion de no conformidades?',
        'Usuario: Ensamble final por cambios de especificacion.',
        'ISO Coach: Generando matriz causa-riesgo y control documental asociado.',
      ],
      twin: [
        ['Motor IA', 'Impacto y Ahorro activo'],
        ['Riesgo principal', 'Desviacion de especificacion en ensamble'],
        ['Control propuesto', 'Validacion de instruccion versionada'],
        ['Salida ISO', 'Registro de trazabilidad por lote'],
      ],
      progress: 27,
    },
  },
  servicios: {
    gerencial: {
      chat: [
        'ISO Coach: Donde pierdes clientes por variabilidad del servicio?',
        'Lider: En tiempos de respuesta y seguimiento de incidentes.',
        'ISO Coach: Vamos a convertirlo en objetivo SLA + experiencia de cliente.',
      ],
      twin: [
        ['Motor IA', 'Proposito y Alineacion activo'],
        ['Indicador clave', 'Reclamos por mil atenciones'],
        ['Objetivo prioritario', 'Reducir tiempo medio de respuesta'],
        ['Accion inmediata', 'Flujo estandar de atencion critica'],
      ],
      progress: 22,
    },
    tecnico: {
      chat: [
        'ISO Coach: Que evidencia falta para cerrar auditoria interna?',
        'Usuario: Registros de seguimiento de casos y analisis de causa.',
        'ISO Coach: Preparando estructura de evidencia y plan CAPA.',
      ],
      twin: [
        ['Motor IA', 'Impacto y Ahorro activo'],
        ['Gap de evidencia', 'Seguimiento de casos incompleto'],
        ['Plan ISO', 'Formato CAPA + cierre por responsable'],
        ['Hito', 'Auditoria interna lista en 4 semanas'],
      ],
      progress: 25,
    },
  },
  distribucion: {
    gerencial: {
      chat: [
        'ISO Coach: Que impacto te genera el quiebre de stock en rentabilidad?',
        'Lider: Perdemos ventas y sube el costo logistico por urgencias.',
        'ISO Coach: Te propongo objetivo OTIF y tablero de alertas operativas.',
      ],
      twin: [
        ['Motor IA', 'Perfil Organizacional activo'],
        ['Indicador clave', 'OTIF por cliente prioritario'],
        ['Oportunidad de ahorro', 'Costo logistico por pedido -8%'],
        ['Flujo base', 'Compra -> Recepcion -> Despacho'],
      ],
      progress: 23,
    },
    tecnico: {
      chat: [
        'ISO Coach: Existe trazabilidad completa desde recepcion hasta devolucion?',
        'Usuario: Parcial, depende del centro de distribucion.',
        'ISO Coach: Generando mapa de puntos de control y riesgo operativo.',
      ],
      twin: [
        ['Motor IA', 'Proposito y Alineacion activo'],
        ['Riesgo principal', 'Trazabilidad incompleta por bodega'],
        ['Control sugerido', 'Checklist unico de recepcion y devolucion'],
        ['Prioridad', 'Estandarizar codificacion de lote'],
      ],
      progress: 26,
    },
  },
};

const industryCards = {
  manufactura: {
    title: 'Manufactura: menos merma, mas capacidad util',
    description: 'IsoSmart conecta calidad de proceso con costo por lote para que la mejora continua tenga impacto financiero claro.',
    bullets: [
      'KPI central: costo de no calidad por linea',
      'Objetivo sugerido: retrabajo por orden de produccion',
      'Resultado buscado: estabilidad operativa y margen protegido',
    ],
  },
  servicios: {
    title: 'Servicios: estandarizar experiencia sin perder velocidad',
    description: 'El sistema ayuda a convertir variabilidad de atencion en procesos repetibles con trazabilidad y responsabilidad clara.',
    bullets: [
      'KPI central: reclamos por mil atenciones',
      'Objetivo sugerido: tiempo de respuesta a incidencias',
      'Resultado buscado: retencion de clientes y reputacion',
    ],
  },
  distribucion: {
    title: 'Importacion y distribucion: control de promesa y costo logistico',
    description: 'La IA identifica cuellos operativos y prioriza acciones para proteger OTIF y evitar reprocesos de bodega.',
    bullets: [
      'KPI central: OTIF por segmento',
      'Objetivo sugerido: costo logistico por pedido',
      'Resultado buscado: cumplimiento de entrega con menor variacion',
    ],
  },
};

const toneMap = {
  gerencial: 'gerencial',
  tecnico: 'tecnico',
};

const personaHero = {
  ceo: {
    title: 'Haz que ISO 9001 deje de ser costo y empiece a proteger tu margen.',
    lead: 'Si hoy no tienes visibilidad del costo de no calidad, estás perdiendo rentabilidad. IsoSmart alinea sistema de gestión con dinero, clientes y ejecución en 30 minutos.',
    primaryText: 'Agendar demo ejecutiva',
    primaryHref: 'mailto:felipe@smart3ai.com?subject=Demo%20ejecutiva%20Smart3AI',
    secondaryText: 'Evaluar impacto financiero',
    secondaryHref: '#resultado-financiero',
  },
  quality: {
    title: 'Pasa de checklist de auditoría a sistema ISO ejecutable con evidencia viva.',
    lead: 'IsoSmart estructura alcance, procesos, riesgos, política y roadmap desde onboarding conversacional. AdminApps mantiene el gobierno central para escalar el ecosistema.',
    primaryText: 'Ver demo técnico',
    primaryHref: '#demo',
    secondaryText: 'Solicitar sesión para calidad',
    secondaryHref: 'mailto:felipe@smart3ai.com?subject=Demo%20para%20Lider%20de%20Calidad',
  },
  ops: {
    title: 'Estandariza operación y reduce fricción entre áreas con IA aplicada.',
    lead: 'Smart3AI conecta producto y control center para que operaciones, calidad y dirección trabajen sobre la misma verdad, con objetivos medibles y ejecución continua.',
    primaryText: 'Ver rutas por industria',
    primaryHref: '#industrias',
    secondaryText: 'Solicitar sesión operativa',
    secondaryHref: 'mailto:felipe@smart3ai.com?subject=Demo%20para%20Operaciones',
  },
};

const experimentConfig = {
  a: {
    key: 'A',
    label: 'A Financiero',
    eyebrow: 'Smart3AI | crecimiento rentable con IA aplicada',
    defaultPersona: 'ceo',
  },
  b: {
    key: 'B',
    label: 'B Técnico',
    eyebrow: 'Smart3AI | precisión técnica ISO + ejecución operativa',
    defaultPersona: 'quality',
  },
};

const adminAppsConfig = {
  endpoint: window.localStorage.getItem('smart3ai_adminapps_endpoint')
    || 'http://127.0.0.1:8000/api/integration/landing-analytics/events/',
  apiKey: window.localStorage.getItem('smart3ai_adminapps_api_key')
    || 'landing-analytics-dev-key-2026',
};

let currentPersona = 'ceo';
let activeExperiment = 'A';
let analyticsSyncInFlight = false;

function getExperimentVariant() {
  const params = new URLSearchParams(window.location.search);
  const forced = params.get('ab');

  if (forced && (forced.toLowerCase() === 'a' || forced.toLowerCase() === 'b')) {
    const variant = forced.toLowerCase();
    window.localStorage.setItem('smart3ai_ab_variant', variant);
    return variant;
  }

  const persisted = window.localStorage.getItem('smart3ai_ab_variant');
  if (persisted === 'a' || persisted === 'b') {
    return persisted;
  }

  const randomVariant = Math.random() < 0.5 ? 'a' : 'b';
  window.localStorage.setItem('smart3ai_ab_variant', randomVariant);
  return randomVariant;
}

function ensureAnalyticsStore() {
  if (!window.smart3aiAnalytics) {
    window.smart3aiAnalytics = {
      events: [],
      syncedCount: 0,
    };
  }
}

function ensureSessionId() {
  const key = 'smart3ai_session_id';
  let sessionId = window.localStorage.getItem(key);
  if (!sessionId) {
    sessionId = `sess-${Date.now()}-${Math.random().toString(16).slice(2, 10)}`;
    window.localStorage.setItem(key, sessionId);
  }
  return sessionId;
}

function getCampaignValue() {
  const input = document.getElementById('campaignInput');
  const queryParams = new URLSearchParams(window.location.search);
  const fromQuery = (queryParams.get('campaign') || queryParams.get('utm_campaign') || '').trim();

  if (fromQuery) {
    window.localStorage.setItem('smart3ai_campaign', fromQuery);
    if (input) {
      input.value = fromQuery;
    }
    return fromQuery;
  }

  const fromInput = input ? input.value.trim() : '';
  if (fromInput) {
    window.localStorage.setItem('smart3ai_campaign', fromInput);
    return fromInput;
  }

  const persisted = (window.localStorage.getItem('smart3ai_campaign') || '').trim();
  if (persisted && input && !input.value.trim()) {
    input.value = persisted;
  }
  return persisted || 'direct';
}

function updateSyncStatus(message, isError = false) {
  const node = document.getElementById('syncStatus');
  if (!node) {
    return;
  }
  node.textContent = message;
  node.style.color = isError ? '#a11d2e' : '';
}

function trackEvent(eventName, payload = {}) {
  ensureAnalyticsStore();

  const event = {
    eventName,
    ts: new Date().toISOString(),
    experiment: activeExperiment,
    persona: currentPersona,
    sessionId: ensureSessionId(),
    pagePath: window.location.pathname,
    pageUrl: window.location.href,
    referrer: document.referrer || '',
    ...payload,
  };

  window.smart3aiAnalytics.events.push(event);
  console.info('[smart3ai-analytics]', event);
  renderAnalyticsSummary();
}

async function syncAnalyticsToAdminApps(trigger = 'manual', options = {}) {
  ensureAnalyticsStore();

  if (analyticsSyncInFlight) {
    return;
  }

  const events = window.smart3aiAnalytics.events;
  const syncedCount = Number(window.smart3aiAnalytics.syncedCount || 0);
  const pending = events.slice(syncedCount);

  if (!pending.length) {
    if (!options.silent) {
      updateSyncStatus('Sin eventos nuevos por sincronizar');
    }
    return;
  }

  analyticsSyncInFlight = true;
  const campaign = getCampaignValue();

  try {
    const response = await fetch(adminAppsConfig.endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': adminAppsConfig.apiKey,
      },
      keepalive: Boolean(options.keepalive),
      body: JSON.stringify({
        campaign,
        trigger,
        events: pending,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const payload = await response.json();
    const created = Number(payload.created || 0);
    window.smart3aiAnalytics.syncedCount = syncedCount + created;
    updateSyncStatus(`Sincronizado: ${created} eventos (${campaign})`);
  } catch (error) {
    updateSyncStatus(`Error al sincronizar con AdminApps: ${error.message}`, true);
  } finally {
    analyticsSyncInFlight = false;
  }
}

function toCsv(events) {
  const columns = ['eventName', 'ts', 'experiment', 'persona', 'intent', 'location', 'href', 'variant', 'selectedPersona'];
  const rows = [columns.join(',')];

  events.forEach((event) => {
    const row = columns.map((column) => {
      const raw = event[column] ?? '';
      const text = String(raw).replace(/"/g, '""');
      return `"${text}"`;
    });
    rows.push(row.join(','));
  });

  return rows.join('\n');
}

function triggerDownload(fileName, content, mimeType) {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function renderAnalyticsSummary() {
  ensureAnalyticsStore();
  const events = window.smart3aiAnalytics.events;

  const exploreClicks = events.filter((event) => event.eventName === 'cta_click' && event.intent === 'explorar').length;
  const evaluateClicks = events.filter((event) => event.eventName === 'cta_click' && event.intent === 'evaluar').length;
  const activateClicks = events.filter((event) => event.eventName === 'cta_click' && event.intent === 'activar').length;

  const variantAEvents = events.filter((event) => event.experiment === 'A').length;
  const variantBEvents = events.filter((event) => event.experiment === 'B').length;
  const variantACtas = events.filter((event) => event.eventName === 'cta_click' && event.experiment === 'A').length;
  const variantBCtas = events.filter((event) => event.eventName === 'cta_click' && event.experiment === 'B').length;
  const variantARate = variantAEvents ? (variantACtas / variantAEvents) : 0;
  const variantBRate = variantBEvents ? (variantBCtas / variantBEvents) : 0;
  const winner = variantARate === variantBRate
    ? 'Empate técnico'
    : variantARate > variantBRate ? 'Ganando: Variante A' : 'Ganando: Variante B';

  const totalNode = document.getElementById('abTotalEvents');
  const exploreNode = document.getElementById('abExploreClicks');
  const evaluateNode = document.getElementById('abEvaluateClicks');
  const activateNode = document.getElementById('abActivateClicks');
  const variantANode = document.getElementById('abVariantA');
  const variantBNode = document.getElementById('abVariantB');

  if (totalNode) totalNode.textContent = String(events.length);
  if (exploreNode) exploreNode.textContent = String(exploreClicks);
  if (evaluateNode) evaluateNode.textContent = String(evaluateClicks);
  if (activateNode) activateNode.textContent = String(activateClicks);

  if (variantANode) {
    variantANode.textContent = `Eventos: ${variantAEvents} | CTA clicks: ${variantACtas} | Tasa CTA: ${(variantARate * 100).toFixed(1)}%`;
  }

  if (variantBNode) {
    variantBNode.textContent = `Eventos: ${variantBEvents} | CTA clicks: ${variantBCtas} | Tasa CTA: ${(variantBRate * 100).toFixed(1)}%`;
  }

  updateSyncStatus(`Estado A/B: ${winner}`);

  if (events.length - Number(window.smart3aiAnalytics.syncedCount || 0) >= 5) {
    syncAnalyticsToAdminApps('auto-batch', { silent: true });
  }
}

function bindAnalyticsActions() {
  const exportJsonBtn = document.getElementById('exportJsonBtn');
  const exportCsvBtn = document.getElementById('exportCsvBtn');
  const clearAnalyticsBtn = document.getElementById('clearAnalyticsBtn');
  const syncAnalyticsBtn = document.getElementById('syncAnalyticsBtn');
  const campaignInput = document.getElementById('campaignInput');

  if (exportJsonBtn) {
    exportJsonBtn.addEventListener('click', () => {
      ensureAnalyticsStore();
      const payload = JSON.stringify(window.smart3aiAnalytics.events, null, 2);
      triggerDownload('smart3ai-ab-events.json', payload, 'application/json;charset=utf-8');
    });
  }

  if (exportCsvBtn) {
    exportCsvBtn.addEventListener('click', () => {
      ensureAnalyticsStore();
      const csv = toCsv(window.smart3aiAnalytics.events);
      triggerDownload('smart3ai-ab-events.csv', csv, 'text/csv;charset=utf-8');
    });
  }

  if (clearAnalyticsBtn) {
    clearAnalyticsBtn.addEventListener('click', () => {
      ensureAnalyticsStore();
      window.smart3aiAnalytics.events = [];
      window.smart3aiAnalytics.syncedCount = 0;
      renderAnalyticsSummary();
      console.info('[smart3ai-analytics]', { eventName: 'analytics_reset', ts: new Date().toISOString() });
    });
  }

  if (syncAnalyticsBtn) {
    syncAnalyticsBtn.addEventListener('click', async () => {
      await syncAnalyticsToAdminApps('manual');
    });
  }

  if (campaignInput) {
    campaignInput.addEventListener('change', () => {
      const value = campaignInput.value.trim();
      window.localStorage.setItem('smart3ai_campaign', value || 'direct');
      updateSyncStatus(`Campaña activa: ${value || 'direct'}`);
    });
  }

  getCampaignValue();
  renderAnalyticsSummary();
}

function renderDemo() {
  const tone = document.getElementById('toneSelect')?.value || 'gerencial';
  const industry = document.getElementById('industrySelect')?.value || 'manufactura';
  const toneKey = toneMap[tone] || 'gerencial';

  const payload = demoData[industry]?.[toneKey];
  if (!payload) {
    return;
  }

  const chatLines = document.getElementById('chatLines');
  const twinList = document.getElementById('digitalTwin');
  const progressValue = document.getElementById('progressValue');
  const progressBar = document.getElementById('progressBar');

  if (chatLines) {
    chatLines.innerHTML = '';
    payload.chat.forEach((line, index) => {
      const row = document.createElement('p');
      row.className = 'chat-line';
      row.style.animationDelay = `${index * 80}ms`;
      row.textContent = line;
      chatLines.appendChild(row);
    });
  }

  if (twinList) {
    twinList.innerHTML = '';
    payload.twin.forEach((item) => {
      const li = document.createElement('li');
      const left = document.createElement('span');
      left.textContent = item[0];
      const right = document.createElement('strong');
      right.textContent = item[1];
      li.appendChild(left);
      li.appendChild(right);
      twinList.appendChild(li);
    });
  }

  if (progressValue) {
    progressValue.textContent = `${payload.progress}%`;
  }

  if (progressBar) {
    progressBar.style.width = `${payload.progress}%`;
  }
}

function renderIndustryPanel(industry) {
  const panel = document.getElementById('industryPanel');
  const item = industryCards[industry];

  if (!panel || !item) {
    return;
  }

  panel.innerHTML = '';

  const title = document.createElement('h3');
  title.textContent = item.title;

  const description = document.createElement('p');
  description.textContent = item.description;

  const list = document.createElement('ul');
  item.bullets.forEach((point) => {
    const li = document.createElement('li');
    li.textContent = point;
    list.appendChild(li);
  });

  panel.appendChild(title);
  panel.appendChild(description);
  panel.appendChild(list);
}

function bindIndustryTabs() {
  const tabs = Array.from(document.querySelectorAll('.tab'));
  if (!tabs.length) {
    return;
  }

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((item) => {
        item.classList.remove('active');
        item.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      const nextIndustry = tab.dataset.tab;
      renderIndustryPanel(nextIndustry);

      const industrySelect = document.getElementById('industrySelect');
      if (industrySelect) {
        industrySelect.value = nextIndustry;
        renderDemo();
      }
    });
  });

  const active = tabs.find((item) => item.classList.contains('active')) || tabs[0];
  renderIndustryPanel(active.dataset.tab);
}

function bindDemoControls() {
  const toneSelect = document.getElementById('toneSelect');
  const industrySelect = document.getElementById('industrySelect');

  if (toneSelect) {
    toneSelect.addEventListener('change', renderDemo);
  }

  if (industrySelect) {
    industrySelect.addEventListener('change', () => {
      const tab = document.querySelector(`.tab[data-tab="${industrySelect.value}"]`);
      if (tab) {
        tab.click();
      } else {
        renderDemo();
      }
    });
  }

  renderDemo();
}

function activateReveals() {
  const nodes = document.querySelectorAll('.reveal');
  if (!nodes.length) {
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.12,
  });

  nodes.forEach((node) => observer.observe(node));
}

function applyPersona(personaKey) {
  const data = personaHero[personaKey];
  if (!data) {
    return;
  }

  const heroTitle = document.getElementById('heroTitle');
  const heroLead = document.getElementById('heroLead');
  const heroPrimaryCta = document.getElementById('heroPrimaryCta');
  const heroSecondaryCta = document.getElementById('heroSecondaryCta');

  if (heroTitle) heroTitle.textContent = data.title;
  if (heroLead) heroLead.textContent = data.lead;

  if (heroPrimaryCta) {
    heroPrimaryCta.textContent = data.primaryText;
    heroPrimaryCta.setAttribute('href', data.primaryHref);
  }

  if (heroSecondaryCta) {
    heroSecondaryCta.textContent = data.secondaryText;
    heroSecondaryCta.setAttribute('href', data.secondaryHref);
  }

  currentPersona = personaKey;
}

function applyExperimentVariant() {
  const variant = getExperimentVariant();
  const config = experimentConfig[variant] || experimentConfig.a;
  activeExperiment = config.key;

  const eyebrow = document.getElementById('heroEyebrow');
  const chip = document.getElementById('abChip');

  if (eyebrow) {
    eyebrow.textContent = config.eyebrow;
  }

  if (chip) {
    chip.textContent = `Variante ${config.label}`;
  }

  const tabs = Array.from(document.querySelectorAll('.persona-tab'));
  tabs.forEach((tab) => {
    const isActive = tab.dataset.persona === config.defaultPersona;
    tab.classList.toggle('active', isActive);
    tab.setAttribute('aria-selected', isActive ? 'true' : 'false');
  });

  applyPersona(config.defaultPersona);
  trackEvent('experiment_assigned', {
    variant: config.key,
  });
}

function bindPersonaSwitch() {
  const tabs = Array.from(document.querySelectorAll('.persona-tab'));
  if (!tabs.length) {
    return;
  }

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((item) => {
        item.classList.remove('active');
        item.setAttribute('aria-selected', 'false');
      });

      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      applyPersona(tab.dataset.persona);
      trackEvent('persona_switch', {
        selectedPersona: tab.dataset.persona,
      });
    });
  });
}

function bindCtaTracking() {
  const ctas = Array.from(document.querySelectorAll('[data-cta-intent]'));
  ctas.forEach((cta) => {
    cta.addEventListener('click', () => {
      trackEvent('cta_click', {
        intent: cta.dataset.ctaIntent,
        location: cta.dataset.ctaLocation || 'unknown',
        href: cta.getAttribute('href') || '',
      });
      syncAnalyticsToAdminApps('cta_click', { silent: true });
    });
  });
}

function formatUsd(value) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value);
}

function recalcRoi() {
  const billingInput = document.getElementById('billingInput');
  const cnqInput = document.getElementById('cnqInput');
  const improvementInput = document.getElementById('improvementInput');
  const roiValue = document.getElementById('roiValue');

  if (!billingInput || !cnqInput || !improvementInput || !roiValue) {
    return;
  }

  const billing = Number.parseFloat(billingInput.value) || 0;
  const cnq = Number.parseFloat(cnqInput.value) || 0;
  const improvement = Number.parseFloat(improvementInput.value) || 0;

  const monthlyLoss = billing * (cnq / 100);
  const potentialSaving = monthlyLoss * (improvement / 100);

  roiValue.textContent = formatUsd(potentialSaving);
}

function bindRoiCalculator() {
  const inputs = ['billingInput', 'cnqInput', 'improvementInput']
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  if (!inputs.length) {
    return;
  }

  inputs.forEach((input) => {
    input.addEventListener('input', recalcRoi);
    input.addEventListener('change', recalcRoi);
  });

  recalcRoi();
}

window.addEventListener('DOMContentLoaded', () => {
  applyExperimentVariant();
  bindPersonaSwitch();
  bindIndustryTabs();
  bindDemoControls();
  bindRoiCalculator();
  bindCtaTracking();
  bindAnalyticsActions();
  activateReveals();
});

window.addEventListener('pagehide', () => {
  syncAnalyticsToAdminApps('pagehide', { keepalive: true, silent: true });
});
