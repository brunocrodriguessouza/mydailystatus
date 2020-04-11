import { GeoFirestoreTypes } from './GeoFirestoreTypes';
import { GeoQuerySnapshot } from './GeoQuerySnapshot';
/**
 * A `GeoJoinerOnSnapshot` subscribes and aggregates multiple `onSnapshot` listeners
 * while filtering out documents not in query radius.
 */
export declare class GeoJoinerOnSnapshot {
    private _queries;
    private _queryCriteria;
    private _onNext;
    private _onError?;
    private _docs;
    private _error;
    private _firstRoundResolved;
    private _firstEmitted;
    private _interval;
    private _newValues;
    private _subscriptions;
    private _queriesResolved;
    /**
     * @param _queries An array of Firestore Queries to aggregate.
     * @param _queryCriteria The query criteria of geo based queries, includes field such as center, radius, and limit.
     * @param _onNext A callback to be called every time a new `QuerySnapshot` is available.
     * @param _onError A callback to be called if the listen fails or is cancelled. No further callbacks will occur.
     */
    constructor(_queries: GeoFirestoreTypes.web.Query[], _queryCriteria: GeoFirestoreTypes.QueryCriteria, _onNext: (snapshot: GeoQuerySnapshot) => void, _onError?: (error: Error) => void);
    /**
     * A functions that clears the interval and ends all query subscriptions.
     *
     * @return An unsubscribe function that can be called to cancel all snapshot listener.
     */
    unsubscribe(): () => void;
    /**
     * Runs through documents stored in map to set value to send in `next` function.
     */
    private _next;
    /**
     * Determines if new values should be emitted via `next` or if subscription should be killed with `error`.
     */
    private _emit;
    /**
     * Parses `snapshot` and filters out documents not in query radius. Sets new values to `_docs` map.
     *
     * @param snapshot The `QuerySnapshot` of the query.
     * @param index Index of query who's snapshot has been triggered.
     */
    private _processSnapshot;
}
