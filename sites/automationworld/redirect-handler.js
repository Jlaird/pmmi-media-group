module.exports = {
  check: (from) => {
    let url = '';

    // Digital Edtion exmaple: /sites/default/files/digital_edition/MarchAW2018/March2018AW/index.html
    let pattern = /\/sites\/default\/files\/digital_edition\/(.*)/;
    let matches = pattern.exec(from);
    if (matches) {
      url = `https://digitaleditions.automationworld.com/${matches[1]}`
      if (url !== from) return { to: url };
    }

    // S3 Redirects exmaple: /sites/default/files/newsletters/2017/aw_as_102317_fv.html
    pattern = /\/sites\/default\/files\/(.*)/;
    matches = pattern.exec(from);
    if (matches) {
      url = `https://s3.us-east-2.amazonaws.com/pmg-production/Migrated+-+DO+NOT+USE/AW/${matches[1]}`
      if (url !== from) return { to: url };
    }

    return null;
  }
}
