
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'F:/Desarrollo de SW/Git/futbol/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Desarrollo%20de%20SW/Git/futbol"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 597, hash: '87e99c969ad3d59ea67f57c4814ef0c7ac90ac0c9d8e3d6b10e8b915a017db21', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1110, hash: '9af7456ed03bbb093f04fc05f747d2c826f71d85ad205d14424227043f067436', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
