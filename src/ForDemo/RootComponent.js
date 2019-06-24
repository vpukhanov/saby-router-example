define('ForDemo/RootComponent', ['Core/Control', 'wml!ForDemo/RootComponent'], function(Control, template) {
   return Control.extend({
      _template: template
   });
});
