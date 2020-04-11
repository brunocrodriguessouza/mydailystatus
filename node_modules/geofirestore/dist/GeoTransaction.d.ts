import { GeoFirestoreTypes } from './GeoFirestoreTypes';
import { GeoDocumentReference } from './GeoDocumentReference';
import { GeoDocumentSnapshot } from './GeoDocumentSnapshot';
/**
 * A reference to a transaction. The `GeoTransaction` object passed to a transaction's updateFunction provides the methods to read and
 * write data within the transaction context. See `GeoFirestore.runTransaction()`.
 */
export declare class GeoTransaction {
    private _transaction;
    /**
     * @param _transaction The `Transaction` instance.
     */
    constructor(_transaction: GeoFirestoreTypes.cloud.Transaction | GeoFirestoreTypes.web.Transaction);
    /** The native `Transaction` instance. */
    readonly native: GeoFirestoreTypes.cloud.Transaction | GeoFirestoreTypes.web.Transaction;
    /**
     * Deletes the document referred to by the provided `GeoDocumentReference` or `DocumentReference`.
     *
     * @param documentRef A reference to the document to be deleted.
     * @return This `GeoTransaction` instance. Used for chaining method calls.
     */
    delete(documentRef: GeoDocumentReference | GeoFirestoreTypes.cloud.DocumentReference | GeoFirestoreTypes.web.DocumentReference): GeoTransaction;
    /**
     * Reads the document referenced by the provided `GeoDocumentReference` or `DocumentReference`.
     *
     * @param documentRef A reference to the document to be read.
     * @return A GeoDocumentSnapshot for the read data.
     */
    get(documentRef: GeoDocumentReference | GeoFirestoreTypes.cloud.DocumentReference | GeoFirestoreTypes.web.DocumentReference): Promise<GeoDocumentSnapshot>;
    /**
     * Writes to the document referred to by the provided `GeoDocumentReference` or `DocumentReference`.
     * If the document does not exist yet, it will be created. If you pass `SetOptions`,
     * the provided data can be merged into the existing document.
     *
     * @param documentRef A reference to the document to be set.
     * @param data An object of the fields and values for the document.
     * @param options An object to configure the set behavior. Includes custom key for location in document.
     * @return This `GeoTransaction` instance. Used for chaining method calls.
     */
    set(documentRef: GeoDocumentReference | GeoFirestoreTypes.cloud.DocumentReference | GeoFirestoreTypes.web.DocumentReference, data: GeoFirestoreTypes.DocumentData, options?: GeoFirestoreTypes.SetOptions): GeoTransaction;
    /**
     * Updates fields in the document referred to by the provided `GeoDocumentReference` or `DocumentReference`.
     * The update will fail if applied to a document that does not exist.
     *
     * @param documentRef A reference to the document to be updated.
     * @param data An object containing the fields and values with which to update the document. Fields can contain dots to reference nested
     * fields within the document.
     * @param customKey The key of the document to use as the location. Otherwise we default to `coordinates`.
     * @return This `GeoTransaction` instance. Used for chaining method calls.
     */
    update(documentRef: GeoDocumentReference | GeoFirestoreTypes.cloud.DocumentReference | GeoFirestoreTypes.web.DocumentReference, data: GeoFirestoreTypes.UpdateData, customKey?: string): GeoTransaction;
}
