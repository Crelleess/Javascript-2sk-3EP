
exports.index = (request, response) => {
    response.render('page/index');
};

exports.error = (request, response) => {
    response.render('page/error');
};
