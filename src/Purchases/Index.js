define('Purchases/Index', [
   'Core/Control',
   'wml!Purchases/Index'
], function(Control, template) {

   return Control.extend({
      _template: template
   });

});
