const convert = require('./lib/convert');
const { enableVerbose } = require('./lib/log');
const optimize = require('./lib/optimize');
const prepareFilePaths = require('./lib/prepareFilePaths');
const spinner = require('./lib/spinner');

async function optimizt({ paths, avif, webp, lossless, verbose }) {
  spinner.start();

  if (verbose) enableVerbose();

  if (avif || webp) {
    await convert({
      paths: prepareFilePaths(paths, ['gif', 'jpeg', 'jpg', 'png']),
      lossless,
      avif,
      webp,
    });
  } else {
    await optimize({
      paths: prepareFilePaths(paths, ['gif', 'jpeg', 'jpg', 'png', 'svg']),
      lossless,
    });
  }

  spinner.stopAndPersist({ text: 'Done!' });
}

module.exports = optimizt;
