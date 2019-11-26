import { ActionMetadata } from "./ActionMetadata";
import { ControllerMetadataArgs } from "./args/ControllerMetadataArgs";
import { UseMetadata } from "./UseMetadata";
import { ResponseHandlerMetadata } from "./ResponseHandleMetadata";
import { InterceptorMetadata } from "./InterceptorMetadata";
/**
 * Controller metadata.
 */
export declare class ControllerMetadata {
    /**
     * Controller actions.
     */
    actions: ActionMetadata[];
    /**
     * Indicates object which is used by this controller.
     */
    target: Function;
    /**
     * Base route for all actions registered in this controller.
     */
    route: string;
    /**
     * Controller type. Can be default or json-typed. Json-typed controllers operate with json requests and responses.
     */
    type: "default" | "json";
    /**
     * Middleware "use"-s applied to a whole controller.
     */
    uses: UseMetadata[];
    /**
     * Middleware "use"-s applied to a whole controller.
     */
    interceptors: InterceptorMetadata[];
    /**
     * Indicates if this action uses Authorized decorator.
     */
    isAuthorizedUsed: boolean;
    /**
     * Roles set by @Authorized decorator.
     */
    authorizedRoles: any[];
    constructor(args: ControllerMetadataArgs);
    /**
     * Gets instance of the controller.
     */
    readonly instance: any;
    /**
     * Builds everything controller metadata needs.
     * Controller metadata should be used only after its build.
     */
    build(responseHandlers: ResponseHandlerMetadata[]): void;
}
