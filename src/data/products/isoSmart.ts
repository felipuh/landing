import {
  Archive,
  Bell,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  FileCheck2,
  FileSearch,
  FileText,
  Fingerprint,
  FolderKanban,
  Gauge,
  History,
  KeyRound,
  LayoutDashboard,
  ListChecks,
  LockKeyhole,
  ShieldCheck,
  Target,
  UsersRound,
  AlertTriangle,
} from 'lucide-react';
import type { ProductLandingContent } from './types';

const links = {
  demo: 'mailto:info@isosmart-ai.com?subject=Solicitar%20demo%20ISO%20SMART%20AI',
  advisor: 'mailto:info@isosmart-ai.com?subject=Hablar%20con%20un%20asesor%20ISO%20SMART%20AI',
  whatsapp: 'https://wa.me/50600000000?text=Hola%2C%20quiero%20conocer%20ISO%20SMART%20AI%20y%20solicitar%20una%20demo.',
};

const navItems = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Solución', href: '#solucion' },
  { label: 'Funcionalidades', href: '#funcionalidades' },
  { label: 'Beneficios', href: '#beneficios' },
  { label: 'Para quién es', href: '#para-quien-es' },
  { label: 'Contacto', href: '#contacto' },
];

export const isoSmart: ProductLandingContent = {
  key: 'isoSmart',
  brandName: 'ISO SMART AI',
  navTagline: 'Gestión ISO digital',
  logoAlt: 'ISO SMART AI',
  email: 'info@isosmart-ai.com',
  links,
  navItems,
  metadata: {
    title: 'ISO SMART AI | Gestión ISO digital',
    description:
      'ISO SMART AI centraliza documentación, evidencias, auditorías, hallazgos, planes de acción e indicadores para empresas que necesitan controlar su sistema de gestión ISO.',
    ogTitle: 'ISO SMART AI | Gestión ISO digital',
    ogDescription:
      'Digitaliza tus procesos ISO, mejora la trazabilidad y prepara auditorías con mayor control desde una plataforma SaaS moderna.',
  },
  hero: {
    eyebrow: 'Plataforma SaaS para sistemas de gestión ISO',
    title: 'Gestión ISO inteligente, ordenada y digital',
    description:
      'ISO SMART AI centraliza documentación, evidencias, auditorías, planes de acción y seguimiento de cumplimiento en una plataforma moderna para empresas que necesitan control, trazabilidad y mejora continua.',
    primaryCta: 'Solicitar demo',
    secondaryCta: 'Ver funcionalidades',
    secondaryHref: '#funcionalidades',
    trustPoints: [
      { icon: CheckCircle2, label: 'Trazabilidad documental' },
      { icon: LockKeyhole, label: 'Roles y permisos' },
      { icon: FileCheck2, label: 'Auditoría preparada' },
    ],
  },
  problem: {
    eyebrow: 'El problema',
    title: 'La gestión ISO se vuelve frágil cuando depende de archivos dispersos',
    description:
      'Muchas empresas conocen sus procesos, pero pierden control cuando la documentación, las evidencias y los compromisos viven entre correos, carpetas y hojas de cálculo.',
    panelTitle: 'Riesgos que ISO SMART AI ordena',
    panelContext: 'Antes de la auditoría',
    footerLabel: 'Resultado habitual',
    footerText: 'Menos trazabilidad, más retrabajo y baja visibilidad gerencial.',
    items: [
      'Documentos dispersos entre carpetas, correos y hojas de cálculo.',
      'Evidencias difíciles de controlar, validar y recuperar en auditoría.',
      'Hallazgos sin trazabilidad clara de responsables, fechas y cierres.',
      'Procesos ISO manejados de forma manual, con poca visibilidad gerencial.',
    ],
  },
  solution: {
    eyebrow: 'La solución',
    title: 'Un sistema ISO digital con control, trazabilidad y seguimiento real',
    description:
      'ISO SMART AI reúne los elementos críticos del cumplimiento en una operación clara para que calidad, operaciones y gerencia trabajen con la misma información.',
    metrics: [
      { value: '1', label: 'fuente central de verdad' },
      { value: '360°', label: 'trazabilidad por proceso' },
      { value: '24/7', label: 'visibilidad de pendientes' },
    ],
    flowLabel: 'Flujo visual de ISO SMART AI',
    flowNodes: {
      first: 'Documentos',
      second: 'Procesos',
      coreTitle: 'ISO SMART AI',
      coreSubtitle: 'Control Center',
      third: 'Indicadores',
      fourth: 'Auditoría lista',
    },
    items: [
      { title: 'Centraliza información', text: 'Documentos, evidencias, auditorías y planes de acción viven en un solo entorno controlado.' },
      { title: 'Controla el seguimiento', text: 'Asigna responsables, fechas, estados y prioridades sin depender de correos dispersos.' },
      { title: 'Prepara auditorías', text: 'Organiza registros y trazabilidad para responder con mayor claridad ante clientes y auditores.' },
    ],
  },
  features: {
    eyebrow: 'Funcionalidades',
    title: 'Módulos diseñados para controlar el sistema ISO sin aumentar la carga manual',
    description:
      'Documentos, evidencias, auditorías, hallazgos y acciones conectados en una experiencia clara para equipos de calidad, cumplimiento y operaciones.',
    primaryKicker: 'Módulo central',
    primaryMeta: ['Versiones', 'Vigencias', 'Responsables'],
    operationLabel: 'Operación diaria',
    operationTitle: 'Seguimiento controlado',
    resultLabel: 'Resultado',
    resultText: 'Una operación ISO más visible, trazable y preparada para auditorías.',
    items: [
      { icon: FileCheck2, title: 'Gestión documental', text: 'Controla documentos, versiones, vigencias y responsables del sistema de gestión.' },
      { icon: Archive, title: 'Control de evidencias', text: 'Registra evidencias por proceso, requisito, auditoría o plan de acción.' },
      { icon: ClipboardCheck, title: 'Auditorías internas', text: 'Planifica auditorías, listas de verificación, hallazgos y seguimiento.' },
      { icon: FileSearch, title: 'Hallazgos y no conformidades', text: 'Clasifica, prioriza y da trazabilidad a cada hallazgo hasta su cierre.' },
      { icon: ListChecks, title: 'Matriz de cumplimiento', text: 'Relaciona requisitos, procesos, controles, documentos y evidencias.' },
      { icon: KeyRound, title: 'Roles y permisos', text: 'Configura accesos por usuario, área, rol o nivel de responsabilidad.' },
      { icon: Bell, title: 'Recordatorios', text: 'Mantén seguimiento de vencimientos, revisiones, compromisos y acciones críticas.' },
      { icon: History, title: 'Historial y trazabilidad', text: 'Consulta cambios, responsables y evolución de cada elemento del sistema.' },
    ],
  },
  benefits: {
    eyebrow: 'Beneficios de negocio',
    title: 'Control operativo real para equipos que deben demostrar cumplimiento',
    description:
      'ISO SMART AI reduce el trabajo disperso y convierte la gestión ISO en información clara, trazable y útil para decidir.',
    primaryKicker: 'Impacto esperado',
    scoreboards: [
      { value: '1', label: 'fuente central de documentos y evidencias' },
      { value: '24/7', label: 'visibilidad para responsables y gerencia' },
    ],
    progressLabel: 'Orden documental',
    items: [
      { icon: FolderKanban, title: 'Menos desorden operativo', text: 'Reduce la dependencia de carpetas compartidas y archivos duplicados.' },
      { icon: ShieldCheck, title: 'Mejor preparación para auditorías', text: 'Encuentra información crítica con rapidez y respaldo trazable.' },
      { icon: Gauge, title: 'Menos trabajo manual', text: 'Automatiza seguimiento, recordatorios y control de pendientes.' },
      { icon: Target, title: 'Responsables claros', text: 'Cada acción tiene dueño, fecha, estado y evidencia asociada.' },
      { icon: LayoutDashboard, title: 'Mejor visibilidad gerencial', text: 'Convierte el sistema de gestión en información útil para decidir.' },
      { icon: CheckCircle2, title: 'Imagen más profesional', text: 'Presenta un sistema ordenado ante clientes, auditores y equipos internos.' },
    ],
  },
  audience: {
    eyebrow: 'Para quién es',
    title: 'Para organizaciones que necesitan demostrar control, no solo administrarlo',
    description:
      'ISO SMART AI encaja en empresas y equipos que deben coordinar documentos, evidencias, auditorías y responsables con trazabilidad.',
    profileKicker: 'Perfil ideal',
    profileTitle: 'Equipos con procesos ISO activos, auditorías frecuentes y evidencia dispersa.',
    profileText:
      'Cuando el cumplimiento depende de correos, hojas de cálculo o carpetas compartidas, ISO SMART AI aporta una capa clara de orden, seguimiento y visibilidad gerencial.',
    profileTags: ['Calidad', 'Operaciones', 'Cumplimiento'],
    primaryGroupLabel: 'Organizaciones y expertos',
    secondaryGroupLabel: 'Equipos que necesitan visibilidad',
    items: [
      { icon: Building2, label: 'Empresas certificadas ISO' },
      { icon: Building2, label: 'Empresas en proceso de certificación' },
      { icon: UsersRound, label: 'Consultores ISO' },
      { icon: UsersRound, label: 'Departamentos de calidad' },
      { icon: ShieldCheck, label: 'Equipos de cumplimiento' },
      { icon: LayoutDashboard, label: 'Gerencias operativas' },
      { icon: Archive, label: 'Empresas que gestionan ISO en Excel o carpetas compartidas' },
    ],
  },
  dashboard: {
    eyebrow: 'Vista ejecutiva',
    title: 'Indicadores, pendientes y riesgos en una sola pantalla',
    description:
      'Visualiza cumplimiento, auditorías, documentos pendientes, hallazgos abiertos, acciones vencidas y avance de planes sin reconstruir reportes manuales.',
    mockupLabel: 'Representación visual del dashboard ISO SMART AI',
    topbarTitle: 'Panel ejecutivo ISO SMART AI',
    sidebar: ['Cumplimiento', 'Documentos', 'Auditorías', 'Acciones'],
    kpis: [
      { icon: CheckCircle2, value: '86%', label: 'Cumplimiento' },
      { icon: FileText, value: '124', label: 'Docs controlados' },
      { icon: AlertTriangle, value: '9', label: 'Hallazgos' },
    ],
    panelOverline: 'Auditoría interna Q2',
    panelTitle: 'Plan de seguimiento',
    progressWidth: '72%',
    tasks: [
      { label: 'Evidencias de proceso comercial', status: 'Completado' },
      { label: 'Acciones correctivas vencidas', status: '2 pendientes' },
      { label: 'Revisión documental mensual', status: 'En progreso' },
    ],
    chartHeights: ['38%', '58%', '46%', '78%', '68%', '88%'],
    stats: [
      { value: '86%', label: 'Cumplimiento global' },
      { value: '12', label: 'Acciones por vencer' },
      { value: '4', label: 'Auditorías activas' },
    ],
  },
  differentiators: {
    eyebrow: 'Diferenciadores',
    title: 'Una plataforma operativa para gestionar ISO con trazabilidad real',
    description:
      'ISO SMART AI combina estructura documental, seguimiento de responsables y visibilidad ejecutiva para que el sistema de gestión avance con menos fricción.',
    primaryKicker: 'No es solo almacenamiento',
    primaryPoints: ['Documentación', 'Evidencia', 'Auditoría'],
    compareLabel: 'Comparación con gestión tradicional',
    beforeTitle: 'Antes',
    beforeText: 'Carpetas, correos y hojas de cálculo sin contexto suficiente.',
    afterTitle: 'Con ISO SMART AI',
    afterText: 'Procesos, responsables, evidencias y cambios conectados en una misma operación.',
    items: [
      { icon: Fingerprint, title: 'Diseñado para gestión ISO', text: 'No es un gestor genérico: está pensado para documentación, evidencia, auditoría y mejora continua.' },
      { icon: LockKeyhole, title: 'Trazabilidad completa', text: 'Cada documento, hallazgo, acción y evidencia conserva contexto operativo.' },
      { icon: UsersRound, title: 'Escalable por módulos', text: 'Crece por áreas, sedes, usuarios y procesos sin perder orden.' },
      { icon: ShieldCheck, title: 'Base tecnológica moderna', text: 'Interfaz clara, arquitectura lista para integrarse con backend, login y dashboard administrativo.' },
    ],
  },
  contact: {
    eyebrow: 'Siguiente paso',
    title: 'Lleva tu sistema ISO a una operación digital más clara',
    description:
      'Agenda una demo de ISO SMART AI y revisemos cómo centralizar documentos, evidencias, auditorías y planes de acción en un entorno trazable.',
    primaryCta: 'Solicitar demo',
    secondaryCta: 'Contactar por WhatsApp',
    cardLabel: 'Demo comercial',
    cardText: 'Una revisión rápida para entender tu operación actual y los próximos pasos.',
    cardItems: ['Revisión de procesos ISO actuales', 'info@isosmart-ai.com'],
  },
  footer: {
    description:
      'ISO SMART AI ayuda a empresas y equipos de calidad a administrar documentación, evidencias, auditorías y planes de acción con orden y trazabilidad.',
    navLabel: 'Mapa del sitio',
    contactLabel: 'Contacto comercial',
    contactText: 'Agenda una conversación para evaluar cómo digitalizar tu gestión ISO.',
    contactCta: 'Solicitar demo',
    legal: '© 2026 ISO SMART AI. Todos los derechos reservados.',
    disclaimer: 'Información comercial sujeta a validación durante la demo.',
  },
};
