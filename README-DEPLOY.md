# NewSpace360 - Instruções de Deploy

## Arquivos de Produção

Este pacote contém todos os arquivos necessários para publicar o site NewSpace360 no domínio newspace360.com.

## Estrutura dos Arquivos

```
dist/
├── index.html          # Página principal
├── vite.svg           # Ícone do Vite
└── assets/
    ├── index-[hash].css  # Estilos compilados
    └── index-[hash].js   # JavaScript compilado
```

## Opções de Deploy

### 1. Hospedagem Tradicional (cPanel/FTP)

1. Acesse o painel de controle da sua hospedagem
2. Navegue até a pasta `public_html` ou `www`
3. Faça upload de todos os arquivos da pasta `dist/`
4. Certifique-se de que o arquivo `index.html` está na raiz

### 2. Netlify

1. Acesse [netlify.com](https://netlify.com)
2. Arraste a pasta `dist/` para a área de deploy
3. Configure o domínio personalizado:
   - Site settings > Domain management
   - Add custom domain: `newspace360.com`
   - Configure os DNS conforme instruções

### 3. Vercel

1. Acesse [vercel.com](https://vercel.com)
2. Importe o projeto ou faça upload da pasta `dist/`
3. Configure o domínio:
   - Project settings > Domains
   - Add: `newspace360.com`

### 4. GitHub Pages + Domínio Personalizado

1. Crie um repositório no GitHub
2. Faça upload dos arquivos da pasta `dist/`
3. Ative GitHub Pages nas configurações
4. Configure o domínio personalizado

## Configuração de DNS

Para usar o domínio newspace360.com, configure os seguintes registros DNS:

### Para Netlify/Vercel:
- Tipo: CNAME
- Nome: www
- Valor: [fornecido pelo serviço]

- Tipo: A
- Nome: @
- Valor: [IP fornecido pelo serviço]

### Para hospedagem tradicional:
- Tipo: A
- Nome: @
- Valor: [IP do seu servidor]

- Tipo: CNAME
- Nome: www
- Valor: newspace360.com

## Recursos do Site

✅ Design responsivo (mobile e desktop)
✅ SEO otimizado
✅ Formulário de contato funcional
✅ Vídeo incorporado do YouTube
✅ Navegação suave entre seções
✅ Cores da marca: #1e2a38 (azul escuro), #ffc700 (amarelo), branco

## Próximos Passos

1. Configure um serviço de formulário (Netlify Forms, Formspree, etc.)
2. Substitua o vídeo do YouTube por um vídeo real do serviço
3. Configure Google Analytics para acompanhar visitantes
4. Configure certificado SSL (HTTPS)

## Suporte

Para dúvidas sobre o deploy ou modificações no site, consulte a documentação do seu provedor de hospedagem.

---

**Site criado com React + Vite + Tailwind CSS + shadcn/ui**

