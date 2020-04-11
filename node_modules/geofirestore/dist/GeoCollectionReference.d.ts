import { GeoFirestoreTypes } from './GeoFirestoreTypes';
import { GeoDocumentReference } from './GeoDocumentReference';
import { GeoQuery } from './GeoQuery';
/**
 * A `GeoCollectionReference` object can be used for adding documents, getting document references, and querying for documents (using the
 * methods inherited from `GeoQuery`).
 */
export declare class GeoCollectionReference extends GeoQuery {
    private _collection;
    /**
     * @param _collection The `CollectionReference` instance.
     */
    constructor(_collection: GeoFirestoreTypes.cloud.CollectionReference | GeoFirestoreTypes.web.CollectionReference);
    /** The native `CollectionReference` instance. */
    readonly native: GeoFirestoreTypes.cloud.CollectionReference | GeoFirestoreTypes.web.CollectionReference;
    /** The identifier of the collection. */
    readonly id: string;
    /**
     * A reference to the containing Document if this is a subcollection, else null.
     */
    readonly parent: GeoDocumentReference | null;
    /**
     * A string representing the path of the referenced collection (relative
     * to the root of the database).
     */
    readonly path: string;
    /**
     * Add a new document to this collection with the specified data, assigning it a document ID automatically.
     *
     * @param data An Object containing the data for the new document.
     * @param customKey The key of the document to use as the location. Otherwise we default to `coordinates`.
     * @return A Promise resolved with a `GeoDocumentReference` pointing to the newly created document after it has been written to the
     * backend.
     */
    add(data: GeoFirestoreTypes.DocumentData, customKey?: string): Promise<GeoDocumentReference>;
    /**
     * Get a `GeoDocumentReference` for the document within the collection at the specified path. If no path is specified, an
     * automatically-generated unique ID will be used for the returned GeoDocumentReference.
     *
     * @param documentPath A slash-separated path to a document.
     * @return The `GeoDocumentReference` instance.
     */
    doc(documentPath?: string): GeoDocumentReference;
}
