import { useState } from "react";

// ─── TRANSLATIONS ─────────────────────────────────────────────────────────────
const T = {
  ru: {
    tagline: "Сервис для Грузии · Тбилиси и регионы",
    heroH1a: "Любая задача.",
    heroH1b: "Специалист рядом.",
    heroH1c: "Сегодня.",
    heroSub: "Сантехники, электрики, няни, тренеры, гиды — проверенные специалисты по всей Грузии. Отклик за 15 минут.",
    findBtn: "Найти специалиста",
    postBtn: "Разместить задание",
    searchPlaceholder: "Сантехник, уборка, репетитор...",
    locationPlaceholder: "Тбилиси, Вера",
    searchCardTitle: "Что нужно сделать?",
    findBtnCard: "Найти специалистов →",
    iAmMaster: "Я специалист",
    nearYou: "Специалисты рядом с вами",
    availableNow: (n) => `${n} специалистов доступны сейчас`,
    notFound: "По вашему запросу ничего не найдено",
    tryChange: "Попробуйте изменить запрос или разместите задание",
    resetFilters: "Сбросить фильтры",
    sortRating: "↑↓ Рейтинг",
    sortPrice: "Цена",
    sortClose: "Ближе всего",
    online: "Онлайн",
    busy: "Занят",
    perService: "за услугу",
    reviews: (n) => `${n} отзывов`,
    orderBtn: "Заказать →",
    howTitle: "Как это работает",
    howSub: "Четыре шага до готового результата",
    howSteps: [
      { title: "Опишите задачу", body: "Напишите, что нужно сделать. Укажите район Тбилиси или другого города." },
      { title: "Получите отклики", body: "Специалисты рядом откликнутся в течение 15 минут с ценой и сроком." },
      { title: "Выберите лучшего", body: "Сравните рейтинги, отзывы, цены и выберите подходящего специалиста." },
      { title: "Оплатите безопасно", body: "Деньги переходят мастеру только после вашего подтверждения выполнения." },
    ],
    ctaTitle: "Вы специалист? Зарабатывайте с გემო",
    ctaSub: "Получайте заказы рядом с домом. Работайте в удобное время. Без комиссии в первый месяц.",
    becomeMaster: "Стать специалистом",
    learnMore: "Узнать подробнее",
    footerDesc: "Маркетплейс услуг для Грузии. Проверенные специалисты в Тбилиси, Батуми, Кутаиси и по всей стране.",
    footerServices: "Услуги",
    footerCompany: "Компания",
    footerSupport: "Поддержка",
    footerServicesList: ["Сантехник","Электрик","Уборка","Репетитор","Перевозки","Ремонт","Няня","Экскурсии","Организация событий","Помощник","Тренер"],
    footerCompanyList: ["О нас","Стать специалистом","Блог","Пресса","Карьера"],
    footerSupportList: ["Центр помощи","Правила сервиса","Конфиденциальность","Контакты"],
    footerManager: "Менеджер",
    copyright: "© 2025 გემო · Тбилиси, Грузия",
    modalSub: "Опишите задачу — специалист получит уведомление и свяжется с вами.",
    modalSent: "Заявка отправлена!",
    modalSentSub: (name) => `${name} получит уведомление и свяжется с вами в течение 15 минут.`,
    modalDone: "Готово",
    modalTaskPlaceholder: "Опишите, что нужно сделать...",
    modalPrice: "Стоимость",
    modalTime: "Обычно отвечает за 15 мин",
    modalSend: "Отправить заявку",
    postTitle: "Разместить задание",
    postSub: "Опишите задачу — подходящие специалисты откликнутся сами.",
    postPlaceholder: "Например: нужно починить протекающий кран в ванной...",
    postDistrict: "Район (Вера, Сабуртало...)",
    postBudget: "Бюджет (₾)",
    postUrgency: ["Срочно","Сегодня","На этой неделе","Договоримся"],
    postPublish: "Опубликовать задание",
    postPublished: "Задание опубликовано!",
    postPublishedSub: "Специалисты увидят его и начнут откликаться. Обычно первые отклики приходят за 15 минут.",
    stats: [
      { num: "12 000+", label: "Специалистов в Грузии" },
      { num: "4.8",     label: "Средний рейтинг" },
      { num: "85 000+", label: "Выполненных задач" },
      { num: "≤ 15 мин",label: "Первый отклик" },
    ],
  },
  ge: {
    tagline: "სერვისი საქართველოსთვის · თბილისი და რეგიონები",
    heroH1a: "ნებისმიერი დავალება.",
    heroH1b: "სპეციალისტი გვერდით.",
    heroH1c: "დღეს.",
    heroSub: "სანტექნიკოსები, ელექტრიკები, ძიძები, ტრენერები, გიდები — შემოწმებული სპეციალისტები მთელ საქართველოში. პასუხი 15 წუთში.",
    findBtn: "სპეციალისტის მოძებნა",
    postBtn: "დავალების განთავსება",
    searchPlaceholder: "სანტექნიკოსი, დალაგება, რეპეტიტორი...",
    locationPlaceholder: "თბილისი, ვერა",
    searchCardTitle: "რა გჭირდებათ?",
    findBtnCard: "სპეციალისტების მოძებნა →",
    iAmMaster: "მე სპეციალისტი ვარ",
    nearYou: "სპეციალისტები თქვენ გვერდით",
    availableNow: (n) => `${n} სპეციალისტი ახლა ხელმისაწვდომია`,
    notFound: "თქვენი მოთხოვნით ვერაფერი მოიძებნა",
    tryChange: "სცადეთ მოთხოვნის შეცვლა ან განათავსეთ დავალება",
    resetFilters: "ფილტრების გასუფთავება",
    sortRating: "↑↓ რეიტინგი",
    sortPrice: "ფასი",
    sortClose: "ყველაზე ახლოს",
    online: "ონლაინ",
    busy: "დაკავებული",
    perService: "მომსახურებისთვის",
    reviews: (n) => `${n} შეფასება`,
    orderBtn: "შეკვეთა →",
    howTitle: "როგორ მუშაობს",
    howSub: "ოთხი ნაბიჯი შედეგამდე",
    howSteps: [
      { title: "აღწერეთ დავალება",    body: "დაწერეთ, რა გჭირდებათ. მიუთითეთ თბილისის ან სხვა ქალაქის უბანი." },
      { title: "მიიღეთ გამოხმაურება", body: "სპეციალისტები 15 წუთში გამოეხმაურებიან ფასით და ვადით." },
      { title: "აირჩიეთ საუკეთესო",  body: "შეადარეთ რეიტინგები, შეფასებები, ფასები და აირჩიეთ სპეციალისტი." },
      { title: "გადაიხადეთ უსაფრთხოდ",body:"ფული გადადის ოსტატთან მხოლოდ შესრულების დადასტურების შემდეგ." },
    ],
    ctaTitle: "სპეციალისტი ხართ? გამოიმუშავეთ გემოსთან",
    ctaSub: "მიიღეთ შეკვეთები სახლის გვერდით. იმუშავეთ მოსახერხებელ დროს. პირველი თვე კომისიის გარეშე.",
    becomeMaster: "გახდი სპეციალისტი",
    learnMore: "გაიგე მეტი",
    footerDesc: "მომსახურების მარკეტფლეისი საქართველოსთვის. შემოწმებული სპეციალისტები თბილისში, ბათუმსა და მთელ ქვეყანაში.",
    footerServices: "მომსახურება",
    footerCompany: "კომპანია",
    footerSupport: "მხარდაჭერა",
    footerServicesList: ["სანტექნიკოსი","ელექტრიკი","დალაგება","რეპეტიტორი","გადაზიდვა","სარემონტო","ძიძა","ექსკურსია","ღონისძიების ორგანიზება","დამხმარე","ტრენერი"],
    footerCompanyList: ["ჩვენს შესახებ","გახდი სპეციალისტი","ბლოგი","პრესა","კარიერა"],
    footerSupportList: ["დახმარების ცენტრი","სერვისის წესები","კონფიდენციალობა","კონტაქტი"],
    footerManager: "მენეჯერი",
    copyright: "© 2025 გემო · თბილისი, საქართველო",
    modalSub: "აღწერეთ დავალება — სპეციალისტი შეგატყობინებთ და დაგიკავშირდებათ.",
    modalSent: "განაცხადი გაიგზავნა!",
    modalSentSub: (name) => `${name} მიიღებს შეტყობინებას და 15 წუთში დაგიკავშირდებათ.`,
    modalDone: "მზადაა",
    modalTaskPlaceholder: "აღწერეთ, რა გჭირდებათ...",
    modalPrice: "ღირებულება",
    modalTime: "ჩვეულებრივ პასუხობს 15 წუთში",
    modalSend: "განაცხადის გაგზავნა",
    postTitle: "დავალების განთავსება",
    postSub: "აღწერეთ დავალება — შესაბამისი სპეციალისტები თავად გამოეხმაურებიან.",
    postPlaceholder: "მაგალითად: სანტექნიკის გაჟონვის შეკეთება სააბაზანოში...",
    postDistrict: "უბანი (ვერა, საბურთალო...)",
    postBudget: "ბიუჯეტი (₾)",
    postUrgency: ["სასწრაფოდ","დღეს","ამ კვირაში","შევთანხმდებით"],
    postPublish: "დავალების განთავსება",
    postPublished: "დავალება განთავსდა!",
    postPublishedSub: "სპეციალისტები დაინახავენ მას და დაიწყებენ გამოხმაურებას. ჩვეულებრივ პირველი გამოხმაურება 15 წუთში მოდის.",
    stats: [
      { num: "12 000+", label: "სპეციალისტი საქართველოში" },
      { num: "4.8",     label: "საშუალო რეიტინგი" },
      { num: "85 000+", label: "შესრულებული დავალება" },
      { num: "≤ 15 წთ", label: "პირველი გამოხმაურება" },
    ],
  },
};

const CATEGORIES = [
  { id:"all",    ru:"Все",                   ge:"ყველა",                    icon:"◈"  },
  { id:"plumb",  ru:"Сантехник",             ge:"სანტექნიკოსი",            icon:"🔧" },
  { id:"elec",   ru:"Электрик",              ge:"ელექტრიკი",               icon:"⚡" },
  { id:"clean",  ru:"Уборка",                ge:"დალაგება",                icon:"🧹" },
  { id:"teach",  ru:"Репетитор",             ge:"რეპეტიტორი",              icon:"📚" },
  { id:"move",   ru:"Перевозки",             ge:"გადაზიდვა",               icon:"📦" },
  { id:"repair", ru:"Ремонт",                ge:"სარემონტო",               icon:"🏠" },
  { id:"nanny",  ru:"Няня",                  ge:"ძიძა",                    icon:"👶" },
  { id:"tour",   ru:"Экскурсии",             ge:"ექსკურსია",               icon:"🗺️" },
  { id:"event",  ru:"Организация событий",   ge:"ღონისძიების ორგ.",        icon:"🎉" },
  { id:"help",   ru:"Помощь",                ge:"დახმარება",               icon:"🤝" },
  { id:"coach",  ru:"Тренер",                ge:"ტრენერი",                 icon:"💪" },
];

const WORKERS = [
  { id:1,  cat:"plumb",  nameRu:"Георгий Беридзе",     nameGe:"გიორგი ბერიძე",     roleRu:"Сантехник",            roleGe:"სანტექნიკოსი",      rating:4.9, reviews:214, price:"₾ 50–120",  distRu:"0.8 км", distGe:"0.8 კმ", tags:["Срочный выезд","Гарантия"],    available:true,  initials:"გბ", color:"#111" },
  { id:2,  cat:"elec",   nameRu:"Зураб Кварацхелия",   nameGe:"ზურაბ კვარაცხელია", roleRu:"Электрик",             roleGe:"ელექტრიკი",         rating:4.8, reviews:176, price:"₾ 60–180",  distRu:"1.1 км", distGe:"1.1 კმ", tags:["Монтаж","Щитки"],              available:true,  initials:"ზქ", color:"#1a1a1a" },
  { id:3,  cat:"clean",  nameRu:"Нино Кобалия",         nameGe:"ნინო ქობალია",      roleRu:"Уборщица",             roleGe:"დამლაგებელი",       rating:4.8, reviews:98,  price:"₾ 80–200",  distRu:"1.2 км", distGe:"1.2 კმ", tags:["Химчистка","Офис"],             available:true,  initials:"ნქ", color:"#222" },
  { id:4,  cat:"teach",  nameRu:"Ана Джикия",           nameGe:"ანა ჯიქია",         roleRu:"Репетитор англ.",      roleGe:"ინგლისურის მასწ.",  rating:4.9, reviews:52,  price:"₾ 30–60/ч", distRu:"1.6 км", distGe:"1.6 კმ", tags:["IELTS","Online"],               available:true,  initials:"აჯ", color:"#333" },
  { id:5,  cat:"move",   nameRu:"Леван Харабадзе",      nameGe:"ლევან ხარაბაძე",    roleRu:"Грузчик-водитель",     roleGe:"მეგზური-მემანქანე", rating:4.6, reviews:341, price:"₾ 60–250",  distRu:"3.0 км", distGe:"3.0 კმ", tags:["Газель","По Грузии"],           available:true,  initials:"ლხ", color:"#1a1a1a" },
  { id:6,  cat:"repair", nameRu:"Давит Чхеидзе",        nameGe:"დავით ჩხეიძე",     roleRu:"Мастер-отделочник",    roleGe:"სარემონტო ოსტატი",  rating:4.7, reviews:183, price:"₾ 80–300",  distRu:"2.1 км", distGe:"2.1 კმ", tags:["Плитка","Штукатурка"],          available:false, initials:"დჩ", color:"#222" },
  { id:7,  cat:"nanny",  nameRu:"Мариам Гогиберидзе",   nameGe:"მარიამ გოგიბერიძე", roleRu:"Няня",                 roleGe:"ძიძა",              rating:5.0, reviews:44,  price:"₾ 25–50/ч", distRu:"0.5 км", distGe:"0.5 კმ", tags:["Дети 0–7","Английский"],        available:true,  initials:"მგ", color:"#111" },
  { id:8,  cat:"tour",   nameRu:"Алекси Тевзадзе",      nameGe:"ალექსი თევზაძე",   roleRu:"Гид по Грузии",        roleGe:"საქართველოს გიდი", rating:4.9, reviews:129, price:"₾ 120–400", distRu:"1.8 км", distGe:"1.8 კმ", tags:["RU/EN","Кахетия","Тбилиси"],   available:true,  initials:"ათ", color:"#1a1a1a" },
  { id:9,  cat:"event",  nameRu:"Саломе Гелашвили",     nameGe:"სალომე გელაშვილი", roleRu:"Организатор событий",  roleGe:"ღონისძ. ორგანიზ.", rating:4.8, reviews:67,  price:"₾ 200+",    distRu:"0.9 км", distGe:"0.9 კმ", tags:["Свадьба","День рождения"],      available:true,  initials:"სგ", color:"#222" },
  { id:10, cat:"help",   nameRu:"Торнике Микеладзе",    nameGe:"თორნიკე მიქელაძე", roleRu:"Помощник / Курьер",    roleGe:"დამხმარე / კურიერი",rating:4.7, reviews:88,  price:"₾ 20–80",   distRu:"0.3 км", distGe:"0.3 კმ", tags:["Очередь","Документы"],          available:true,  initials:"თმ", color:"#111" },
  { id:11, cat:"coach",  nameRu:"Нуца Пхакадзе",        nameGe:"ნუცა ფხაკაძე",     roleRu:"Фитнес-тренер",        roleGe:"ფიტნეს ტრენერი",   rating:5.0, reviews:61,  price:"₾ 40–80/ч", distRu:"1.4 км", distGe:"1.4 კმ", tags:["Дома","Зал","Онлайн"],          available:true,  initials:"ნფ", color:"#1a1a1a" },
];

// ─── STYLES ──────────────────────────────────────────────────────────────────
const S = {
  app:        { fontFamily:"'DM Sans',system-ui,Helvetica,Arial,sans-serif", background:"#fff", color:"#000", minHeight:"100vh", overflowX:"hidden" },
  container:  { maxWidth:1136, margin:"0 auto", padding:"0 24px" },
  nav:        { position:"sticky", top:0, zIndex:100, background:"#fff", borderBottom:"1px solid #e8e8e8" },
  navInner:   { maxWidth:1136, margin:"0 auto", padding:"0 24px", height:64, display:"flex", alignItems:"center", justifyContent:"space-between" },
  logo:       { fontWeight:700, fontSize:20, letterSpacing:"-0.5px", cursor:"pointer" },
  logoSub:    { fontSize:13, fontWeight:400, color:"#4b4b4b", marginLeft:6 },
  navRight:   { display:"flex", gap:8, alignItems:"center" },
  btnBlack:   { background:"#000", color:"#fff", border:"none", borderRadius:999, padding:"11px 22px", fontSize:14, fontWeight:500, cursor:"pointer", fontFamily:"inherit" },
  btnWhite:   { background:"#fff", color:"#000", border:"1px solid #000", borderRadius:999, padding:"11px 22px", fontSize:14, fontWeight:500, cursor:"pointer", fontFamily:"inherit" },
  btnGhost:   { background:"rgba(255,255,255,0.1)", color:"#fff", border:"1px solid rgba(255,255,255,0.25)", borderRadius:999, padding:"11px 22px", fontSize:14, fontWeight:500, cursor:"pointer", fontFamily:"inherit" },
  btnChip:    { background:"#efefef", color:"#000", border:"none", borderRadius:999, padding:"10px 18px", fontSize:13, fontWeight:500, cursor:"pointer", fontFamily:"inherit", whiteSpace:"nowrap" },
  btnChipAct: { background:"#000", color:"#fff", border:"none", borderRadius:999, padding:"10px 18px", fontSize:13, fontWeight:500, cursor:"pointer", fontFamily:"inherit", whiteSpace:"nowrap" },
  hero:       { background:"#000", color:"#fff", paddingTop:80, paddingBottom:80 },
  heroInner:  { maxWidth:1136, margin:"0 auto", padding:"0 24px", display:"grid", gridTemplateColumns:"1fr 1fr", gap:60, alignItems:"center" },
  heroTag:    { background:"rgba(255,255,255,0.12)", borderRadius:999, padding:"6px 14px", fontSize:12, fontWeight:500, display:"inline-block", marginBottom:24 },
  heroH1:     { fontSize:"clamp(32px,5vw,52px)", fontWeight:700, lineHeight:1.1, marginBottom:20, letterSpacing:"-1px" },
  heroSub:    { fontSize:16, color:"#afafaf", lineHeight:1.65, marginBottom:32, maxWidth:440 },
  heroActions:{ display:"flex", gap:12, flexWrap:"wrap" },
  searchCard: { background:"#fff", borderRadius:16, padding:28, boxShadow:"rgba(0,0,0,0.28) 0px 8px 32px", color:"#000" },
  inputWrap:  { position:"relative", marginBottom:12 },
  input:      { width:"100%", border:"1px solid #e8e8e8", borderRadius:8, padding:"14px 16px", fontSize:14, fontFamily:"inherit", outline:"none", boxSizing:"border-box", color:"#000", background:"#fff" },
  inputIcon:  { position:"absolute", left:14, top:"50%", transform:"translateY(-50%)", fontSize:15, pointerEvents:"none", color:"#4b4b4b" },
  inputPad:   { paddingLeft:42 },
  catStrip:   { padding:"18px 0", borderBottom:"1px solid #f0f0f0", overflowX:"auto" },
  catInner:   { maxWidth:1136, margin:"0 auto", padding:"0 24px", display:"flex", gap:8 },
  section:    { padding:"72px 0" },
  sectionGray:{ padding:"72px 0", background:"#f7f7f7" },
  h2:         { fontSize:"clamp(24px,4vw,36px)", fontWeight:700, letterSpacing:"-0.7px", lineHeight:1.2, marginBottom:8 },
  secSub:     { fontSize:15, color:"#4b4b4b", marginBottom:40 },
  grid:       { display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))", gap:16 },
  card:       { background:"#fff", borderRadius:12, padding:20, boxShadow:"rgba(0,0,0,0.1) 0px 4px 16px", cursor:"pointer", border:"1px solid transparent", transition:"transform .18s,box-shadow .18s" },
  avatar:     { width:52, height:52, borderRadius:"50%", color:"#fff", display:"flex", alignItems:"center", justifyContent:"center", fontWeight:700, fontSize:14, flexShrink:0 },
  tag:        { background:"#efefef", borderRadius:999, padding:"4px 10px", fontSize:11, fontWeight:500 },
  statsGrid:  { display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:1, background:"#1a1a1a" },
  statBox:    { padding:"40px 32px", background:"#000" },
  statNum:    { fontSize:"clamp(24px,4vw,40px)", fontWeight:700, letterSpacing:"-1px", color:"#fff", marginBottom:8 },
  statLabel:  { fontSize:13, color:"#afafaf" },
  howGrid:    { display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:16 },
  howCard:    { padding:"28px 22px", background:"#fff", borderRadius:12, boxShadow:"rgba(0,0,0,0.07) 0px 2px 12px" },
  howStep:    { fontSize:38, fontWeight:700, color:"#efefef", lineHeight:1, marginBottom:14 },
  howTitle:   { fontWeight:700, fontSize:16, marginBottom:8 },
  howBody:    { fontSize:13, color:"#4b4b4b", lineHeight:1.65 },
  ctaBand:    { background:"#000", color:"#fff", padding:"64px 24px", textAlign:"center" },
  ctaH2:      { fontSize:"clamp(20px,4vw,36px)", fontWeight:700, letterSpacing:"-0.7px", marginBottom:12 },
  ctaSub:     { color:"#afafaf", fontSize:15, marginBottom:32 },
  footer:     { background:"#000", color:"#fff", padding:"60px 0 28px" },
  footerGrid: { display:"grid", gridTemplateColumns:"1.6fr 1fr 1fr 1fr", gap:40, marginBottom:44, paddingBottom:44, borderBottom:"1px solid #1f1f1f" },
  footerH:    { fontWeight:700, fontSize:13, marginBottom:18, letterSpacing:"0.05em", textTransform:"uppercase" },
  footerLink: { fontSize:13, color:"#afafaf", marginBottom:9, cursor:"pointer", display:"block" },
  footerBot:  { display:"flex", justifyContent:"space-between", alignItems:"center" },
  overlay:    { position:"fixed", inset:0, background:"rgba(0,0,0,0.55)", zIndex:200, display:"flex", alignItems:"center", justifyContent:"center", padding:24 },
  modal:      { background:"#fff", borderRadius:16, padding:32, maxWidth:480, width:"100%", boxShadow:"rgba(0,0,0,0.25) 0px 16px 48px", position:"relative" },
  modalH:     { fontWeight:700, fontSize:20, marginBottom:6, letterSpacing:"-0.4px" },
  modalSub:   { fontSize:14, color:"#4b4b4b", marginBottom:20, lineHeight:1.6 },
  closeBtn:   { position:"absolute", top:16, right:16, background:"#efefef", border:"none", borderRadius:"50%", width:32, height:32, cursor:"pointer", fontSize:14, display:"flex", alignItems:"center", justifyContent:"center" },
};

// ─── WORKER CARD ──────────────────────────────────────────────────────────────
function WorkerCard({ w, lang, t, onSelect }) {
  const [hov, setHov] = useState(false);
  return (
    <div style={{ ...S.card, transform:hov?"translateY(-3px)":"none", boxShadow:hov?"rgba(0,0,0,0.16) 0px 8px 24px":S.card.boxShadow }}
      onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)} onClick={()=>onSelect(w)}>
      <div style={{ display:"flex", gap:14, marginBottom:14, alignItems:"flex-start" }}>
        <div style={{ ...S.avatar, background:w.color }}>{w.initials}</div>
        <div style={{ flex:1 }}>
          <div style={{ fontWeight:700, fontSize:15, marginBottom:3 }}>{lang==="ru"?w.nameRu:w.nameGe}</div>
          <div style={{ fontSize:13, color:"#4b4b4b", marginBottom:6 }}>{lang==="ru"?w.roleRu:w.roleGe}</div>
          <div style={{ display:"flex", alignItems:"center", gap:5, fontSize:13 }}>
            <span style={{ fontWeight:700 }}>★ {w.rating}</span>
            <span style={{ color:"#afafaf" }}>({t.reviews(w.reviews)})</span>
            <span style={{ marginLeft:"auto", display:"flex", alignItems:"center", gap:4 }}>
              <span style={{ width:7, height:7, borderRadius:"50%", background:w.available?"#22c55e":"#d1d5db", display:"inline-block" }}></span>
              <span style={{ fontSize:11, color:w.available?"#16a34a":"#9ca3af" }}>{w.available?t.online:t.busy}</span>
            </span>
          </div>
        </div>
      </div>
      <div style={{ display:"flex", gap:6, flexWrap:"wrap", marginBottom:14 }}>
        {w.tags.map(tg=><span key={tg} style={S.tag}>{tg}</span>)}
        <span style={{ ...S.tag, marginLeft:"auto" }}>📍 {lang==="ru"?w.distRu:w.distGe}</span>
      </div>
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end" }}>
        <div>
          <div style={{ fontWeight:700, fontSize:16 }}>{w.price}</div>
          <div style={{ fontSize:11, color:"#4b4b4b", marginTop:2 }}>{t.perService}</div>
        </div>
        <button style={S.btnBlack} onClick={e=>{e.stopPropagation();onSelect(w);}}>{t.orderBtn}</button>
      </div>
    </div>
  );
}

// ─── ORDER MODAL ──────────────────────────────────────────────────────────────
function OrderModal({ worker, lang, t, onClose }) {
  const [sent, setSent] = useState(false);
  const [task, setTask] = useState("");
  if (!worker) return null;
  const name = lang==="ru"?worker.nameRu:worker.nameGe;
  const role = lang==="ru"?worker.roleRu:worker.roleGe;
  return (
    <div style={S.overlay} onClick={onClose}>
      <div style={S.modal} onClick={e=>e.stopPropagation()}>
        <button style={S.closeBtn} onClick={onClose}>✕</button>
        {sent ? (
          <div style={{ textAlign:"center", padding:"16px 0" }}>
            <div style={{ fontSize:48, marginBottom:14 }}>✓</div>
            <div style={{ ...S.modalH, textAlign:"center" }}>{t.modalSent}</div>
            <div style={{ ...S.modalSub, textAlign:"center" }}>{t.modalSentSub(name)}</div>
            <button style={{ ...S.btnBlack, width:"100%", padding:"14px" }} onClick={onClose}>{t.modalDone}</button>
          </div>
        ) : (
          <>
            <div style={{ display:"flex", gap:14, alignItems:"center", marginBottom:18 }}>
              <div style={{ ...S.avatar, width:54, height:54, fontSize:15, background:worker.color }}>{worker.initials}</div>
              <div>
                <div style={S.modalH}>{name}</div>
                <div style={{ fontSize:13, color:"#4b4b4b" }}>{role} · ★ {worker.rating} · {lang==="ru"?worker.distRu:worker.distGe}</div>
              </div>
            </div>
            <div style={S.modalSub}>{t.modalSub}</div>
            <textarea value={task} onChange={e=>setTask(e.target.value)} placeholder={t.modalTaskPlaceholder}
              style={{ ...S.input, minHeight:95, resize:"vertical", marginBottom:12 }} />
            <div style={{ ...S.input, marginBottom:12, display:"flex", alignItems:"center", gap:8, color:"#4b4b4b", fontSize:14 }}>
              <span>📍</span>{lang==="ru"?"Тбилиси, Вера":"თბილისი, ვერა"}
            </div>
            <div style={{ background:"#f7f7f7", borderRadius:8, padding:"11px 14px", marginBottom:18, fontSize:13, color:"#4b4b4b", lineHeight:1.6 }}>
              💰 {t.modalPrice}: <strong style={{ color:"#000" }}>{worker.price}</strong>&nbsp;&nbsp;⏱ {t.modalTime}
            </div>
            <button style={{ ...S.btnBlack, width:"100%", padding:"14px", fontSize:15, opacity:task.trim()?1:0.4 }}
              onClick={()=>task.trim()&&setSent(true)}>{t.modalSend}</button>
          </>
        )}
      </div>
    </div>
  );
}

// ─── POST TASK MODAL ──────────────────────────────────────────────────────────
function PostModal({ lang, t, onClose }) {
  const [sent, setSent] = useState(false);
  const [text, setText] = useState("");
  const [urgency, setUrgency] = useState(null);
  return (
    <div style={S.overlay} onClick={onClose}>
      <div style={S.modal} onClick={e=>e.stopPropagation()}>
        <button style={S.closeBtn} onClick={onClose}>✕</button>
        {sent ? (
          <div style={{ textAlign:"center", padding:"16px 0" }}>
            <div style={{ fontSize:48, marginBottom:14 }}>🎉</div>
            <div style={{ ...S.modalH, textAlign:"center" }}>{t.postPublished}</div>
            <div style={{ ...S.modalSub, textAlign:"center" }}>{t.postPublishedSub}</div>
            <button style={{ ...S.btnBlack, width:"100%", padding:"14px" }} onClick={onClose}>{t.modalDone}</button>
          </div>
        ) : (
          <>
            <div style={S.modalH}>{t.postTitle}</div>
            <div style={S.modalSub}>{t.postSub}</div>
            <textarea value={text} onChange={e=>setText(e.target.value)} placeholder={t.postPlaceholder}
              style={{ ...S.input, minHeight:100, resize:"vertical", marginBottom:12 }} />
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10, marginBottom:12 }}>
              <input style={S.input} placeholder={t.postDistrict} />
              <input style={S.input} placeholder={t.postBudget} />
            </div>
            <div style={{ display:"flex", gap:8, marginBottom:20, flexWrap:"wrap" }}>
              {t.postUrgency.map(u=>(
                <button key={u} style={urgency===u?S.btnChipAct:S.btnChip} onClick={()=>setUrgency(u)}>{u}</button>
              ))}
            </div>
            <button style={{ ...S.btnBlack, width:"100%", padding:"14px", fontSize:15, opacity:text.trim()?1:0.4 }}
              onClick={()=>text.trim()&&setSent(true)}>{t.postPublish}</button>
          </>
        )}
      </div>
    </div>
  );
}

// ─── MASTER MODAL ─────────────────────────────────────────────────────────────
function MasterModal({ lang, t, onClose }) {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [cat, setCat] = useState(null);
  const ready = name.trim() && phone.trim() && cat;
  return (
    <div style={S.overlay} onClick={onClose}>
      <div style={{ ...S.modal, maxWidth:520 }} onClick={e=>e.stopPropagation()}>
        <button style={S.closeBtn} onClick={onClose}>✕</button>
        {sent ? (
          <div style={{ textAlign:"center", padding:"16px 0" }}>
            <div style={{ fontSize:48, marginBottom:14 }}>🙌</div>
            <div style={{ ...S.modalH, textAlign:"center" }}>{lang==="ru"?"Заявка принята!":"განაცხადი მიღებულია!"}</div>
            <div style={{ ...S.modalSub, textAlign:"center" }}>
              {lang==="ru"
                ?`Менеджер Миранда Табагуа свяжется с вами по номеру ${phone} в течение 24 часов.`
                :`მენეჯერი მირანდა თაბაგუა დაგიკავშირდებათ ნომერზე ${phone} 24 საათის განმავლობაში.`}
            </div>
            <button style={{ ...S.btnBlack, width:"100%", padding:"14px" }} onClick={onClose}>{t.modalDone}</button>
          </div>
        ) : (
          <>
            <div style={S.modalH}>{lang==="ru"?"Стать специалистом":"გახდი სპეციალისტი"}</div>
            <div style={S.modalSub}>{lang==="ru"?"Заполните форму — менеджер свяжется с вами в течение 24 часов.":"შეავსეთ ფორმა — მენეჯერი დაგიკავშირდებათ 24 საათის განმავლობაში."}</div>
            <input value={name} onChange={e=>setName(e.target.value)}
              placeholder={lang==="ru"?"Ваше имя и фамилия":"სახელი და გვარი"}
              style={{ ...S.input, marginBottom:12 }} />
            <input value={phone} onChange={e=>setPhone(e.target.value)}
              placeholder="+995 ___ ___ ___"
              style={{ ...S.input, marginBottom:16 }} />
            <div style={{ fontSize:13, color:"#4b4b4b", marginBottom:10, fontWeight:600 }}>
              {lang==="ru"?"Ваша специализация:":"თქვენი სპეციალობა:"}
            </div>
            <div style={{ display:"flex", gap:6, flexWrap:"wrap", marginBottom:20 }}>
              {CATEGORIES.filter(c=>c.id!=="all").map(c=>(
                <button key={c.id} style={cat===c.id?S.btnChipAct:S.btnChip} onClick={()=>setCat(c.id)}>
                  {c.icon} {lang==="ru"?c.ru:c.ge}
                </button>
              ))}
            </div>
            <div style={{ background:"#f7f7f7", borderRadius:8, padding:"12px 16px", marginBottom:18, fontSize:13, color:"#4b4b4b", lineHeight:1.7 }}>
              📞 {lang==="ru"?"Менеджер Миранда Табагуа:":"მენეჯერი მირანდა თაბაგუა:"}<br/>
              <strong style={{ color:"#000", fontSize:15 }}>+995 571 170 730</strong>
            </div>
            <button style={{ ...S.btnBlack, width:"100%", padding:"14px", fontSize:15, opacity:ready?1:0.4 }}
              onClick={()=>ready&&setSent(true)}>
              {lang==="ru"?"Отправить заявку":"განაცხადის გაგზავნა"}
            </button>
          </>
        )}
      </div>
    </div>
  );
}

// ─── APP ──────────────────────────────────────────────────────────────────────
export default function GemoApp() {
  const [lang, setLang]           = useState("ru");
  const [activeCat, setActiveCat] = useState("all");
  const [search, setSearch]       = useState("");
  const [selWorker, setSelWorker] = useState(null);
  const [showPost, setShowPost]   = useState(false);
  const [showMaster, setShowMaster] = useState(false);

  const t = T[lang];

  const filtered = WORKERS.filter(w =>
    (activeCat==="all" || w.cat===activeCat) &&
    (search==="" ||
      (lang==="ru"?w.nameRu:w.nameGe).toLowerCase().includes(search.toLowerCase()) ||
      (lang==="ru"?w.roleRu:w.roleGe).toLowerCase().includes(search.toLowerCase()))
  );

  const scrollToWorkers = () => document.getElementById("workers")?.scrollIntoView({ behavior:"smooth" });

  return (
    <div style={S.app}>

      {/* NAV */}
      <nav style={S.nav}>
        <div style={S.navInner}>
          <div style={S.logo}>
            გემო <span style={S.logoSub}>{lang==="ru"?"· Найди специалиста":"· სპეციალისტის მოძება"}</span>
          </div>
          <div style={S.navRight}>
            <button style={{ background:lang==="ru"?"#000":"#efefef", color:lang==="ru"?"#fff":"#000", border:"none", borderRadius:999, padding:"7px 14px", fontSize:12, fontWeight:600, cursor:"pointer", fontFamily:"inherit" }}
              onClick={()=>setLang("ru")}>RU</button>
            <button style={{ background:lang==="ge"?"#000":"#efefef", color:lang==="ge"?"#fff":"#000", border:"none", borderRadius:999, padding:"7px 14px", fontSize:12, fontWeight:600, cursor:"pointer", fontFamily:"inherit" }}
              onClick={()=>setLang("ge")}>GE</button>
            <button style={S.btnChip} onClick={()=>setShowMaster(true)}>{t.iAmMaster}</button>
            <button style={S.btnBlack} onClick={()=>setShowPost(true)}>+ {t.postBtn}</button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section style={S.hero}>
        <div style={S.heroInner}>
          <div>
            <div style={S.heroTag}>🇬🇪 {t.tagline}</div>
            <h1 style={S.heroH1}>
              {t.heroH1a}<br/>{t.heroH1b}<br/>
              <span style={{ color:"#afafaf" }}>{t.heroH1c}</span>
            </h1>
            <p style={S.heroSub}>{t.heroSub}</p>
            <div style={S.heroActions}>
              <button style={{ ...S.btnBlack, background:"#fff", color:"#000", padding:"13px 28px", fontSize:15 }} onClick={scrollToWorkers}>{t.findBtn}</button>
              <button style={{ ...S.btnGhost, padding:"13px 28px", fontSize:15 }} onClick={()=>setShowPost(true)}>{t.postBtn}</button>
            </div>
          </div>
          <div>
            <div style={S.searchCard}>
              <div style={{ fontWeight:700, fontSize:18, marginBottom:20 }}>{t.searchCardTitle}</div>
              <div style={S.inputWrap}>
                <span style={S.inputIcon}>🔍</span>
                <input style={{ ...S.input, ...S.inputPad }} placeholder={t.searchPlaceholder} value={search} onChange={e=>setSearch(e.target.value)} />
              </div>
              <div style={S.inputWrap}>
                <span style={S.inputIcon}>📍</span>
                <input style={{ ...S.input, ...S.inputPad }} placeholder={t.locationPlaceholder} readOnly />
              </div>
              <button style={{ ...S.btnBlack, width:"100%", padding:"14px", fontSize:15, marginTop:6 }} onClick={scrollToWorkers}>{t.findBtnCard}</button>
              <div style={{ display:"flex", gap:8, marginTop:18, paddingTop:16, borderTop:"1px solid #f0f0f0" }}>
                {["plumb","clean","coach"].map(id => {
                  const c = CATEGORIES.find(x=>x.id===id);
                  return <button key={id} style={{ ...S.btnChip, flex:1, textAlign:"center", fontSize:11, padding:"8px 4px" }}
                    onClick={()=>{setActiveCat(id);scrollToWorkers();}}>{c.icon} {lang==="ru"?c.ru:c.ge}</button>;
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORY CHIPS */}
      <div style={S.catStrip}>
        <div style={{ ...S.catInner, scrollbarWidth:"none" }}>
          {CATEGORIES.map(c=>(
            <button key={c.id} style={activeCat===c.id?S.btnChipAct:S.btnChip} onClick={()=>setActiveCat(c.id)}>
              {c.icon} {lang==="ru"?c.ru:c.ge}
            </button>
          ))}
        </div>
      </div>

      {/* WORKERS */}
      <section style={S.section} id="workers">
        <div style={S.container}>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end", marginBottom:28, flexWrap:"wrap", gap:12 }}>
            <div>
              <h2 style={S.h2}>{t.nearYou}</h2>
              <p style={S.secSub}>{filtered.length>0?t.availableNow(filtered.length):t.notFound}</p>
            </div>
            <div style={{ display:"flex", gap:8 }}>
              <button style={S.btnChip}>{t.sortRating}</button>
              <button style={S.btnChip}>{t.sortPrice}</button>
              <button style={S.btnChip}>{t.sortClose}</button>
            </div>
          </div>
          {filtered.length>0 ? (
            <div style={S.grid}>
              {filtered.map(w=><WorkerCard key={w.id} w={w} lang={lang} t={t} onSelect={setSelWorker}/>)}
            </div>
          ) : (
            <div style={{ textAlign:"center", padding:"56px 0", color:"#4b4b4b" }}>
              <div style={{ fontSize:44, marginBottom:14 }}>🔍</div>
              <div style={{ fontWeight:700, fontSize:18, marginBottom:8 }}>{t.notFound}</div>
              <div style={{ fontSize:13, marginBottom:22 }}>{t.tryChange}</div>
              <button style={{ ...S.btnBlack, padding:"12px 28px" }} onClick={()=>{setSearch("");setActiveCat("all");}}>{t.resetFilters}</button>
            </div>
          )}
        </div>
      </section>

      {/* STATS */}
      <div style={S.statsGrid}>
        {t.stats.map(s=>(
          <div key={s.label} style={S.statBox}>
            <div style={S.statNum}>{s.num}</div>
            <div style={S.statLabel}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* HOW IT WORKS */}
      <section style={S.sectionGray}>
        <div style={S.container}>
          <h2 style={S.h2}>{t.howTitle}</h2>
          <p style={S.secSub}>{t.howSub}</p>
          <div style={S.howGrid}>
            {t.howSteps.map((h,i)=>(
              <div key={i} style={S.howCard}>
                <div style={S.howStep}>0{i+1}</div>
                <div style={S.howTitle}>{h.title}</div>
                <div style={S.howBody}>{h.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div style={S.ctaBand}>
        <h2 style={S.ctaH2}>{t.ctaTitle}</h2>
        <p style={S.ctaSub}>{t.ctaSub}</p>
        <div style={{ display:"flex", gap:12, justifyContent:"center", flexWrap:"wrap" }}>
          <button style={{ ...S.btnWhite, padding:"13px 32px", fontSize:15 }} onClick={()=>setShowMaster(true)}>{t.becomeMaster}</button>
          <button style={{ ...S.btnGhost, padding:"13px 32px", fontSize:15 }}>{t.learnMore}</button>
        </div>
      </div>

      {/* FOOTER */}
      <footer style={S.footer}>
        <div style={S.container}>
          <div style={S.footerGrid}>
            <div>
              <div style={{ fontWeight:700, fontSize:22, marginBottom:10, letterSpacing:"-0.5px" }}>გემო</div>
              <div style={{ fontSize:13, color:"#afafaf", lineHeight:1.75, maxWidth:250, marginBottom:20 }}>{t.footerDesc}</div>
              <div style={{ fontSize:13, color:"#fff", marginBottom:4 }}>
                <strong>{t.footerManager}:</strong> Миранда Табагуа
              </div>
              <div style={{ fontSize:14, color:"#fff", fontWeight:600, marginBottom:2 }}>📞 +995 571 170 730</div>
            </div>
            <div>
              <div style={S.footerH}>{t.footerServices}</div>
              {t.footerServicesList.map(l=><div key={l} style={S.footerLink}>{l}</div>)}
            </div>
            <div>
              <div style={S.footerH}>{t.footerCompany}</div>
              {t.footerCompanyList.map(l=><div key={l} style={S.footerLink}>{l}</div>)}
            </div>
            <div>
              <div style={S.footerH}>{t.footerSupport}</div>
              {t.footerSupportList.map(l=><div key={l} style={S.footerLink}>{l}</div>)}
              <div style={{ marginTop:20, display:"flex", gap:10 }}>
                {["Instagram","Facebook","TikTok"].map(l=><div key={l} style={{ ...S.footerLink, margin:0 }}>{l}</div>)}
              </div>
            </div>
          </div>
          <div style={S.footerBot}>
            <div style={{ fontSize:12, color:"#4b4b4b" }}>{t.copyright}</div>
            <div style={{ fontSize:12, color:"#4b4b4b" }}>გემო · gemo.ge</div>
          </div>
        </div>
      </footer>

      {/* MODALS */}
      <OrderModal worker={selWorker} lang={lang} t={t} onClose={()=>setSelWorker(null)} />
      {showPost   && <PostModal   lang={lang} t={t} onClose={()=>setShowPost(false)} />}
      {showMaster && <MasterModal lang={lang} t={t} onClose={()=>setShowMaster(false)} />}
    </div>
  );
}
