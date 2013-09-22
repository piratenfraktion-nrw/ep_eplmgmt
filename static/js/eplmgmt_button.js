exports.documentReady = function(hook_name, args, cb) {
  $('#eplmgmtButton').click(function() {
    window.parent.toggleMenu();
  });
  cb();
};
