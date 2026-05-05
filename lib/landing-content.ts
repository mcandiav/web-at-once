export type NavItem = { label: string; href: string };
export type CardItem = { title: string; description: string };
export type StepItem = { title: string; description: string };

export const landingContent = {
  nav: [
    { label: "Diagnóstico", href: "#diagnostico" },
    { label: "Casos de Uso", href: "#casos" },
    { label: "Proceso", href: "#proceso" },
    { label: "Para quién es", href: "#perfil" },
  ] as NavItem[],
  hero: {
    eyebrow: "Diagnóstico IA + NetSuite",
    title: "Optimiza tu operación con IA conectada a NetSuite",
    body1:
      "Ayudamos a empresas productivas que usan NetSuite a detectar oportunidades reales para reducir trabajo manual, mejorar trazabilidad, proteger márgenes y convertir datos operacionales en decisiones gerenciales.",
    body2:
      "Analizamos la brecha entre tu ERP y la operación real para identificar dónde la IA, automatización e integraciones pueden generar impacto medible.",
    primaryCta: "Solicitar evaluación IA + NetSuite",
    secondaryCta: "Ver cómo funciona",
    commercialLine: "Diagnóstico en 2-3 semanas • USD 4.900 • Remoto o híbrido",
    chips: ["Quick Wins", "Diagnóstico IA", "NetSuite Operations"],
    metrics: [
      "10 áreas analizadas",
      "100% remote friendly",
      "USD 4.900 valor diagnóstico",
      "2-3 semanas",
    ],
    flow: [
      "Evaluamos tu operación actual.",
      "Identificamos oportunidades de IA.",
      "Entregamos roadmap ejecutable.",
    ],
  },
  problem: {
    eyebrow: "El Problema",
    title: "Tu empresa usa NetSuite, pero parte de la operación sigue fuera del sistema",
    description:
      "Muchas empresas cuentan con un ERP robusto, pero sus procesos críticos siguen dependiendo de planillas, reuniones, reportes poco accionables y decisiones basadas más en experiencia que en datos operacionales conectados.",
    cards: [
      {
        title: "Procesos críticos en Excel",
        description: "Información operativa relevante queda fuera del ERP o se duplica manualmente.",
      },
      {
        title: "Coordinación por reuniones",
        description: "Decisiones y seguimiento dependen de reuniones, memoria y coordinación informal.",
      },
      {
        title: "Reportes poco accionables",
        description: "Los datos existen, pero no se transforman fácilmente en decisiones de gestión.",
      },
      {
        title: "Decisiones por intuición",
        description: "La experiencia pesa más que indicadores conectados y alertas oportunas.",
      },
    ] as CardItem[],
  },
  diagnosis: {
    eyebrow: "El Diagnóstico",
    title: "10 áreas analizadas a fondo",
    description:
      "Evaluamos punto por punto dónde tu operación puede funcionar mejor conectando NetSuite, IA, automatización e integraciones prácticas.",
    cards: [
      { title: "Costos y márgenes", description: "Precisión en cálculo, atribución y seguimiento de costos reales." },
      { title: "Producción", description: "Planificación, ejecución y control de órdenes de trabajo." },
      { title: "Inventario", description: "Materiales inmovilizados, baja rotación y oportunidades de control." },
      { title: "Trazabilidad", description: "Seguimiento de cambios, compromisos, decisiones y datos operacionales." },
      { title: "Alertas automáticas", description: "Notificaciones proactivas para eventos críticos de operación." },
      { title: "Integraciones", description: "Conexión entre NetSuite, IA y herramientas externas." },
      { title: "Automatización", description: "Tareas repetitivas que pueden eliminarse o simplificarse." },
      { title: "Reportabilidad", description: "Transformación de datos en reportes gerenciales útiles." },
      { title: "Operación real vs ERP", description: "Brechas entre el proceso real y el registro formal en NetSuite." },
      { title: "Priorización de oportunidades", description: "Clasificación por impacto, dificultad y quick wins." },
    ] as CardItem[],
  },
  deliverables: {
    eyebrow: "Lo que recibes",
    title: "Entregables concretos del diagnóstico",
    cards: [
      { title: "Problemas detectados", description: "Principales puntos críticos de operación, datos y gestión." },
      { title: "Brechas identificadas", description: "Diferencias entre lo que registra NetSuite y lo que realmente ocurre." },
      { title: "Oportunidades de IA", description: "Casos donde IA puede reducir carga manual o mejorar decisiones." },
      { title: "Priorización", description: "Ordenamiento por impacto, dificultad, urgencia y valor operacional." },
      { title: "Quick wins", description: "Mejoras rápidas de alto impacto que pueden abordarse primero." },
      { title: "Roadmap inicial", description: "Ruta práctica para implementar las oportunidades priorizadas." },
    ] as CardItem[],
  },
  useCases: {
    eyebrow: "Ejemplos prácticos",
    title: "Oportunidades que podemos identificar",
    description:
      "Detectamos procesos donde IA puede reducir trabajo manual, cruzar información, generar alertas y transformar datos operacionales en herramientas reales de gestión.",
    cards: [
      { title: "Tiempos reales de producción", description: "Medición conectada a órdenes de trabajo y ejecución real." },
      { title: "Comparación estimada vs real", description: "Contrastar tiempos o costos presupuestados con resultados reales." },
      { title: "Alertas de margen", description: "Avisos cuando una orden, venta o proyecto empieza a perder rentabilidad." },
      { title: "Reportes editables", description: "Reducir recarga manual de información en reportes periódicos." },
      { title: "Trazabilidad histórica", description: "Registro de cambios en fechas, compromisos, observaciones y decisiones." },
      { title: "Inventario añejo", description: "Identificación de materiales sin movimiento o baja rotación." },
      { title: "Resúmenes automáticos", description: "Reportes gerenciales generados desde datos cruzados." },
      { title: "Patrones de mejora", description: "Identificación de piezas, materiales, clientes o procesos repetitivos." },
      { title: "Cruce de datos", description: "Relación entre producción, inventario, ventas y costos." },
    ] as CardItem[],
  },
  process: {
    eyebrow: "El proceso",
    title: "Cómo funciona el diagnóstico",
    description:
      "Un proceso estructurado de 5 pasos para identificar oportunidades concretas con IA aplicada a NetSuite y la operación real de tu empresa.",
    steps: [
      { title: "Solicitud", description: "La empresa completa el formulario con información básica y principales dolores operacionales." },
      { title: "Revisión", description: "Se analiza si la empresa cumple condiciones para que el diagnóstico tenga valor." },
      { title: "Reunión inicial", description: "Se entienden procesos críticos, áreas involucradas, sistemas actuales y oportunidades." },
      { title: "Análisis", description: "Se revisan procesos, reportes, planillas, flujos y brechas entre NetSuite y operación." },
      { title: "Informe final", description: "Se entrega una lista priorizada de oportunidades, quick wins y roadmap de implementación." },
    ] as StepItem[],
  },
  idealProfile: {
    eyebrow: "Perfil ideal",
    title: "¿Es para tu empresa?",
    forCompanies: [
      "Utilizan NetSuite actualmente o están en proceso de implementación.",
      "Tienen operación productiva, logística, industrial, bodega o inventario.",
      "Manejan órdenes de trabajo, órdenes de venta, materiales o planificación.",
      "Usan Excel para complementar procesos críticos.",
      "Necesitan mejorar trazabilidad, costos, tiempos, márgenes o reportabilidad.",
      "Tienen gerencia involucrada en la mejora operacional.",
      "Buscan aplicar IA de forma práctica.",
    ],
    worksBest: [
      { title: "Hay madurez operacional", description: "Existen procesos definidos y datos disponibles en NetSuite." },
      { title: "Existe disposición a revisar procesos", description: "Hay apertura a cambiar lo que no funciona." },
      { title: "Se busca aplicar IA", description: "El foco es práctico, no una tendencia abstracta." },
      { title: "Hay gerencia comprometida", description: "Existe patrocinio desde la dirección." },
    ] as StepItem[],
    closing:
      "El diagnóstico requiere uso real de NetSuite y disposición a revisar procesos actuales para detectar oportunidades concretas de mejora.",
    metrics: ["30+ años de experiencia", "100% foco operacional", "NetSuite expertise"],
  },
  experience: {
    eyebrow: "Nuestra experiencia",
    title: "Liderado por ingenieros con más de 30 años de experiencia en procesos apoyados en TI",
    paragraphs: [
      "Combinamos experiencia en procesos empresariales, tecnología, IA, automatización e integración para detectar oportunidades reales de mejora operacional.",
      "El enfoque parte desde la operación, los procesos, la gestión, los datos y las necesidades reales de empresas productivas, no desde la moda de IA.",
      "Entendemos organizaciones tradicionales, decisiones operacionales y cómo NetSuite puede potenciarse dentro y fuera del ERP.",
    ],
    cards: [
      { title: "Experiencia operacional", description: "Permite hacer las preguntas correctas y entender la realidad del negocio." },
      { title: "IA aplicada", description: "Permite diseñar soluciones más rápidas, prácticas y conectadas a datos reales." },
      { title: "NetSuite integrado", description: "Lleva las soluciones al corazón de la gestión empresarial." },
    ] as CardItem[],
    metrics: ["2-3 semanas", "USD 4.900", "Remoto o híbrido"],
  },
  form: {
    eyebrow: "Evaluación",
    title: "Solicita tu evaluación IA + NetSuite",
    intro1: "Completa el formulario para revisar si tu empresa califica para el diagnóstico.",
    intro2:
      "Si existen oportunidades concretas, coordinaremos una reunión inicial para entender tu operación y evaluar el alcance.",
    benefits: [
      "Sin compromiso inicial.",
      "Revisión de idoneidad gratuita.",
      "Respuesta en 48 horas hábiles.",
      "Contacto directo: contacto@at-once.cl.",
    ],
    submit: "Solicitar evaluación IA + NetSuite",
    privacy:
      "Tu información está segura. No compartimos datos con terceros y responderemos en menos de 48 horas hábiles.",
  },
  finalCta: {
    eyebrow: "Diagnóstico especializado",
    title: "Descubre dónde la IA puede generar impacto real en tu operación",
    paragraph:
      "Por USD 4.900 obtienes un diagnóstico especializado para identificar oportunidades concretas de optimización con IA aplicada a tu ERP y operación real.",
    benefit: "Identifica oportunidades antes de invertir en desarrollos mayores.",
    line: "Diagnóstico en 2-3 semanas • Modalidad remota o híbrida • Informe ejecutivo incluido",
    cta: "Solicitar evaluación IA + NetSuite",
  },
  footer: {
    proposition:
      "Ayudamos a empresas productivas que usan NetSuite a optimizar su operación con IA, automatizaciones e integraciones prácticas.",
    nav: ["Inicio", "Diagnóstico", "Casos de Uso", "Para quién es", "Sobre At-Once"],
    contact: "contacto@at-once.cl",
    cta: "Solicitar evaluación",
    copyright: "© 2026 At-Once. Todos los derechos reservados.",
    finalLine: "Diseñado para empresas productivas con NetSuite.",
  },
  modal: {
    title: "Evaluación enviada",
    message: "Revisaremos tu solicitud y te contactaremos en menos de 48 horas hábiles.",
    button: "Entendido",
  },
  options: {
    netsuiteUsage: [
      "Sí, usamos NetSuite actualmente.",
      "Estamos implementando NetSuite.",
      "Estamos evaluando NetSuite.",
      "No usamos NetSuite.",
    ],
    operationType: [
      "Producción / manufactura.",
      "Metalmecánica.",
      "Distribución / logística.",
      "Bodega e inventario.",
      "Servicios industriales.",
      "Importación / comercialización.",
      "Otro.",
    ],
    processToOptimize: [
      "Órdenes de trabajo.",
      "Órdenes de venta.",
      "Cotizaciones.",
      "Control de costos.",
      "Margen por orden.",
      "Planificación producción.",
      "Bodega / inventario.",
      "Reportes gerenciales.",
      "Alertas automáticas.",
      "Trazabilidad.",
      "Integración Excel.",
      "Necesito diagnóstico.",
    ],
    excelUsage: [
      "Sí, en procesos críticos.",
      "Sí, pero solo para reportes menores.",
      "No.",
      "No estoy seguro.",
    ],
    meetingParticipants: [
      "Gerencia general.",
      "Operaciones.",
      "Producción.",
      "Finanzas.",
      "TI / Sistemas.",
      "Bodega / Inventario.",
      "Comercial / Ventas.",
      "Otro.",
    ],
    startDate: [
      "Lo antes posible.",
      "Dentro de 30 días.",
      "En 2 a 3 meses.",
      "Solo estoy evaluando.",
    ],
  },
};

