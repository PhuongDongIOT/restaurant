module.exports = {
    apps: [
        {
            name: "client-service",       // Replace with your app's name
            script: "npm",
            args: "run start",
            watch: false,                // Set to true if you want PM2 to restart on file changes
            env: {
                NODE_ENV: "development"
            },
            env_production: {
                NODE_ENV: "production"
            }
        }
    ]
};