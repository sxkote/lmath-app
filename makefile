install-lbox:
	npm install ..\LIB\npm\lbox-shared.tgz && npm install ..\LIB\npm\lbox-auth.tgz

lint:
	ng lint

rebuild: lint
	ng build

docker-build: rebuild
	docker build -f "Dockerfile" -t lmath-app ../

docker-save:
	docker save --output "\\litnas\shared\docker-images\lmath-app.tar" lmath-app

deploy-docker: docker-build docker-save
