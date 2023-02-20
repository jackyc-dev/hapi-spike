# hapi-spike

This is a boilerplate project from Hapi that explores and tries to build a structure from its tools

# Callouts
- Dockerized solution
    - One script to initialize everything
    - Shared env file
- State
    - Mysql leveraged on the container
    - Initial schema script and data seed configured to be run via docker
- API
    - Hapi framework
    - Attempted to migrate the work into Typescript
- Postman collection hosting api calls and samples (`hapi-spike-postman.postman_collection.json`)

# Getting Started

Run the following script to initialize the docker instance.

```
./DockerStart.sh
```

The solution will be hosted through the following ports
- API - :8080
- Mysql - :3307

# ToDo's and Improvements
- State management for enum properties
    - tags
    - consoles
    - validation checks against Game for those enums
- Authentication
- Possible react.js front end