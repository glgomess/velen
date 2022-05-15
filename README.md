docker run --name velen-db -e MYSQL_ROOT_PASSWORD=docker -d mysql:8

docker run -it --network bridge --rm mysql mysql velen-db -uexample-user -p
