
module.exports = function makePromise(fn) {
    return new Promise((resolve, reject) => {
        try {
            fn((...resp) => resolve(resp));
        } catch (err) {
            reject(err);
        }
    })
}