define('ForDemo/PopupManager', ['Core/Control', 'wml!ForDemo/PopupManager'], function(Control, template) {
   return Control.extend({
      _template: template,

      _items: null,
      _registeredItems: null,

      _beforeMount: function() {
         this._items = {
            _version: 0
         };
         this._registeredItems = [];
      },

      _beforeUnmount: function() {
         this._items = null;
         this._registeredItems = null;
      },

      _requestedOpen: function(e, cfg) {
         this._items[cfg.openerId] = cfg;
         if (!this._registeredItems.includes(cfg.openerId)) {
            this._registeredItems.push(cfg.openerId);
         }
         this._items._version++;
      },

      _requestedClose: function(e, cfg) {
         if (this._items[cfg.openerId]) {
            delete this._items[cfg.openerId];
            this._registeredItems.splice(this._registeredItems.indexOf(cfg.openerId), 1);
            this._items._version++;
         }
      },

      _userClosed: function(e, openerId) {
         this._items[openerId].closeHandler();
         this._requestedClose(null, { openerId: openerId });
      }
   });
});
