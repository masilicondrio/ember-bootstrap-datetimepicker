module.exports = {
  normalizeEntityName: function() {},

  afterInstall: function() {
    var that = this;

    return this.addBowerPackageToProject('eonasdan-bootstrap-datetimepicker', '~4.14.30').then(function() {
        return that.addBowerPackageToProject('moment').then(function() {
          return that.addBowerPackageToProject('ember-cli-moment-shim');
      });
    });
  }
};
