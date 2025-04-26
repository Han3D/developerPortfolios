// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
// These keys are deleted. When i created this project i was a junior developer and didnt know it better. The keys cannot be absued anymore. If you dont believe me. Try to use them. Good luck!!!
export const environment = {
  firebase: {
    projectId: 'han3d-portfolio',
    appId: '',
    databaseURL: '',
    storageBucket: '',
    locationId: 'europe-west',
    apiKey: '',
    authDomain: '',
    messagingSenderId: '',
    measurementId: '',
  },
  production: false,
  recaptchaSitekey: '',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
