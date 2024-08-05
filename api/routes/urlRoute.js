const urlController = require('../controllers/urlController');

const urlRoute = (app) => {
    app.route("/urls")
        .get(urlController.get_all_urls)
        .post(urlController.create_short_url)

    app.route("/urls/:urlId")
        .get(urlController.get_url_by_id)
        .delete(urlController.delete_url_by_id)
}
module.exports = urlRoute