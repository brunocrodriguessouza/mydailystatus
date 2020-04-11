import { GeoFirestoreTypes } from './GeoFirestoreTypes';
import { GeoCollectionReference } from './GeoCollectionReference';
import { GeoDocumentSnapshot } from './GeoDocumentSnapshot';
import { GeoFirestore } from './GeoFirestore';
/**
 * A `GeoDocumentReference` refers to a document location in a Firestore database and can be used to write, read, or listen to the
 * location. The document at the referenced location may or may not exist. A `GeoDocumentReference` can also be used to create a
 * `CollectionReference` to a subcollection.
 */
export declare class GeoDocumentReference {
    private _document;
    private _isWeb;
    /**
     * @param _document The `DocumentReference` instance.
     */
    constructor(_document: GeoFirestoreTypes.cloud.DocumentReference | GeoFirestoreTypes.web.DocumentReference);
    /** The native `DocumentReference` instance. */
    readonly native: GeoFirestoreTypes.cloud.DocumentReference | GeoFirestoreTypes.web.DocumentReference;
    /** The identifier of the document within its collection. */
    readonly id: string;
    /**
     * The `GeoFirestore` for the Firestore database (useful for performing transactions, etc.).
     */
    readonly firestore: GeoFirestore;
    /**
     * Attaches a listener for GeoDocumentSnapshot events. You may either pass individual `onNext` and `onError` callbacks.
     *
     * @param onNext A callback to be called every time a new `GeoDocumentSnapshot` is available.
     * @param onError A callback to be called if the listen fails or is cancelled. No further callbacks will occur.
     * @return An unsubscribe function that can be called to cancel the snapshot listener.
     */
    readonly onSnapshot: ((onNext: (snapshot: GeoDocumentSnapshot) => void, onError?: (error: Error) => void) => () => void);
    /**
     * A reference to the GeoCollection to which this GeoDocumentReference belongs.
     */
    readonly parent: GeoCollectionReference;
    /**
     * A string representing the path of the referenced document (relative to the root of the database).
     */
    readonly path: string;
    /**
     * Gets a `GeoCollectionReference` instance that refers to the collection at the specified path.
     *
     * @param collectionPath A slash-separated path to a collection.
     * @return The `GeoCollectionReference` instance.
     */
    collection(collectionPath: string): GeoCollectionReference;
    /**
     * Deletes the document referred to by this `GeoDocumentReference`.
     *
     * @return A Promise resolved once the document has been successfully deleted from the backend (Note that it won't resolve while you're
     * offline).
     */
    delete(): Promise<void>;
    /**
     * Reads the document referred to by this `GeoDocumentReference`.
     *
     * Note: By default, get() attempts to provide up-to-date data when possible by waiting for data from the server, but it may return
     * cached data or fail if you are offline and the server cannot be reached. This behavior can be altered via the `GetOptions` parameter.
     *
     * @param options An object to configure the get behavior.
     * @return A Promise resolved with a GeoDocumentSnapshot containing the current document contents.
     */
    get(options?: GeoFirestoreTypes.web.GetOptions): Promise<GeoDocumentSnapshot>;
    /**
     * Returns true if this `GeoDocumentReference` is equal to the provided one.
     *
     * @param other The `DocumentReference` or `GeoDocumentReference` to compare against.
     * @return true if this `DocumentReference` or `GeoDocumentReference` is equal to the provided one.
     */
    isEqual(other: GeoDocumentReference | GeoFirestoreTypes.cloud.DocumentReference | GeoFirestoreTypes.web.DocumentReference): boolean;
    /**
     * Writes to the document referred to by this `GeoDocumentReference`. If the document does not yet exist, it will be created. If you pass
     * `SetOptions`, the provided data can be merged into an existing document.
     *
     * @param data A map of the fields and values for the document.
     * @param options An object to configure the set behavior. Includes custom key for location in document.
     * @return A Promise resolved once the data has been successfully written to the backend (Note it won't resolve while you're offline).
     */
    set(data: GeoFirestoreTypes.DocumentData, options?: GeoFirestoreTypes.SetOptions): Promise<void>;
    /**
     * Updates fields in the document referred to by this `GeoDocumentReference`. The update will fail if applied to a document that does not
     * exist.
     *
     * @param data An object containing the fields and values with which to update the document. Fields can contain dots to reference nested
     * fields within the document.
     * @param customKey The key of the document to use as the location. Otherwise we default to `coordinates`.
     * @return A Promise resolved once the data has been successfully written to the backend (Note it won't resolve while you're offline).
     */
    update(data: GeoFirestoreTypes.UpdateData, customKey?: string): Promise<void>;
}
