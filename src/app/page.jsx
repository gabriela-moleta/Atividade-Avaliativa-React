import Footer from "@/components/footer";
import styles from "./page.module.css";
import Header from "@/components/header";
import HeroSection from "@/components/heroSection";

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

      <div className={styles.mainContent}>
        <div className={styles.contentArea}>
          <HeroSection
            title={"Meme do Dia: Quando seu código funciona de primeira"}
            description={
              "Este momento raro que todos os desenvolvedores sonham em experimentar!"
            }
            image={"https://i.imgur.com/vldGJnz.jpg"}
            likes={2452}
            comments={387}
            author={"SuperCoder"}
            authorAvatar={"https://i.pravatar.cc/150?img=20"}
          />
        </div>
      </div>

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
