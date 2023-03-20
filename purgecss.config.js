const stats = './hugo_stats.json'
const fs = require('fs')
fs.access(stats, fs.F_OK, (err) => {
    if (err) {
        throw new Error('Hugo stats file not found, please enable the "build.writeStats".')
    }
})

let config = {};
try {
    let rawConfig = fs.readFileSync('./public/.build/purgecss.json')
    config = JSON.parse(rawConfig)
} catch (err) {
    throw new Error(`Failed to parse runtime PurgeCSS config.\nPlease enable the "--renderToDisk" if you are using Hugo server.\n${err}`)
}

const purgecss = requireX('@fullhuman/postcss-purgecss')({
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