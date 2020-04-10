"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const base64url_1 = tslib_1.__importDefault(require("base64url"));
const crypto_1 = require("crypto");
const version_1 = tslib_1.__importDefault(require("../version"));
const cookies_1 = require("../utils/cookies");
function telemetry() {
    const bytes = Buffer.from(JSON.stringify({
        name: 'nextjs-auth0',
        version: version_1.default
    }));
    return bytes
        .toString('base64')
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '');
}
function loginHandler(settings, clientProvider) {
    return (req, res, options) => tslib_1.__awaiter(this, void 0, void 0, function* () {
        if (!req) {
            throw new Error('Request is not available');
        }
        if (!res) {
            throw new Error('Response is not available');
        }
        const opt = options || {};
        const _a = (opt && opt.authParams) || {}, { state = base64url_1.default(crypto_1.randomBytes(48)) } = _a, authParams = tslib_1.__rest(_a, ["state"]);
        const { redirectTo } = opt;
        // Create the authorization url.
        const client = yield clientProvider();
        const authorizationUrl = client.authorizationUrl(Object.assign({ redirect_uri: settings.redirectUri, scope: settings.scope, response_type: 'code', audience: settings.audience, state, auth0Client: telemetry() }, authParams));
        // Set the necessary cookies
        cookies_1.setCookies(req, res, [
            {
                name: 'a0:state',
                value: state,
                maxAge: 60 * 60
            },
            {
                name: 'a0:redirectTo',
                value: redirectTo || '/',
                maxAge: 60 * 60
            }
        ]);
        // Redirect to the authorize endpoint.
        res.writeHead(302, {
            Location: authorizationUrl
        });
        res.end();
    });
}
exports.default = loginHandler;
//# sourceMappingURL=login.js.map