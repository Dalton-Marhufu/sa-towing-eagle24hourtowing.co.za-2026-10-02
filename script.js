/* Eagle 24 Hour Towing — bespoke redesign interactions */

/* ---------- Exact services from eagle24hourtowing.co.za ---------- */
const SERVICES = [
  { icon: "🚛", name: "24 Hour Towing Service", desc: "Fast, careful towing for cars, bakkies, bikes and more — any hour of the day." },
  { icon: "🆘", name: "24 Hour Roadside Assistance", desc: "Full roadside support: jumpstarts, flat tyres, lockouts and fuel delivery." },
  { icon: "🔋", name: "Jumpstarts", desc: "Dead battery? We get you going again on the spot, quickly and safely." },
  { icon: "🛞", name: "Flat Tyre Assistance", desc: "Punctured or flat tyre — we change it for you so you're back on the road." },
  { icon: "🔑", name: "Keys Locked In Vehicle Assistance", desc: "Locked your keys inside? We help you get back in without the damage." },
  { icon: "⛽", name: "Fuel Shortage Replenishment", desc: "Ran out of fuel? We bring fuel to you, wherever you are." },
  { icon: "🛣️", name: "Long Distance Towing", desc: "Secure, reliable transport for your vehicle across regions and provinces." },
  { icon: "📦", name: "Moving of Containers", desc: "Container transport handled with the right equipment and care." },
  { icon: "🏗️", name: "Moving of Small Forklifts", desc: "Specialised moving of small forklifts and light industrial equipment." },
  { icon: "🔧", name: "Mechanical Repairs", desc: "Practical mechanical help to get your vehicle roadworthy again." },
  { icon: "🚑", name: "Vehicle Recoveries", desc: "Professional recovery for off-road, stuck or damaged vehicles." },
  { icon: "💥", name: "Accident Assistance", desc: "On-scene accident support: quick response, safe clearance, full recovery." },
  { icon: "🔒", name: "Secure Storage Facilities", desc: "Monitored storage with 24-hour security while your vehicle is with us." },
  { icon: "📋", name: "Vehicle Repossessions", desc: "Discreet, compliant repossession and collection services." },
  { icon: "🔍", name: "Technical & Mechanical Inspections", desc: "Thorough inspections for pre-purchase checks and peace of mind." }
];

/* ---------- Gallery: real photos from their site ---------- */
const GALLERY = [
  { src: "assets/g_100_1112edit20102.jpg", cap: "On-scene assistance" },
  { src: "assets/g_100_1114edit20102.jpg", cap: "Ready to roll" },
  { src: "assets/g_100_1119edit20102.jpg", cap: "Recovery in action" },
  { src: "assets/g_100_1123edit20102.jpg", cap: "Flatbed pickup" },
  { src: "assets/g_100_1188edit20102.jpg", cap: "The Eagle fleet" },
  { src: "assets/g_100_1265edit20146.jpg", cap: "On duty 24/7" },
  { src: "assets/g_100_1356edit20102.jpg", cap: "Accident assistance" },
  { src: "assets/g_100_1805EDIT20144.jpg", cap: "Long distance tow" },
  { src: "assets/g_100_190020144.jpg", cap: "Secure transport" },
  { src: "assets/g_100_190320144.jpg", cap: "Professional recovery" },
  { src: "assets/g_100_190720144.jpg", cap: "Hartbeespoort service" },
  { src: "assets/g_100_191020144.jpg", cap: "Careful handling" },
  { src: "assets/g_100_191320144.jpg", cap: "Breakdown support" },
  { src: "assets/g_100_191620144.jpg", cap: "Local response" },
  { src: "assets/g_100_192120144.jpg", cap: "Job done" }
];

/* ---------- Render services ---------- */
(function renderServices() {
  const grid = document.getElementById("servicesGrid");
  if (!grid) return;
  grid.innerHTML = SERVICES.map(s => `
    <article class="service-card">
      <span class="service-icon">${s.icon}</span>
      <h3>${s.name}</h3>
      <p>${s.desc}</p>
    </article>
  `).join("");
})();

/* ---------- Render gallery ---------- */
(function renderGallery() {
  const grid = document.getElementById("galleryGrid");
  if (!grid) return;
  grid.innerHTML = GALLERY.map(g => `
    <figure class="gallery-item">
      <img src="${g.src}" alt="${g.cap} — Eagle 24 Hour Towing" loading="lazy">
      <figcaption class="gallery-cap">${g.cap}</figcaption>
    </figure>
  `).join("");
})();

/* ---------- Hero slideshow ---------- */
(function heroSlideshow() {
  const slides = document.querySelectorAll(".hero-slide");
  if (slides.length < 2) return;
  let i = 0;
  setInterval(() => {
    slides[i].classList.remove("active");
    i = (i + 1) % slides.length;
    slides[i].classList.add("active");
  }, 6000);
})();

/* ---------- Mobile nav ---------- */
(function mobileNav() {
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("mainNav");
  if (!toggle || !nav) return;
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
  nav.querySelectorAll("a").forEach(a =>
    a.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    })
  );
})();

/* ---------- Sticky header shadow ---------- */
(function stickyHeader() {
  const header = document.getElementById("siteHeader");
  if (!header) return;
  const onScroll = () => {
    header.style.boxShadow = window.scrollY > 10
      ? "0 4px 18px rgba(18,42,82,.12)"
      : "0 2px 14px rgba(18,42,82,.08)";
  };
  window.addEventListener("scroll", onScroll, { passive: true });
})();

/* ---------- Callback form -> WhatsApp ---------- */
(function contactForm() {
  const form = document.getElementById("contactForm");
  const note = document.getElementById("formNote");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("cName").value.trim();
    const phone = document.getElementById("cPhone").value.trim();
    const msg = document.getElementById("cMsg").value.trim();
    const text = encodeURIComponent(
      `Hi Eagle 24 Hour Towing, I need assistance.\n\nName: ${name}\nPhone: ${phone}\nDetails: ${msg || "-"}`
    );
    window.open(`https://wa.me/27842091233?text=${text}`, "_blank");
    note.textContent = "Opening WhatsApp — if it doesn't open, call 082 518 9887.";
    form.reset();
  });
})();

/* ---------- Footer year ---------- */
(function year() {
  const el = document.getElementById("year");
  if (el) el.textContent = new Date().getFullYear();
})();