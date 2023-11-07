const staticPaths = new Set(["/404.html/","/_logo.svg","/favicon.png","/fonts/FSRAIL55.ttf","/fonts/FSRAIL55.woff","/fonts/FSRAIL55.woff2","/fonts/FSRAIL55.zip","/fonts/RussianRailGPro.otf","/fonts/RussianRailGPro.zip","/fonts/_fonts.css","/images/customers/dgt.png","/images/customers/elteza.png","/images/customers/esp.png","/images/customers/etkproekt.png","/images/customers/gk1520.png","/images/customers/lgt.png","/images/customers/mgt.png","/images/customers/mostotryad-47.png","/images/customers/mostotryad-55.png","/images/customers/motp.png","/images/customers/nevatransproekt.png","/images/customers/osk1520.png","/images/customers/r-industria.png","/images/customers/roszheldor-gtss.png","/images/customers/roszheldor-lgtp.png","/images/customers/roszheldor.png","/images/customers/szhdp.png","/images/customers/zheldorproekt.png","/images/mp_service_6.svg","/images/news/image01.png","/images/news/image02.png","/images/news/image03.png","/images/partners/1c.png","/images/partners/docvision.png","/images/partners/emdev.png","/images/partners/infowise.png","/images/partners/sinfo.png","/images/partners/topomatic.png","/images/photo_about.png","/images/products/client-ep/icon.svg","/images/products/map_icons_buttons.svg","/manifest.json","/q-manifest.json","/rain/ground_rain.svg","/rain/ground_rain_short.svg","/robots.txt","/service-worker.js","/sitemap.xml"]);
function isStaticPath(method, url) {
  if (method.toUpperCase() !== 'GET') {
    return false;
  }
  const p = url.pathname;
  if (p.startsWith("/build/")) {
    return true;
  }
  if (p.startsWith("/assets/")) {
    return true;
  }
  if (staticPaths.has(p)) {
    return true;
  }
  if (p.endsWith('/q-data.json')) {
    const pWithoutQdata = p.replace(/\/q-data.json$/, '');
    if (staticPaths.has(pWithoutQdata + '/')) {
      return true;
    }
    if (staticPaths.has(pWithoutQdata)) {
      return true;
    }
  }
  return false;
}
export { isStaticPath };