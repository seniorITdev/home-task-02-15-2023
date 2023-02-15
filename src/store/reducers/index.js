const thisYear = (new Date).getFullYear() + "";
const initialState = {
    searchItem: {
        q: "",
        description: "",
        keyword: "",
        mediaType: "image",
        yearStart: "1901",
        yearEnd: thisYear

    },
    searchResult: {},
    imagesForItem: [],
    isLoading: false
}

const reducer = (state = initialState, action) => {
    switch( action.type ) {
        case "STORE_SEARCH_RESULT" : {
            return {
                ...state,
                searchResult: action.data,
                isLoading: false
            }
        }
        case "STORE_SEARCH_ITEMS" : {
            return {
                ...state,
                searchItem: {
                    ...state.searchItem,
                    [action.key]: action.value
                }
            }
        }
        case "STORE_IMAGES_FOR_ITEM": {
            return {
                ...state,
                imagesForItem: action.urls,
                isLoading: false
            }
        }
        case "SET_ISLOADING": {
            return {
                ...state,
                isLoading: true
            }
        }
        default: return state;
    }
}

export default reducer;