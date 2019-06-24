define('ForDemo/RootComponent', ['Core/Control', 'wml!ForDemo/RootComponent'], function(Control, template) {
   // Так как в этих демо не работает серверный роутинг, используем
   // отдельный компонент для разрешения маршрутов
   return Control.extend({
      _template: template
   });
});
