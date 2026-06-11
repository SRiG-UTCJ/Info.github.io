
const i18n = {
  es: {
header_title:"Sistema de Riego Inteligente por Goteo",
page_title: "SRIG · Sistema de Riego Inteligente por Goteo",
    /* ─────────── Navegación ─────────── */
    nav_inicio: "Inicio",
    nav_funcionamiento: "Sistema",
    nav_arquitectura: "Arquitectura",
    nav_alcance: "Alcance",
    nav_legal: "Aviso legal",
    nav_contacto: "Contacto",

lbinicio: "Inicio",
  lbfuncionamiento: "Funcionamiento del sistema",
  lbarquitectura: "Arquitectura",
  lbalcance: "Alcance del proyecto",
  lblegal: "Aviso legal",
  lbcontacto: "Contacto",
    /* ─────────── Inicio ─────────── */
    title_intro: "¿Qué es el SRIG?",
    intro_p1:
      "SRIG (Sistema de Riego Inteligente por Goteo) es un proyecto académico desarrollado como parte de una integradora del grupo IPIW32, perteneciente a la carrera de Procesos y Operaciones Industriales, implementado para el control del riego en un área específica dentro de la Universidad Tecnológica de Ciudad Juárez (UTCJ).",
    intro_p2:
      "El sistema fue diseñado con fines educativos, demostrativos y de integración tecnológica. No se trata de un producto comercial ni de un sistema de uso general.",
    intro_highlight:
      "Este proyecto fue desarrollado aplicando principios de control de procesos, operación de sistemas, seguridad y mejora en el uso de recursos.",

    title_purpose: "Propósito del proyecto",
    purpose_p1:
      "El SRIG tiene como propósito integrar los conocimientos adquiridos en la carrera de Procesos y Operaciones Industriales, tales como:",
    purpose_list_1: "Control y monitoreo de procesos",
    purpose_list_2: "Automatización básica de operaciones",
    purpose_list_3: "Uso eficiente de recursos",
    purpose_list_4: "Gestión de condiciones seguras de operación",
    purpose_list_5: "Estandarización de la operación del riego",
    purpose_p2:
      "El sistema se desarrolló como un ejercicio práctico de análisis, diseño e implementación de un proceso automatizado en un entorno real.",

    /* ─────────── Funcionamiento ─────────── */
    title_operation: "¿Qué hace el sistema?",
    operation_p1:
      "El SRIG opera como un proceso automatizado de riego en el cual se controlan entradas, condiciones de operación y salidas, garantizando un funcionamiento estable y seguro.",

    op_control: "Control de riego",
    op_control_desc:
      "Administra el riego por goteo de dos zonas independientes mediante electroválvulas.",
    op_monitor: "Monitoreo",
    op_monitor_desc:
      "Mide la humedad del suelo y verifica la presencia de flujo de agua.",
    op_auto: "Automatización",
    op_auto_desc:
      "Decide de forma autónoma el inicio y paro del riego según el modo de operación.",
    op_safety: "Seguridad",
    op_safety_desc:
      "Detiene la operación ante condiciones anómalas o inseguras.",

    title_flow: "Flujo general de operación",
    flow_1:
      "El sistema monitorea las condiciones iniciales del proceso (humedad del suelo cuando aplica).",
    flow_2:
      "Se evalúan las condiciones de operación con base en el modo activo.",
    flow_3:
      "Se autoriza la apertura de la electroválvula correspondiente.",
    flow_4:
      "Se verifica la presencia de flujo como condición válida del proceso.",
    flow_5:
      "El proceso se mantiene activo hasta cumplir la condición de paro.",
    flow_6:
      "Ante cualquier desviación, el proceso se detiene automáticamente.",


proc_vars_title: "Variables del proceso",

  proc_vars_in:
    "Variables de entrada: nivel de humedad del suelo y programación de riego activa.",

  proc_vars_ctrl:
    "Variables de control: apertura y cierre de las electroválvulas de riego.",

  proc_vars_out:
    "Variables de salida: presencia de flujo de agua y estado operativo del riego.",

    safety_note:
      "El sistema prioriza la seguridad del proceso, evitando la continuidad de la operación fuera de los parámetros definidos.",

    /* ─────────── Arquitectura ─────────── */
    title_architecture: "Arquitectura del sistema",
    arch_p1:
      "La arquitectura del SRIG fue diseñada para soportar un proceso confiable, repetible y seguro, permitiendo el control centralizado del riego como una operación industrial a pequeña escala.",
    arch_p2:
      "La solución reduce la intervención manual y asegura un comportamiento consistente del proceso bajo condiciones controladas.",

    arch_ctrl: "Control principal",
    arch_ctrl_desc:
      "Microcontrolador ESP32 encargado de la lógica de decisión, control de válvulas y gestión de seguridad.",
    arch_act: "Actuación",
    arch_act_desc:
      "Electroválvulas de riego por goteo controladas mediante módulos de potencia con aislamiento eléctrico.",
    arch_sens: "Sensores",
    arch_sens_desc:
      "Sensores de humedad de suelo y caudal utilizados para validación del proceso y detección de anomalías.",
    arch_ui: "Interfaz de usuario",
    arch_ui_desc:
      "Interfaz web complementada con botones físicos para control y supervisión del sistema.",

    arch_highlight:
      "La arquitectura sigue el principio de seguridad ante todo: ante cualquier falla o condición incierta, las válvulas son cerradas automáticamente.",

    /* ─────────── Alcance ─────────── */
    title_scope: "Alcance del proyecto",
    scope_1:
      "✔ Proyecto académico de Procesos y Operaciones Industriales (IPIW32).",
    scope_2:
      "✔ Implementación real de un proceso automatizado de riego.",
    scope_3:
      "✔ Aplicación de principios de control operativo y seguridad de proceso.",
    scope_4:
      "✔ Uso eficiente de recursos.",
    scope_5:
      "✔ Enfoque educativo y demostrativo.",
    scope_6:
      "✖ No es un producto comercial.",
    scope_7:
      "✖ No está diseñado para uso industrial masivo.",

    title_location: "Ubicación del proyecto",
    location_p1:
      "El sistema SRIG fue diseñado e implementado exclusivamente para una área verde específica identificada como Jardín HJ dentro de la Universidad Tecnológica de Ciudad Juárez (UTCJ).",
    location_p2:
      "El área fue nombrada con base en su ubicación contigua entre los edificios H y J del campus.",
    location_p3:
      "El diseño del sistema responde a las condiciones particulares de dicha área, por lo que no se considera una solución genérica.",

    /* ─────────── Aviso legal ─────────── */
    title_legal: "Aviso legal",
    legal_1:
      "SRIG (Sistema de Riego Inteligente por Goteo) es un proyecto académico desarrollado exclusivamente con fines educativos como parte de la integradora IPIW32.",
    legal_2:
      "El desarrollo y documentación del sistema se realizaron bajo un enfoque académico propio de la carrera de Procesos y Operaciones Industriales.",
    legal_3:
      "Este sistema no constituye un producto comercial, industrial o certificado, ni está destinado a implementación masiva.",
    legal_4:
      "La información presentada tiene un carácter informativo, formativo y demostrativo.",
    legal_5:
      "Cualquier uso, réplica o modificación fuera del entorno académico original es responsabilidad exclusiva de quien lo implemente.",
    legal_6:
      "La UTCJ y los desarrolladores no asumen responsabilidad por daños derivados de usos no previstos.",

    /* ─────────── Contacto / Tabla ─────────── */
title_contact: "Contacto",
    contact_p: "Este proyecto se encuentra disponible para consulta académica por parte de estudiantes de la UTCJ.",
    table_col_project: "Elemento del proyecto",
    table_col_resp: "Responsable",
    table_col_func: "Función",
    table_col_mail: "Correo",
table_lbl_1: "Elemento del proyecto",
table_lbl_2: "Responsable",
table_lbl_3: "Función",
table_lbl_4: "Correo",

    contact_highlight: "Para dudas académicas, mejoras o análisis del sistema, se recomienda canalizarlo por los medios institucionales correspondientes.",
footer_text: "SRIG · Proyecto académico · UTCJ\n© 2026 · Uso educativo",
  },

  /* ======================================================= */

  en: {
header_title:"Smart Drip Irrigation System",
page_title: "SRIG · Smart Drip Irrigation System",
    /* ─────────── Navigation ─────────── */
    nav_inicio: "Home",
    nav_funcionamiento: "System",
    nav_arquitectura: "Architecture",
    nav_alcance: "Scope",
    nav_legal: "Legal notice",
    nav_contacto: "Contact",

lbinicio: "Home",
  lbfuncionamiento: "System operation",
  lbarquitectura: "Architecture",
  lbalcance: "Project scope",
  lblegal: "Legal notice",
  lbcontacto: "Contact",
    /* ─────────── Home ─────────── */
    title_intro: "What is SRIG?",
    intro_p1:
      "SRIG (Smart Drip Irrigation System) is an academic project developed as part of the IPIW32 integrative project within the Industrial Processes and Operations program. It was implemented to control irrigation in a specific area of the Universidad Tecnológica de Ciudad Juárez (UTCJ).",
    intro_p2:
      "The system was designed for educational, demonstrative, and applied learning purposes. It is not intended to be a commercial product or a general-purpose solution.",
    intro_highlight:
      "This project was developed by applying principles of process control, operational management, system safety, and resource efficiency.",

    title_purpose: "Project Purpose",
    purpose_p1:
      "The purpose of the SRIG project is to integrate the knowledge acquired in the Industrial Processes and Operations program, including:",
    purpose_list_1: "Process monitoring and control",
    purpose_list_2: "Basic automation of operations",
    purpose_list_3: "Efficient use of resources",
    purpose_list_4: "Management of safe operating conditions",
    purpose_list_5: "Standardization of irrigation operations",
    purpose_p2:
      "The system was developed as a practical exercise involving the analysis, design, and implementation of an automated process in a real operational environment.",

    /* ─────────── System Operation ─────────── */
    title_operation: "System Operation",
    operation_p1:
      "SRIG operates as an automated irrigation process in which inputs, operating conditions, and outputs are continuously controlled to ensure stable and safe performance.",

    op_control: "Irrigation Control",
    op_control_desc:
      "Manages drip irrigation through two independent zones using solenoid valves.",
    op_monitor: "Monitoring",
    op_monitor_desc:
      "Measures soil moisture and verifies water flow presence.",
    op_auto: "Automation",
    op_auto_desc:
      "Automatically determines irrigation start and stop conditions.",
    op_safety: "Safety",
    op_safety_desc:
      "Immediately halts operation when abnormal or unsafe conditions are detected.",

    title_flow: "General Operating Flow",
    flow_1:
      "The system monitors initial process conditions (soil moisture when applicable).",
    flow_2:
      "Operating conditions are evaluated based on the selected mode.",
    flow_3:
      "Authorization to open the corresponding solenoid valve is granted.",
    flow_4:
      "Water flow presence is verified as a valid process condition.",
    flow_5:
      "The process remains active until the defined stop condition is met.",
    flow_6:
      "In case of deviation, the process is automatically shut down.",


proc_vars_title: "Process Variables",

  proc_vars_in:
    "Input variables: soil moisture level and active irrigation scheduling.",

  proc_vars_ctrl:
    "Control variables: opening and closing of irrigation solenoid valves.",

  proc_vars_out:
    "Output variables: water flow presence and irrigation operational status.",

    safety_note:
      "At all times, the system prioritizes process safety, preventing operation outside defined parameters.",

    /* ─────────── Architecture ─────────── */
    title_architecture: "System Architecture",
    arch_p1:
      "The SRIG architecture was designed to support a reliable, repeatable, and safe operational process, enabling centralized irrigation control as a small-scale industrial operation.",
    arch_p2:
      "The solution minimizes manual intervention and ensures consistent process behavior under controlled conditions.",

    arch_ctrl: "Central Controller",
    arch_ctrl_desc:
      "ESP32 microcontroller responsible for decision logic, valve control, and safety management.",
    arch_act: "Actuation System",
    arch_act_desc:
      "Drip irrigation solenoid valves controlled through electrically isolated power modules.",
    arch_sens: "Sensors",
    arch_sens_desc:
      "Soil moisture and water flow sensors used for process validation and anomaly detection.",
    arch_ui: "User Interface",
    arch_ui_desc:
      "Web-based interface complemented by local physical control buttons.",

    arch_highlight:
      "The architecture follows a safety-first principle: in the presence of failure or uncertainty, valves are automatically closed.",

    /* ─────────── Scope ─────────── */
    title_scope: "Project Scope",
    scope_1:
      "✔ Academic project within the Industrial Processes and Operations program (IPIW32).",
    scope_2:
      "✔ Real implementation of an automated operational irrigation process.",
    scope_3:
      "✔ Application of operational control and process safety principles.",
    scope_4:
      "✔ Emphasis on efficient resource usage.",
    scope_5:
      "✔ Educational and demonstrative focus.",
    scope_6:
      "✖ Not a commercial product.",
    scope_7:
      "✖ Not intended for large-scale industrial deployment.",

    title_location: "Project Location",
    location_p1:
      "The SRIG system was designed and implemented exclusively for a specific green area identified as “Jardín HJ” within the Universidad Tecnológica de Ciudad Juárez (UTCJ).",
    location_p2:
      "The area was named based on its location between buildings H and J of the campus.",
    location_p3:
      "The system design responds to the particular conditions of this area and is not considered a generic solution.",

    /* ─────────── Legal Notice ─────────── */
    title_legal: "Legal Notice",
    legal_1:
      "SRIG (Smart Drip Irrigation System) is an academic project developed exclusively for educational purposes as part of the IPIW32 integrative project.",
    legal_2:
      "The development and documentation of the system were carried out under an academic approach consistent with the Industrial Processes and Operations program.",
    legal_3:
      "This system does not constitute a commercial, industrial, or certified product and is not intended for large-scale implementation.",
    legal_4:
      "The information presented is for informational, educational, and demonstrative purposes only.",
    legal_5:
      "Any replication, modification, or implementation outside the original academic context is the sole responsibility of the party performing it.",
    legal_6:
      "The Universidad Tecnológica de Ciudad Juárez (UTCJ) and the developers assume no liability for unintended or improper use.",

    /* ─────────── Contact / Table ─────────── */
    title_contact: "Contact",
    contact_p: "This project is available for academic consultation by students of the UTCJ.",
    table_col_project: "Project element",
    table_col_resp: "Responsible",
    table_col_func: "Function",
    table_col_mail: "Email",
table_lbl_1: "Project element",
table_lbl_2: "Responsible",
table_lbl_3: "Function",
table_lbl_4: "Email",

    contact_highlight: "For academic questions, improvements, or system analysis, it is recommended to channel them through the corresponding institutional means.",
footer_text: "SRIG · Academy project · UTCJ\n© 2026 · Educational use",
  }
};


let currentLang = "es";

function applyLanguage(lang) {
document.title = i18n[lang].page_title;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (i18n[lang] && i18n[lang][key]) {
      el.textContent = i18n[lang][key];
    }

  });

  currentLang = lang;
  localStorage.setItem("lang", lang);

  // Actualizar texto del botón
  langBtn.textContent = lang === "es" ? "EN" : "ES";
document.documentElement.lang = lang;


updateTableLabels(lang);
}
function updateTableLabels(lang) {
  document.querySelectorAll(".info-table tr").forEach(row => {
    row.querySelectorAll("td").forEach((td, index) => {
      const key = `table_lbl_${index + 1}`;
      if (i18n[lang][key]) {
        td.setAttribute("data-label", i18n[lang][key]);
      }
    });
  });
}

const langBtn = document.getElementById("langToggle");

langBtn.addEventListener("click", () => {
  applyLanguage(currentLang === "es" ? "en" : "es");
});

// Idioma inicial (localStorage o español por defecto)
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "es";
  applyLanguage(savedLang);
});
const btn = document.getElementById("themeToggle");

function updateIcon() {
  btn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
}

btn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  updateIcon();
});


updateIcon();

// Service worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js");
}

function showPage(id) {
  const pages = document.querySelectorAll(".page");
  
  pages.forEach(p => {
    p.style.opacity = "0";
    setTimeout(() => {
      p.classList.remove("active");
      if(p.id === id) {
        p.classList.add("active");
        setTimeout(() => {
          p.style.opacity = "1";
          // Reiniciar animaciones AOS al cambiar de página
          AOS.refresh();
        }, 50);
      }
    }, 300);
  });

  // Actualizar nav links
  document.querySelectorAll(".nav-link").forEach(a => {
    a.classList.toggle("active", a.getAttribute("href") === `#${id}`);
  });

  updateBreadcrumb(id);
}

window.addEventListener("hashchange", () => {
  const pageId = location.hash.replace("#", "") || "inicio";
  showPage(pageId);
});

document.addEventListener("DOMContentLoaded", () => {
  const pageId = location.hash.replace("#", "") || "inicio";
  showPage(pageId);
});


function updateBreadcrumb(id) {
  const bc = document.getElementById("breadcrumb");
const key = `lb${id}`;

const homeLabel =
  currentLang === "es" ? "Inicio" : "Home";
const text =
    i18n[currentLang] && i18n[currentLang][key]
      ? i18n[currentLang][key]
      : id;

  bc.innerHTML = `${homeLabel} <span class="sep">›</span> <span>${text}</span>`;
}

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("./sw.js")
    .then(() => console.log("Service Worker registrado"))
    .catch(err => console.error("SW error:", err));
}
