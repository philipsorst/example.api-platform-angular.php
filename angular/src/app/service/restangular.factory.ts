import {environment} from "../../environments/environment";

export function RestangularConfigFactory(RestangularProvider) {
    RestangularProvider.setBaseUrl(environment.apiEndpoint);
    // JSON-LD @id support
    RestangularProvider.setRestangularFields({
        id: '@id',
        selfLink: '@id'
    });
    RestangularProvider.setSelfLinkAbsoluteUrl(false);

    // Hydra collections support
    RestangularProvider.addResponseInterceptor(function (data, operation) {
        // Remove trailing slash to make Restangular working
        function populateHref(data) {
            if (data['@id']) {
                data.href = data['@id'].substring(1);
            }
        }

        // Populate href property for the collection
        populateHref(data);

        if ('getList' === operation) {
            let collectionResponse = data['hydra:member'];
            collectionResponse.metadata = {};

            Object.keys(data).map((key) => {
                if ('hydra:member' !== key) {
                    collectionResponse.metadata[key] = data[key];
                }
            });


            collectionResponse.forEach((value) => {
                populateHref(value);
            });


            return collectionResponse;
        }

        return data;
    });
}
