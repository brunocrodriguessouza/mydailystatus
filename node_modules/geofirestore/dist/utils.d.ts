import { GeoFirestoreTypes } from './GeoFirestoreTypes';
export declare const BASE32 = "0123456789bcdefghjkmnpqrstuvwxyz";
export declare const BITS_PER_CHAR = 5;
export declare const E2 = 0.00669447819799;
export declare const EARTH_EQ_RADIUS = 6378137;
export declare const EARTH_MERI_CIRCUMFERENCE = 40007860;
export declare const EPSILON = 1e-12;
export declare const GEOHASH_PRECISION = 10;
export declare const MAXIMUM_BITS_PRECISION: number;
export declare const METERS_PER_DEGREE_LATITUDE = 110574;
/**
 * Calculates the maximum number of bits of a geohash to get a bounding box that is larger than a given size at the given coordinate.
 *
 * @param coordinate The coordinate as a Firestore GeoPoint.
 * @param size The size of the bounding box.
 * @return The number of bits necessary for the geohash.
 */
export declare function boundingBoxBits(coordinate: GeoFirestoreTypes.cloud.GeoPoint | GeoFirestoreTypes.web.GeoPoint, size: number): number;
/**
 * Calculates eight points on the bounding box and the center of a given circle. At least one geohash of these nine coordinates, truncated'
 * to a precision of at most radius, are guaranteed to be prefixes of any geohash that lies within the circle.
 *
 * @param center The center given as Firestore GeoPoint.
 * @param radius The radius of the circle.
 * @return The eight bounding box points.
 */
export declare function boundingBoxCoordinates(center: GeoFirestoreTypes.cloud.GeoPoint | GeoFirestoreTypes.web.GeoPoint, radius: number): GeoFirestoreTypes.cloud.GeoPoint[] | GeoFirestoreTypes.web.GeoPoint[];
/**
 * Method which calculates the distance, in kilometers, between two locations, via the Haversine formula. Note that this is approximate due
 * to the fact that the Earth's radius varies between 6356.752 km and 6378.137 km.
 *
 * @param location1 The GeoPoint of the first location.
 * @param location2 The GeoPoint of the second location.
 * @return The distance, in kilometers, between the inputted locations.
 */
export declare function calculateDistance(location1: GeoFirestoreTypes.cloud.GeoPoint | GeoFirestoreTypes.web.GeoPoint, location2: GeoFirestoreTypes.cloud.GeoPoint | GeoFirestoreTypes.web.GeoPoint): number;
/**
 * Decodes the GeoDocument data. Returns non-decoded data if decoding fails.
 *
 * @param data The data encoded as a GeoDocument object.
 * @return The decoded Firestore document or non-decoded data if decoding fails.
 */
export declare function decodeGeoDocumentData(data: GeoFirestoreTypes.Document): GeoFirestoreTypes.DocumentData;
/**
 * Decodes the GeoDocument data. Returns non-decoded data if decoding fails.
 *
 * @param data The data encoded as a GeoDocument object.
 * @param center The center to calculate the distance of the Document from the query origin.
 * @return The decoded Firestore document or non-decoded data if decoding fails in an object including distance from origin.
 */
export declare function decodeGeoQueryDocumentSnapshotData(data: GeoFirestoreTypes.Document, center?: GeoFirestoreTypes.web.GeoPoint | GeoFirestoreTypes.cloud.GeoPoint): {
    data: () => GeoFirestoreTypes.DocumentData;
    distance: number;
};
/**
 * Converts degrees to radians.
 *
 * @param degrees The number of degrees to be converted to radians.
 * @return The number of radians equal to the inputted number of degrees.
 */
export declare function degreesToRadians(degrees: number): number;
/**
 * Generates a geohash of the specified precision/string length from the inputted GeoPoint.
 *
 * @param location The GeoPoint to encode into a geohash.
 * @param precision The length of the geohash to create. If no precision is specified, the global default is used.
 * @return The geohash of the inputted location.
 */
export declare function encodeGeohash(location: GeoFirestoreTypes.cloud.GeoPoint | GeoFirestoreTypes.web.GeoPoint, precision?: number): string;
/**
 * Encodes a location and geohash as a GeoDocument.
 *
 * @param location The location as a Firestore GeoPoint.
 * @param geohash The geohash of the location.
 * @return The document encoded as GeoDocument object.
 */
export declare function encodeGeoDocument(location: GeoFirestoreTypes.cloud.GeoPoint | GeoFirestoreTypes.web.GeoPoint, geohash: string, document: GeoFirestoreTypes.DocumentData): GeoFirestoreTypes.Document;
/**
 * Remove customKey attribute so firestore doesn't' reject.
 *
 * @param customKey The key of the document to use as the location. Otherwise we default to `coordinates`.
 * @return The same object but without custom key
 */
export declare function sanitizeSetOptions(options: GeoFirestoreTypes.SetOptions): GeoFirestoreTypes.SetOptions;
/**
 * Encodes a Document used by GeoWriteBatch.set as a GeoDocument.
 *
 * @param data The document being set.
 * @param customKey The key of the document to use as the location. Otherwise we default to `coordinates`.
 * @return The document encoded as GeoDocument object.
 */
export declare function encodeSetDocument(data: GeoFirestoreTypes.DocumentData, options?: GeoFirestoreTypes.SetOptions): GeoFirestoreTypes.Document;
/**
 * Encodes a Document used by GeoWriteBatch.update as a GeoDocument.
 *
 * @param data The document being updated.
 * @param customKey The key of the document to use as the location. Otherwise we default to `coordinates`.
 * @return The document encoded as GeoDocument object.
 */
export declare function encodeUpdateDocument(data: GeoFirestoreTypes.UpdateData, customKey?: string): GeoFirestoreTypes.UpdateData;
/**
 * Returns coordinates as GeoPoint from a document.
 *
 * @param document A Firestore document.
 * @param customKey The key of the document to use as the location. Otherwise we default to `coordinates`.
 * @param flag Tells function supress errors.
 * @return The GeoPoint for the location field of a document.
 */
export declare function findCoordinates(document: GeoFirestoreTypes.DocumentData, customKey?: string, flag?: boolean): GeoFirestoreTypes.web.GeoPoint | GeoFirestoreTypes.cloud.GeoPoint;
/**
 * Creates GeoFirestore QueryDocumentSnapshot by pulling data out of original Firestore QueryDocumentSnapshot and strip GeoFirsetore
 * Document data, such as geohash and coordinates.
 *
 * @param snapshot The QueryDocumentSnapshot.
 * @param center The center to calculate the distance of the Document from the query origin.
 * @return The snapshot as a GeoFirestore QueryDocumentSnapshot.
 */
export declare function generateGeoQueryDocumentSnapshot(snapshot: GeoFirestoreTypes.web.QueryDocumentSnapshot | GeoFirestoreTypes.cloud.QueryDocumentSnapshot, center?: GeoFirestoreTypes.web.GeoPoint | GeoFirestoreTypes.cloud.GeoPoint): GeoFirestoreTypes.QueryDocumentSnapshot;
/**
 * Calculates a set of queries to fully contain a given circle. A query is a GeoPoint where any geohash is guaranteed to be
 * lexiographically larger then start and smaller than end.
 *
 * @param center The center given as a GeoPoint.
 * @param radius The radius of the circle.
 * @return An array of geohashes containing a GeoPoint.
 */
export declare function geohashQueries(center: GeoFirestoreTypes.cloud.GeoPoint | GeoFirestoreTypes.web.GeoPoint, radius: number): string[][];
/**
 * Calculates the bounding box query for a geohash with x bits precision.
 *
 * @param geohash The geohash whose bounding box query to generate.
 * @param bits The number of bits of precision.
 * @return A [start, end] pair of geohashes.
 */
export declare function geohashQuery(geohash: string, bits: number): string[];
/**
 * Calculates the bits necessary to reach a given resolution, in meters, for the latitude.
 *
 * @param resolution The bits necessary to reach a given resolution, in meters.
 * @return Bits necessary to reach a given resolution, in meters, for the latitude.
 */
export declare function latitudeBitsForResolution(resolution: number): number;
/**
 * Calculates the base 2 logarithm of the given number.
 *
 * @param x A number
 * @return The base 2 logarithm of a number
 */
export declare function log2(x: number): number;
/**
 * Calculates the bits necessary to reach a given resolution, in meters, for the longitude at a given latitude.
 *
 * @param resolution The desired resolution.
 * @param latitude The latitude used in the conversion.
 * @return The bits necessary to reach a given resolution, in meters.
 */
export declare function longitudeBitsForResolution(resolution: number, latitude: number): number;
/**
 * Calculates the number of degrees a given distance is at a given latitude.
 *
 * @param distance The distance to convert.
 * @param latitude The latitude at which to calculate.
 * @return The number of degrees the distance corresponds to.
 */
export declare function metersToLongitudeDegrees(distance: number, latitude: number): number;
/**
 * Returns a 'GeoPoint.' (Kind of fake, but get's the job done!)
 *
 * @param latitude Latitude for GeoPoint.
 * @param longitude Longitude for GeoPoint.
 * @return Firestore "GeoPoint"
 */
export declare function toGeoPoint(latitude: number, longitude: number): GeoFirestoreTypes.cloud.GeoPoint | GeoFirestoreTypes.web.GeoPoint;
/**
 * Validates the inputted GeoDocument object and throws an error, or returns boolean, if it is invalid.
 *
 * @param data The GeoDocument object to be validated.
 * @param flag Tells function to send up boolean if valid instead of throwing an error.
 * @return Flag if data is valid
 */
export declare function validateGeoDocument(data: GeoFirestoreTypes.Document, flag?: boolean): boolean;
/**
 * Validates the inputted geohash and throws an error, or returns boolean, if it is invalid.
 *
 * @param geohash The geohash to be validated.
 * @param flag Tells function to send up boolean if valid instead of throwing an error.
 */
export declare function validateGeohash(geohash: string, flag?: boolean): boolean;
/**
 * Validates the inputted limit and throws an error, or returns boolean, if it is invalid.
 *
 * @param limit The limit to be applied by `GeoQuery.limit()`
 * @param flag Tells function to send up boolean if valid instead of throwing an error.
 */
export declare function validateLimit(limit: number, flag?: boolean): boolean;
/**
 * Validates the inputted location and throws an error, or returns boolean, if it is invalid.
 *
 * @param location The Firestore GeoPoint to be verified.
 * @param flag Tells function to send up boolean if valid instead of throwing an error.
 */
export declare function validateLocation(location: GeoFirestoreTypes.web.GeoPoint | GeoFirestoreTypes.cloud.GeoPoint, flag?: boolean): boolean;
/**
 * Validates the inputted query criteria and throws an error if it is invalid.
 *
 * @param newQueryCriteria The criteria which specifies the query's center and/or radius.
 * @param requireCenterAndRadius The criteria which center and radius required.
 */
export declare function validateQueryCriteria(newQueryCriteria: GeoFirestoreTypes.QueryCriteria, requireCenterAndRadius?: boolean): void;
/**
 * Wraps the longitude to [-180,180].
 *
 * @param longitude The longitude to wrap.
 * @return longitude The resulting longitude.
 */
export declare function wrapLongitude(longitude: number): number;
