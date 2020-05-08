let ipUrl = 'http://47.95.145.164:7001/admin/'//上线

// let ipUrl = 'http://127.0.0.1:7001/admin/'
let servicePath = {
  checkLogin: ipUrl + 'checkLogin',
  getTypeInfo:ipUrl + 'getTypeInfo',
  addArticle:ipUrl + 'addArticle',
  updateArticle:ipUrl + 'updateArticle',
  getArticleList:ipUrl + 'getArticleList',
  delArticle :ipUrl + 'delArticle/',
  getArticleById:ipUrl + 'getArticleById/'
}

export default servicePath