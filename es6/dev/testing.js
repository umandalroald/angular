/**
 * @module
 * @description
 * This module is used for writing tests for applications written in Angular.
 *
 * This module is not included in the `angular2` module; you must import the test module explicitly.
 *
 */
export * from './src/testing/testing';
export { ComponentFixture, TestComponentBuilder } from './src/testing/test_component_builder';
export * from './src/testing/test_injector';
export * from './src/testing/fake_async';
export { MockViewResolver } from 'angular2/src/mock/view_resolver_mock';
export { MockXHR } from 'angular2/src/compiler/xhr_mock';
export { MockNgZone } from 'angular2/src/mock/ng_zone_mock';
export { MockApplicationRef } from 'angular2/src/mock/mock_application_ref';
export { MockDirectiveResolver } from 'angular2/src/mock/directive_resolver_mock';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpZmZpbmdfcGx1Z2luX3dyYXBwZXItb3V0cHV0X3BhdGgtWjlaY3hvVVAudG1wL2FuZ3VsYXIyL3Rlc3RpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7R0FPRztBQUNILGNBQWMsdUJBQXVCLENBQUM7QUFDdEMsU0FBUSxnQkFBZ0IsRUFBRSxvQkFBb0IsUUFBTyxzQ0FBc0MsQ0FBQztBQUM1RixjQUFjLDZCQUE2QixDQUFDO0FBQzVDLGNBQWMsMEJBQTBCLENBQUM7QUFFekMsU0FBUSxnQkFBZ0IsUUFBTyxzQ0FBc0MsQ0FBQztBQUN0RSxTQUFRLE9BQU8sUUFBTyxnQ0FBZ0MsQ0FBQztBQUN2RCxTQUFRLFVBQVUsUUFBTyxnQ0FBZ0MsQ0FBQztBQUMxRCxTQUFRLGtCQUFrQixRQUFPLHdDQUF3QyxDQUFDO0FBQzFFLFNBQVEscUJBQXFCLFFBQU8sMkNBQTJDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBtb2R1bGVcbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBtb2R1bGUgaXMgdXNlZCBmb3Igd3JpdGluZyB0ZXN0cyBmb3IgYXBwbGljYXRpb25zIHdyaXR0ZW4gaW4gQW5ndWxhci5cbiAqXG4gKiBUaGlzIG1vZHVsZSBpcyBub3QgaW5jbHVkZWQgaW4gdGhlIGBhbmd1bGFyMmAgbW9kdWxlOyB5b3UgbXVzdCBpbXBvcnQgdGhlIHRlc3QgbW9kdWxlIGV4cGxpY2l0bHkuXG4gKlxuICovXG5leHBvcnQgKiBmcm9tICcuL3NyYy90ZXN0aW5nL3Rlc3RpbmcnO1xuZXhwb3J0IHtDb21wb25lbnRGaXh0dXJlLCBUZXN0Q29tcG9uZW50QnVpbGRlcn0gZnJvbSAnLi9zcmMvdGVzdGluZy90ZXN0X2NvbXBvbmVudF9idWlsZGVyJztcbmV4cG9ydCAqIGZyb20gJy4vc3JjL3Rlc3RpbmcvdGVzdF9pbmplY3Rvcic7XG5leHBvcnQgKiBmcm9tICcuL3NyYy90ZXN0aW5nL2Zha2VfYXN5bmMnO1xuXG5leHBvcnQge01vY2tWaWV3UmVzb2x2ZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9tb2NrL3ZpZXdfcmVzb2x2ZXJfbW9jayc7XG5leHBvcnQge01vY2tYSFJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb21waWxlci94aHJfbW9jayc7XG5leHBvcnQge01vY2tOZ1pvbmV9IGZyb20gJ2FuZ3VsYXIyL3NyYy9tb2NrL25nX3pvbmVfbW9jayc7XG5leHBvcnQge01vY2tBcHBsaWNhdGlvblJlZn0gZnJvbSAnYW5ndWxhcjIvc3JjL21vY2svbW9ja19hcHBsaWNhdGlvbl9yZWYnO1xuZXhwb3J0IHtNb2NrRGlyZWN0aXZlUmVzb2x2ZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9tb2NrL2RpcmVjdGl2ZV9yZXNvbHZlcl9tb2NrJztcbiJdfQ==