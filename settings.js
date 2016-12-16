module.exports = {
  actions: {
    *index(next) {
      yield this.render('index', {
        manifest: require('./manifest')
      })
    }
  },
  template: {
    map: {
      html: 'nunjucks'
    }
  }
}
