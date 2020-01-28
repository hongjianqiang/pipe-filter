window.addEventListener('DOMContentLoaded', () => {
  const {node, chrome, electron} = process.versions;
  console.log(`We are using Node.js v${node}, Chromium v${chrome}, and Electron v${electron}.`);
});
