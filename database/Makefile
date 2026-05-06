reclame:
	#Criar o banco
	sudo -u postgres psql -c "CREATE DATABASE reclame;"
	
	#Criar o schema do banco
	sudo -u postgres psql -d reclame -f reclame_schema.sql 
	
	#Popular o banco com dados de teste
	sudo -u postgres psql -d reclame -f reclame_dummydata.sql 

delete-reclame:
	sudo -u postgres dropdb reclame