var eejs = require('ep_etherpad-lite/node/eejs');

exports.eejsBlock_editbarMenuLeft = function(hook_name, args, cb) {
  if(!args.renderContext.req.url.match(/^\/(p\/r\..{16})/)) {
    args.content += eejs.require('ep_eplmgmt/templates/eplmgmt_button.ejs');
  }
  cb();
};
