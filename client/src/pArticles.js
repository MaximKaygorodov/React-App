const contents_ready = require('../../contents_ready');

const articles = JSON.parse(contents_ready.readFileSync('../../contents_ready', 'utf8'))

export default articles