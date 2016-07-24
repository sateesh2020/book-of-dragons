(function() {
    angular.module('commons')
        .constant('API', {
            'URL':'http://localhost:3005',
            'GET_ALL_DRAGONS':'/api/dragons',
            'GET_DRAGON_DETAILS':'/api/dragons/:id',
            'SAVE_DRAGON':'/api/dragons',
            'GET_ALL_VIKINGS':'/api/vikings',
            'GET_VIKING_DETAILS':'/api/vikings/:id',
            'SAVE_VIKING':'/api/vikings'
        });
})();
