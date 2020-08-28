// @desc     Get all bootcamps
// @route    GET /api/v1/bootcamps
// @access   Public
exports.getBootcamps = (req, res, next) => {
	res.status(200).json({ success: true, message: 'Show all bootcamps' })
}

// @desc     Get single bootcamp
// @route    GET /api/v1/bootcamps/:id
// @access   Public
exports.getBootcamp = (req, res, next) => {
	res.status(200).json({ success: true, message: 'Show a bootcamp' })
}

// @desc     Create new bootcamp
// @route    POST /api/v1/bootcamps
// @access   Private
exports.createBootcamp = (req, res, next) => {
	res.status(200).json({ success: true, message: 'ADD NEW BOOTCAMP' })
}

// @desc     Update new bootcamp
// @route    PUT /api/v1/bootcamps/:id
// @access   Private
exports.updateBootcamp = (req, res, next) => {
	res.status(200).json({ success: true, message: 'UPDATE BOOTCAMP' })
}

// @desc     Delete new bootcamp
// @route    DELETE /api/v1/bootcamps/:id
// @access   Private
exports.deleteBootcamp = (req, res, next) => {
	res.status(200).json({ success: true, message: 'DELETE A BOOTCAMP' })
}
