package config

import (
	"fmt"
	"os"

	"github.com/joho/godotenv"
)

type dbConfig struct {
	Host     string
	User     string
	Password string
	Dbname   string
	Port     string
	Sslmode  string
	Timezone string
}

func GetDBConfig() *dbConfig {

	envFile, _ := godotenv.Read(".env")

	envFileShell := envFile["SHELL"]
	fmt.Println(envFileShell) // will be /bin/zsh (what you set in .env file)

	osShell := os.Getenv("SHELL")
	fmt.Println(osShell) // will be whatever it is set in your operating system

	return &dbConfig{
		Host:     envFile["DB_HOST"],
		User:     envFile["DB_USER"],
		Password: envFile["DB_PASSWORD"],
		Dbname:   envFile["DB_NAME"],
		Port:     envFile["DB_PORT"],
		Sslmode:  "disable",
		Timezone: "UTC",
	}
}
