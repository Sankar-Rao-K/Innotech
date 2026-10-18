// Photography registry. Primary source: high-resolution Unsplash photography (served from the Unsplash CDN).
// Each entry also names a bundled local image in /public/img that is swapped in automatically if the remote
// image cannot be loaded, so a page never shows a broken picture.
interface Entry { id: string; local: string }

export const PHOTOS = {
  hero:       { id: 'photo-1584308666744-24d5c474f2ae', local: 'home-hero' },      // pharmaceutical development / production
  tablets:    { id: 'photo-1585435557343-3b092031a831', local: 'home-capsules' },   // solid oral dosage
  pills:      { id: 'photo-1631549916768-4119b2e5f926', local: 'fw-lib8' },         // tablets & capsules
  formulation:{ id: 'photo-1587854692152-cbe660dbde88', local: 'svc-2' },           // formulation laboratory
  lab:        { id: 'photo-1532187863486-abf9dbad1b69', local: 'exp-1' },           // development laboratory
  analytical: { id: 'photo-1579154204601-01588f351e67', local: 'svc-6' },           // analytical / stability
  floor:      { id: 'photo-1565514020179-026b92b84bb6', local: 'svc-4' },           // manufacturing floor
  plant:      { id: 'photo-1581093588401-fbb62a02f120', local: 'org-cdmo' },        // process equipment
  vials:      { id: 'photo-1583912267550-d974311a9a6e', local: 'topic-3' },         // sterile vials
  device:     { id: 'photo-1576091160550-2173dba999ef', local: 'topic-5' },         // combination products
  team:       { id: 'photo-1573164713988-8665fc963095', local: 'partner-program' }, // project team
  handshake:  { id: 'photo-1521791136064-7986c2920216', local: 'who-hero' },        // partnership
  review:     { id: 'photo-1454165804606-c3d57bc86b40', local: 'org-investors' },   // technical review
  data:       { id: 'photo-1551288049-bebda4e38f71', local: 'exp-3' },              // analytics / digital
  exec:       { id: 'photo-1507679799987-c73779587ccf', local: 'how-execute' },     // executive advisory
  warehouse:  { id: 'photo-1586528116311-ad8dd3c8310d', local: 'fw-lib7' },         // supply
} satisfies Record<string, Entry>;

export type PhotoKey = keyof typeof PHOTOS;
export const photoSrc = (k: PhotoKey, w = 1600) => `https://images.unsplash.com/${PHOTOS[k].id}?auto=format&fit=crop&q=80&w=${w}`;
export const photoLocal = (k: PhotoKey) => `/img/${PHOTOS[k].local}.jpg`;
