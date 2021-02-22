module.exports = templateData => {
  console.log(templateData);

  return `
# ${templateData.projectName}

# Table of contents
1. [Created-By](#created-by)
2. [Contributions](#contributions)
3. [Description](#description)
4. [Created-With](#created-with)
5. [Usage-Information](#usage)
6. [Test-Instructions](#test-instructions)
7. [Installation](#install)
8. [Deployed-Link](#deployed-link)
9. [Screenshots](#screenshots)
10. [Questions](#questions)

## Created By <a name="created-by"></a>
${templateData.name}
www.github.com/${templateData.github}

## Contributions <a name="contributions"></a>
${templateData.contributing}

## Description <a name="description"></a>
${templateData.description}

## Created With <a name="created-with"></a>
${templateData.languages.join(`
`)}

## Usage Information <a name="usage"></a>
${templateData.usage}

## Test Instructions <a name="test-instructions"></a>
${templateData.testing}

## Installation <a name="install"></a>
${templateData.installation}

## Deployed Link <a name="deployed-link"></a>
${templateData.link}

## Screenshots <a name="screenshots"></a>
${templateData.screenshots}

## Questions <a name="questions"></a>
If you have any other questions please contact me at:
${templateData.email}
www.github.com/${templateData.github}
`
};