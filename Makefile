release:
	docker-compose build --no-cache
	docker-compose down
	docker-compose up -d
	docker image prune -f

refresh:
	docker-compose down
	docker-compose up -d

stop:
	docker-compose stop

start:
	docker-compose start

restart:
	docker-compose restart

build:
	docker-compose build

down:
	docker-compose down --remove-orphans --volumes 