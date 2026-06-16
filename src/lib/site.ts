// Zentrale Firmen- & Navigationsdaten (verifiziert aus iec-germany.de / iec CLAUDE.md)
// Phase 2 (Headless WP): diese Werte aus WPGraphQL laden — gleiche Struktur beibehalten.

export const company = {
  name: 'IEC GmbH',
  legalName: 'IEC GmbH',
  founded: 1984,
  street: 'Bahnhofstr. 11',
  zip: 'D-71737',
  city: 'Kirchberg an der Murr',
  country: 'Deutschland',
  ceo: 'Tobias Bartl',
  email: 'info@iec-germany.de',
  phone: '+49 7191 90850 0',
  fax: '+49 7191 90850 10',
  hrb: 'HRB 739399 (Amtsgericht Stuttgart)',
  vatId: 'DE279859368',
  tagline: 'Motorenkomponenten direkt vom Hersteller – seit 1984',
};

export const usps = [
  'Ab 1 Stück',
  'Persönliche Beratung',
  'Seit 1984',
  'Made in Germany',
];

export type NavItem = { label: string; href: string; children?: NavItem[] };

export const nav: NavItem[] = [
  {
    label: 'Produkte',
    href: '/motorenteile',
    children: [
      { label: 'Ventile', href: '/ventile' },
      { label: 'Ventilführungen', href: '/ventilfuehrungen' },
      { label: 'Ventilsitzringe', href: '/ventilsitzringe' },
      { label: 'Ventilfedern', href: '/ventilfedern' },
      { label: 'Kolben & Kurbeltrieb', href: '/kolben-kurbeltrieb' },
      { label: 'Dichtungen', href: '/dichtungen' },
      { label: 'Nockenwellen & Zubehör', href: '/nockenwellen-zubehoer' },
      { label: 'Einspritztechnik', href: '/einspritztechnik' },
    ],
  },
  {
    label: 'Anwendungen',
    href: '/gasmotoren',
    children: [
      { label: 'Gasmotoren', href: '/gasmotoren' },
      { label: 'Biogasanlagen', href: '/biogasanlagen' },
      { label: 'Industriemotoren & Marine', href: '/industriemotoren-marine' },
      { label: 'Oldtimer & Rennsport', href: '/oldtimer-rennsport' },
    ],
  },
  { label: 'Über IEC', href: '/#philosophie' },
  { label: 'Kontakt', href: '/kontakt' },
];
