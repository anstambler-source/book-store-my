/**
 * @returns{Array|null}
 */
import {readJson, writeJson} from "../../storage/storageClient.js";
import {STORAGE_KEYS} from "../../constants/storageKeys.js";

export function loadCatalogFromStorage() {
    return readJson(STORAGE_KEYS.CATALOG)
}

/**
 * @param {Array} books
 */
export function saveCatalogToStorage(books) {
    writeJson(STORAGE_KEYS.CATALOG, books);
}