const mockData = [
    {
        "url": "https://api.familyinfo.buckinghamshire.gov.uk/api/v1",
        "label": "Buckinghamshire Council",
        "summary": "Buckinghamshire Family Information Service",
        "organisationLabel": "Buckinghamshire Council",
        "organisationUrl": "https://www.buckinghamshire.gov.uk/",
        "developerLabel": "FutureGov",
        "developerUrl": "https://wearefuturegov.com/",
        "servicePathOverride": "",
        "lastCheck": "2021-06-10T13:39:19",
        "checkIsRunning": false,
        "timeTaken": 1907653,
        "isUp": true,
        "isServicesValid": false,
        "servicesMessage": "Missing search method paginaton metadata at the begining of the JSON payload. Required: \"number\"; \"first\"; \"last\". It is case sensitive, and should be in the following format: {\"totalElements\":nn,\"totalPages\":nn,\"number\":nn,\"size\":nn,\"first\":bb,\"last\":bb\",\"content\":[{},{}]...",
        "isServiceExampleValid": true,
        "serviceExampleIdentifier": "",
        "serviceExampleMessage": "",
        "isSearchEnabled": true,
        "searchEnabledMessage": ""
    },
    {
        "url": "https://api.porism.com/ServiceDirectoryServiceCQC",
        "label": "Care Quality Commission",
        "summary": "Open source transformation run daily from Care Quality Commission locations feed from https://api.cqc.org.uk/public/v1/locations/ into an instance of the open source directory",
        "organisationLabel": "Care Quality Commission",
        "organisationUrl": "https://www.cqc.org.uk",
        "developerLabel": "CQC/ORUK",
        "developerUrl": "https://github.com/OpenReferralUK/human-services/tree/master/Utilities/CQCImport",
        "servicePathOverride": "",
        "lastCheck": "2021-06-10T17:26:56",
        "checkIsRunning": true,
        "timeTaken": 41160,
        "isUp": true,
        "isServicesValid": true,
        "servicesMessage": "",
        "isServiceExampleValid": true,
        "serviceExampleIdentifier": "02fe54aa-f4be-4e65-b43f-80881d0b312a",
        "serviceExampleMessage": "",
        "isSearchEnabled": true,
        "searchEnabledMessage": ""
    },
    {
        "url": "https://blackburn.openplace.directory/o/ServiceDirectoryService/v2",
        "label": "Blackburn with Darwen Council",
        "summary": "Live Blackburn with Darwen Council services data",
        "organisationLabel": "Blackburn with Darwen Council",
        "organisationUrl": "http://www.blackburn.gov.uk",
        "developerLabel": "Placecube",
        "developerUrl": "https://www.placecube.com/platforms/open-place-directory/",
        "servicePathOverride": "",
        "lastCheck": "2021-06-10T11:49:33",
        "checkIsRunning": false,
        "timeTaken": 1831,
        "isUp": true,
        "isServicesValid": true,
        "servicesMessage": "",
        "isServiceExampleValid": true,
        "serviceExampleIdentifier": "f24a1d7f-6644-bd4c-c4a1-c8e813e5c824",
        "serviceExampleMessage": "Postcode Search failed. When tested using /services?proximity=100&postcode=BB2+2DH",
        "isSearchEnabled": false,
        "searchEnabledMessage": "Postcode Search failed. When tested using /services?proximity=100&postcode=BB2+2DH"
    },
    {
        "url": "https://bristol.openplace.directory/o/ServiceDirectoryService/v2",
        "label": "Bristol Council",
        "summary": "Services for Brisol and South Gloucestershire service finders",
        "organisationLabel": "Bristol Council",
        "organisationUrl": "https://www.bristol.gov.uk",
        "developerLabel": "Placecube",
        "developerUrl": "https://www.placecube.com/platforms/open-place-directory/",
        "servicePathOverride": "",
        "lastCheck": "2021-06-10T11:49:33",
        "checkIsRunning": false,
        "timeTaken": 2262,
        "isUp": true,
        "isServicesValid": true,
        "servicesMessage": "",
        "isServiceExampleValid": true,
        "serviceExampleIdentifier": "40aac941-cf6a-4171-9933-05d650bf322c",
        "serviceExampleMessage": "",
        "isSearchEnabled": true,
        "searchEnabledMessage": ""
    },
    {
        "url": "https://elmbridge.openplace.directory/o/ServiceDirectoryService/v2",
        "label": "Elmbridge Council",
        "summary": "Live Elmbridge Council services data",
        "organisationLabel": "Elmbridge Council",
        "organisationUrl": "https://www.elmbridge.gov.uk",
        "developerLabel": "Placecube",
        "developerUrl": "https://www.placecube.com/platforms/open-place-directory/",
        "servicePathOverride": "",
        "lastCheck": "2021-06-10T11:49:33",
        "checkIsRunning": false,
        "timeTaken": 2207,
        "isUp": true,
        "isServicesValid": true,
        "servicesMessage": "",
        "isServiceExampleValid": true,
        "serviceExampleIdentifier": "454c53e4-8432-478f-9921-f8fb6e2433ef",
        "serviceExampleMessage": "",
        "isSearchEnabled": true,
        "searchEnabledMessage": ""
    },
    {
        "url": "https://fyldecoast.openplace.directory/o/ServiceDirectoryService/v2",
        "label": "Fylde Coast Council",
        "summary": "Live Fylde Coast Council services data",
        "organisationLabel": "Fylde Coast Council",
        "organisationUrl": "https://new.fylde.gov.uk",
        "developerLabel": "Placecube",
        "developerUrl": "https://www.placecube.com/platforms/open-place-directory/",
        "servicePathOverride": "",
        "lastCheck": "2021-06-10T11:49:33",
        "checkIsRunning": false,
        "timeTaken": 745,
        "isUp": true,
        "isServicesValid": true,
        "servicesMessage": "",
        "isServiceExampleValid": true,
        "serviceExampleIdentifier": "74f57f50-41d6-8686-0888-3ef9960aa690",
        "serviceExampleMessage": "",
        "isSearchEnabled": true,
        "searchEnabledMessage": ""
    },
    {
        "url": "https://lgaapi.connecttosupport.org",
        "label": "Hull City Council",
        "summary": "Live Hull City Council services data",
        "organisationLabel": "Hull City Council",
        "organisationUrl": "http://www.hull.gov.uk",
        "developerLabel": "Public Partnerships",
        "developerUrl": "https://www.publicconsultinggroup.co.uk/",
        "servicePathOverride": "",
        "lastCheck": "2021-06-10T11:49:34",
        "checkIsRunning": false,
        "timeTaken": 3506,
        "isUp": true,
        "isServicesValid": false,
        "servicesMessage": "Missing search method paginaton metadata at the begining of the JSON payload. Required: \"totalElements\"; \"totalPages\". It is case sensitive, and should be in the following format: {\"totalElements\":nn,\"totalPages\":nn,\"number\":nn,\"size\":nn,\"first\":bb,\"last\":bb\",\"content\":[{},{}]...",
        "isServiceExampleValid": true,
        "serviceExampleIdentifier": "647e6441-01e7-4b01-91a1-ab5200fedb4d",
        "serviceExampleMessage": "Text Test failed. When tested using /services?text=Aldi.",
        "isSearchEnabled": false,
        "searchEnabledMessage": "Text Test failed. When tested using /services?text=Aldi."
    },
    {
        "url": "https://northlincs.openplace.directory/o/ServiceDirectoryService/v2",
        "label": "North Lincolnshire Council",
        "summary": "New so no useful data yet",
        "organisationLabel": "North Lincolnshire Council",
        "organisationUrl": "https://www.northlincs.gov.uk/",
        "developerLabel": "Placecube",
        "developerUrl": "https://www.placecube.com/platforms/open-place-directory/",
        "servicePathOverride": "",
        "lastCheck": "2021-06-10T11:49:34",
        "checkIsRunning": false,
        "timeTaken": 563,
        "isUp": true,
        "isServicesValid": true,
        "servicesMessage": "",
        "isServiceExampleValid": true,
        "serviceExampleIdentifier": "f3b5c4ff-1654-229b-1af9-f9ac88ccc722",
        "serviceExampleMessage": "Postcode Search failed. When tested using /services?proximity=100&postcode=DN15+6HS",
        "isSearchEnabled": false,
        "searchEnabledMessage": "Postcode Search failed. When tested using /services?proximity=100&postcode=DN15+6HS"
    }
];

mockData.sort((a, b) => (a.organisationLabel || '').localeCompare(b.organisationLabel || ''));

export default mockData;