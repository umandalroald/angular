'use strict';"use strict";
var platform_location_1 = require('./platform_location');
var lang_1 = require('angular2/src/facade/lang');
var browser_platform_location_1 = require('angular2/src/platform/browser/location/browser_platform_location');
var core_1 = require('angular2/core');
exports.WORKER_RENDER_ROUTER = lang_1.CONST_EXPR([
    platform_location_1.MessageBasedPlatformLocation,
    browser_platform_location_1.BrowserPlatformLocation,
    lang_1.CONST_EXPR(new core_1.Provider(core_1.APP_INITIALIZER, { useFactory: initRouterListeners, multi: true, deps: lang_1.CONST_EXPR([core_1.Injector]) }))
]);
function initRouterListeners(injector) {
    return function () {
        var zone = injector.get(core_1.NgZone);
        zone.runGuarded(function () { return injector.get(platform_location_1.MessageBasedPlatformLocation).start(); });
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyX3Byb3ZpZGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpZmZpbmdfcGx1Z2luX3dyYXBwZXItb3V0cHV0X3BhdGgtTFVlUnRZdTUudG1wL2FuZ3VsYXIyL3NyYy93ZWJfd29ya2Vycy91aS9yb3V0ZXJfcHJvdmlkZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxrQ0FBMkMscUJBQXFCLENBQUMsQ0FBQTtBQUNqRSxxQkFBeUIsMEJBQTBCLENBQUMsQ0FBQTtBQUNwRCwwQ0FFTyxrRUFBa0UsQ0FBQyxDQUFBO0FBQzFFLHFCQUEwRCxlQUFlLENBQUMsQ0FBQTtBQUU3RCw0QkFBb0IsR0FBRyxpQkFBVSxDQUFDO0lBQzdDLGdEQUE0QjtJQUM1QixtREFBdUI7SUFDdkIsaUJBQVUsQ0FDTixJQUFJLGVBQVEsQ0FBQyxzQkFBZSxFQUNmLEVBQUMsVUFBVSxFQUFFLG1CQUFtQixFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLGlCQUFVLENBQUMsQ0FBQyxlQUFRLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztDQUNoRyxDQUFDLENBQUM7QUFFSCw2QkFBNkIsUUFBa0I7SUFDN0MsTUFBTSxDQUFDO1FBQ0wsSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxhQUFNLENBQUMsQ0FBQztRQUVoQyxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQU0sT0FBQSxRQUFRLENBQUMsR0FBRyxDQUFDLGdEQUE0QixDQUFDLENBQUMsS0FBSyxFQUFFLEVBQWxELENBQWtELENBQUMsQ0FBQztJQUM1RSxDQUFDLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtNZXNzYWdlQmFzZWRQbGF0Zm9ybUxvY2F0aW9ufSBmcm9tICcuL3BsYXRmb3JtX2xvY2F0aW9uJztcbmltcG9ydCB7Q09OU1RfRVhQUn0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9sYW5nJztcbmltcG9ydCB7XG4gIEJyb3dzZXJQbGF0Zm9ybUxvY2F0aW9uXG59IGZyb20gJ2FuZ3VsYXIyL3NyYy9wbGF0Zm9ybS9icm93c2VyL2xvY2F0aW9uL2Jyb3dzZXJfcGxhdGZvcm1fbG9jYXRpb24nO1xuaW1wb3J0IHtBUFBfSU5JVElBTElaRVIsIFByb3ZpZGVyLCBJbmplY3RvciwgTmdab25lfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcblxuZXhwb3J0IGNvbnN0IFdPUktFUl9SRU5ERVJfUk9VVEVSID0gQ09OU1RfRVhQUihbXG4gIE1lc3NhZ2VCYXNlZFBsYXRmb3JtTG9jYXRpb24sXG4gIEJyb3dzZXJQbGF0Zm9ybUxvY2F0aW9uLFxuICBDT05TVF9FWFBSKFxuICAgICAgbmV3IFByb3ZpZGVyKEFQUF9JTklUSUFMSVpFUixcbiAgICAgICAgICAgICAgICAgICB7dXNlRmFjdG9yeTogaW5pdFJvdXRlckxpc3RlbmVycywgbXVsdGk6IHRydWUsIGRlcHM6IENPTlNUX0VYUFIoW0luamVjdG9yXSl9KSlcbl0pO1xuXG5mdW5jdGlvbiBpbml0Um91dGVyTGlzdGVuZXJzKGluamVjdG9yOiBJbmplY3Rvcik6ICgpID0+IHZvaWQge1xuICByZXR1cm4gKCkgPT4ge1xuICAgIGxldCB6b25lID0gaW5qZWN0b3IuZ2V0KE5nWm9uZSk7XG5cbiAgICB6b25lLnJ1bkd1YXJkZWQoKCkgPT4gaW5qZWN0b3IuZ2V0KE1lc3NhZ2VCYXNlZFBsYXRmb3JtTG9jYXRpb24pLnN0YXJ0KCkpO1xuICB9O1xufVxuIl19