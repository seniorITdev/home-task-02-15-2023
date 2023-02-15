import { call, put, takeLatest, select } from "redux-saga/effects";
import { storeSearchResult, storeImagesForItem } from "../actions/index";
import { transferString } from "../transferString";

function getApi( url ) {
    console.log(url)
    return fetch(url).then(res => res.json()).catch(err => {throw err});
}

function* fetchData() {
    let url = "https://images-api.nasa.gov/search?media_type=image";
    let q = yield select(state => state.searchItem.q);
    let description =yield select(state => state.searchItem.description);
    let keyword = yield select(state => state.searchItem.keyword);
    let yearStart = yield select(state => state.searchItem.yearStart);
    let yearEnd = yield select(state => state.searchItem.yearEnd);

    q = transferString(q);
    description = transferString(description);
    keyword = transferString(keyword);

    if(q != "") url = url + `&q=${q}`;
    if(description != "") url = url + `&description=${description}`;
    if(keyword != "") url = url + `&keywords=${keyword}`;
    url = url + `&year_start=${yearStart}`;
    url = url + `&year_end=${yearEnd}`;
    
    const data = yield call(getApi, url);
    yield put(storeSearchResult(data));
}

function* fetchImages( action ) {
    let urls = yield call(getApi, action.url);
    urls = urls?.filter(url => url.endsWith("~thumb.jpg"));
    yield put(storeImagesForItem(urls));
}

export function* dataFetchSaga() {
    yield takeLatest('GET_SEARCH_RESULT', fetchData);
    yield takeLatest('GET_IMAGES_FOR_ITEM', fetchImages);
    
}