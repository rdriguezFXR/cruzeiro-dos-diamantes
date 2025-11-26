# Deploy no Easypanel

## Pré-requisitos
- Repositório Git configurado
- Acesso ao Easypanel na sua VPS

## Passos para Deploy

### 1. Push do código para o repositório Git
```bash
git add .
git commit -m "Configuração Docker para Easypanel"
git push
```

### 2. No Easypanel:

1. **Criar um novo App:**
   - Acesse o Easypanel
   - Clique em "New App"
   - Selecione "Docker"

2. **Configurações do App:**
   - **Name:** cruzeiro-dos-diamantes (ou o nome desejado)
   - **Repository:** URL do seu repositório Git
   - **Branch:** main (ou a branch principal)
   - **Build Pack:** Docker
   - **Dockerfile:** Dockerfile (caminho padrão)
   - **Port:** 80 (nginx padrão)

3. **Variáveis de Ambiente (se necessário):**
   - Configure variáveis de ambiente se o app precisar

4. **Recursos:**
   - Configure CPU e memória conforme necessário
   - Mínimo recomendado: 512MB RAM, 0.5 CPU

5. **Domínio:**
   - Configure o domínio personalizado se tiver
   - Ou use o domínio gerado pelo Easypanel

6. **Deploy:**
   - Clique em "Deploy"
   - O Easypanel irá:
     - Clonar o repositório
     - Construir a imagem Docker
     - Executar o container

## Estrutura dos Arquivos Docker

- **Dockerfile:** Build multi-stage (build + nginx)
- **nginx.conf:** Configuração do nginx para SPA React
- **.dockerignore:** Arquivos excluídos do build

## Troubleshooting

- **Build falha:** Verifique os logs no Easypanel
- **App não inicia:** Verifique se a porta está configurada corretamente
- **Rota não funciona:** Verifique o nginx.conf (deve ter `try_files` para SPA)


