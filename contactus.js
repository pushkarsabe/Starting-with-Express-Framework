const contacts = [];

exports.getAddContact = (req, res, next) => {
    res.render('contactus', {
        pageTitle: 'Contact Us',
        path: '/contact',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
    });
}

exports.postAddContact = (req, res, next) => {
    contacts.push({ title: req.body.title });
    console.log(req.body);
    res.redirect('/');
}