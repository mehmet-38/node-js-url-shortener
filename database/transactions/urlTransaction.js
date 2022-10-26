const Url = require("../../models/url");
var LocalStorage = require("node-localstorage").LocalStorage;
localStorage = new LocalStorage("./scratch");
class UrlTransaction {
  createUrl(longUrl) {
    Url.longUrl = longUrl;
    Url.shortUrl = Math.random()
      .toString(36)
      .replace(/[^a-z0-9]/gi, "")
      .slice(4, 10);
    localStorage.setItem("shortUrl", Url.shortUrl);
    localStorage.setItem("longUrl", Url.longUrl.longUrl);
  }
}

module.exports = UrlTransaction;
