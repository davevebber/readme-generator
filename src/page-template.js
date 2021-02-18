module.exports = templateData => {
  console.log(templateData);

  return `
    # ${templateData.projectName}

    ## Created By
    ${templateData.name}
    www.github.com/${templateData.github}

    ## Description
    ${templateData.description}

    ## Created With
    ${templateData.languages.join(`
    `)}

    ## Deployed Link
    ${templateData.link}

    ## Screenshots
    ${templateData.screenshots}
    `
};