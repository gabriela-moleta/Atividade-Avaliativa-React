import Footer from "@/components/footer";
import styles from "./page.module.css";
import Header from "@/components/header";
import HeroSection from "@/components/heroSection";
import Feed from "@/components/Feed";
import FeaturedMemesSection from "@/components/featuredMemesSection";

export default function Home() {
  const memes = [
    {
      id: 1,
      title: "Programador às 3 da manhã",
      description:
        "Quando o código finalmente funciona depois de 5 horas debugando",
      image: "https://i.imgur.com/JbIMvq2.jpg",
      likes: 452,
      comments: 87,
      author: "DevMaster",
      authorAvatar: "https://i.pravatar.cc/150?img=11",
      category: "Programação",
    },
    {
      id: 2,
      title: "Vida de estudante",
      description: "Eu entrando na prova sem estudar",
      image: "https://i.imgur.com/DpEHvFs.jpg",
      likes: 231,
      comments: 56,
      author: "StudyGuru",
      authorAvatar: "https://i.pravatar.cc/150?img=12",
      category: "Escola",
    },
    {
      id: 3,
      title: "Reunião que poderia ser um e-mail",
      description: "Minha cara depois de 2 horas de reunião",
      image: "https://i.imgur.com/a1hJwXc.jpg",
      likes: 631,
      comments: 103,
      author: "CorporateJoker",
      authorAvatar: "https://i.pravatar.cc/150?img=13",
      category: "Trabalho",
    },
    {
      id: 4,
      title: "Quando a internet cai",
      description: "POV: Você no meio de uma partida importante",
      image: "https://i.imgur.com/uGdnlGj.jpg",
      likes: 842,
      comments: 152,
      author: "GamerLife",
      authorAvatar: "https://i.pravatar.cc/150?img=14",
      category: "Games",
    },
    {
      id: 5,
      title: "Segunda-feira chegando",
      description: "Ninguém está pronto para isso",
      image: "https://i.imgur.com/aNDyAyC.jpg",
      likes: 753,
      comments: 91,
      author: "WeekendWarrior",
      authorAvatar: "https://i.pravatar.cc/150?img=15",
      category: "Trabalho",
    },
    {
      id: 6,
      title: "Minha vida amorosa",
      description: "Expectativa vs Realidade",
      image: "https://i.imgur.com/gMy6q9Y.jpg",
      likes: 523,
      comments: 78,
      author: "RomanceExpert",
      authorAvatar: "https://i.pravatar.cc/150?img=16",
      category: "Relacionamentos",
    },
  ];

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

          <Feed memes={memes} />

          <section className={styles.featuredSection}>
            <h2 className={styles.sectionTitle}>Memes em Destaque</h2>
            <div className={styles.featuredGrid}>
            <FeaturedMemesSection
                    title={"O código em produção"}
                    image={"https://i.imgur.com/aVy8tFB.jpg"}
                    author={"DevHumor"}
                    category={"Programação"}
                    trending={true}
                />
                <FeaturedMemesSection
                    title={"Modo escuro vs Modo claro"}
                    image={"https://i.imgur.com/YnGsVzS.jpg"}
                    author={"UIDesigner"}
                    category={"Tecnologia"}
                    trending={true}
                />
                <FeaturedMemesSection
                    title={"POV: Aula online"}
                    image={"https://i.imgur.com/4MigGYQ.jpg"}
                    author={"ZoomExpert"}
                    category={"Escola"}
                    trending={false}
                />
            </div>
          </section>

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
