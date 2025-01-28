# Portal Transparência

## Dependências
Para rodar o projeto é necessário ter node-js e docker instalados em um Ambiente Linux ou utilizando WSL no Windows

## Faça o build do projeto
```bash
sudo docker compose up -d --build
```
### Rode as migrations

```bash
sudo docker compose exec portal-api npx prisma migrate deploy
```

### Rode o seeder
```bash
sudo docker compose exec portal-api npx ts-node prisma/seed.ts
```

### Links
```bash
Frontend: localhost:3000
Api: localhost:80
Swagger: localhost:80/api
```
