CURRENT_PATH := $(dir $(abspath $(lastword $(MAKEFILE_LIST))))
DC := docker compose -p react-frontend -f $(CURRENT_PATH)docker/docker-compose.yml --env-file $(CURRENT_PATH).env

.PHONY: up down build logs shell

up:
	$(DC) up -d

down:
	$(DC) down

build:
	$(DC) build

logs:
	$(DC) logs -f
