import {
  Archive,
  BarChart3,
  Bell,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  FileCheck2,
  FileSearch,
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
} from 'lucide-react';

export const links = {
  demo: 'mailto:info@isosmart-ai.com?subject=Solicitar%20demo%20ISO%20SMART',
  advisor: 'mailto:info@isosmart-ai.com?subject=Hablar%20con%20un%20asesor%20ISO%20SMART',
  whatsapp: 'https://wa.me/50600000000?text=Hola%2C%20quiero%20conocer%20ISO%20SMART%20y%20solicitar%20una%20demo.',
};

export const navItems = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Solución', href: '#solucion' },
  { label: 'Funcionalidades', href: '#funcionalidades' },
  { label: 'Beneficios', href: '#beneficios' },
  { label: 'Para quién es', href: '#para-quien-es' },
  { label: 'Contacto', href: '#contacto' },
];

export const problemItems = [
  'Documentos dispersos entre carpetas, correos y hojas de cálculo.',
  'Evidencias difíciles de controlar, validar y recuperar en auditoría.',
  'Hallazgos sin trazabilidad clara de responsables, fechas y cierres.',
  'Procesos ISO manejados de forma manual, con poca visibilidad gerencial.',
];

export const solutionItems = [
  { title: 'Centraliza información', text: 'Documentos, evidencias, auditorías y planes de acción viven en un solo entorno controlado.' },
  { title: 'Controla el seguimiento', text: 'Asigna responsables, fechas, estados y prioridades sin depender de correos dispersos.' },
  { title: 'Prepara auditorías', text: 'Organiza registros y trazabilidad para responder con mayor claridad ante clientes y auditores.' },
];

export const features = [
  { icon: FileCheck2, title: 'Gestión documental', text: 'Controla documentos, versiones, vigencias y responsables del sistema de gestión.' },
  { icon: Archive, title: 'Control de evidencias', text: 'Registra evidencias por proceso, requisito, auditoría o plan de acción.' },
  { icon: ClipboardCheck, title: 'Auditorías internas', text: 'Planifica auditorías, listas de verificación, hallazgos y seguimiento.' },
  { icon: FileSearch, title: 'Hallazgos y no conformidades', text: 'Clasifica, prioriza y da trazabilidad a cada hallazgo hasta su cierre.' },
  { icon: Route, title: 'Planes de acción', text: 'Define acciones, responsables, fechas compromiso, avances y evidencias de cierre.' },
  { icon: ListChecks, title: 'Matriz de cumplimiento', text: 'Relaciona requisitos, procesos, controles, documentos y evidencias.' },
  { icon: BarChart3, title: 'Indicadores y reportes', text: 'Visualiza desempeño, pendientes, vencimientos y avance de cumplimiento.' },
  { icon: KeyRound, title: 'Roles y permisos', text: 'Configura accesos por usuario, área, rol o nivel de responsabilidad.' },
  { icon: Bell, title: 'Recordatorios', text: 'Mantén seguimiento de vencimientos, revisiones, compromisos y acciones críticas.' },
  { icon: History, title: 'Historial y trazabilidad', text: 'Consulta cambios, responsables y evolución de cada elemento del sistema.' },
];

export const benefits = [
  { icon: FolderKanban, title: 'Menos desorden operativo', text: 'Reduce la dependencia de carpetas compartidas y archivos duplicados.' },
  { icon: ShieldCheck, title: 'Mejor preparación para auditorías', text: 'Encuentra información crítica con rapidez y respaldo trazable.' },
  { icon: Gauge, title: 'Menos trabajo manual', text: 'Automatiza seguimiento, recordatorios y control de pendientes.' },
  { icon: Target, title: 'Responsables claros', text: 'Cada acción tiene dueño, fecha, estado y evidencia asociada.' },
  { icon: LayoutDashboard, title: 'Mejor visibilidad gerencial', text: 'Convierte el sistema de gestión en información útil para decidir.' },
  { icon: CheckCircle2, title: 'Imagen más profesional', text: 'Presenta un sistema ordenado ante clientes, auditores y equipos internos.' },
];

export const audiences = [
  { icon: Building2, label: 'Empresas certificadas ISO' },
  { icon: Building2, label: 'Empresas en proceso de certificación' },
  { icon: UsersRound, label: 'Consultores ISO' },
  { icon: UsersRound, label: 'Departamentos de calidad' },
  { icon: ShieldCheck, label: 'Equipos de cumplimiento' },
  { icon: LayoutDashboard, label: 'Gerencias operativas' },
  { icon: Archive, label: 'Empresas que gestionan ISO en Excel o carpetas compartidas' },
];

export const differentiators = [
  { icon: Fingerprint, title: 'Diseñado para gestión ISO', text: 'No es un gestor genérico: está pensado para documentación, evidencia, auditoría y mejora continua.' },
  { icon: LockKeyhole, title: 'Trazabilidad completa', text: 'Cada documento, hallazgo, acción y evidencia conserva contexto operativo.' },
  { icon: UsersRound, title: 'Escalable por módulos', text: 'Crece por áreas, sedes, usuarios y procesos sin perder orden.' },
  { icon: ShieldCheck, title: 'Base tecnológica moderna', text: 'Interfaz clara, arquitectura lista para integrarse con backend, login y dashboard administrativo.' },
];
