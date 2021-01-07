const middleware = {}

middleware['authenticated'] = require('../middleware/authenticated.js')
middleware['authenticated'] = middleware['authenticated'].default || middleware['authenticated']

middleware['axiosMiddle'] = require('../middleware/axiosMiddle.js')
middleware['axiosMiddle'] = middleware['axiosMiddle'].default || middleware['axiosMiddle']

middleware['main'] = require('../middleware/main.js')
middleware['main'] = middleware['main'].default || middleware['main']

export default middleware
