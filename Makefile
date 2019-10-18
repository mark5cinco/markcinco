deploy:
	docker-compose up -d
deploy-production:
	docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d