# Portfólio Cinematográfico

Um site de portfólio moderno com foco em experiência cinematográfica, apresentando transições suaves e animações sofisticadas baseadas em scroll.

## ✨ Características

- **Design Moderno e Limpo**: Interface elegante com identidade visual forte
- **Animações Cinematográficas**: Transições suaves usando GSAP e ScrollTrigger
- **Totalmente Responsivo**: Otimizado para desktop, tablet e mobile
- **Performance Otimizada**: Lazy loading e preload de recursos críticos
- **Modular**: Fácil personalização de textos, imagens e cores

## 🎬 Seções

### 1. Hero / Apresentação
- Introdução impactante com animações em camadas
- Efeito de partículas no fundo
- Call-to-action destacados

### 2. Sobre / Canadá
- Narrativa visual com elementos temáticos
- Animações de parallax suaves
- Estatísticas animadas
- Elementos visuais do Canadá (bandeira e folha de maple)

### 3. Tecnologias
- Grid responsivo de tecnologias
- Logos oficiais em alta qualidade
- Animações discretas ao scroll
- Efeitos de hover elegantes

### 4. Projetos
- Cards de projetos com imagens
- Overlay interativo ao hover
- Tags de tecnologias utilizadas
- Layout expansível

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Variáveis CSS, Grid, Flexbox
- **JavaScript (ES6+)**: Lógica moderna
- **GSAP 3**: Animações de alta performance
- **ScrollTrigger**: Animações baseadas em scroll

## 🚀 Como Usar

1. Clone este repositório
2. Abra o arquivo `index.html` em seu navegador
3. Ou sirva com um servidor local:
   ```bash
   # Python
   python -m http.server 8000

   # Node.js
   npx serve
   ```

## 📝 Personalização

### Textos
Todos os textos estão com placeholders "Lorem ipsum". Basta buscar e substituir pelo seu conteúdo real:
- Títulos e subtítulos
- Descrições
- Informações de contato

### Cores
Edite as variáveis CSS em `css/style.css`:
```css
:root {
    --color-primary: #0066FF;
    --color-accent: #FF6B6B;
    /* ... outras cores */
}
```

### Imagens
- **Projetos**: Substitua as URLs do Unsplash pelas suas imagens reais
- **Assets**: Adicione suas próprias imagens na pasta `assets/images/`

### Tecnologias
Adicione ou remova cards de tecnologia editando a seção `.tech-grid` em `index.html`

## 📱 Responsividade

O site é totalmente responsivo com breakpoints em:
- Desktop: > 968px
- Tablet: 640px - 968px
- Mobile: < 640px

## ⚡ Performance

- Lazy loading de imagens
- Preload de recursos críticos
- Otimização de animações com GSAP
- CSS minificado (produção)
- JavaScript otimizado

## 🎨 Fontes

- **Inter**: Textos gerais
- **Playfair Display**: Títulos destacados

Fontes carregadas via Google Fonts

## 📄 Estrutura de Arquivos

```
.
├── index.html          # Estrutura principal
├── css/
│   └── style.css      # Estilos completos
├── js/
│   └── main.js        # Animações e interações
├── assets/
│   └── images/        # Imagens do projeto
└── README.md          # Este arquivo
```

## 🌐 Browsers Suportados

- Chrome (últimas 2 versões)
- Firefox (últimas 2 versões)
- Safari (últimas 2 versões)
- Edge (últimas 2 versões)

## 📧 Contato

Atualize os links de contato no rodapé do site:
- Email
- GitHub
- LinkedIn
- Twitter

## 📝 Licença

Este projeto está sob sua licença. Personalize conforme necessário.

---

**Desenvolvido com 💙 usando GSAP e ScrollTrigger**
