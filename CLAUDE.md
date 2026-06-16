# CLAUDE.md — IEC Germany Website (Astro)

Operating rules for any AI agent and human working in this repo. Read fully before changing anything.

## 1 · Projektkontext

**Kunde:** IEC GmbH, Kirchberg an der Murr — B2B-Hersteller hochpräziser Motorenkomponenten seit 1984 (Ventiltrieb, Gasmotoren, Biogas, Marine, Oldtimer/Rennsport).

**Ziel:** Relaunch der Website (Ablösung von WordPress/Elementor unter new.iec-germany.de) mit Fokus auf **SEO/Leads** und **Designqualität**.

**Zielarchitektur (2 Phasen):**
- **Phase 1 — MVP (aktuell):** Astro 5 + Tailwind v4, **statisch**, Inhalte als lokale Module in `src/lib/` (`data.ts`, `site.ts`). Deploy als Vercel-Preview zum Überzeugen des Kunden.
- **Phase 2 — Vollausbau:** Headless WordPress (WPGraphQL) als Content-Quelle; Astro zieht Inhalte beim Build. Alle 20 Seiten + SEO-Feinschliff. WP läuft im Hintergrund, ändert sich selten → statischer Rebuild genügt.

> Zentrale Regel: MVP-Komponenten so bauen, dass Phase 2 nur die **Datenquelle** austauscht (lokale Module → WP-Loader gleicher Shape), nicht die Komponenten. Keine Wegwerfarbeit.

## 2 · Verbindliche CI (Single Source: `src/styles/global.css`, `@theme`)

- **Blau `#0F4B94`** = Hauptfarbe (Buttons, Links). Buttons immer blau, Hover Navy. **Niemals rote Buttons.**
- **Navy `#1C244B`** = Headlines, dunkle Sektionen, CTA-Hintergrund.
- **Rot `#C8102E`** = NUR Akzent (Eyebrows/Labels/Badges).
- Hintergrund hell (weiß/cream). Schrift **Poppins** (Body 300, Headlines 600), Labels **DM Mono**.
- Stilrichtung: **clean / Engineering Precision** — viel Weißraum, Spec-Badges, ruhige Hierarchie.

## 3 · Komponenten (src/components)

Layout, Header, Footer, SchemaOrg, Hero, TrustBar, Section, SectionHeading, ProductGrid, Card, StatsRow, MaterialTable, CTABanner. Props siehe jeweilige Datei. Seiten komponieren nur — keine Inline-Layouts duplizieren.

## 4 · Inhalte / Faktentreue

**Keine erfundenen Fakten.** Alle technischen Inhalte (Werkstoffnummern, Verfahren, Firmendaten) stammen verifiziert aus iec-germany.de bzw. `../iec/CLAUDE.md`. Keine erfundenen Kundenzahlen/Zertifikate.

## 5 · Multi-Agent-Setup (.claude/agents)

- `iec-design` — CI-/Layout-Review.
- `iec-seo` — Keyword-/On-Page-Strategie (Ventiltechnik-B2B).
- `iec-marketing` — Conversion-Copy, „Sie"-Form, CTA „Jetzt anfragen".

## 6 · QA / Definition of Done

- `npm run build` → 0 Fehler, 0 Warnungen.
- Desktop- und Mobile-Ansicht geprüft, keine Konsolen-/404-Fehler.
- SEO nicht verschlechtert (eindeutige Title 50–60 Z., Meta 140–160 Z., ein `<h1>`, Canonical, Schema.org, Sitemap).
- DSGVO: Fonts lokal (Fontsource), kein externes Tracking ohne Consent.
- „Sie"-Ansprache durchgängig, CTAs blau.

## 7 · Befehle

```bash
npm install        # einmalig
npm run dev        # lokale Vorschau http://localhost:4321
npm run build      # statischer Build nach dist/
npm run preview    # gebaute Seite lokal testen
```
