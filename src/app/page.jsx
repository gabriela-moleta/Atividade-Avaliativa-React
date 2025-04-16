import Footer from "@/components/footer";
import styles from "./page.module.css";
import Header from "@/components/header";

export default function Home() {

  return (
    <div className={styles.container}>
      <Header
        logo="MemeVerse"
        navItems={[
          { label: "Início", href: "/", active: true },
          { label: "Categorias", href: "/categories" },
          { label: "Criar Meme", href: "/create" },
          { label: "Eventos", href: "/events" },
          { label: "Sobre", href: "/about" },
        ]}
      />

      <Footer
        footerData={[
          {
            title: "Navegação",
            links: ["Home", "Trending", "Create", "Categories", "Profile"],
          },
          {
            title: "Recursos",
            links: [
              "Editor de Memes",
              "Templates",
              "API",
              "Para Desenvolvedores",
            ],
          },
          {
            title: "Empresa",
            links: ["Sobre nós", "Carreiras", "Blog", "Contato"],
          },
          {
            title: "Legal",
            links: ["Termos de Uso", "Privacidade", "Cookies"],
          },
        ]}
        socialLinks={[
          { icon: "📘" },
          { icon: "📸" },
          { icon: "🐦" },
          { icon: "🔗" },
        ]}
      />
    </div>
  );
}
