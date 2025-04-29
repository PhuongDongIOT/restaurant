module.exports = {
    apps: [
      {
        name: "picture-service",
        script: "go",
        args: "run main.go",
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
  