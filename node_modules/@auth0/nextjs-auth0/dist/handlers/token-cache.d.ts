/// <reference types="node" />
import { IncomingMessage, ServerResponse } from 'http';
import { ISessionStore } from '../session/store';
import { ITokenCache } from '../tokens/token-cache';
import { IOidcClientFactory } from '../utils/oidc-client';
export default function tokenCacheHandler(clientProvider: IOidcClientFactory, sessionStore: ISessionStore): (req: IncomingMessage, res: ServerResponse) => ITokenCache;
