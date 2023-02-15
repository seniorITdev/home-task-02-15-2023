export const getSearchResult = () => {
    return {
        type: "GET_SEARCH_RESULT"
    }
}

export const storeSearchResult = ( data ) => {
    return {
        type: "STORE_SEARCH_RESULT",
        data: data
    }
}

export const storeSearchItems = ( key, value ) => {
    return {
        type: "STORE_SEARCH_ITEMS",
        key: key,
        value: value
    }
}

export const getImagesForItem = ( url ) => {
    return {
        type: "GET_IMAGES_FOR_ITEM",
        url: url
    }
}

export const storeImagesForItem = ( urls ) => {
    return {
        type: "STORE_IMAGES_FOR_ITEM",
        urls: urls
    }
}

export const setIsLoading = ( ) => {
    return {
        type:"SET_ISLOADING"
    }
}