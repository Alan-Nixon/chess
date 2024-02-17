const homePage = (req, res) => {
    res.status(200).json({stat:"working"})
}

module.exports = { homePage }