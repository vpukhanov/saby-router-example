define('ForDemo/SampleOpener', ['Core/Control', 'wml!ForDemo/SampleOpener'], function(Control, template) {
   // Эмуляция контролов-опенеров из Controls
   return Control.extend({
      _template: template,

      _selfId: null,

      _beforeMount: function() {
         this._selfId = this._generateRandomId();
      },

      open: function(popupParams) {
         this._notify(
            'popupManagerOpen',
            [
               {
                  openerId: this._selfId,
                  template: popupParams.template || this._options.template,
                  closeHandler: this._closeHandler.bind(this),
                  config: popupParams
               }
            ],
            { bubbling: true }
         );
      },

      close: function() {
         this._notify('popupManagerClose', [{ openerId: this._selfId }], { bubbling: true });
      },

      _closeHandler: function() {
         this._notify('close');
      },

      _generateRandomId: function() {
         return Math.random()
            .toString(36)
            .substring(7);
      }
   });
});
