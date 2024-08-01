# Client

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.11.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


### Angular introduction
 - adding components 
 - Http client module
 - Observables
 - Typescript

 # Goal

 to be able to use the http client to retrieve data from the API

 to understand the basics of observables and typescript

## Intro to the http client module


## Observables
 - A sequence of items that arrive asynchronously over time
# HTTP, Observables and RXJS
 1. HTTP Get Request from shopService
 2. Receive the observable and cast it into a products array
 3. Subscribe to the Observable from the component 
 4. Assign the products array to a local variable for use in the components template

# RXJS
 - Reactive extensions for javascript
 - Utility library for working with the observables, similiar to loadsh or underscore for javascript objects and arrays
 - Uses the pipe() method to chain Rxjs operators together

## Intro to typescript 
 # Typescript rocks
  - strong typing 
  - Object Orientated
  - Better Intellisense
  - Access Modifiers
  - Future Javascript features
  - Catches silly mistakes in development
  - third party libraries
  - Easy to learn if you know javascript

 # Typescript is annoying! 
  - More upfront code
  - third party libraries
  - strict mode is ... strict!

  ## building the UI shop 
   - File and folder structure 
   - Angular services
   - Building the UI for the shop
   - Pagination 
   - Filtering, Sorting & Search 
   - Input and Output properties

  # File and folder structure in angular

  - AppModule
    - CoreModule 
      - Singleton: NavBar
      
    - SharedModule
      - SharedComponents: Anything we need to use in more than 1 feature module

    - FeatureModules
      - AppFeatures: Each feature we create will have its own module routing

## Routing

 - Adding new feature modules
 - Setting up routes
 - Nav Links
 - Lazy loading 

 - SPA's need routers
 - Angular router will load a component when route is activated
 - RouterOutler
 - Module architecture of our app encourages lazy loading

    # Creating additional components to route to
      - components and module created 
        ng g m home/home
        ng g c home/home --skip-tests
        ng g c shop/product-details --skip-tests
    
    # Creating routing module
 
# Error Handling

  - Error handling in Angular
  - Http interceptors
  - Adding toast notifications
  - troubleshooting tips

  ## Goal:
   To handle errors we receive from the API centrally and handled by the HTTP interceptor.

   To undestand how to troubleshoot API Errors

  ## create interceptor 
    - ng g interceptor core/interceptors/error

  ## ADD ngx-toastr for angular 15
    - npm install ngx-toastr@15.2.2

# Pazzazz
 - Improving the UI
 - Adding a page header
 - Adding breadcrumb 
 - Styling the product items
 - Adding loading indicators 
 - changing the bootstrap theme
 - Improving the home page

 ## Goal:
 to improve the UI, to add dynamic breacrumbs and page headers, to display a loading indicator when the app is waiting dor data from the API

  ## Adding breadcrumbs
  npm install xng-breadcrumb@9.x.x

  ## changing the bootstrap theme
  npm install bootswatch
