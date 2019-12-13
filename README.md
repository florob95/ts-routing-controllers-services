# routing-controllers-services

fork of @flyacts/routing-controllers [package](https://www.npmjs.com/package/routing-controllers)

## Services

    ```typescript
    import "reflect-metadata"; // this shim is required
    import {createExpressServer} from "routing-controllers";
    import {UserService} from "./UserService";

    // creates express app, registers all controller routes and returns you express app instance
    const app = createExpressServer({
       services: [UserService] // we specify sesrvices we want to use
    });

    // run express application on port 3000
    app.listen(3000);
    ```
    