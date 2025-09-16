import { Code, Target, Video, Mail, Phone, MapPin } from "lucide-react";

// importa as imagens da pasta assets
import joaoImg from "./assets/eu.jpeg";
import erickImg from "./assets/erick.jpg";
import jeffyImg from "./assets/jeffy.jpg";

function App() {
  const teamMembers = [
    {
      name: "João Missano",
      role: "Programador",
      image: joaoImg,
      icon: Code,
      description:
        "Especialista em desenvolvimento web e mobile, criando soluções tecnológicas inovadoras.",
    },
    {
      name: "Erick Amorin",
      role: "Estrategista Digital / Gestor de Tráfego",
      image: erickImg,
      icon: Target,
      description:
        "Expert em marketing digital e gestão de tráfego, maximizando resultados e conversões.",
    },
    {
      name: "Jeffy",
      role: "VideoMaker",
      image: jeffyImg,
      icon: Video,
      description:
        "Criador de conteúdo audiovisual, transformando ideias em narrativas visuais impactantes.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="bg-slate-900/90 backdrop-blur-sm border-b border-slate-700/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl md:text-3xl font-bold text-white">
              <span className="text-blue-400">Impulse</span>
              <span className="text-white"> Vision</span>
            </h1>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#team"
                className="text-slate-300 hover:text-white transition-colors"
              >
                Equipe
              </a>
              <a
                href="#contact"
                className="text-slate-300 hover:text-white transition-colors"
              >
                Contato
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Impulse Vision
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Agência digital completa, unindo programação, estratégia e
              criatividade para
              <span className="text-blue-400 font-semibold">
                {" "}
                impulsionar sua visão
              </span>
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400">3</div>
              <div className="text-slate-300">Especialistas</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400">+50</div>
              <div className="text-slate-300">Projetos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400">100%</div>
              <div className="text-slate-300">Dedicação</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Nossa <span className="text-blue-400">Equipe</span>
            </h3>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Conheça os profissionais que transformam ideias em realidade
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {teamMembers.map((member, index) => {
              const IconComponent = member.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
                >
                  {/* Card Background Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="relative z-10">
                    {/* Profile Image */}
                    <div className="aspect-square w-full mb-6 overflow-hidden rounded-xl bg-slate-700">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>

                    {/* Icon */}
                    <div className="flex items-center justify-center w-12 h-12 bg-blue-500 rounded-full mb-4 mx-auto group-hover:bg-blue-400 transition-colors duration-300">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>

                    {/* Member Info */}
                    <div className="text-center">
                      <h4 className="text-2xl font-bold text-white mb-2">
                        {member.name}
                      </h4>
                      <p className="text-blue-400 font-semibold text-lg mb-4">
                        {member.role}
                      </p>
                      <p className="text-slate-300 leading-relaxed">
                        {member.description}
                      </p>
                    </div>

                    {/* Decorative Element */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full opacity-20 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Vamos <span className="text-blue-400">Conversar?</span>
          </h3>
          <p className="text-xl text-slate-300 mb-12">
            Pronto para transformar sua ideia em realidade? Entre em contato
            conosco!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-colors duration-300">
              <Mail className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h4 className="text-white font-semibold mb-2">Email</h4>
              <p className="text-slate-300">contato@impulsevision.com</p>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-colors duration-300">
              <Phone className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h4 className="text-white font-semibold mb-2">Telefone</h4>
              <p className="text-slate-300">+55 (47) 99625-7974</p>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-colors duration-300">
              <MapPin className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h4 className="text-white font-semibold mb-2">Local</h4>
              <p className="text-slate-300">Rio do Sul, SC</p>
            </div>
          </div>

          {/* Botão que redireciona para o WhatsApp */}
          <a
            href="https://wa.me/5547996257974?text=Ol%C3%A1,%20gostaria%20de%20iniciar%20um%20projeto!"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
          >
            Iniciar Projeto
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700/50 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h5 className="text-2xl font-bold text-white mb-2">
            <span className="text-blue-400">Impulse</span> Vision
          </h5>
          <p className="text-slate-400">
            © 2024 Impulse Vision. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
