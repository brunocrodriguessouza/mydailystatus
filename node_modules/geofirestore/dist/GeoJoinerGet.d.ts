import { GeoFirestoreTypes } from './GeoFirestoreTypes';
import { GeoQuerySnapshot } from './GeoQuerySnapshot';
/**
 * A `GeoJoinerGet` aggregates multiple `get` results.
 */
export declare class GeoJoinerGet {
    private _queryCriteria;
    private _docs;
    /**
     * @param snapshots An array of snpashots from a Firestore Query `get` call.
     * @param _queryCriteria The query criteria of geo based queries, includes field such as center, radius, and limit.
     */
    constructor(snapshots: GeoFirestoreTypes.web.QuerySnapshot[], _queryCriteria: GeoFirestoreTypes.QueryCriteria);
    /**
     * Returns parsed docs as a GeoQuerySnapshot.
     *
     * @return A new `GeoQuerySnapshot` of the filtered documents from the `get`.
     */
    getGeoQuerySnapshot(): GeoQuerySnapshot;
}
