// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  getDebtorAPI: 'http://localhost:3000/getDebtor',
  getSecuredPartyAPI: 'http://localhost:3000/getsecuredparties',
  getCollateralAPI: 'http://localhost:3000/getcollaterol',
  getStatesAPI: 'http://localhost:3000/getstates',
  getJurisdictionAPI: 'http://localhost:3000/getjurisdictions',
  postNewFilling: 'http://localhost:3000/submitdoc',
  postToBlockChain: 'http://localhost:5000/api/org.example.mynetwork.NewFilling',
  getNewFillingFromBlock: 'http://localhost:5000/api/org.example.mynetwork.NewFilling/',
  postHashToBlock : 'http://localhost:5000/api/org.example.mynetwork.StoreHash',
  getTransactionDetails : 'http://localhost:5000/api/org.example.mynetwork.StoreHash/',
  postTransactionId : 'http://localhost:3000/postTransactionId',
  getDataFromDB : 'http://localhost:3000/showFilling',
  postPdf : 'http://localhost:3000/getpdf',
  getPdf : 'http://localhost:3000/getpdf',
  websocketUrl : 'ws://localhost:5000'
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
