import {
  Archive,
  BarChart3,
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
  Route,
  ShieldCheck,
  Target,
  UsersRound,
  AlertTriangle,
} from 'lucide-react';
import type { ProductLandingContent } from './types';

const links = {
  demo: 'mailto:info@isosmart-ai.com?subject=Solicitar%20demo%20ISO%20Smart%20MedSupplier',
  advisor: 'mailto:info@isosmart-ai.com?subject=Hablar%20con%20un%20asesor%20ISO%20Smart%20MedSupplier',
  whatsapp: 'https://wa.me/50600000000?text=Hola%2C%20quiero%20conocer%20ISO%20Smart%20MedSupplier%20y%20solicitar%20una%20demo.',
};

const navItems = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Solución', href: '#solucion' },
  { label: 'Funcionalidades', href: '#funcionalidades' },
  { label: 'Beneficios', href: '#beneficios' },
  { label: 'Para quién es', href: '#para-quien-es' },
  { label: 'Contacto', href: '#contacto' },
];

export const medSupplier: ProductLandingContent = {
  key: 'medSupplier',
  brandName: 'ISO Smart MedSupplier',
  navTagline: 'Cumplimiento para proveedores médicos',
  logoAlt: 'ISO Smart MedSupplier',
  email: 'info@isosmart-ai.com',
  links,
  navItems,
  metadata: {
    title: 'ISO Smart MedSupplier | Cumplimiento para proveedores médicos',
    description:
      'ISO Smart MedSupplier centraliza cumplimiento documental, evidencias regulatorias, auditoría de proveedores, vencimientos, riesgo y trazabilidad para cadenas de suministro médicas.',
    ogTitle: 'ISO Smart MedSupplier | Cumplimiento para proveedores médicos',
    ogDescription:
      'Gestiona documentación, evidencias regulatorias, auditoría de proveedores y preparación para auditorías en la cadena de suministro médica.',
  },
  hero: {
    eyebrow: 'Plataforma SaaS para proveedores médicos',
    title: 'Cumplimiento documental y trazabilidad para la cadena de suministro médica',
    description:
      'ISO Smart MedSupplier centraliza documentos, evidencias regulatorias, auditoría de proveedores, vencimientos y riesgos para empresas que deben demostrar control en entornos médicos exigentes.',
    primaryCta: 'Solicitar demo',
    secondaryCta: 'Ver funcionalidades',
    secondaryHref: '#funcionalidades',
    trustPoints: [
      { icon: CheckCircle2, label: 'Evidencias regulatorias' },
      { icon: LockKeyhole, label: 'Riesgo trazable' },
      { icon: FileCheck2, label: 'Auditoría preparada' },
    ],
  },
  problem: {
    eyebrow: 'El problema',
    title: 'El cumplimiento de proveedores médicos se vuelve riesgoso cuando la evidencia queda dispersa',
    description:
      'Los equipos de calidad, compras y asuntos regulatorios necesitan demostrar vigencia documental, trazabilidad de aprobaciones y control de riesgos sin reconstruir información antes de cada auditoría.',
    panelTitle: 'Riesgos que MedSupplier ordena',
    panelContext: 'Antes de una auditoría o recertificación',
    footerLabel: 'Resultado habitual',
    footerText: 'Mayor exposición regulatoria, vencimientos invisibles y decisiones con trazabilidad incompleta.',
    items: [
      'Documentos de proveedores médicos dispersos entre correos, carpetas y hojas de cálculo.',
      'Evidencias regulatorias difíciles de validar, relacionar y recuperar durante auditorías.',
      'Certificados, contratos y aprobaciones vencen sin alertas ni responsables claros.',
      'Riesgos de cadena de suministro médica sin historial confiable de evaluación y seguimiento.',
    ],
  },
  solution: {
    eyebrow: 'La solución',
    title: 'Un centro de control para cumplimiento, riesgo y auditoría de proveedores médicos',
    description:
      'ISO Smart MedSupplier conecta documentación, evidencias, vencimientos, evaluaciones y planes de seguimiento para que la cadena de suministro médica opere con trazabilidad.',
    metrics: [
      { value: '1', label: 'expediente central por proveedor' },
      { value: '360°', label: 'trazabilidad documental y regulatoria' },
      { value: '24/7', label: 'visibilidad de vencimientos y riesgos' },
    ],
    flowLabel: 'Flujo visual de ISO Smart MedSupplier',
    flowNodes: {
      first: 'Proveedores',
      second: 'Evidencias',
      coreTitle: 'MedSupplier',
      coreSubtitle: 'Supplier Control',
      third: 'Riesgo',
      fourth: 'Auditoría lista',
    },
    items: [
      { title: 'Centraliza expedientes', text: 'Documentos, certificados, evidencias regulatorias y aprobaciones viven en un entorno controlado por proveedor.' },
      { title: 'Controla vigencias y riesgo', text: 'Asigna responsables, alertas, estados y prioridad a cada documento crítico de la cadena médica.' },
      { title: 'Prepara auditorías', text: 'Organiza evidencia, historial y trazabilidad para responder con claridad ante clientes, auditores y equipos regulatorios.' },
    ],
  },
  features: {
    eyebrow: 'Funcionalidades',
    title: 'Módulos para controlar proveedores médicos sin aumentar la carga manual',
    description:
      'Documentos, evidencias regulatorias, auditorías de proveedores, vencimientos y riesgos conectados para equipos de calidad, compras y cumplimiento.',
    primaryKicker: 'Módulo central',
    primaryMeta: ['Vigencias', 'Aprobaciones', 'Responsables'],
    operationLabel: 'Operación diaria',
    operationTitle: 'Control proveedor por proveedor',
    resultLabel: 'Resultado',
    resultText: 'Una cadena de suministro médica más visible, trazable y preparada para auditorías.',
    items: [
      { icon: FileCheck2, title: 'Expediente documental del proveedor', text: 'Controla certificados, contratos, registros, versiones, vigencias y responsables por proveedor médico.' },
      { icon: Archive, title: 'Evidencias regulatorias', text: 'Relaciona evidencias con requisitos, auditorías, evaluaciones y decisiones de aprobación.' },
      { icon: ClipboardCheck, title: 'Auditoría de proveedores', text: 'Planifica revisiones, listas de verificación, hallazgos y seguimiento de proveedores críticos.' },
      { icon: FileSearch, title: 'Hallazgos y desviaciones', text: 'Clasifica riesgos, incumplimientos, observaciones y acciones hasta su cierre verificable.' },
      { icon: Route, title: 'Planes de seguimiento', text: 'Define acciones, responsables, fechas compromiso, avances y evidencias de cierre por proveedor.' },
      { icon: ListChecks, title: 'Matriz de cumplimiento documental', text: 'Relaciona requisitos regulatorios, categorías de proveedor, documentos obligatorios y evidencias.' },
      { icon: BarChart3, title: 'Indicadores de riesgo', text: 'Visualiza proveedores vencidos, documentos críticos, riesgos abiertos y avance de preparación para auditoría.' },
      { icon: KeyRound, title: 'Roles y permisos', text: 'Configura accesos por calidad, compras, asuntos regulatorios, auditoría o gerencia.' },
      { icon: Bell, title: 'Alertas de vencimiento', text: 'Anticipa certificados, aprobaciones, contratos y compromisos críticos antes de que expiren.' },
      { icon: History, title: 'Historial y trazabilidad', text: 'Consulta cambios, aprobadores, evidencias y evolución de cada proveedor dentro del sistema.' },
    ],
  },
  benefits: {
    eyebrow: 'Beneficios de negocio',
    title: 'Control comercial y regulatorio para proveedores médicos críticos',
    description:
      'ISO Smart MedSupplier reduce trabajo disperso y convierte la gestión de proveedores médicos en información clara para decidir, auditar y mitigar riesgos.',
    primaryKicker: 'Impacto esperado',
    scoreboards: [
      { value: '1', label: 'expediente central de documentos y evidencias' },
      { value: '24/7', label: 'visibilidad para calidad, compras y gerencia' },
    ],
    progressLabel: 'Preparación documental',
    items: [
      { icon: FolderKanban, title: 'Menos desorden documental', text: 'Reduce la dependencia de carpetas compartidas, correos y controles manuales por proveedor.' },
      { icon: ShieldCheck, title: 'Mejor preparación para auditorías', text: 'Encuentra evidencias regulatorias, vigencias e historial con rapidez y respaldo trazable.' },
      { icon: Gauge, title: 'Menos seguimiento manual', text: 'Automatiza recordatorios, control de vencimientos y visibilidad de pendientes críticos.' },
      { icon: Target, title: 'Responsables claros', text: 'Cada documento, riesgo, hallazgo y acción tiene dueño, fecha, estado y evidencia asociada.' },
      { icon: LayoutDashboard, title: 'Mejor lectura del riesgo', text: 'Convierte el estado de la cadena de suministro médica en indicadores accionables.' },
      { icon: CheckCircle2, title: 'Imagen más confiable', text: 'Presenta un sistema ordenado ante clientes, auditores, socios y equipos regulatorios.' },
    ],
  },
  audience: {
    eyebrow: 'Para quién es',
    title: 'Para organizaciones que deben demostrar control sobre proveedores médicos',
    description:
      'ISO Smart MedSupplier encaja en empresas que gestionan documentación crítica, evidencias regulatorias, auditoría y riesgo dentro de una cadena de suministro médica.',
    profileKicker: 'Perfil ideal',
    profileTitle: 'Equipos con proveedores médicos críticos, vencimientos frecuentes y evidencia regulatoria dispersa.',
    profileText:
      'Cuando la aprobación de proveedores depende de correos, hojas de cálculo o carpetas compartidas, MedSupplier aporta orden, seguimiento y visibilidad gerencial.',
    profileTags: ['Calidad', 'Compras', 'Regulatorio'],
    primaryGroupLabel: 'Organizaciones y equipos',
    secondaryGroupLabel: 'Roles que necesitan trazabilidad',
    items: [
      { icon: Building2, label: 'Proveedores médicos certificados' },
      { icon: Building2, label: 'Distribuidores de dispositivos e insumos médicos' },
      { icon: UsersRound, label: 'Equipos de compras estratégicas' },
      { icon: UsersRound, label: 'Departamentos de calidad y asuntos regulatorios' },
      { icon: ShieldCheck, label: 'Equipos de cumplimiento y auditoría' },
      { icon: LayoutDashboard, label: 'Gerencias de cadena de suministro médica' },
      { icon: Archive, label: 'Empresas que controlan proveedores con Excel o carpetas compartidas' },
    ],
  },
  dashboard: {
    eyebrow: 'Vista ejecutiva',
    title: 'Vencimientos, riesgos y proveedores críticos en una sola pantalla',
    description:
      'Visualiza cumplimiento documental, evidencias regulatorias, auditorías de proveedores, riesgos abiertos y preparación para auditoría sin reconstruir reportes manuales.',
    mockupLabel: 'Representación visual del dashboard ISO Smart MedSupplier',
    topbarTitle: 'Panel ejecutivo MedSupplier',
    sidebar: ['Proveedores', 'Documentos', 'Auditorías', 'Riesgos'],
    kpis: [
      { icon: CheckCircle2, value: '82%', label: 'Docs vigentes' },
      { icon: FileText, value: '48', label: 'Proveedores' },
      { icon: AlertTriangle, value: '7', label: 'Riesgos abiertos' },
    ],
    panelOverline: 'Auditoría de proveedores Q2',
    panelTitle: 'Preparación documental',
    progressWidth: '68%',
    tasks: [
      { label: 'Evidencias regulatorias críticas', status: 'En revisión' },
      { label: 'Certificados por vencer', status: '5 pendientes' },
      { label: 'Evaluación de proveedor crítico', status: 'En progreso' },
    ],
    chartHeights: ['42%', '62%', '52%', '74%', '66%', '84%'],
    stats: [
      { value: '82%', label: 'Documentos vigentes' },
      { value: '18', label: 'Vencimientos próximos' },
      { value: '6', label: 'Auditorías activas' },
    ],
  },
  differentiators: {
    eyebrow: 'Diferenciadores',
    title: 'Una plataforma operativa para proveedores médicos con trazabilidad real',
    description:
      'ISO Smart MedSupplier combina cumplimiento documental, riesgo, auditoría y visibilidad ejecutiva para que la cadena médica avance con menos fricción.',
    primaryKicker: 'No es solo almacenamiento',
    primaryPoints: ['Proveedores', 'Evidencia', 'Riesgo'],
    compareLabel: 'Comparación con gestión tradicional',
    beforeTitle: 'Antes',
    beforeText: 'Carpetas, correos y hojas de cálculo sin trazabilidad suficiente por proveedor.',
    afterTitle: 'Con ISO Smart MedSupplier',
    afterText: 'Documentos, evidencias, riesgos y aprobaciones conectados en una misma operación.',
    items: [
      { icon: Fingerprint, title: 'Diseñado para proveedores médicos', text: 'No es un gestor genérico: está pensado para expedientes, evidencias regulatorias, auditoría y riesgo de proveedores.' },
      { icon: LockKeyhole, title: 'Trazabilidad completa', text: 'Cada documento, vencimiento, hallazgo, aprobación y evidencia conserva contexto operativo.' },
      { icon: UsersRound, title: 'Escalable por categorías', text: 'Crece por proveedores, categorías, sedes, usuarios y criticidad sin perder orden.' },
      { icon: ShieldCheck, title: 'Base tecnológica moderna', text: 'Interfaz clara, arquitectura lista para integrarse con backend, login y dashboard administrativo.' },
    ],
  },
  contact: {
    eyebrow: 'Siguiente paso',
    title: 'Lleva el control de proveedores médicos a una operación trazable',
    description:
      'Agenda una demo de ISO Smart MedSupplier y revisemos cómo centralizar documentos, evidencias regulatorias, vencimientos y riesgos de tu cadena médica.',
    primaryCta: 'Solicitar demo',
    secondaryCta: 'Contactar por WhatsApp',
    cardLabel: 'Demo comercial',
    cardText: 'Una revisión rápida para entender tu operación de proveedores y los próximos pasos.',
    cardItems: ['Revisión de proveedores y documentos críticos', 'info@isosmart-ai.com'],
  },
  footer: {
    description:
      'ISO Smart MedSupplier ayuda a equipos de calidad, compras y cumplimiento a administrar proveedores médicos, evidencias regulatorias, vencimientos y riesgos con orden y trazabilidad.',
    navLabel: 'Mapa del sitio',
    contactLabel: 'Contacto comercial',
    contactText: 'Agenda una conversación para evaluar cómo digitalizar el control de proveedores médicos.',
    contactCta: 'Solicitar demo',
    legal: '© 2026 ISO Smart MedSupplier. Todos los derechos reservados.',
    disclaimer: 'Información comercial sujeta a validación durante la demo.',
  },
};
