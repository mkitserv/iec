// Inhaltsdaten — verifiziert aus iec-germany.de (keine erfundenen Fakten).
// Phase 2 (Headless WP): identische Shapes über einen WP-Loader befüllen.

export type ProductCategory = {
  title: string;
  desc: string;
  href: string;
  tag?: string;
};

export const productCategories: ProductCategory[] = [
  { title: 'Ventiltrieb', desc: 'Ventile, Führungen, Sitzringe, Federn, Kegelstücke, Federteller, Drehvorrichtungen.', href: '/ventile', tag: 'Kernkompetenz' },
  { title: 'Kolben & Kurbeltrieb', desc: 'Kolben, Kolbenringe, Zylinderlaufbuchsen, Kolbenbolzen, Kurbelwellen, Pleuelstangen.', href: '/kolben-kurbeltrieb' },
  { title: 'Dichtungen', desc: 'Zylinderkopfdichtungen und komplette Dichtsätze.', href: '/dichtungen' },
  { title: 'Nockenwellen & Zubehör', desc: 'Nockenwellen, Stößel, Kipphebel – Fertigung nach Zeichnung oder Muster.', href: '/nockenwellen-zubehoer' },
  { title: 'Zylinderköpfe & Kurbelgehäuse', desc: 'Zylinderköpfe und Kurbelgehäuse auf Anfrage.', href: '/zylinderkoepfe-kurbelgehaeuse' },
  { title: 'Einspritztechnik', desc: 'Einspritzdüsen, Pumpenteile und Injektoren.', href: '/einspritztechnik' },
];

export type Application = {
  title: string;
  desc: string;
  href: string;
};

export const applications: Application[] = [
  { title: 'Gasmotoren', desc: 'Komplette Ventiltriebssätze für die Energieerzeugung aus Erdgas. Werkstoff IEC120S.', href: '/gasmotoren' },
  { title: 'Biogasanlagen', desc: 'Korrosive Gase, Schwefelverbindungen, Siloxane: IEC120S, Nimonic 80A, Plasmanitrieren.', href: '/biogasanlagen' },
  { title: 'Industriemotoren & Marine', desc: 'Großmotoren, Schweröl, hohe Temperaturen, Seeluft. Ventile bis 100 mm, Startventile.', href: '/industriemotoren-marine' },
  { title: 'Oldtimer & Rennsport', desc: 'Ab 1 Stück nach Original. Traktoren, PKW, Motorräder. Titan-Ventile TiAl6V4.', href: '/oldtimer-rennsport' },
];

export const homeStats = [
  { value: '40+', label: 'Jahre Erfahrung' },
  { value: 'ab 1', label: 'Stück Fertigung' },
  { value: '100 %', label: 'Prüfung im Haus' },
  { value: '1984', label: 'gegründet' },
];

// Werkstoffe für Ventile (verifizierte Werkstoffnummern)
export type Material = { nr: string; name: string; use: string };

export const ventileMaterials: Material[] = [
  { nr: '1.4718', name: 'X45CrSi9-3 / HNV3', use: 'Martensitisch, nitrierhärtbar. Einlassventile, Schäfte.' },
  { nr: '1.4871', name: 'X53CrMnNiN21-9 / EV8', use: 'Austenitisch + Stickstoff. Auslassventile bis 800 °C.' },
  { nr: '1.4882', name: 'X50CrMnNiNbN21-9', use: 'Austenitisch Nb/W. Hochbelastete Motoren.' },
  { nr: '2.4952', name: 'NiCr20TiAl / „Nimonic 80A“', use: 'Ni-Cr-Superlegierung. Biogas, Marine, Motorsport.' },
  { nr: '3.7165', name: 'TiAl6V4', use: 'Titan. Leichtbau, hochdrehende Motoren.' },
];

export const ventileTypes = [
  { title: 'Einlassventile', desc: 'Gaswechselventile auf der Einlassseite.' },
  { title: 'Auslassventile', desc: 'Gaswechselventile auf der Auslassseite, thermisch hochbelastet.' },
  { title: 'Startventile', desc: 'Für Großmotoren mit Druckluftstart.' },
  { title: 'Konstantdrosselventile', desc: 'Für die Motorbremswirkung in Nutzfahrzeugmotoren.' },
];
