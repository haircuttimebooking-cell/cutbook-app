// ════════════════════════════════════════════════════════════
// ADS / BANNER CONFIG — Sirf yeh file edit karo
// ════════════════════════════════════════════════════════════
//
// HTML files KABHI mat chedo. Banner badalna ho ya band karna ho —
// neeche wala object update karke push kar do, bas.
//
// ─── Fields ka matlab ───
//   active : true   → banner dikhega
//            false  → banner band, "Ad Space Available" placeholder dikhega
//   image  : 'path' → banner image ka URL ya local path
//   link   : 'url'  → banner pe click karne pe kahan jaye user
//
// ─── Ad band karna ho? ───
//   home_banner.active = false  kar do, push, ho gaya.
//
// ─── Naya banner laga rahe ho? ───
//   1. assets/ folder mein nayi image daalo
//   2. neeche image: '../assets/your-image.png' update karo
//   3. push kar do
//
// ════════════════════════════════════════════════════════════

window.ADS_CONFIG = {

  // Customer home page ka top banner
 home_banner: {
  active: true,
  image:  '../assets/banner-home.png',
  link:   'https://haircuttimebooking-cell.github.io/cutbook-app/'
}

  // Future mein aur banners add karne ho to yahan likhna:
  //
  // detail_banner: {
  //   active: true,
  //   image:  '../assets/banner-detail.png',
  //   link:   'https://example.com'
  // }

};
