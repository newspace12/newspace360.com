# Configuração do Formulário de Contato

## Estado Atual

O formulário de contato está implementado e captura os seguintes dados:
- Nome completo
- Telefone
- E-mail
- Tipo de obra (Residencial, Comercial, Industrial, Reforma, Outro)
- Mensagem (opcional)

Atualmente, o formulário mostra um alert de confirmação. Para torná-lo funcional, você precisa configurar um backend.

## Opções de Configuração

### 1. Netlify Forms (Recomendado para Netlify)

Se você usar Netlify para hospedar, adicione `netlify` ao formulário:

```html
<form name="contact" method="POST" data-netlify="true">
  <input type="hidden" name="form-name" value="contact" />
  <!-- campos do formulário -->
</form>
```

### 2. Formspree

1. Acesse [formspree.io](https://formspree.io)
2. Crie uma conta e configure um endpoint
3. Substitua a ação do formulário:

```javascript
// No App.jsx, substitua a função handleSubmit:
const handleSubmit = async (e) => {
  e.preventDefault()
  
  const response = await fetch('https://formspree.io/f/SEU_ENDPOINT', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
  
  if (response.ok) {
    alert('Mensagem enviada com sucesso!')
    setFormData({ name: '', phone: '', email: '', projectType: '', message: '' })
  }
}
```

### 3. EmailJS

1. Acesse [emailjs.com](https://emailjs.com)
2. Configure um serviço de e-mail
3. Instale a biblioteca: `npm install emailjs-com`
4. Configure o envio:

```javascript
import emailjs from 'emailjs-com'

const handleSubmit = (e) => {
  e.preventDefault()
  
  emailjs.send(
    'SEU_SERVICE_ID',
    'SEU_TEMPLATE_ID',
    formData,
    'SEU_USER_ID'
  ).then(() => {
    alert('Mensagem enviada com sucesso!')
    setFormData({ name: '', phone: '', email: '', projectType: '', message: '' })
  })
}
```

### 4. Backend Personalizado

Se você tem um servidor próprio, pode criar um endpoint para receber os dados:

```javascript
const handleSubmit = async (e) => {
  e.preventDefault()
  
  const response = await fetch('https://newspace360.com/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
  
  if (response.ok) {
    alert('Mensagem enviada com sucesso!')
    setFormData({ name: '', phone: '', email: '', projectType: '', message: '' })
  }
}
```

## Recomendação

Para começar rapidamente, recomendo usar **Formspree** ou **Netlify Forms** se você hospedar no Netlify. Ambos são gratuitos para uso básico e fáceis de configurar.

## Próximos Passos

1. Escolha uma das opções acima
2. Configure o serviço escolhido
3. Modifique o arquivo `src/App.jsx` conforme necessário
4. Faça um novo build: `npm run build`
5. Faça upload dos novos arquivos

