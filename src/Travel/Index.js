define('Travel/Index', ['Core/Control', 'wml!Travel/Index', 'Travel/CountryPopup'], function(Control, template) {
   return Control.extend({
      _template: template,
      _countries: null,

      _beforeMount: function() {
         // Добавляем список стран
         this._countries = {
            russia: {
               name: 'Россия',
               cities: ['Москва', 'Санкт-Петербург', 'Новосибирск']
            },
            italy: {
               name: 'Италия',
               cities: ['Рим', 'Милан', 'Неаполь']
            },
            france: {
               name: 'Франция',
               cities: ['Париж', 'Марсель', 'Лион']
            }
         };
      },

      _openPopup: function() {
         // В примере выше, paramValue будет равно "italy"
         this._children.infoOpener.open({
            top: 150,
            left: 300
         });
      },

      _changePopup: function() {
         // В примере, newValue === "russia", oldValue === "italy"
         // В данном примере реагировать на изменение параметра нам не нужно
      },

      _closePopup: function() {
         // Здесь можно обработать закрытие окна
      }
   });
});
