exports.getSuccess = (req, res, next) => {
    res.render('success', { pageTitle: 'Data submitted' });
};