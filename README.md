# MemeVerse - Plataforma de Compartilhamento de Memes

## Visão Geral
O **MemeVerse** é uma plataforma de compartilhamento de memes desenvolvida com **Next.js 15**, focada em componentização e reutilização de código através de props. Este projeto foi criado como parte de uma atividade avaliativa para demonstrar habilidades em desenvolvimento frontend com frameworks modernos.

A aplicação oferece uma experiência interativa e responsiva, permitindo que os usuários explorem, curtam e compartilhem memes de forma intuitiva.

## Funcionalidades Principais
- **Meme do Dia**: Exibição de um meme em destaque na seção principal.
- **Cards de Memes**: Componentes reutilizáveis para exibição de memes com informações detalhadas.
- **Navegação por Categorias**: Organização de memes por categorias temáticas.
- **Sistema de Interações**: Curtidas e comentários em cada meme.
- **Memes em Destaque**: Seção dedicada aos memes mais populares ou em alta.
- **Barra Lateral**: Informações complementares, como competições e workshops.
- **Rodapé Informativo**: Links úteis e redes sociais.
- **Layout Responsivo**: Compatível com dispositivos móveis, tablets e desktops.

## Componentes Implementados
### **Header**
- Cabeçalho com logo, navegação e barra de busca.

### **HeroSection**
- Seção principal que exibe o "Meme do Dia" com título, descrição, imagem e informações do autor.

### **MemeCard**
- Card reutilizável para exibição de memes, incluindo:
  - Título, descrição e imagem.
  - Autor e categoria.
  - Barra de interações (curtidas e comentários).

### **InteractionBar**
- Barra de interações que exibe o número de curtidas e comentários.

### **CategoriesSection**
- Seção para navegação por categorias de memes.

### **FeaturedMemesSection**
- Exibição de memes em destaque, com informações como título, autor, categoria e status de "Trending".

### **Feed**
- Lista de memes populares com filtros (recentes, mais curtidos, mais comentados) e botão de "Carregar mais".

### **Sidebar**
- Barra lateral com informações complementares, como competições e workshops.

### **Footer**
- Rodapé com links de navegação, recursos, informações sobre a empresa e redes sociais.

## Tecnologias Utilizadas
- **Next.js 15**: Framework React para renderização do lado do servidor e navegação.
- **CSS Modules**: Estilização modular para componentes.
- **Componentização**: Reutilização de código através de props e componentes bem definidos.
