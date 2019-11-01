module.exports = {
  check: (from) => {
    let url = '';

    // Digital Edtion
    let pattern = /\/sites\/default\/files\/digital_edition\/(.*)/;
    let matches = pattern.exec(from);
    if (matches) {
      url = `https://digitaleditions.oemmagazine.org/${matches[1]}`
      if (url !== from) return { to: url };
    }

    // S3 Redirects exmaple: /sites/default/files/newsletters/pp-oem_issuepreview_winter16_fv.html
    pattern = /\/sites\/default\/files\/(.*)/;
    matches = pattern.exec(from);
    if (matches) {
      url = `https://s3.us-east-2.amazonaws.com/pmg-production/Migrated+-+DO+NOT+USE/OEM/${matches[1]}`
      if (url !== from) return { to: url };
    }

    return null;
  }
}
