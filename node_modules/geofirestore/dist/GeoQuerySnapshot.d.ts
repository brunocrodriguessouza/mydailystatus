import { GeoFirestoreTypes } from './GeoFirestoreTypes';
/**
 * A `GeoQuerySnapshot` contains zero or more `QueryDocumentSnapshot` objects
 * representing the results of a query. The documents can be accessed as an
 * array via the `docs` property or enumerated using the `forEach` method. The
 * number of documents can be determined via the `empty` and `size`
 * properties.
 */
export declare class GeoQuerySnapshot {
    private _querySnapshot;
    private _center?;
    private _docs;
    /**
     * @param _querySnapshot The `QuerySnapshot` instance.
     * @param geoQueryCriteria The center and radius of geo based queries.
     */
    constructor(_querySnapshot: GeoFirestoreTypes.web.QuerySnapshot | GeoFirestoreTypes.cloud.QuerySnapshot, _center?: GeoFirestoreTypes.cloud.GeoPoint | GeoFirestoreTypes.web.GeoPoint);
    /** The native `QuerySnapshot` instance. */
    readonly native: GeoFirestoreTypes.cloud.QuerySnapshot | GeoFirestoreTypes.web.QuerySnapshot;
    /** An array of all the documents in the GeoQuerySnapshot. */
    readonly docs: GeoFirestoreTypes.QueryDocumentSnapshot[];
    /** The number of documents in the GeoQuerySnapshot. */
    readonly size: number;
    /** True if there are no documents in the GeoQuerySnapshot. */
    readonly empty: boolean;
    /**
     * Returns an array of the documents changes since the last snapshot. If
     * this is the first snapshot, all documents will be in the list as added
     * changes.
     *
     * @returns Array of DocumentChanges.
     */
    docChanges(): GeoFirestoreTypes.DocumentChange[];
    /**
     * Enumerates all of the documents in the GeoQuerySnapshot.
     *
     * @param callback A callback to be called with a `DocumentSnapshot` for
     * each document in the snapshot.
     * @param thisArg The `this` binding for the callback.
     */
    forEach(callback: (result: GeoFirestoreTypes.QueryDocumentSnapshot) => void, thisArg?: any): void;
}
