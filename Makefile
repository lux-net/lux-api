serve:
	@docker-compose up --build
install:
	@docker-compose exec lux npm install $(filter-out $@, $(MAKECMDGOALS))
build:
	@docker-compose exec lux npm run build
restart:
	@docker-compose restart lux
test:
	@docker-compose exec lux npm run test  $(filter-out $@, $(MAKECMDGOALS))
tdd:
	@docker-compose exec lux npm run test:tdd $(filter-out $@, $(MAKECMDGOALS))
coverage:
	@docker-compose exec lux npm run test:coverage  $(filter-out $@, $(MAKECMDGOALS))
%:
	@true
