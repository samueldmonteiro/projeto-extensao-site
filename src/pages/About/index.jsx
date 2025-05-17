import Footer from '../../components/Footer';
import Header from '../../components/Header'
import { Rocket } from "lucide-react";

const About = () => {
  return (
    <>
      <Header />

      <section className="w-full flex flex-col items-center px-4 md:px-0 text-gray-800">
        {/* Header */}
        <header className="max-w-2xl text-center pt-10">
          <Rocket className="w-16 h-16 mx-auto mb-2" />
          <h1 className="text-3xl font-semibold tracking-wide text-indigo-500 mb-6">
            Nosso Objetivo
          </h1>
          <p className="leading-relaxed text-justify mb-4 text-sm md:text-base">
            Este projeto tem como principal objetivo desenvolver um site interativo que auxilie os alunos no aprendizado do círculo trigonométrico e entre outros conteúdos de maneira dinâmica e intuitiva. A plataforma será projetada para oferecer recursos visuais e animações que facilitem a compreensão dos conceitos fundamentais da trigonometria, como ângulos, funções trigonométricas e relações entre quadrantes.
          </p>
          <p className="leading-relaxed text-justify text-sm md:text-base">
            Além disso, o projeto busca tornar o estudo mais acessível e envolvente, promovendo uma abordagem educativa que incentive a experimentação e o aprendizado ativo. Dessa forma, espera-se contribuir para a melhoria do desempenho acadêmico dos alunos e despertar maior interesse pela matemática.
          </p>
        </header>

        {/* Academic Link */}
        <section className="max-w-2xl text-center mt-10">
          <h2 className="text-2xl font-semibold text-indigo-500 mb-4">
            Vinculação Acadêmica
          </h2>
          <p className="leading-relaxed text-justify text-sm md:text-base mb-4">
            Este projeto de extensão está vinculado ao curso de Ciência da Computação, contribuindo diretamente para a aplicação prática dos conhecimentos adquiridos em sala de aula. A iniciativa permite que os alunos desenvolvam habilidades técnicas e pedagógicas, combinando teoria e prática no desenvolvimento interativo em ensino.
          </p>
          <p className="leading-relaxed text-justify text-sm md:text-base">
            A interdisciplinaridade do projeto possibilita a integração de diversas áreas do conhecimento, como matemática, tecnologia e design, proporcionando uma experiência enriquecedora tanto para os desenvolvedores quanto para os usuários da plataforma.
          </p>
        </section>

        {/* Team */}
        <section className="w-full max-w-4xl mt-16">
          <h2 className="text-center text-2xl font-semibold text-indigo-500 mb-4">
            Equipe Responsável
          </h2>
          <p className="text-center mb-10 text-sm md:text-base">
            Cada membro possui um papel fundamental para o desenvolvimento e sucesso do projeto.
          </p>

          {/* Coordinator */}
          <div className="mb-10">
            <h3 className="text-xl font-semibold text-indigo-500 mb-2">
              Coordenador do curso
            </h3>
            <p className="font-medium">Coordenador do Projeto: <span className="font-semibold">Thiago Oliveira</span></p>
            <p className="text-sm md:text-base leading-relaxed">
              Responsável pela gestão geral do projeto, acompanhamento das atividades e garantia do cumprimento dos objetivos.
            </p>
          </div>

          {/* Academic Orientation */}
          <div className="mb-10">
            <h3 className="text-xl font-semibold text-indigo-500 mb-2">
              Orientação Acadêmica
            </h3>
            <p className="font-medium">Professor Orientador: <span className="font-semibold">Antônio de Jesus</span></p>
            <p className="text-sm md:text-base leading-relaxed">
              Supervisionando o desenvolvimento do projeto, garantindo a qualidade dos conteúdos pedagógicos e auxiliando na implementação dos conceitos matemáticos.
            </p>
          </div>

          {/* Dev & Tech */}
          <div>
            <h3 className="text-xl font-semibold text-indigo-500 mb-2">
              Desenvolvimento e Tecnologia
            </h3>
            <p className="font-medium">Desenvolvedores: <span className="font-semibold">Kaudí de Oliveira Lima</span> e <span className="font-semibold">Wendrio Frazão Melo</span></p>
            <p className="text-sm md:text-base leading-relaxed mb-4">
              Responsáveis pela criação e programação do site, utilizando ferramentas e linguagens adequadas para a interatividade e escalabilidade da plataforma.
            </p>
            <p className="font-medium">Designer UI/UX: <span className="font-semibold">Kaudí de Oliveira Lima</span> e <span className="font-semibold">Wendrio Frazão Melo</span></p>
            <p className="text-sm md:text-base leading-relaxed mb-4">
              Atuam na criação da interface do usuário, garantindo um layout intuitivo e acessível.
            </p>
            <p className="font-medium">Tecnologias Utilizadas: <span className="font-semibold">Html, Css, Javascript, Figma</span> e <span className="font-semibold">GitHub</span></p>
          </div>
        </section>
      </section>
      <Footer />
    </>
  )
}

export default About