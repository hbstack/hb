const path = require('path')
const { execSync } = require('child_process')

// requireX fallbacks to global module if not found.
global.requireX = (name) => {
    try {
        return require(name)
    } catch (err) {
        const globalPath = execSync('npm root -g').toString().trim()
        return require(path.join(globalPath, name))
    }
}

const autoprefixer = requireX('autoprefixer')

module.exports = {
    plugins: [
        autoprefixer,
        ...process.env.HUGO_ENVIRONMENT === 'production'
            ? [require('./assets/hb/purgecss.config.js').default]
            : [],
    ]
}
