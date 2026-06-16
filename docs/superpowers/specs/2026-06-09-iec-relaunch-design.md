# IEC Germany — Relaunch Design Spec

*Datum: 2026-06-09 · Status: MVP-Bau*

## Ausgangslage

IEC GmbH (Kirchberg/Murr), B2B-Hersteller Motorenkomponenten seit 1984. Aktuelle Seite `new.iec-germany.de` läuft auf WordPress + Elementor (generiert aus Python-Script). Kritik: Builder-Lock-in, begrenzte Design-/SEO-Kontrolle, schlecht KI-bearbeitbar. Referenzprojekte Heger (Astro) und Greenwood (Astro + Subagenten) zeigen die bessere Struktur.

## Ziele (priorisiert)

1. **SEO & Leads** — organischer Traffic + Anfragen.
2. **Designqualität** — premium, konsistente B2B-Wirkung.

Content-Pflege: durch k-active, selten geändert. WordPress bleibt im Hintergrund.

## Zielarchitektur — zweiphasig

- **Phase 1 (MVP, dieser Stand):** Astro 5 + Tailwind v4, statisch. Inhalte als typsichere Module in `src/lib/`. Ziel: deploybare Vercel-Preview zum Überzeugen des Kunden.
- **Phase 2 (Vollausbau):** Headless WordPress (WPGraphQL) als Content-Quelle, Astro-Frontend zieht beim Build. Alle 20 Seiten + SEO-Feinschliff.

**Entkopplungsprinzip:** Komponenten konsumieren Daten über `src/lib/`-Module mit definierten Shapes. Phase 2 ersetzt nur den Loader (lokal → WP), nicht die Komponenten.

## MVP-Scope — 5 Seiten (vertikaler Durchstich)

`/` Home · `/motorenteile` Übersicht · `/ventile` Flaggschiff (Werkstofftabelle, Verfahren) · `/biogasanlagen` Anwendung/Lead · `/kontakt` (Formular-Platzhalter) — plus Header, Footer, Navigation.

## Design-System

- Stil **A · Engineering Precision** (clean, hell, viel Weißraum).
- Tokens (Single Source `src/styles/global.css` `@theme`): Blau `#0F4B94` (Primär), Navy `#1C244B`, Rot `#C8102E` (nur Akzent), Cream `#FAFBFD`.
- Typo: Poppins (lokal), DM Mono für Labels. Buttons blau, radius 6px.

## Startseiten-Struktur (produktgetrieben)

Hero (Split) → TrustBar → Produkt-Grid (6 Kat.) → Anwendungen → Stats (navy) → Warum IEC (Expertise/Prüfung) → CTA (navy). Jede Unterseite eigener Sektions-Rhythmus.

## Komponenten

Layout · Header · Footer · SchemaOrg · Hero · TrustBar · Section · SectionHeading · ProductGrid · Card · StatsRow · MaterialTable · CTABanner.

## SEO & DSGVO (Best Practice)

Eindeutige Title (50–60) / Meta (140–160), ein `<h1>`/Seite, Canonical, OG, Schema.org (Organization/Product/ContactPage/BreadcrumbList), XML-Sitemap, Hub-and-Spoke-Verlinkung. Fonts lokal, kein externes Tracking ohne Consent. Echte Firmendaten (Tobias Bartl, HRB 739399, USt-ID DE279859368).

## Multi-Agent-Setup

`iec-design` (CI-/Layout-Review), `iec-seo` (Keywords/On-Page), `iec-marketing` (Conversion-Copy, „Sie"-Form). Definitionen in `.claude/agents/`.

## QA / Definition of Done

`npm run build` 0 Fehler/Warnungen · Desktop+Mobile · keine 404/Konsolenfehler · SEO/DSGVO nicht verschlechtert · nur verifizierte Fakten.

## Offen / Phase 2

Echte Produktfotos, funktionales Kontaktformular (Handler), restliche 15 Seiten, Headless-WP-Anbindung, Cookie-Banner/Consent, Open-Graph-Bilder, Mobile-Feinschliff Mega-Menü.
