// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDK5wDgDhs3AHUqLje7H2vIyM-gpeD1Ag4",
    authDomain: "yoters-crm.firebaseapp.com",
    projectId: "yoters-crm",
    storageBucket: "yoters-crm.appspot.com",
    messagingSenderId: "11312262471",
    appId: "1:11312262471:web:d885175d7b708ff28d3062",
    measurementId: "${config.measurementId}"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
