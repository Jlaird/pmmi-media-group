module.exports = {
  check: (from) => {
    let url = '';

    // Digital Edtion exmaple: /sites/default/files/digital_edition/FebHCP2017/JanHCP2017/index.html
    let pattern = /\/sites\/default\/files\/digital_edition\/(.*)/;
    let matches = pattern.exec(from);
    if (matches) {
      url = `https://digitaleditions.healthcarepackaging.com/${matches[1]}`
      if (url !== from) return { to: url };
    }

    // S3 Redirects exmaple: /sites/default/files/newsletters/2014/HCP_Classic_2014-01-08_mixed.html
    pattern = /\/sites\/default\/files\/(.*)/;
    matches = pattern.exec(from);
    if (matches) {
      url = `https://s3.us-east-2.amazonaws.com/pmg-production/Migrated+-+DO+NOT+USE/HCP/${matches[1]}`
      if (url !== from) return { to: url };
    }

    return null;
  }
}
