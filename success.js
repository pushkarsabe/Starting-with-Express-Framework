exports.getSuccess = (req, res, next) => {
    res.render('afterSuccess', { pageTitle: 'Data submitted' });
};