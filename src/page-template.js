const generatePage = (name, github) => {
    return `
# projectTitle

## Made by
${name}
https://github.com/${github}
`;
};

module.exports = generatePage;