export default (tours = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...tours,action.payload];
        // case 'FETCH_BY_SEARCH':
        //     return [...tours,action.payload];
        default:
            return tours;
    }

};