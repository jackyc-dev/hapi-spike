'use strict';

import Hapi from "@hapi/hapi";
import { Request, Server } from "@hapi/hapi";
import { helloRoutes } from "./hello";
import { healthCheckController } from './controllers/healthcheck/index';
import { gamesRoutes, libraryStatusRoutes } from './controllers/games/index';

export let server: Server;

export const init = async function(): Promise<Server> {
    server = Hapi.server({
        port: process.env.PORT || 4000,
        host: '0.0.0.0'
    });

    // Routes will go here
    server.route({
        method: "GET",
        path: "/",
        handler: index
    });

    server.route(helloRoutes);

    server.route({
        method: "GET",
        path: "/healthcheck",
        handler: healthCheckController.healthCheck
    });

    server.route(gamesRoutes);
    server.route(libraryStatusRoutes);

    return server;
};

export const start = async function (): Promise<void> {
    console.log(`Listening on ${server.settings.host}:${server.settings.port}`);
    return server.start();
};

process.on('unhandledRejection', (err) => {
    console.error("unhandledRejection");
    console.error(err);
    process.exit(1);
});

function index(request: Request): string {
    console.log("Processing request", request.info.id);
    return "Hello! Nice to have met you.";
}
