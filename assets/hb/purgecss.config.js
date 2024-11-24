let purgeCSSPlugin = requireX('@fullhuman/postcss-purgecss')
const stats = './hugo_stats.json'
const path = require('path')
const fs = require('fs')
fs.access(stats, fs.F_OK, (err) => {
    if (err) {
        throw new Error('Hugo stats file not found, please enable the "build.writeStats".')
    }
})

let config = {};
try {
    let filename = path.join(process.env.HUGO_PUBLISHDIR, ".build", "purgecss.json")
    let found = true
    if (!fs.existsSync(filename)) {
        found = false
        const files = fs.readdirSync(process.env.HUGO_PUBLISHDIR)
        for (file of files) {
            const fp = path.join(process.env.HUGO_PUBLISHDIR, file)
            const stats = fs.statSync(fp)
            if (stats.isDirectory()) {
                filename = path.join(fp, ".build", "purgecss.json")
                if (fs.existsSync(filename)) {
                    found = true
                    break
                }
            }
        }
    }
    if (found === false) {
        throw new Error('No PurgeCSS configuration found.')
    }
    let rawConfig = fs.readFileSync(filename)
    config = JSON.parse(rawConfig)
} catch (err) {
    throw new Error(`Failed to parse runtime PurgeCSS config.\nPlease enable the "--renderToDisk" if you are using Hugo server.\n${err}`)
}

if (typeof purgeCSSPlugin !== 'function') {
    // Compatible with v7.0.0.
    purgeCSSPlugin = purgeCSSPlugin.purgeCSSPlugin
}
const purgecss = purgeCSSPlugin({
    content: [stats],
    defaultExtractor: (content) => {
        let els = JSON.parse(content).htmlElements
        return els.tags.concat(config.tags, els.classes, config.classes, els.ids, config.ids)
    },
    safelist: {
        standard: config.safelist_standard,
        deep: config.safelist_deep,
        greedy: config.safelist_greedy
    },
    dynamicAttributes: config.attributes,
});

exports.default = purgecss