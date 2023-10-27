const staticPaths = new Set(["/404.html/","/_logo.svg","/favicon.png","/fonts/FSRAIL55.ttf","/fonts/FSRAIL55.zip","/fonts/RussianRailGPro.otf","/fonts/RussianRailGPro.zip","/fonts/_fonts.css","/images/news/image01.png","/images/news/image02.png","/images/news/image03.png","/images/photo_about.png","/images/products/client-ep/icon.svg","/images/products/map_icons_buttons.svg","/manifest.json","/q-manifest.json","/rain/ground_rain.svg","/rain/ground_rain_short.svg","/robots.txt","/service-worker.js","/sitemap.xml"]);
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