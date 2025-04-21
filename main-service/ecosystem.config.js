module.exports = {
    apps: [
      {
        name: "main-service",
        script: "go",
        args: "run cmd/api/main.go",
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
  