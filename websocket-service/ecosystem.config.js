module.exports = {
    apps: [
      {
        name: "websocket-service",
        script: "go",
        args: "run cmd/main/main.go",
        interpreter: "none",
        watch: false,
        env: {
          GO_ENV: "development"
        },
        env_production: {
          GO_ENV: "production"
        }
      }
    ]
  };
  