module.exports = templateData => {
    const { name, email, username, title, desc, install, usage, contribute, tests, license} = templateData;
    
return `# ${title}

## DESCRIPTION
${desc}

## TABLE OF CONTENTS
[1. DESCRIPTION](#DESCRIPTION)
[2. TABLE OF CONTENTS](#TABLE-OF-CONTENTS)
[3. INSTALLATION](#INSTALLATION)
[4. USAGE](#USAGE)
[5. CONTRIBUTING](#CONTRIBUTING)
[6. TESTS](#TESTS)
[7. LICENSE](#LICENSE)
[8. QUESTIONS](#QUESTIONS)

---

## INSTALLATION
${install}

## USAGE
${usage}

## CONTRIBUTING
${contribute}

## TESTS
${tests}

## LICENSE
This application is covered under the following license: ${license}

## QUESTIONS
If you have any questions please contact:
| ${name} | ${email} | (https://github.com/${username}) |
`;
};