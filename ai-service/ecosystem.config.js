module.exports = {
    apps: [
      {
        name: "ai-service",
        script: "go",
        args: "run cmd/server/main.go",
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
  