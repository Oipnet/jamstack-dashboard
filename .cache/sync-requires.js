const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/arnaud/Documents/Lab/perso/JAMSTACK/dashboard/.cache/dev-404-page.js"))),
  "component---src-pages-dashboard-js": hot(preferDefault(require("/home/arnaud/Documents/Lab/perso/JAMSTACK/dashboard/src/pages/dashboard.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/arnaud/Documents/Lab/perso/JAMSTACK/dashboard/src/pages/index.js")))
}

