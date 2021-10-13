const axios = require('axios');
let licenses;
let link;
let badge;

function renderLicenseLink(data) {
  const {license: selected} = data
  if (selected == 'NO LICENSE') return '';
  licenses.forEach(obj=>{
    if (obj.name == selected){
      link = `[License Link](${obj.url})`
    }
  })
  return link;
}
function renderLicenseBadge(data) {
  const {license: selected} = data
  if (selected == 'NO LICENSE') return '';
  licenses.forEach(obj=>{
    if (obj.name == selected){
      // badge = `![License - CC](https://img.shields.io/badge/License-${obj.spdx_id}-2ea44f)(${obj.url.replace(/ /g, '&')})`
      badge = `[![License - CC](https://img.shields.io/static/v1?label=License&message=${obj.spdx_id}&color=2ea44f)](${obj.url.replace(/ /g, '&')})`
    }
  })
  return badge;
}

module.exports = {
  getLicenses: function(cb){
    axios
      .get('https://api.github.com/licenses')
      .then(data=>{
        licenses = data.data;
        // console.log(licenses);
        cb(licenses);
      })
  },
  generateMarkdown: function(data) {
    renderLicenseLink(data);
    renderLicenseBadge(data);
    if (link == undefined){
      link = '';
      badge = '';
    }
    return `
# ${data.title}
${badge}

## Description

${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)

## Installation

${data.install}

## Usage

${data.usage}

---

## Contributing

${data.contributions}

## Tests

${data.testing}

## Questions

* [Link to My Github](https://github.com/${data.username})

* Or reach out to me via email with any additional questions: ${data.email}

## License

This software is protected under the ${data.license}

${link}
    `;
  }
}