
exports.hello = (dotaz, odpoved) => {
    odpoved.send('Hello World!');
};

exports.json = (dotaz, odpoved) => {
    odpoved.json({
        pozdrav: 'Hello World!'
    });
};

