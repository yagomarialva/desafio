# Use a imagem base do Node.js
FROM node:14

# Cria e define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia o package.json e o package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instala as dependências do frontend
RUN npm install

RUN npm install @mui/material @emotion/react @emotion/styled

# Copia o restante do código fonte para o diretório de trabalho
COPY . .

# Comando para compilar o frontend (se necessário)
RUN npm run build

# Expõe a porta 3001 para acessar a aplicação frontend
EXPOSE 3001

# Comando para iniciar o servidor de desenvolvimento do frontend
CMD ["npm", "start"]
