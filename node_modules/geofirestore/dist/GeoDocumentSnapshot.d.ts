import { GeoFirestoreTypes } from './GeoFirestoreTypes';
import { GeoDocumentReference } from './GeoDocumentReference';
/**
 * A `GeoDocumentSnapshot` contains data read from a document in your Firestore database. The data can be extracted with `.data()` or
 * `.get(<field>)` to get a specific field.
 *
 * For a `GeoDocumentSnapshot` that points to a non-existing document, any data access will return 'undefined'. You can use the `exists`
 * property to explicitly verify a document's existence.
 */
export declare class GeoDocumentSnapshot {
    private _snapshot;
    private _isWeb;
    /**
     * @param _snapshot The `DocumentSnapshot` instance.
     */
    constructor(_snapshot: GeoFirestoreTypes.cloud.DocumentSnapshot | GeoFirestoreTypes.web.DocumentSnapshot);
    /** The native `DocumentSnapshot` instance. */
    readonly native: GeoFirestoreTypes.cloud.DocumentSnapshot | GeoFirestoreTypes.web.DocumentSnapshot;
    /** True if the document exists. */
    readonly exists: boolean;
    /**
     * The ID of the document for which this `GeoDocumentSnapshot` contains data.
     */
    readonly id: string;
    /** A `GeoDocumentReference` to the document location. */
    readonly ref: GeoDocumentReference;
    /**
     * Retrieves all fields in the document as an Object. Returns 'undefined' if the document doesn't exist.
     *
     * By default, `FieldValue.serverTimestamp()` values that have not yet been set to their final value will be returned as `null`. You can
     * override this by passing an options object if you're on web.
     *
     * @param options Available on web only. An options object to configure how data is retrieved from the snapshot (e.g. the desired
     * behavior for server timestamps that have not yet been set to their final value). (WEB ONLY)
     * @return An Object containing all fields in the document or 'undefined' if the document doesn't exist.
     */
    data(options?: GeoFirestoreTypes.SnapshotOptions): GeoFirestoreTypes.DocumentData | undefined;
    /**
     * Retrieves the field specified by `fieldPath`. Returns 'undefined' if the document or field doesn't exist.
     *
     * By default, a `FieldValue.serverTimestamp()` that has not yet been set to its final value will be returned as `null`. You can override
     * this by passing an options object.
     *
     * @param fieldPath The path (e.g. 'foo' or 'foo.bar') to a specific field.
     * @param options An options object to configure how the field is retrieved from the snapshot (e.g. the desired behavior for server
     * timestamps that have not yet been set to their final value). (WEB ONLY)
     * @return The data at the specified field location or undefined if no such field exists in the document.
     */
    get(fieldPath: string | GeoFirestoreTypes.cloud.FieldPath | GeoFirestoreTypes.web.FieldPath, options?: GeoFirestoreTypes.SnapshotOptions): any;
    /**
     * Returns true if this `DocumentSnapshot` or `GeoDocumentSnapshot` is equal to the provided one.
     *
     * @param other The `DocumentSnapshot` or `GeoDocumentSnapshot` to compare against.
     * @return true if this `GeoDocumentSnapshot` is equal to the provided one.
     */
    isEqual(other: GeoDocumentSnapshot | GeoFirestoreTypes.cloud.DocumentSnapshot | GeoFirestoreTypes.web.DocumentSnapshot): boolean;
}
