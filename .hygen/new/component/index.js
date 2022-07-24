module.exports = {
    prompt: ({ inquirer }) => {
        const questions = [
            {
                type: 'input',
                name: 'component_name',
                message: 'What is the component name? (PascalCase)',
            },
            {
                type: 'input',
                name: 'dir',
                message: 'Subfolder name? (Optional)',
            },
        ]
        return inquirer.prompt(questions).then((answers) => {
            let { dir, component_name } = answers
            component_name =
                component_name[0].toUpperCase() + component_name.slice(1)
            const absPath = `src/components${dir ? `/${dir}` : ''}`
            return { component_name, absPath }
        })
    },
}
