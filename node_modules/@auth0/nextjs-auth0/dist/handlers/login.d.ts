/// <reference types="node" />
import { IncomingMessage, ServerResponse } from 'http';
import IAuth0Settings from '../settings';
import { IOidcClientFactory } from '../utils/oidc-client';
export interface AuthorizationParameters {
    acr_values?: string;
    audience?: string;
    display?: string;
    login_hint?: string;
    max_age?: string;
    prompt?: string;
    scope?: string;
    state?: string;
    ui_locales?: string;
    [key: string]: unknown;
}
export interface LoginOptions {
    authParams?: AuthorizationParameters;
    redirectTo?: string;
}
export default function loginHandler(settings: IAuth0Settings, clientProvider: IOidcClientFactory): (req: IncomingMessage, res: ServerResponse, options?: LoginOptions | undefined) => Promise<void>;
