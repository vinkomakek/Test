import './style.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Reduced motion ili no-JS → stranica ostaje u statičnom .no-motion stanju iz markupa
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

if (!reduceMotion) {
  document.body.classList.remove('no-motion')
  gsap.registerPlugin(ScrollTrigger)
  boot()
}

function splitWords(el) {
  const words = el.textContent.trim().split(' ')
  el.textContent = ''
  el.setAttribute('aria-label', words.join(' '))
  return words.map((w, i) => {
    const s = document.createElement('span')
    s.className = 'word'
    s.setAttribute('aria-hidden', 'true')
    s.textContent = i < words.length - 1 ? w + ' ' : w
    el.appendChild(s)
    return s
  })
}

function boot() {
  const $ = (id) => document.getElementById(id)
  const rail = $('orderRail')
  const railItem = $('railItem')
  const railPoints = $('railPoints')
  const counter = $('counter')

  /* ---------- FAZA 0: hero ---------- */
  gsap.from(splitWords($('heroTitle')), {
    y: 40, opacity: 0, duration: 0.3, ease: 'power4.out', stagger: 0.07, delay: 0.15,
  })
  gsap.from('.hero .lead', { opacity: 0, y: 16, duration: 0.3, ease: 'power4.out', delay: 0.6 })

  // lukovi se scrollom skupljaju prema traci narudžbe (Archery crop → ikona)
  gsap.to('.hero-arches', {
    scale: 0.25, yPercent: -60, opacity: 0, transformOrigin: 'top right',
    scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: 1 },
  })
  gsap.to('.hero-inner, .scroll-hint', {
    opacity: 0, yPercent: -20,
    scrollTrigger: { trigger: '#hero', start: 'top top', end: '60% top', scrub: 1 },
  })

  /* ---------- FAZE 1–3: slaganje burgera (pin + scrub) ---------- */
  const layers = ['bun-bottom', 'patty', 'cheese', 'lettuce', 'onion', 'sauce', 'bun-top']
    .map((n) => `#layer-${n}`)
  // početno stanje: slojevi iznad ekrana
  layers.forEach((sel) => gsap.set(sel, { y: -260, opacity: 0 }))
  gsap.set(['#copy2', '#copy3'], { opacity: 0, y: 24 })
  gsap.set('#phone', { opacity: 0, scale: 0.92 })

  // traka narudžbe: class toggle (bez transform konflikta s pinned timelineom);
  // jednom kad se pojavi, prati korisnika do kraja priče
  ScrollTrigger.create({
    trigger: '#build',
    start: 'top 60%',
    onEnter: () => document.body.classList.add('rail-on'),
    onLeaveBack: () => document.body.classList.remove('rail-on'),
  })

  // narudžba u traci: bodovi rastu kako slojevi sjedaju (446 = 5,95 € × 75)
  const order = { points: 0 }
  const POINTS_PER_LAYER = Math.round(446 / layers.length)
  const syncRail = () => {
    const p = Math.min(446, Math.round(order.points))
    railItem.textContent = p === 0 ? 'Košarica je prazna' : 'Big Mac'
    railPoints.textContent = p === 0 ? '' : `+${p} bodova`
  }
  syncRail()

  const drop = (tl, sel, at) => {
    tl.to(sel, { y: 0, opacity: 1, duration: 0.55, ease: 'back.out(1.4)' }, at)
      .to(sel, { scaleY: 0.94, transformOrigin: 'center bottom', duration: 0.08, yoyo: true, repeat: 1 }, at + 0.45)
      .to(order, {
        points: `+=${POINTS_PER_LAYER}`, duration: 0.3, onUpdate: syncRail,
      }, at + 0.3)
  }

  const build = gsap.timeline({
    scrollTrigger: {
      trigger: '#build',
      start: 'top top',
      end: '+=320%',
      pin: true,
      scrub: 1,
      snap: { snapTo: [0, 0.235, 0.52, 1], duration: { min: 0.15, max: 0.4 }, ease: 'power4.out' },
    },
  })

  // faza 1: aplikacija se otvara, donje pecivo
  build.to('#phone', { opacity: 1, scale: 1, duration: 0.4, ease: 'power4.out' }, 0)
  drop(build, '#layer-bun-bottom', 0.35)

  // faza 2: meso + sir, copy swap
  build
    .to('#copy1', { opacity: 0, y: -24, duration: 0.25 }, 1.0)
    .to('#copy2', { opacity: 1, y: 0, duration: 0.3, ease: 'power4.out' }, 1.2)
  drop(build, '#layer-patty', 1.35)
  drop(build, '#layer-cheese', 1.75)

  // faza 3: svježe + zatvaranje
  build
    .to('#copy2', { opacity: 0, y: -24, duration: 0.25 }, 2.2)
    .to('#copy3', { opacity: 1, y: 0, duration: 0.3, ease: 'power4.out' }, 2.4)
  drop(build, '#layer-lettuce', 2.5)
  drop(build, '#layer-onion', 2.8)
  drop(build, '#layer-sauce', 3.05)
  drop(build, '#layer-bun-top', 3.35)
  build
    .to('#phone', { '--stage-glow': 1, duration: 0.4 }, 3.5)
    .to('#burgerSvg', { rotate: -4, scale: 1.04, duration: 0.35, ease: 'power4.out' }, 3.55)
    .to('#burgerSvg', { rotate: 0, scale: 1, duration: 0.3 }, 3.95)

  /* ---------- FAZA 4: bodovi i plaćanje (pin + scrub brojčanika) ---------- */
  counter.textContent = '0'
  const pts = { v: 0 }
  gsap.timeline({
    scrollTrigger: {
      trigger: '#points',
      start: 'top top',
      end: '+=160%',
      pin: true,
      scrub: 1,
      snap: { snapTo: [0, 1], duration: { min: 0.15, max: 0.4 }, ease: 'power4.out' },
    },
  })
    .to(pts, {
      v: 446, duration: 1.4, ease: 'none',
      onUpdate: () => {
        const v = Math.round(pts.v)
        counter.textContent = v
        railPoints.textContent = v >= 446 ? '5,95 € · 446 bodova' : `+${v} bodova`
        // ispuna ide slijeva: kad prijeđe sredinu gumba, tekst se zatamni
        $('payBtn').classList.toggle('paid', v > 290)
      },
    }, 0)
    .to('#payFill', { scaleX: 1, duration: 1.4, ease: 'none' }, 0)

  /* ---------- FAZA 5: preuzimanje — native swipe, samo blagi ulaz ---------- */
  gsap.from('.pickup-card', {
    opacity: 0, y: 32, duration: 0.3, ease: 'power4.out', stagger: 0.08,
    scrollTrigger: { trigger: '#pickup', start: 'top 70%' },
  })

  /* ---------- FAZA 6: CTA ---------- */
  gsap.from('.bag', {
    y: 60, opacity: 0, duration: 0.4, ease: 'back.out(1.4)',
    scrollTrigger: { trigger: '#cta', start: 'top 60%' },
  })
  ScrollTrigger.create({
    trigger: '#cta', start: 'top 60%', once: true,
    onEnter: () => {
      gsap.from(splitWords(document.getElementById('ctaTitle')), {
        y: 30, opacity: 0, duration: 0.3, ease: 'power4.out', stagger: 0.06,
      })
    },
  })
  gsap.from('.cta-actions .btn', {
    opacity: 0, y: 20, duration: 0.3, ease: 'power4.out', stagger: 0.1,
    scrollTrigger: { trigger: '#cta', start: 'top 45%' },
  })
}
