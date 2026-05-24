// ═══════════════════════════════════════════════════════════════════════════
// DATA
// ═══════════════════════════════════════════════════════════════════════════

const T = {
  en: {
    title: "Expert Judgment Instrument",
    subtitle: "Metaverse Readiness in Higher Education Institution (HEI)",
    badge: "Metaverse Readiness Framework",
    start: 'Begin Assessment',
    prev: 'Back',
    next: 'Next',
    submit: "Submit",
    pageOf: (a,b) => `Step ${a} of ${b}`,
    defLabel: "Definition",
    cviLabel: "CVI Relevance Score",
    cviHint: "Click one of the options below.",
    cviScale: ["Not Relevant","Major Revision","Minor Revision","Highly Relevant"],
    fbLabel: "Comments (required if NO):",
    fbLabelAddl: "Additional Notes",
    fbSubAddl: "Proposed wording changes, references, or other notes:",
    fbPhC1: "If NO, why?",
    fbPhC2: "Wording improvement suggestions:",
    fbPhC3: "If NO, what is your suggestion?",
    fbPhC4: "If NO, which construct would be more appropriate?",
    fbPlaceholder: "Write your comments here...",
    yes: 'YES',
    no: 'NO',
    c1Label: "C1. Content Relevance",
    c2Label: "C2. Clarity of Wording",
    c3Label: "C3. HEI Context Fit",
    c4LabelFn: code => `C4. Fit with [${code}]`,
    c1Q: "Is this item relevant and important for measuring this construct?",
    c2Q: "Is the wording clear, unambiguous, and understandable by HEI officials?",
    c3Q: "Can this be answered from an institutional perspective without direct metaverse experience?",
    c4QFn: (code,name) => `Is this item thematically appropriate under '${code} — ${name}'?`,
    overallTitle: "Overall Model Assessment",
    overallQ1: "The hierarchical model structure (Dimension → Construct → Item) is logical for a metaverse readiness framework.",
    overallQ2: "The three dimensions (Technology, Organization, Environment Readiness) adequately cover critical readiness aspects.",
    overallQ3: "The six constructs sufficiently represent all important aspects to be measured.",
    overallQ4: "The items are overall appropriate for the Indonesian HEI institutional context.",
    overallQ5: "The language used is easily understood by HEI structural officials.",
    overallQ6: "The total number of items (33) is proportional and manageable for respondents.",
    finalTitle: "Final Decision",
    finalOpts: [
      'SUITABLE — All items are valid and clear; no revision needed.',
      'SUITABLE with minor revisions — Some items need minor wording adjustments.',
      'MAJOR REVISION REQUIRED — Some items or constructs need substantial changes.',
      'NOT SUITABLE — The questionnaire needs to be rebuilt.'
    ],
    noteFinal: "Additional notes / general recommendations:",
    noteFinalPh: "Any additional comments not covered above...",
    noteNeg: 'TRP items are NEGATIVE toward Technology Readiness. Score YES on C1 means you agree the item appropriately measures risk perception — not that such conditions are desirable.',
    noteDV: 'MR items are HOLISTIC/GLOBAL items, distinct from all predictor items. Assess whether these four items represent comprehensive institutional readiness without overlapping predictor items.',
    noteIcvi: "",
    profileFields: ["Full Name & Title","Institution / Affiliation","Current Position","Expertise Area","Highest Education","Years of Experience","Date"],
    expertiseOpts: ["Information Systems / Educational Technology","Higher Education Management","VR / AR / Metaverse in Education","Quantitative Research / PLS-SEM","HEI IT Practitioner","Other"],
    eduOpts: ["Master's (S2)","Doctorate (S3)","Professor"],
    expOpts: ["5–10 years","10–15 years","> 15 years"],
    instrTitle: "Instructions",
    instrItems: [
      'Mark YES or NO for each criterion (C1–C4) per item.',
      "If NO — you must write comments or suggestions in the feedback box.",
      "If YES but with improvement notes — still write them in the feedback box.",
      "Provide a CVI Relevance Score (1–4) for each item.",
    ],
    thankyouTitle: "Thank you!",
    thankyouMsg: "Your expert assessment has been submitted successfully. Your input is invaluable for improving this research instrument.",
    submitting: "Submitting...",
    errRequired: "Please complete all required fields before continuing.",
    errProfile: "Please fill in all profile fields before continuing.",
    successMsg: "Assessment submitted successfully!",
    errorMsg: "Submission failed. Please try again or contact the researcher.",
    dimLabels: { T:"Technology Readiness", O:"Organization Readiness", E:"Environment Readiness", DV:"Dependent Variable" },
    stepLabels: { cover:"Start", overall:"Overall", done:"Done" },
    backToConstruct: "Back to Constructs",
    nextItem: "Next Item",
    prevItem: "Previous Item",
    finishConstruct: "Finish & Continue",
    addNotes: "Add notes...",
    restoreText: "You have unsaved progress from a previous session.",
    restoreBtn: "Restore",
    dismissBtn: "Dismiss",
  },
  id: {
    title: "Instrumen Expert Judgment",
    subtitle: "Kesiapan Metaverse pada Institusi Pendidikan Tinggi (HEI)",
    badge: "Pre-Adoption Readiness · TOE Framework · PLS-SEM",
    start: 'Mulai Penilaian',
    prev: 'Kembali',
    next: 'Lanjut',
    submit: "Kirim",
    pageOf: (a,b) => `Langkah ${a} dari ${b}`,
    defLabel: "Definisi",
    cviLabel: "Skor Relevansi CVI",
    cviHint: "Klik salah satu opsi di bawah ini.",
    cviScale: ["Tidak Relevan","Revisi Mayor","Revisi Minor","Sangat Relevan"],
    fbLabel: "Komentar (wajib jika TIDAK):",
    fbLabelAddl: "Catatan Tambahan",
    fbSubAddl: "Usulan perubahan redaksi, referensi, atau catatan lain:",
    fbPhC1: "Jika TIDAK, mengapa?",
    fbPhC2: "Saran perbaikan redaksi:",
    fbPhC3: "Jika TIDAK, bagaimana saran Anda?",
    fbPhC4: "Jika TIDAK, lebih tepat di konstruk mana?",
    fbPlaceholder: "Tuliskan komentar Anda di sini...",
    yes: 'YA',
    no: 'TIDAK',
    c1Label: "C1. Relevansi Konten",
    c2Label: "C2. Kejelasan Redaksi",
    c3Label: "C3. Kesesuaian Konteks HEI",
    c4LabelFn: code => `C4. Kesesuaian [${code}]`,
    c1Q: "Apakah item ini relevan dan penting untuk mengukur konstruk ini?",
    c2Q: "Apakah redaksi jelas, tidak ambigu, dan mudah dipahami pejabat HEI?",
    c3Q: "Apakah dapat dijawab dari perspektif institusional tanpa pengalaman langsung dengan platform metaverse?",
    c4QFn: (code,name) => `Apakah item ini tematik sesuai di bawah konstruk '${code} — ${name}'?`,
    overallTitle: "Penilaian Model Keseluruhan",
    overallQ1: "Struktur hierarki model (Dimensi → Konstruk → Item) sudah logis sebagai kerangka kesiapan metaverse.",
    overallQ2: "Tiga dimensi (Technology, Organization, Environment Readiness) sudah cukup mewakili aspek kritis kesiapan.",
    overallQ3: "Enam konstruk sudah cukup mewakili seluruh aspek penting yang perlu diukur.",
    overallQ4: "Item-item secara keseluruhan sudah sesuai konteks institusi HEI di Indonesia.",
    overallQ5: "Bahasa yang digunakan mudah dipahami oleh pejabat struktural HEI.",
    overallQ6: "Jumlah total item (33) sudah proporsional dan tidak memberatkan responden.",
    finalTitle: "Keputusan Akhir",
    finalOpts: [
      'LAYAK — Semua item valid dan jelas; tidak perlu revisi.',
      'LAYAK dengan revisi minor — Sebagian item perlu perbaikan redaksi kecil.',
      'PERLU REVISI MAYOR — Beberapa item atau konstruk perlu diubah secara substansial.',
      'TIDAK LAYAK — Kuesioner perlu dibangun ulang.'
    ],
    noteFinal: "Catatan umum / saran akhir:",
    noteFinalPh: "Tambahkan masukan umum yang belum tercakup...",
    noteNeg: 'Item TRP bersifat NEGATIF terhadap Technology Readiness. Skor YA pada C1 berarti Anda setuju item ini tepat mengukur persepsi risiko — bukan berarti kondisi tersebut diinginkan.',
    noteDV: 'Item MR adalah penilaian HOLISTIK/GLOBAL yang berbeda dari item prediktor. Nilai apakah keempat item ini cukup mewakili kesiapan menyeluruh TANPA tumpang tindih dengan item prediktor.',
    noteIcvi: "I-CVI: Item valid jika ≥ 78% expert memberi skor 3 atau 4. S-CVI/Ave ≥ 0.90 = model memiliki content validity yang baik.",
    profileFields: ["Nama Lengkap & Gelar","Instansi / Afiliasi","Jabatan Saat Ini","Bidang Keahlian","Pendidikan Tertinggi","Pengalaman","Tanggal Pengisian"],
    expertiseOpts: ["Information Systems / Educational Technology","Manajemen Pendidikan Tinggi","Teknologi VR / AR / Metaverse dalam Pendidikan","Metodologi Kuantitatif / PLS-SEM","Praktisi IT Perguruan Tinggi","Lainnya"],
    eduOpts: ["S2 (Master)","S3 (Doktor)","Profesor"],
    expOpts: ["5–10 tahun","10–15 tahun","> 15 tahun"],
    instrTitle: "Petunjuk Pengisian",
    instrItems: [
      'Beri tanda YA atau TIDAK untuk setiap kriteria (C1–C4) per item.',
      "Jika TIDAK — wajib menuliskan komentar atau saran pada kotak masukan.",
      "Jika YA tetapi ada catatan perbaikan — tetap tuliskan pada kotak masukan.",
      "Berikan Skor Relevansi CVI (1–4) untuk setiap item.",
    ],
    thankyouTitle: "Terima Kasih!",
    thankyouMsg: "Penilaian ahli Anda telah berhasil dikirim. Masukan Anda sangat berharga untuk penyempurnaan instrumen penelitian ini.",
    submitting: "Mengirim...",
    errRequired: "Harap lengkapi semua kolom yang diperlukan sebelum melanjutkan.",
    errProfile: "Harap lengkapi semua data profil sebelum melanjutkan.",
    successMsg: "Penilaian berhasil dikirim!",
    errorMsg: "Pengiriman gagal. Silakan coba lagi atau hubungi peneliti.",
    dimLabels: { T:"Technology Readiness", O:"Organization Readiness", E:"Environment Readiness", DV:"Variabel Dependen" },
    stepLabels: { cover:"Mulai", overall:"Keseluruhan", done:"Selesai" },
    backToConstruct: "Kembali ke Konstruk",
    nextItem: "Item Selanjutnya",
    prevItem: "Item Sebelumnya",
    finishConstruct: "Selesai & Lanjut",
    addNotes: "Tambah catatan...",
    restoreText: "Anda memiliki progres yang belum disimpan dari sesi sebelumnya.",
    restoreBtn: "Pulihkan",
    dismissBtn: "Abaikan",
  }
};

const CONSTRUCTS = [
  { code:"MTA", name:"Metaverse Technology Awareness", dim:"T",
    def: { en:"The level of knowledge and beliefs of HEI institutions about metaverse technology capabilities and their relevance to academic activities.",
           id:"Tingkat pengetahuan dan keyakinan institusi HEI tentang kapabilitas teknologi metaverse dan relevansinya untuk kegiatan akademik." },
    items: [
      { code:"MTA1", name:"Awareness of Immersive Capability",
        def:{ en:"The degree of institutional understanding of metaverse technology's immersive capabilities in creating virtual environments relevant to academic learning contexts.",
              id:"Derajat pemahaman institusi tentang kemampuan imersif teknologi metaverse dalam menciptakan lingkungan virtual yang relevan untuk konteks pembelajaran akademik." }},
      { code:"MTA2", name:"Awareness of Interaction Features",
        def:{ en:"The institution's belief that metaverse enables adaptive immersion level adjustment according to diverse pedagogical needs in the academic environment.",
              id:"Keyakinan institusi bahwa metaverse memungkinkan pengaturan tingkat imersi yang adaptif sesuai kebutuhan pedagogis yang beragam di lingkungan akademik." }},
      { code:"MTA3", name:"Awareness of Natural Interaction",
        def:{ en:"The institution's understanding of metaverse natural interaction features (gesture, voice, haptic) that support intuitive user engagement in virtual environments.",
              id:"Pemahaman institusi tentang fitur interaksi alami metaverse (gesture, suara, haptic) yang mendukung keterlibatan pengguna secara intuitif dalam lingkungan virtual." }},
      { code:"MTA4", name:"Awareness of Adaptive Capability",
        def:{ en:"The institution's awareness of the contextual adaptive capability of metaverse systems in responding to user needs and situations during academic activities.",
              id:"Kesadaran institusi tentang kemampuan adaptif kontekstual sistem metaverse dalam merespons kebutuhan dan situasi pengguna selama kegiatan akademik." }},
      { code:"MTA5", name:"Awareness of Accessibility",
        def:{ en:"The institution's understanding of cross-device and cross-location access as a key metaverse technology feature to support academic community flexibility.",
              id:"Pemahaman institusi tentang kemampuan akses lintas perangkat dan lokasi sebagai fitur kunci teknologi metaverse untuk mendukung fleksibilitas civitas academica." }},
    ]},
  { code:"TB", name:"Technology Benefits", dim:"T",
    def:{ en:"Expectations of benefits and ease of metaverse implementation in the HEI institutional context.",
          id:"Ekspektasi manfaat dan kemudahan implementasi metaverse dalam konteks institusional HEI." },
    items:[
      { code:"TB1", name:"Performance Expectancy",
        def:{ en:"The institution's expectation that metaverse utilization will significantly improve the quality of learning processes and students' academic achievement.",
              id:"Ekspektasi institusi bahwa pemanfaatan metaverse akan meningkatkan kualitas proses pembelajaran dan capaian akademik mahasiswa secara signifikan." }},
      { code:"TB2", name:"Anticipated Benefits",
        def:{ en:"The institution's projected long-term strategic and competitive benefits anticipated from metaverse integration in higher education.",
              id:"Proyeksi manfaat strategis dan kompetitif jangka panjang yang diantisipasi institusi dari integrasi metaverse dalam pendidikan tinggi." }},
      { code:"TB3", name:"Task Technology Fit",
        def:{ en:"Assessment of the fit between metaverse technology's functional capabilities and the specific academic task characteristics carried out at the institution.",
              id:"Penilaian kesesuaian antara kapabilitas fungsional teknologi metaverse dengan karakteristik tugas akademik spesifik yang dilaksanakan di institusi." }},
      { code:"TB4", name:"Implementation Ease Expectation",
        def:{ en:"The institution's expectations regarding the ease and feasibility of implementing metaverse technology through its available technical resources.",
              id:"Ekspektasi institusi terhadap tingkat kemudahan dan kelayakan implementasi teknologi metaverse oleh sumber daya teknis yang dimiliki." }},
      { code:"TB5", name:"Operational Simplicity Expectation",
        def:{ en:"The expectation that the complexity of daily operational management of metaverse is comparable and not significantly different from the e-learning systems already used.",
              id:"Ekspektasi bahwa kompleksitas pengelolaan operasional harian metaverse setara dan tidak jauh berbeda dari sistem e-learning yang telah digunakan institusi." }},
      { code:"TB6", name:"Trainability Expectation",
        def:{ en:"The expectation of the academic community's ability to learn and master metaverse technology use within a reasonable training duration.",
              id:"Ekspektasi kemampuan civitas academica untuk mempelajari dan menguasai penggunaan teknologi metaverse dalam durasi pelatihan yang reasonable." }},
    ]},
  { code:"TRP", name:"Technology Risk Perception", dim:"T", isNeg:true,
    def:{ en:"HEI institution's perception of risks and concerns regarding metaverse integration.",
          id:"Persepsi risiko dan kekhawatiran institusi HEI terhadap integrasi metaverse." },
    items:[
      { code:"TRP1", name:"Perceived Cyber Risk",
        def:{ en:"The institution's perception of the probability and impact of cybersecurity threats, data breaches, and privacy violations that may arise from metaverse integration.",
              id:"Persepsi institusi terhadap probabilitas dan dampak ancaman keamanan siber, kebocoran data, dan pelanggaran privasi yang mungkin timbul dari integrasi metaverse." }},
      { code:"TRP2", name:"Perceived Adoption Risk",
        def:{ en:"The institution's assessment of potential financial, operational, and reputational risks accompanying metaverse technology implementation.",
              id:"Penilaian institusi terhadap potensi risiko finansial, operasional, dan reputasional yang menyertai implementasi teknologi metaverse." }},
      { code:"TRP3", name:"Risk Barrier to Adoption",
        def:{ en:"Perception of uncertainty about metaverse technology's security and reliability as a factor inhibiting institutional readiness toward metaverse.",
              id:"Persepsi ketidakpastian tentang keamanan dan reliabilitas teknologi metaverse sebagai faktor penghambat kesiapan institusi terhadap metaverse." }},
    ]},
  { code:"OD", name:"Organizational Disposition", dim:"O",
    def:{ en:"HEI institution's collective orientation, attitude, and motivation toward new technologies including metaverse.",
          id:"Orientasi, sikap, dan motivasi kolektif institusi HEI terhadap teknologi baru termasuk metaverse." },
    items:[
      { code:"OD1", name:"Technology Optimism",
        def:{ en:"The institution's collective positive orientation toward new technology, reflecting the belief that technological innovation — including metaverse — provides academic benefits.",
              id:"Orientasi positif kolektif institusi terhadap teknologi baru yang mencerminkan keyakinan bahwa inovasi teknologi — termasuk metaverse — memberi manfaat akademik." }},
      { code:"OD2", name:"Leadership Support",
        def:{ en:"The level of support and commitment from institutional leadership and key stakeholders toward exploring and applying innovative technology in education.",
              id:"Tingkat dukungan dan komitmen pimpinan serta pemangku kepentingan utama institusi terhadap eksplorasi dan penerapan teknologi inovatif dalam pendidikan." }},
      { code:"OD3", name:"Innovation Culture",
        def:{ en:"The degree of institutional organizational culture's openness toward integrating technological innovation in learning and research activities.",
              id:"Derajat keterbukaan budaya organisasional institusi terhadap integrasi inovasi teknologi dalam kegiatan pembelajaran dan penelitian." }},
      { code:"OD4", name:"Hedonic Motivation",
        def:{ en:"The institution's priority in developing attractive and engaging learning experiences, with metaverse viewed as an appropriate medium for achieving this.",
              id:"Prioritas institusi terhadap pengembangan pengalaman belajar yang menarik dan engaging, dengan metaverse dipandang sebagai media yang tepat untuk mewujudkannya." }},
      { code:"OD5", name:"Positive Attitudes",
        def:{ en:"The overall evaluative attitude of institutional stakeholders toward the possibility of using metaverse in the higher education context.",
              id:"Sikap evaluatif keseluruhan pemangku kepentingan institusi terhadap kemungkinan penggunaan metaverse dalam konteks pendidikan tinggi." }},
    ]},
  { code:"IC", name:"Instructional Competence", dim:"O",
    def:{ en:"HEI institution's pedagogical-technological competence and knowledge capacity as a foundation for readiness toward metaverse.",
          id:"Kompetensi pedagogik-teknologi dan kapasitas pengetahuan institusional HEI sebagai fondasi kesiapan terhadap metaverse." },
    items:[
      { code:"IC1", name:"TPACK Capacity",
        def:{ en:"The institution's capacity to integrate Technological Knowledge, Pedagogical Knowledge, and Content Knowledge (TPACK) to support metaverse technology integration.",
              id:"Kapasitas institusi dalam mengintegrasikan Technological Knowledge, Pedagogical Knowledge, dan Content Knowledge (TPACK) untuk mendukung integrasi teknologi metaverse." }},
      { code:"IC2", name:"Faculty Technology Competence",
        def:{ en:"The level of technological competence possessed by lecturers as a foundation for readiness to learn and integrate metaverse in teaching.",
              id:"Tingkat kompetensi teknologi yang dimiliki dosen sebagai fondasi kesiapan untuk mempelajari dan mengintegrasikan metaverse dalam pengajaran." }},
      { code:"IC3", name:"Knowledge Sharing",
        def:{ en:"The availability of culture, processes, and infrastructure that facilitate knowledge exchange about new educational technology among units and faculties.",
              id:"Ketersediaan budaya, proses, dan infrastruktur yang memfasilitasi pertukaran pengetahuan tentang teknologi pendidikan baru antar unit dan fakultas dalam institusi." }},
      { code:"IC4", name:"Knowledge Generation",
        def:{ en:"The institution's R&D capacity in generating new knowledge about digital technology utilization in learning through research and development programs.",
              id:"Kapasitas R&D institusi dalam menghasilkan pengetahuan baru tentang pemanfaatan teknologi digital dalam pembelajaran melalui riset dan program pengembangan." }},
      { code:"IC5", name:"Technology Trust",
        def:{ en:"The institution's level of trust in the reliability, integrity, and security of cloud-based educational technology platforms and virtual environments.",
              id:"Tingkat kepercayaan institusi terhadap keandalan, integritas, dan keamanan platform teknologi pendidikan berbasis cloud dan lingkungan virtual." }},
    ]},
  { code:"ExE", name:"Enabling Environment", dim:"E",
    def:{ en:"External environmental pressures and supporting conditions that influence HEI readiness toward metaverse.",
          id:"Tekanan lingkungan eksternal dan kondisi pendukung yang mempengaruhi kesiapan HEI terhadap metaverse." },
    items:[
      { code:"ExE1", name:"Social Influence",
        def:{ en:"The degree of normative pressure from significant external bodies (government, accreditation agencies, educational associations) that promotes institutional readiness toward metaverse.",
              id:"Derajat tekanan normatif dari lembaga eksternal signifikan (pemerintah, badan akreditasi, dan asosiasi pendidikan) yang mendorong kesiapan institusi terhadap teknologi metaverse." }},
      { code:"ExE2", name:"Herd Behaviour",
        def:{ en:"The institution's tendency to increase its readiness toward metaverse due to the influence of trends adopted by other leading universities (mimetic isomorphism / bandwagon effect).",
              id:"Kecenderungan institusi meningkatkan kesiapannya terhadap metaverse karena pengaruh tren yang sedang dijalankan oleh perguruan tinggi terkemuka lain (mimetic isomorphism / bandwagon effect)." }},
      { code:"ExE3", name:"Industry Trend",
        def:{ en:"The influence of metaverse utilization trends and dynamics by other educational institutions on the institution's strategic readiness considerations.",
              id:"Pengaruh tren dan dinamika pemanfaatan metaverse oleh institusi pendidikan lain terhadap pertimbangan strategis kesiapan institusi." }},
      { code:"ExE4", name:"Facilitating Conditions",
        def:{ en:"The availability and adequacy of external infrastructure supporting metaverse implementation — internet networks, cloud ecosystem, hardware supply chains, and local vendors.",
              id:"Ketersediaan dan kecukupan infrastruktur eksternal pendukung implementasi metaverse — jaringan internet, ekosistem cloud, rantai pasokan hardware, dan vendor lokal." }},
      { code:"ExE5", name:"Government Policy & Support",
        def:{ en:"The adequacy of government policy support, regulatory frameworks, and national funding programs for digital transformation and metaverse utilization in higher education.",
              id:"Kecukupan dukungan kebijakan pemerintah, kerangka regulasi, dan program pendanaan nasional untuk transformasi digital dan pemanfaatan metaverse dalam pendidikan tinggi." }},
    ]},
  { code:"MR", name:"Metaverse Readiness", dim:"DV", isDV:true,
    def:{ en:"Holistic and overall assessment of HEI institution's readiness to adopt metaverse — a dependent variable with global assessment items.",
          id:"Penilaian holistik dan keseluruhan tentang kesiapan institusi HEI untuk mengadopsi metaverse — variabel dependen dengan item penilaian global." },
    items:[
      { code:"MR1", name:"Overall Readiness",
        def:{ en:"Overall holistic assessment of the institution's readiness to adopt metaverse technology in higher education.",
              id:"Penilaian holistik keseluruhan tentang kesiapan institusi untuk mengadopsi teknologi metaverse dalam pendidikan tinggi." }},
      { code:"MR2", name:"Readiness Adequacy",
        def:{ en:"Comprehensive perception of the institution's level of readiness to integrate metaverse into academic processes and activities.",
              id:"Persepsi menyeluruh tentang tingkat kesiapan institusi dalam mengintegrasikan metaverse ke dalam proses dan kegiatan akademik." }},
      { code:"MR3", name:"Comparative Readiness",
        def:{ en:"Comparative assessment of the institution's metaverse adoption readiness compared to other comparable universities.",
              id:"Penilaian komparatif kesiapan adopsi metaverse institusi dibandingkan dengan perguruan tinggi lain yang sebanding." }},
      { code:"MR4", name:"Prerequisite Fulfillment",
        def:{ en:"Assessment of the fulfillment of key prerequisites required to begin metaverse implementation in the institution's learning activities.",
              id:"Penilaian pemenuhan prasyarat-prasyarat utama yang diperlukan untuk memulai implementasi metaverse dalam kegiatan pembelajaran institusi." }},
    ]},
];

// ═══════════════════════════════════════════════════════════════════════════
// STATE
// ═══════════════════════════════════════════════════════════════════════════

let lang = 'en';
let page = 'cover';
let currentConstructIndex = 0;
let currentItemIndex = 0;
let answers = {};
let overallAnswers = {};
let profile = {};
let showProfileError = false;
let showValidationErrors = false;

const STORAGE_KEY = 'expert-judgment-v2';
const THEME_KEY = 'expert-theme';

// ═══════════════════════════════════════════════════════════════════════════
// HELPERS
// ═══════════════════════════════════════════════════════════════════════════

const l = () => T[lang];
const $ = id => document.getElementById(id);
const esc = str => str ? String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;') : '';

function setLang(code) {
  lang = code;
  document.documentElement.lang = code;
  const L = l();
  document.title = L.title + ' — Metaverse Readiness HEI';
  const btnEn = $('btn-en');
  const btnId = $('btn-id');
  if (btnEn) btnEn.classList.toggle('btn-primary', code === 'en');
  if (btnEn) btnEn.classList.toggle('btn-ghost', code !== 'en');
  if (btnId) btnId.classList.toggle('btn-primary', code === 'id');
  if (btnId) btnId.classList.toggle('btn-ghost', code !== 'id');
  render();
}

function showToast(msg, type='', dur=3000) {
  const t = $('toast');
  t.innerHTML = `<span class="flex items-center gap-2">${msg}</span>`;
  t.className = `fixed bottom-6 left-1/2 z-[60] transition-all duration-300 -translate-x-1/2 alert ${type === 'success' ? 'alert-success' : type === 'error' ? 'alert-error' : 'alert-info'} shadow-lg toast-active`;
  setTimeout(() => {
    t.classList.remove('toast-active');
    t.classList.add('opacity-0','pointer-events-none','translate-y-4');
  }, dur);
}

// ═══════════════════════════════════════════════════════════════════════════
// THEME
// ═══════════════════════════════════════════════════════════════════════════

function initTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = saved || 'light';
  setTheme(theme, false);
}

function setTheme(theme, save = true) {
  document.documentElement.setAttribute('data-theme', theme);
  const select = $('theme-select');
  if (select) select.value = theme;
  if (save) localStorage.setItem(THEME_KEY, theme);
}

// ═══════════════════════════════════════════════════════════════════════════
// SIDEBAR
// ═══════════════════════════════════════════════════════════════════════════

function renderSidebar() {
  const nav = $('sidebar-nav');
  if (!nav) return;
  const L = l();

  const dimColors = { T: 'badge-primary', O: 'badge-secondary', E: 'badge-accent', DV: 'badge-neutral' };

  let html = '<ul class="menu menu-sm gap-1">';

  // Cover
  const coverActive = page === 'cover';
  html += `<li><a class="${coverActive ? 'active' : ''}" onclick="goToCover()">
    <i data-lucide="home" class="w-4 h-4"></i>
    <span>${L.stepLabels.cover}</span>
  </a></li>`;

  // Constructs
  CONSTRUCTS.forEach((con, idx) => {
    const done = validateConstruct(con.code);
    const active = page === 'construct' && currentConstructIndex === idx;
    const canClick = done || idx === 0 || validateConstruct(CONSTRUCTS[idx-1].code);
    const statusIcon = done ? 'check-circle' : 'circle';
    const statusClass = done ? 'text-success' : 'text-base-content/30';

    html += `<li><a class="${active ? 'active' : ''} ${canClick ? '' : 'opacity-40 pointer-events-none'}" onclick="${canClick ? `goToConstruct(${idx})` : ''}">
      <span class="badge badge-sm ${dimColors[con.dim] || dimColors.DV}">${con.dim}</span>
      <span class="truncate">[${con.code}] ${con.name}</span>
      <i data-lucide="${statusIcon}" class="w-4 h-4 ml-auto ${statusClass}"></i>
    </a></li>`;
  });

  // Overall
  const overallActive = page === 'overall';
  const overallDone = validateOverall();
  const canOverall = CONSTRUCTS.every(c => validateConstruct(c.code));
  html += `<li><a class="${overallActive ? 'active' : ''} ${canOverall ? '' : 'opacity-40 pointer-events-none'}" onclick="${canOverall ? `goToOverall()` : ''}">
    <i data-lucide="clipboard-check" class="w-4 h-4"></i>
    <span>${L.stepLabels.overall}</span>
    ${overallDone ? '<i data-lucide="check-circle" class="w-4 h-4 ml-auto text-success"></i>' : ''}
  </a></li>`;

  // Done
  const doneActive = page === 'done';
  html += `<li><a class="${doneActive ? 'active' : ''} ${page === 'done' ? '' : 'opacity-40 pointer-events-none'}">
    <i data-lucide="check" class="w-4 h-4"></i>
    <span>${L.stepLabels.done}</span>
  </a></li>`;

  html += '</ul>';
  nav.innerHTML = html;
  if (window.lucide) lucide.createIcons();
}

// ═══════════════════════════════════════════════════════════════════════════
// PROGRESS
// ═══════════════════════════════════════════════════════════════════════════

function updateProgress() {
  let currentStep = 0, totalSteps = 0;
  const L = l();

  if (page === 'cover') {
    currentStep = 0;
    totalSteps = CONSTRUCTS.reduce((s, c) => s + c.items.length, 0) + 2;
  } else if (page === 'construct') {
    const itemsBefore = CONSTRUCTS.slice(0, currentConstructIndex).reduce((s, c) => s + c.items.length, 0);
    currentStep = itemsBefore + currentItemIndex + 1;
    totalSteps = CONSTRUCTS.reduce((s, c) => s + c.items.length, 0) + 2;
  } else if (page === 'overall') {
    currentStep = CONSTRUCTS.reduce((s, c) => s + c.items.length, 0) + 1;
    totalSteps = currentStep + 1;
  } else {
    currentStep = totalSteps = 1;
  }

  const pct = totalSteps > 1 ? Math.round((currentStep / totalSteps) * 100) : 0;
  const progress = $('top-progress');
  const label = $('top-label');
  if (progress) {
    progress.value = pct;
    progress.max = 100;
  }
  if (label) label.textContent = page === 'done' ? '100%' : L.pageOf(currentStep, totalSteps);
}

// ═══════════════════════════════════════════════════════════════════════════
// PERSISTENCE
// ═══════════════════════════════════════════════════════════════════════════

function saveProgress() {
  const data = { lang, page, currentConstructIndex, currentItemIndex, answers, overallAnswers, profile, showProfileError, timestamp: Date.now() };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (e) { return null; }
}

function clearProgress() {
  localStorage.removeItem(STORAGE_KEY);
}

function checkRestore() {
  const data = loadProgress();
  if (!data) return;
  const b = document.createElement('div');
  b.id = 'restore-banner';
  b.className = 'fixed top-0 inset-x-0 z-[70] bg-primary text-primary-content px-4 py-3 flex items-center justify-center gap-3 text-sm font-medium animate-slide-up';
  b.innerHTML = `
    <i data-lucide="rotate-ccw" class="w-4 h-4"></i>
    <span>${l().restoreText}</span>
    <button class="btn btn-xs btn-ghost text-primary-content" onclick="restoreProgress()">${l().restoreBtn}</button>
    <button class="btn btn-xs btn-ghost text-primary-content/70" onclick="dismissRestore()">${l().dismissBtn}</button>
  `;
  document.body.insertBefore(b, document.body.firstChild);
  if (window.lucide) lucide.createIcons();
}

function restoreProgress() {
  const data = loadProgress();
  if (!data) return;
  lang = data.lang || 'en';
  page = data.page || 'cover';
  currentConstructIndex = data.currentConstructIndex || 0;
  currentItemIndex = data.currentItemIndex || 0;
  answers = data.answers || {};
  overallAnswers = data.overallAnswers || {};
  profile = data.profile || {};
  showProfileError = data.showProfileError || false;
  const banner = document.getElementById('restore-banner');
  if (banner) banner.remove();
  render();
  showToast(l().successMsg, 'success');
}

function dismissRestore() {
  const banner = document.getElementById('restore-banner');
  if (banner) banner.remove();
  clearProgress();
}

let saveTimeout;
function debouncedSave() {
  clearTimeout(saveTimeout);
  saveTimeout = setTimeout(saveProgress, 800);
}

// ═══════════════════════════════════════════════════════════════════════════
// VALIDATION
// ═══════════════════════════════════════════════════════════════════════════

function validateConstruct(code) {
  const con = CONSTRUCTS.find(c => c.code === code);
  if (!con) return true;
  for (const item of con.items) {
    if (!answers[item.code + '_c1'] || !answers[item.code + '_c2'] ||
        !answers[item.code + '_c3'] || !answers[item.code + '_c4'] ||
        !answers[item.code + '_cvi']) return false;
  }
  return true;
}

function validateProfile() {
  return profile.name && profile.institution && profile.position &&
         profile.expertise && profile.edu && profile.exp;
}

function validateOverall() {
  if (!overallAnswers.oq1 || !overallAnswers.oq2 || !overallAnswers.oq3 ||
      !overallAnswers.oq4 || !overallAnswers.oq5 || !overallAnswers.oq6) return false;
  if (overallAnswers.decision === undefined) return false;
  return true;
}

function isItemAnswered(item) {
  return ['_c1','_c2','_c3','_c4','_cvi'].every(s => answers[item.code + s]);
}

// ═══════════════════════════════════════════════════════════════════════════
// NAVIGATION
// ═══════════════════════════════════════════════════════════════════════════

function goToCover() {
  page = 'cover';
  showValidationErrors = false;
  saveProgress();
  render();
  window.scrollTo({ top: 0, behavior: 'smooth' });
  closeDrawer();
}

function goToConstruct(idx) {
  if (idx < 0 || idx >= CONSTRUCTS.length) return;
  page = 'construct';
  showValidationErrors = false;
  currentConstructIndex = idx;
  currentItemIndex = 0;
  saveProgress();
  render();
  window.scrollTo({ top: 0, behavior: 'smooth' });
  closeDrawer();
}

function goToOverall() {
  page = 'overall';
  showValidationErrors = false;
  saveProgress();
  render();
  window.scrollTo({ top: 0, behavior: 'smooth' });
  closeDrawer();
}

function closeDrawer() {
  const toggle = $('drawer-toggle');
  if (toggle) toggle.checked = false;
}

function prevItem() {
  if (currentItemIndex > 0) {
    currentItemIndex--;
    showValidationErrors = false;
    saveProgress();
    render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function nextItem() {
  const con = CONSTRUCTS[currentConstructIndex];
  const item = con.items[currentItemIndex];
  if (!isItemAnswered(item)) {
    showValidationErrors = true;
    showToast(l().errRequired, 'error');
    render();
    return;
  }
  showValidationErrors = false;
  if (currentItemIndex < con.items.length - 1) {
    currentItemIndex++;
    saveProgress();
    render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    if (currentConstructIndex < CONSTRUCTS.length - 1) {
      currentConstructIndex++;
      currentItemIndex = 0;
      saveProgress();
      render();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      goToOverall();
    }
  }
}

function prevConstructPage() {
  if (currentConstructIndex > 0) {
    currentConstructIndex--;
    currentItemIndex = 0;
    showValidationErrors = false;
    saveProgress();
    render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    goToCover();
  }
}

function startSurvey() {
  if (!validateProfile()) {
    showProfileError = true;
    showValidationErrors = true;
    showToast(l().errProfile, 'error');
    render();
    return;
  }
  showProfileError = false;
  showValidationErrors = false;
  if (!profile.date) profile.date = new Date().toISOString().split('T')[0];
  goToConstruct(0);
}

function jumpToItem(idx) {
  const con = CONSTRUCTS[currentConstructIndex];
  if (idx < 0 || idx >= con.items.length) return;
  const canJump = idx <= currentItemIndex || isItemAnswered(con.items[currentItemIndex]);
  if (!canJump) {
    showValidationErrors = true;
    showToast(l().errRequired, 'error');
    render();
    return;
  }
  showValidationErrors = false;
  currentItemIndex = idx;
  saveProgress();
  render();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ═══════════════════════════════════════════════════════════════════════════
// ANSWER SETTERS
// ═══════════════════════════════════════════════════════════════════════════

function setYN(key, val) {
  answers[key] = val;
  debouncedSave();

  const yesBtn = $(`yn-${key}-yes`);
  const noBtn = $(`yn-${key}-no`);
  if (yesBtn) {
    yesBtn.className = yesBtn.className.replace(val === 'yes' ? 'btn-outline' : 'btn-primary', val === 'yes' ? 'btn-primary' : 'btn-outline');
  }
  if (noBtn) {
    noBtn.className = noBtn.className.replace(val === 'no' ? 'btn-outline' : 'btn-neutral', val === 'no' ? 'btn-neutral' : 'btn-outline');
  }

  const critCard = $(`crit-${key}`);
  if (critCard) {
    critCard.className = critCard.className.replace('border-error shadow-sm shadow-error/10', 'border-base-300');
  }

  const fbKey = key.replace('_c', '_fb_c');
  const fbWrap = $(`fbwrap-${fbKey}`);
  const fbLabel = $(`fblabel-${fbKey}`);
  const fbArea = $(`fbarea-${fbKey}`);
  if (fbWrap) {
    const show = val === 'no' || !!(answers[fbKey] || '').trim();
    fbWrap.classList.toggle('max-h-60', show);
    fbWrap.classList.toggle('opacity-100', show);
    fbWrap.classList.toggle('max-h-0', !show);
    fbWrap.classList.toggle('opacity-0', !show);
  }
  if (fbLabel) {
    fbLabel.textContent = val === 'no' ? l().fbLabel : l().addNotes;
    fbLabel.classList.toggle('text-warning', val === 'no' && !(answers[fbKey] || '').trim());
    fbLabel.classList.toggle('text-base-content/50', !(val === 'no' && !(answers[fbKey] || '').trim()));
  }
  if (fbArea) {
    fbArea.classList.toggle('textarea-warning', val === 'no' && !(answers[fbKey] || '').trim());
  }

  // Update dots and sidebar if item became fully answered
  const itemCode = key.split('_')[0];
  const con = CONSTRUCTS[currentConstructIndex];
  const item = con.items.find(it => it.code === itemCode);
  if (item && isItemAnswered(item)) {
    const itemIdx = con.items.indexOf(item);
    const dot = $(`dot-${itemIdx}`);
    if (dot) dot.className = dot.className.replace('bg-base-300', 'bg-success');
  }
  if (validateConstruct(con.code)) {
    renderSidebar();
  }
}

function setCVI(key, val) {
  answers[key] = val;
  debouncedSave();

  const itemCode = key.split('_')[0];
  for (let v = 1; v <= 4; v++) {
    const btn = $(`cvi-${itemCode}-${v}`);
    if (!btn) continue;
    const target = v === val;
    const activeClass = v === 1 ? 'btn-error' : v === 2 ? 'btn-warning' : v === 3 ? 'btn-info' : 'btn-success';
    if (target) {
      btn.classList.remove('btn-outline');
      btn.classList.add(activeClass);
    } else {
      btn.classList.remove(activeClass);
      btn.classList.add('btn-outline');
    }
  }

  const label = $(`cvilabel-${itemCode}`);
  if (label) {
    label.textContent = l().cviScale[val - 1];
    label.classList.remove('hidden');
  }

  // Update dots and sidebar if item became fully answered
  const con = CONSTRUCTS[currentConstructIndex];
  const item = con.items.find(it => it.code === itemCode);
  if (item && isItemAnswered(item)) {
    const itemIdx = con.items.indexOf(item);
    const dot = $(`dot-${itemIdx}`);
    if (dot) dot.className = dot.className.replace('bg-base-300', 'bg-success');
  }
  if (validateConstruct(con.code)) {
    renderSidebar();
  }
}

function setOverall(key, val) {
  overallAnswers[key] = val;
  debouncedSave();

  if (key === 'decision') {
    for (let i = 0; i < 4; i++) {
      const card = $(`dec-${i}`);
      if (!card) continue;
      const sel = i === val;
      if (sel) {
        card.classList.remove('border-base-300', 'bg-base-100', 'hover:bg-base-200');
        card.classList.add('border-primary', 'bg-primary/5', 'shadow-sm');
      } else {
        card.classList.remove('border-primary', 'bg-primary/5', 'shadow-sm');
        card.classList.add('border-base-300', 'bg-base-100', 'hover:bg-base-200');
      }
    }
    if (validateOverall()) renderSidebar();
    return;
  }

  const yesBtn = $(`ov-${key}-yes`);
  const noBtn = $(`ov-${key}-no`);
  if (yesBtn) {
    yesBtn.className = yesBtn.className.replace(val === 'yes' ? 'btn-outline' : 'btn-primary', val === 'yes' ? 'btn-primary' : 'btn-outline');
  }
  if (noBtn) {
    noBtn.className = noBtn.className.replace(val === 'no' ? 'btn-outline' : 'btn-neutral', val === 'no' ? 'btn-neutral' : 'btn-outline');
  }

  const ovcard = $(`ovcard-${key}`);
  if (ovcard) {
    ovcard.className = ovcard.className.replace('border-error shadow-sm shadow-error/10', 'border-base-300');
  }

  if (validateOverall()) renderSidebar();
}

function setCVI(key, val) {
  answers[key] = val;
  debouncedSave();
  render();
}

function setOverall(key, val) {
  overallAnswers[key] = val;
  debouncedSave();
  render();
}

function autofillAll() {
  const L = l();
  profile.name = profile.name || 'Test Expert';
  profile.date = profile.date || new Date().toISOString().split('T')[0];
  profile.institution = profile.institution || 'Test University';
  profile.position = profile.position || 'Lecturer';
  profile.edu = profile.edu || L.eduOpts[0];
  profile.exp = profile.exp || L.expOpts[0];
  profile.expertise = profile.expertise || L.expertiseOpts[0];

  CONSTRUCTS.forEach(con => {
    con.items.forEach(item => {
      ['_c1','_c2','_c3','_c4'].forEach(s => { answers[item.code + s] = 'yes'; });
      answers[item.code + '_cvi'] = 1;
    });
  });
  ['oq1','oq2','oq3','oq4','oq5','oq6'].forEach(k => { overallAnswers[k] = 'yes'; });

  saveProgress();
  render();
  showToast('Autofilled all fields', 'success');
}

// ═══════════════════════════════════════════════════════════════════════════
// RENDER
// ═══════════════════════════════════════════════════════════════════════════

function render() {
  updateProgress();
  renderSidebar();
  const app = $('app');
  const L = l();

  if (page === 'cover') { renderCover(app, L); }
  else if (page === 'done') { renderDone(app, L); }
  else if (page === 'overall') { renderOverall(app, L); }
  else { renderConstruct(app, L); }

  if (window.lucide) lucide.createIcons();
}

// ── Cover ─────────────────────────────────────────────────────────────

function renderCover(app, L) {
  app.innerHTML = `
    <div class="py-10 animate-slide-up">
      <div class="badge badge-outline badge-md mb-6">
        <i data-lucide="shield-check" class="w-3 h-3 mr-1"></i>
        ${L.badge}
      </div>
      <h1 class="text-3xl md:text-4xl font-light tracking-tight mb-3">${L.title}</h1>
      <p class="text-base-content/60 text-lg mb-10">${L.subtitle}</p>

      <!-- Instructions -->
      <div class="card bg-neutral text-neutral-content text-left mb-8">
        <div class="card-body p-6">
          <h3 class="text-xl font-medium mb-4">${L.instrTitle}</h3>
          <ul class="space-y-2 text-sm opacity-90 mb-6">
            ${L.instrItems.map(i => `<li class="flex items-start gap-2"><i data-lucide="check" class="w-4 h-4 mt-0.5 shrink-0 opacity-70"></i><span>${i}</span></li>`).join('')}
          </ul>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div class="card bg-error text-error-content p-4 text-center shadow-sm"><div class="text-2xl font-bold">1</div><div class="text-[11px] font-semibold uppercase leading-tight mt-1">${L.cviScale[0]}</div></div>
            <div class="card bg-warning text-warning-content p-4 text-center shadow-sm"><div class="text-2xl font-bold">2</div><div class="text-[11px] font-semibold uppercase leading-tight mt-1">${L.cviScale[1]}</div></div>
            <div class="card bg-info text-info-content p-4 text-center shadow-sm"><div class="text-2xl font-bold">3</div><div class="text-[11px] font-semibold uppercase leading-tight mt-1">${L.cviScale[2]}</div></div>
            <div class="card bg-success text-success-content p-4 text-center shadow-sm"><div class="text-2xl font-bold">4</div><div class="text-[11px] font-semibold uppercase leading-tight mt-1">${L.cviScale[3]}</div></div>
          </div>
          <div class="mt-4 text-xs opacity-80 bg-white/10 rounded-lg p-3">${L.noteIcvi}</div>
        </div>
      </div>

      <!-- Profile Form -->
      <div class="text-left">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label class="form-control">
            <span class="label-text text-xs font-semibold uppercase tracking-wide text-base-content/60">${L.profileFields[0]}</span>
            <input type="text" class="input input-bordered w-full mt-1 ${showProfileError && !profile.name ? 'input-error' : ''}" value="${esc(profile.name || '')}" oninput="profile.name=this.value;debouncedSave();" placeholder="e.g. Dr. Ahmad Fauzi, M.T.">
          </label>
          <label class="form-control">
            <span class="label-text text-xs font-semibold uppercase tracking-wide text-base-content/60">${L.profileFields[6]}</span>
            <input type="date" class="input input-bordered w-full mt-1 ${showProfileError && !profile.date ? 'input-error' : ''}" value="${esc(profile.date || '')}" oninput="profile.date=this.value;debouncedSave();">
          </label>
          <label class="form-control md:col-span-2">
            <span class="label-text text-xs font-semibold uppercase tracking-wide text-base-content/60">${L.profileFields[1]}</span>
            <input type="text" class="input input-bordered w-full mt-1 ${showProfileError && !profile.institution ? 'input-error' : ''}" value="${esc(profile.institution || '')}" oninput="profile.institution=this.value;debouncedSave();" placeholder="e.g. Universitas Indonesia">
          </label>
          <label class="form-control md:col-span-2">
            <span class="label-text text-xs font-semibold uppercase tracking-wide text-base-content/60">${L.profileFields[2]}</span>
            <input type="text" class="input input-bordered w-full mt-1 ${showProfileError && !profile.position ? 'input-error' : ''}" value="${esc(profile.position || '')}" oninput="profile.position=this.value;debouncedSave();" placeholder="e.g. Dosen / Lecturer">
          </label>
          <label class="form-control">
            <span class="label-text text-xs font-semibold uppercase tracking-wide text-base-content/60">${L.profileFields[4]}</span>
            <select class="select select-bordered w-full mt-1 ${showProfileError && !profile.edu ? 'select-error' : ''}" onchange="profile.edu=this.value;debouncedSave();">
              <option value="">—</option>
              ${L.eduOpts.map(o => `<option value="${esc(o)}" ${profile.edu === o ? 'selected' : ''}>${esc(o)}</option>`).join('')}
            </select>
          </label>
          <label class="form-control">
            <span class="label-text text-xs font-semibold uppercase tracking-wide text-base-content/60">${L.profileFields[5]}</span>
            <select class="select select-bordered w-full mt-1 ${showProfileError && !profile.exp ? 'select-error' : ''}" onchange="profile.exp=this.value;debouncedSave();">
              <option value="">—</option>
              ${L.expOpts.map(o => `<option value="${esc(o)}" ${profile.exp === o ? 'selected' : ''}>${esc(o)}</option>`).join('')}
            </select>
          </label>
          <label class="form-control md:col-span-2">
            <span class="label-text text-xs font-semibold uppercase tracking-wide text-base-content/60">${L.profileFields[3]}</span>
            <select class="select select-bordered w-full mt-1 ${showProfileError && !profile.expertise ? 'select-error' : ''}" onchange="profile.expertise=this.value;debouncedSave();">
              <option value="">—</option>
              ${L.expertiseOpts.map(o => `<option value="${esc(o)}" ${profile.expertise === o ? 'selected' : ''}>${esc(o)}</option>`).join('')}
            </select>
          </label>
        </div>
      </div>

      <button class="btn btn-primary btn-wide mt-8" onclick="startSurvey()">
        <i data-lucide="arrow-right-circle" class="w-5 h-5"></i>
        ${L.start}
      </button>
    </div>`;
}

// ── Construct page ────────────────────────────────────────────────────

function renderConstruct(app, L) {
  const con = CONSTRUCTS[currentConstructIndex];
  const item = con.items[currentItemIndex];
  const dimBadges = { T: 'badge-primary', O: 'badge-secondary', E: 'badge-accent', DV: 'badge-neutral' };
  const dimLabel = L.dimLabels[con.dim] || con.dim;

  let html = `<div class="animate-slide-up">`;

  // Header
  html += `<div class="mb-6">
    <div class="badge badge-lg ${dimBadges[con.dim] || dimBadges.DV} mb-3 gap-1">
      <span class="font-bold">${con.dim}</span>
      <span class="opacity-80">${dimLabel}</span>
    </div>
    <h2 class="text-2xl md:text-3xl font-semibold tracking-tight">${con.name} <span class="text-base-content/40 text-lg font-normal">[${con.code}]</span></h2>
    <p class="text-base-content/60 text-sm mt-2 max-w-lg leading-relaxed">${con.def[lang]}</p>
  </div>`;

  if (con.isNeg) html += `<div class="alert alert-warning alert-soft mb-6 text-sm"><i data-lucide="alert-triangle" class="w-5 h-5 shrink-0"></i><span>${L.noteNeg}</span></div>`;
  if (con.isDV)  html += `<div class="alert alert-info alert-soft mb-6 text-sm"><i data-lucide="info" class="w-5 h-5 shrink-0"></i><span>${L.noteDV}</span></div>`;

  // Item
  html += `<div class="mb-6">
    <div class="badge badge-soft badge-primary badge-sm mb-2">${item.code}</div>
    <h3 class="text-xl md:text-2xl font-semibold tracking-tight mb-3">${item.name}</h3>
    <div class="card bg-primary/10">
      <div class="card-body p-4">
        <div class="text-[11px] font-bold uppercase tracking-wider text-primary mb-1">${L.defLabel}</div>
        <p class="text-sm text-base-content/70 leading-relaxed">${item.def[lang]}</p>
      </div>
    </div>
  </div>`;

  // Criteria
  const CRITERIA = [
    { cKey: 'c1', label: L.c1Label, q: L.c1Q, ph: L.fbPhC1 },
    { cKey: 'c2', label: L.c2Label, q: L.c2Q, ph: L.fbPhC2 },
    { cKey: 'c3', label: L.c3Label, q: L.c3Q, ph: L.fbPhC3 },
    { cKey: 'c4', label: L.c4LabelFn(con.code), q: L.c4QFn(con.code, con.name), ph: L.fbPhC4 },
  ];

  html += `<div class="space-y-4 mb-6">`;
  CRITERIA.forEach(cr => {
    const key = item.code + '_' + cr.cKey;
    const fbKey = item.code + '_fb_' + cr.cKey;
    const val = answers[key];
    const hasFeedback = !!(answers[fbKey] || '').trim();
    const isNo = val === 'no';
    const missing = !val;

    html += `<div id="crit-${key}" class="card bg-base-100 border ${showValidationErrors && missing ? 'border-error shadow-sm shadow-error/10' : 'border-base-300'}">
      <div class="card-body p-5">
        <div class="text-sm font-bold mb-1">${cr.label}</div>
        <div class="text-sm text-base-content/70 mb-4 leading-relaxed">${cr.q}</div>
        <div class="flex gap-3 mb-4">
          <button id="yn-${key}-yes" class="btn w-28 ${val === 'yes' ? 'btn-primary' : 'btn-outline'}" onclick="setYN('${key}','yes')">
            <i data-lucide="check" class="w-4 h-4"></i> ${L.yes}
          </button>
          <button id="yn-${key}-no" class="btn w-28 ${val === 'no' ? 'btn-neutral' : 'btn-outline'}" onclick="setYN('${key}','no')">
            <i data-lucide="x" class="w-4 h-4"></i> ${L.no}
          </button>
        </div>
        <div id="fbwrap-${fbKey}" class="transition-all duration-300 overflow-hidden ${isNo || hasFeedback ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}">
          <label id="fblabel-${fbKey}" class="label-text text-[11px] font-semibold uppercase tracking-wide ${isNo && !hasFeedback ? 'text-warning' : 'text-base-content/50'} block mb-1.5">${isNo ? L.fbLabel : L.addNotes}</label>
          <textarea id="fbarea-${fbKey}" class="textarea textarea-bordered w-full text-sm leading-relaxed ${isNo && !hasFeedback ? 'textarea-warning' : ''}"
            placeholder="${esc(cr.ph)}"
            rows="3"
            oninput="answers['${fbKey}']=this.value;debouncedSave();"
          >${esc(answers[fbKey] || '')}</textarea>
        </div>
      </div>
    </div>`;
  });
  html += `</div>`;

  // Additional feedback
  html += `<div class="card bg-warning/10 border-warning/20 mb-6">
    <div class="card-body p-5">
      <div class="text-sm font-bold text-warning mb-1">${L.fbLabelAddl}</div>
      <div class="text-xs text-base-content/60 mb-3">${L.fbSubAddl}</div>
      <textarea class="textarea textarea-bordered w-full text-sm leading-relaxed" placeholder="${L.fbPlaceholder}" rows="3"
        oninput="answers['${item.code}_fb_addl']=this.value;debouncedSave();"
      >${esc(answers[item.code + '_fb_addl'] || '')}</textarea>
    </div>
  </div>`;

  // CVI
  const cviMissing = !answers[item.code + '_cvi'];
  html += `<div id="cvirow-${item.code}" class="mb-8">
    <div class="text-sm font-bold mb-1">${L.cviLabel}</div>
    <div class="text-xs text-base-content/50 mb-3">${L.cviHint}</div>
    <div class="flex gap-3 flex-wrap">
      ${[1,2,3,4].map(v => {
        const active = answers[item.code + '_cvi'] === v;
        const btnClass = active
          ? (v === 1 ? 'btn-error' : v === 2 ? 'btn-warning' : v === 3 ? 'btn-info' : 'btn-success')
          : 'btn-outline';
        return `<button id="cvi-${item.code}-${v}" class="btn ${btnClass} min-w-[80px] flex-col h-auto py-3 px-4 gap-1" onclick="setCVI('${item.code + '_cvi'}',${v})">
          <span class="text-lg font-bold">${v}</span>
          <span class="text-[10px] font-semibold uppercase leading-tight text-center max-w-[60px]">${L.cviScale[v-1]}</span>
        </button>`;
      }).join('')}
    </div>
    <div id="cvilabel-${item.code}" class="text-sm font-medium italic text-base-content/50 mt-2 ${answers[item.code + '_cvi'] ? '' : 'hidden'}">${answers[item.code + '_cvi'] ? L.cviScale[answers[item.code + '_cvi'] - 1] : ''}</div>
  </div>`;

  // Item dots + arrows
  const isFirstItem = currentItemIndex === 0;
  const isLastItem = currentItemIndex === con.items.length - 1;
  const isLastConstruct = currentConstructIndex === CONSTRUCTS.length - 1;

  html += `<div class="flex flex-col items-center gap-4 mb-6">
    <div class="flex gap-2">`;
  con.items.forEach((it, idx) => {
    const answered = isItemAnswered(it);
    const active = idx === currentItemIndex;
    html += `<button id="dot-${idx}" class="w-2.5 h-2.5 rounded-full transition-all duration-200 ${active ? 'bg-primary scale-125' : answered ? 'bg-success' : 'bg-base-300'}" onclick="jumpToItem(${idx})"></button>`;
  });
  html += `</div>
    <div class="flex gap-3 w-full">
      <button class="btn btn-outline flex-1" onclick="prevItem()" ${isFirstItem && currentConstructIndex === 0 ? 'disabled' : ''}>
        <i data-lucide="chevron-left" class="w-4 h-4"></i> ${L.prevItem}
      </button>
      <button class="btn btn-primary flex-1" onclick="nextItem()">
        ${isLastItem ? (isLastConstruct ? 'Finish & Review' : L.finishConstruct) : L.nextItem}
        <i data-lucide="chevron-right" class="w-4 h-4"></i>
      </button>
    </div>
  </div>`;

  // Construct nav
  html += `<div class="flex items-center justify-between pt-6 border-t border-base-300 gap-4">
    <button class="btn btn-ghost" onclick="prevConstructPage()">
      <i data-lucide="chevron-left" class="w-4 h-4"></i> ${L.prev}
    </button>
    <button class="btn btn-primary" onclick="nextItem()">
      ${isLastItem && isLastConstruct ? 'Review' : L.next}
      <i data-lucide="chevron-right" class="w-4 h-4"></i>
    </button>
  </div>`;

  html += `</div>`;
  app.innerHTML = html;
}

// ── Overall ───────────────────────────────────────────────────────────

function renderOverall(app, L) {
  const overallQs = [
    { key: 'oq1', q: L.overallQ1 },
    { key: 'oq2', q: L.overallQ2 },
    { key: 'oq3', q: L.overallQ3 },
    { key: 'oq4', q: L.overallQ4 },
    { key: 'oq5', q: L.overallQ5 },
    { key: 'oq6', q: L.overallQ6 },
  ];

  let html = `<div class="animate-slide-up">`;

  html += `<div class="mb-6">
    <div class="badge badge-lg badge-neutral mb-3 gap-1">
      <i data-lucide="clipboard-check" class="w-3.5 h-3.5"></i>
      ${L.stepLabels.overall}
    </div>
    <h2 class="text-2xl md:text-3xl font-semibold tracking-tight">${L.overallTitle}</h2>
  </div>`;

  html += `<div class="space-y-4 mb-6">`;
  overallQs.forEach(({ key, q }) => {
    const val = overallAnswers[key];
    html += `<div id="ovcard-${key}" class="card bg-base-100 border ${showValidationErrors && !val ? 'border-error shadow-sm shadow-error/10' : 'border-base-300'}">
      <div class="card-body p-5">
        <div class="text-sm font-medium leading-relaxed mb-4">${q}</div>
        <div class="flex gap-3 max-w-xs">
          <button id="ov-${key}-yes" class="btn w-28 ${val === 'yes' ? 'btn-primary' : 'btn-outline'}" onclick="setOverall('${key}','yes')">
            <i data-lucide="check" class="w-4 h-4"></i> ${L.yes}
          </button>
          <button id="ov-${key}-no" class="btn w-28 ${val === 'no' ? 'btn-neutral' : 'btn-outline'}" onclick="setOverall('${key}','no')">
            <i data-lucide="x" class="w-4 h-4"></i> ${L.no}
          </button>
        </div>
      </div>
    </div>`;
  });
  html += `</div>`;

  // Final decision
  html += `<div class="mb-2">
    <h3 class="text-xl font-semibold tracking-tight mb-4">${L.finalTitle}</h3>
    <div class="space-y-3 mb-6">`;
  const finalIcons = ['check-circle', 'pencil', 'alert-triangle', 'x-circle'];
  L.finalOpts.forEach((opt, i) => {
    const sel = overallAnswers.decision === i;
    html += `<button id="dec-${i}" class="card w-full text-left cursor-pointer transition-all duration-200 border ${sel ? 'border-primary bg-primary/5 shadow-sm' : 'border-base-300 bg-base-100 hover:bg-base-200'}" onclick="setOverall('decision',${i})">
      <div class="card-body p-4 flex flex-row items-center gap-4">
        <i data-lucide="${finalIcons[i]}" class="w-6 h-6 shrink-0 ${sel ? 'text-primary' : 'text-base-content/40'}"></i>
        <span class="text-sm font-medium leading-snug">${opt}</span>
      </div>
    </button>`;
  });
  html += `</div></div>`;

  // Final notes
  html += `<label class="form-control mb-6">
    <span class="label-text text-sm font-bold mb-2">${L.noteFinal}</span>
    <textarea class="textarea textarea-bordered w-full text-sm leading-relaxed" placeholder="${L.noteFinalPh}" rows="4"
      oninput="overallAnswers.noteFinal=this.value;debouncedSave();"
    >${esc(overallAnswers.noteFinal || '')}</textarea>
  </label>`;

  html += `<div class="flex items-center justify-between pt-6 border-t border-base-300 gap-4">
    <button class="btn btn-ghost" onclick="goToConstruct(${CONSTRUCTS.length - 1})">
      <i data-lucide="chevron-left" class="w-4 h-4"></i> ${L.backToConstruct}
    </button>
    <button class="btn btn-neutral" onclick="submitForm()">
      <i data-lucide="send" class="w-4 h-4"></i> ${L.submit}
    </button>
  </div>`;

  html += `</div>`;
  app.innerHTML = html;
}

// ── Done ──────────────────────────────────────────────────────────────

function renderDone(app, L) {
  const ts = new Date().toLocaleString();
  app.innerHTML = `
    <div class="flex flex-col items-center justify-center min-h-[60vh] text-center py-10 animate-slide-up">
      <div class="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-content mb-6 shadow-lg shadow-primary/25">
        <i data-lucide="check" class="w-8 h-8"></i>
      </div>
      <h2 class="text-3xl font-semibold tracking-tight mb-3">${L.thankyouTitle}</h2>
      <p class="text-base-content/60 max-w-sm leading-relaxed mb-6">${L.thankyouMsg}</p>
      <div class="w-12 h-0.5 bg-base-300 mb-4"></div>
      <div class="text-xs text-base-content/40 font-semibold uppercase tracking-wider">${ts}</div>
    </div>`;
}

// ═══════════════════════════════════════════════════════════════════════════
// SUBMIT
// ═══════════════════════════════════════════════════════════════════════════

function submitForm() {
  const L = l();
  if (!validateOverall()) {
    showValidationErrors = true;
    showToast(L.errRequired, 'error');
    render();
    return;
  }

  const row = {
    timestamp: new Date().toISOString(),
    language: lang,
    name: profile.name || '',
    institution: profile.institution || '',
    position: profile.position || '',
    expertise: profile.expertise || '',
    education: profile.edu || '',
    experience: profile.exp || '',
    date: profile.date || '',
  };

  CONSTRUCTS.forEach(con => {
    con.items.forEach(item => {
      row[item.code + '_C1'] = answers[item.code + '_c1'] || '';
      row[item.code + '_C1_FB'] = answers[item.code + '_fb_c1'] || '';
      row[item.code + '_C2'] = answers[item.code + '_c2'] || '';
      row[item.code + '_C2_FB'] = answers[item.code + '_fb_c2'] || '';
      row[item.code + '_C3'] = answers[item.code + '_c3'] || '';
      row[item.code + '_C3_FB'] = answers[item.code + '_fb_c3'] || '';
      row[item.code + '_C4'] = answers[item.code + '_c4'] || '';
      row[item.code + '_C4_FB'] = answers[item.code + '_fb_c4'] || '';
      row[item.code + '_CVI'] = answers[item.code + '_cvi'] || '';
      row[item.code + '_NOTES'] = answers[item.code + '_fb_addl'] || '';
    });
  });

  row['Overall_Q1'] = overallAnswers.oq1 || '';
  row['Overall_Q2'] = overallAnswers.oq2 || '';
  row['Overall_Q3'] = overallAnswers.oq3 || '';
  row['Overall_Q4'] = overallAnswers.oq4 || '';
  row['Overall_Q5'] = overallAnswers.oq5 || '';
  row['Overall_Q6'] = overallAnswers.oq6 || '';
  row['FinalDecision'] = overallAnswers.decision !== undefined ? L.finalOpts[overallAnswers.decision] : '';
  row['FinalNotes'] = overallAnswers.noteFinal || '';

  showToast(L.submitting, '', 60000);

  if (!SHEETS_URL) {
    setTimeout(() => {
      showToast(L.successMsg, 'success');
      page = 'done';
      clearProgress();
      render();
    }, 1200);
    return;
  }

  fetch(SHEETS_URL, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify(row)
  }).then(() => {
    showToast(L.successMsg, 'success');
    page = 'done';
    clearProgress();
    render();
  }).catch(() => {
    showToast(L.errorMsg, 'error', 5000);
  });
}

function detectLocale() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    try {
      const data = JSON.parse(saved);
      if (data.lang) return data.lang;
    } catch (e) {}
  }
  const browserLang = navigator.language || navigator.userLanguage || '';
  if (/^id/i.test(browserLang) || /^ms/i.test(browserLang)) return 'id';
  return 'en';
}

// ═══════════════════════════════════════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════════════════════════════════════

function attachEventListeners() {
  const themeSelect = $('theme-select');
  if (themeSelect) {
    themeSelect.addEventListener('change', (e) => setTheme(e.target.value));
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    attachEventListeners();
    initTheme();
    setLang(detectLocale());
    checkRestore();
  });
} else {
  attachEventListeners();
  initTheme();
  setLang(detectLocale());
  checkRestore();
}
