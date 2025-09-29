import {
  Code,
  Target,
  Video,
  Mail,
  Phone,
  MapPin,
  Rocket,
  Eye,
  Check,
  Gift,
  Star,
  TrendingUp,
  Camera,
  Globe,
  Smartphone,
  Zap,
} from "lucide-react";

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
      {" "}
      {/* Header */}{" "}
      <header className="bg-slate-900/90 backdrop-blur-sm border-b border-slate-700/50 sticky top-0 z-50">
        {" "}
        <div className="max-w-7xl mx-auto px-4 py-4">
          {" "}
          <div className="flex items-center justify-between">
            {" "}
            <h1 className="text-2xl md:text-3xl font-bold text-white">
              {" "}
              <span className="text-blue-400">Impulse</span>{" "}
              <span className="text-white"> Vision</span>{" "}
            </h1>{" "}
            <nav className="hidden md:flex space-x-8">
              {" "}
              <a
                href="#team"
                className="text-slate-300 hover:text-white transition-colors"
              >
                {" "}
                Equipe{" "}
              </a>{" "}
              <a
                href="#packages"
                className="text-slate-300 hover:text-white transition-colors"
              >
                {" "}
                Pacotes{" "}
              </a>{" "}
              <a
                href="#contact"
                className="text-slate-300 hover:text-white transition-colors"
              >
                {" "}
                Contato{" "}
              </a>{" "}
            </nav>{" "}
          </div>{" "}
        </div>{" "}
      </header>{" "}
      {/* Hero Section */}{" "}
      <section className="py-20 px-4">
        {" "}
        <div className="max-w-7xl mx-auto text-center">
          {" "}
          <div className="mb-8">
            {" "}
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              {" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                {" "}
                Impulse Vision{" "}
              </span>{" "}
            </h2>{" "}
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              {" "}
              Agência digital completa, unindo programação, estratégia e
              criatividade para{" "}
              <span className="text-blue-400 font-semibold">
                {" "}
                impulsionar sua visão{" "}
              </span>{" "}
            </p>{" "}
          </div>{" "}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12">
            {" "}
            <div className="text-center">
              {" "}
              <div className="text-4xl font-bold text-blue-400">3</div>{" "}
              <div className="text-slate-300">Especialistas</div>{" "}
            </div>{" "}
            <div className="text-center">
              {" "}
              <div className="text-4xl font-bold text-blue-400">+50</div>{" "}
              <div className="text-slate-300">Projetos</div>{" "}
            </div>{" "}
            <div className="text-center">
              {" "}
              <div className="text-4xl font-bold text-blue-400">100%</div>{" "}
              <div className="text-slate-300">Dedicação</div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* Team Section */}{" "}
      <section id="team" className="py-20 px-4 bg-slate-800/30">
        {" "}
        <div className="max-w-7xl mx-auto">
          {" "}
          <div className="text-center mb-16">
            {" "}
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {" "}
              Nossa <span className="text-blue-400">Equipe</span>{" "}
            </h3>{" "}
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              {" "}
              Conheça os profissionais que transformam ideias em realidade{" "}
            </p>{" "}
          </div>{" "}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {" "}
            {teamMembers.map((member, index) => {
              const IconComponent = member.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
                >
                  {" "}
                  {/* Card Background Effect */}{" "}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>{" "}
                  <div className="relative z-10">
                    {" "}
                    {/* Profile Image */}{" "}
                    <div className="aspect-square w-full mb-6 overflow-hidden rounded-xl bg-slate-700">
                      {" "}
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />{" "}
                    </div>{" "}
                    {/* Icon */}{" "}
                    <div className="flex items-center justify-center w-12 h-12 bg-blue-500 rounded-full mb-4 mx-auto group-hover:bg-blue-400 transition-colors duration-300">
                      {" "}
                      <IconComponent className="w-6 h-6 text-white" />{" "}
                    </div>{" "}
                    {/* Member Info */}{" "}
                    <div className="text-center">
                      {" "}
                      <h4 className="text-2xl font-bold text-white mb-2">
                        {" "}
                        {member.name}{" "}
                      </h4>{" "}
                      <p className="text-blue-400 font-semibold text-lg mb-4">
                        {" "}
                        {member.role}{" "}
                      </p>{" "}
                      <p className="text-slate-300 leading-relaxed">
                        {" "}
                        {member.description}{" "}
                      </p>{" "}
                    </div>{" "}
                    {/* Decorative Element */}{" "}
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full opacity-20 group-hover:opacity-100 transition-opacity duration-300"></div>{" "}
                  </div>{" "}
                </div>
              );
            })}{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* Services Packages Section */}{" "}
      <section
        id="packages"
        className="py-20 px-4 bg-gradient-to-br from-slate-900 to-slate-800"
      >
        {" "}
        <div className="max-w-7xl mx-auto">
          {" "}
          <div className="text-center mb-16">
            {" "}
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {" "}
              Nossos <span className="text-blue-400">Pacotes</span>{" "}
            </h3>{" "}
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              {" "}
              Soluções completas para impulsionar sua presença digital e
              maximizar seus resultados{" "}
            </p>{" "}
          </div>{" "}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {" "}
            {/* Impulse Start Package */}{" "}
            <div className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
              {" "}
              {/* Background Effect */}{" "}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>{" "}
              <div className="relative z-10">
                {" "}
                {/* Package Header */}{" "}
                <div className="flex items-center justify-between mb-6">
                  {" "}
                  <div className="flex items-center space-x-3">
                    {" "}
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full group-hover:from-blue-400 group-hover:to-blue-500 transition-all duration-300">
                      {" "}
                      <Rocket className="w-6 h-6 text-white" />{" "}
                    </div>{" "}
                    <div>
                      {" "}
                      <h4 className="text-2xl font-bold text-white">
                        {" "}
                        Impulse Start{" "}
                      </h4>{" "}
                      <p className="text-blue-400 font-semibold">
                        {" "}
                        Pacote Inicial{" "}
                      </p>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="text-right">
                    {" "}
                    <div className="text-3xl font-bold text-white">
                      {" "}
                      R$ 2.850{" "}
                    </div>{" "}
                    <div className="text-slate-400 text-sm">por mês</div>{" "}
                  </div>{" "}
                </div>{" "}
                {/* Package Description */}{" "}
                <p className="text-slate-300 mb-6 leading-relaxed">
                  {" "}
                  Pacote ideal para empresas que querem iniciar sua presença
                  digital de forma estratégica.{" "}
                </p>{" "}
                {/* Features */}{" "}
                <div className="space-y-4 mb-6">
                  {" "}
                  <div className="flex items-start space-x-3">
                    {" "}
                    <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />{" "}
                    <div>
                      {" "}
                      <span className="text-white font-semibold">
                        {" "}
                        Tráfego pago{" "}
                      </span>{" "}
                      <p className="text-slate-400 text-sm">
                        {" "}
                        Gestão completa de anúncios{" "}
                      </p>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="flex items-start space-x-3">
                    {" "}
                    <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />{" "}
                    <div>
                      {" "}
                      <span className="text-white font-semibold">
                        {" "}
                        4 vídeos/mês{" "}
                      </span>{" "}
                      <p className="text-slate-400 text-sm">
                        {" "}
                        1 por semana, otimizados para redes sociais{" "}
                      </p>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                {/* Bonus Items */}{" "}
                <div className="bg-slate-800/50 rounded-xl p-4 mb-6">
                  {" "}
                  <div className="flex items-center space-x-2 mb-3">
                    {" "}
                    <Gift className="w-5 h-5 text-yellow-400" />{" "}
                    <span className="text-yellow-400 font-semibold">
                      {" "}
                      Bônus Inclusos{" "}
                    </span>{" "}
                  </div>{" "}
                  <div className="space-y-2">
                    {" "}
                    <div className="flex items-center space-x-2">
                      {" "}
                      <Camera className="w-4 h-4 text-slate-400" />{" "}
                      <span className="text-slate-300 text-sm">
                        {" "}
                        2 fotos profissionais{" "}
                      </span>{" "}
                    </div>{" "}
                    <div className="flex items-center space-x-2">
                      {" "}
                      <Globe className="w-4 h-4 text-slate-400" />{" "}
                      <span className="text-slate-300 text-sm">
                        {" "}
                        Portfólio digital{" "}
                      </span>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                {/* Focus */}{" "}
                <div className="flex items-start space-x-3 mb-6">
                  {" "}
                  <Target className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />{" "}
                  <p className="text-slate-300 text-sm">
                    {" "}
                    Focado em dar visibilidade à marca, atrair novos clientes e
                    criar uma identidade sólida no ambiente digital.{" "}
                  </p>{" "}
                </div>{" "}
                {/* CTA Button */}{" "}
                <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
                  {" "}
                  Escolher Impulse Start{" "}
                </button>{" "}
              </div>{" "}
            </div>{" "}
            {/* Impulse Pro Package */}{" "}
            <div className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 border border-slate-700/50 hover:border-orange-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20">
              {" "}
              {/* Popular Badge */}{" "}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                {" "}
                <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center space-x-2">
                  {" "}
                  <Zap className="w-4 h-4" /> <span>MAIS POPULAR</span>{" "}
                </div>{" "}
              </div>{" "}
              {/* Background Effect */}{" "}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 to-red-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>{" "}
              <div className="relative z-10 mt-4">
                {" "}
                {/* Package Header */}{" "}
                <div className="flex items-center justify-between mb-6">
                  {" "}
                  <div className="flex items-center space-x-3">
                    {" "}
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full group-hover:from-orange-400 group-hover:to-red-400 transition-all duration-300">
                      {" "}
                      <Zap className="w-6 h-6 text-white" />{" "}
                    </div>{" "}
                    <div>
                      {" "}
                      <h4 className="text-2xl font-bold text-white">
                        {" "}
                        Impulse Pro{" "}
                      </h4>{" "}
                      <p className="text-orange-400 font-semibold">
                        {" "}
                        Pacote Avançado{" "}
                      </p>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="text-right">
                    {" "}
                    <div className="text-3xl font-bold text-white">
                      {" "}
                      R$ 4.750{" "}
                    </div>{" "}
                    <div className="text-slate-400 text-sm">por mês</div>{" "}
                  </div>{" "}
                </div>{" "}
                {/* Package Description */}{" "}
                <p className="text-slate-300 mb-6 leading-relaxed">
                  {" "}
                  Pacote avançado para empresas que buscam crescimento
                  acelerado, autoridade digital e posicionamento estratégico.{" "}
                </p>{" "}
                {/* Features */}{" "}
                <div className="space-y-4 mb-6">
                  {" "}
                  <div className="flex items-start space-x-3">
                    {" "}
                    <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />{" "}
                    <div>
                      {" "}
                      <span className="text-white font-semibold">
                        {" "}
                        Tráfego pago avançado{" "}
                      </span>{" "}
                      <p className="text-slate-400 text-sm">
                        {" "}
                        Maior verba investida e gestão otimizada{" "}
                      </p>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="flex items-start space-x-3">
                    {" "}
                    <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />{" "}
                    <div>
                      {" "}
                      <span className="text-white font-semibold">
                        {" "}
                        4 vídeos/mês{" "}
                      </span>{" "}
                      <p className="text-slate-400 text-sm">
                        {" "}
                        1 por semana, criativos e estratégicos{" "}
                      </p>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="flex items-start space-x-3">
                    {" "}
                    <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />{" "}
                    <div>
                      {" "}
                      <span className="text-white font-semibold">
                        {" "}
                        Identidade visual completa{" "}
                      </span>{" "}
                      <p className="text-slate-400 text-sm">
                        {" "}
                        Logo, paleta, elementos visuais{" "}
                      </p>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="flex items-start space-x-3">
                    {" "}
                    <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />{" "}
                    <div>
                      {" "}
                      <span className="text-white font-semibold">
                        {" "}
                        Landing Page profissional{" "}
                      </span>{" "}
                      <p className="text-slate-400 text-sm">
                        {" "}
                        Otimizada para conversão{" "}
                      </p>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                {/* Bonus Items */}{" "}
                <div className="bg-gradient-to-r from-orange-900/30 to-red-900/30 rounded-xl p-4 mb-6">
                  {" "}
                  <div className="flex items-center space-x-2 mb-3">
                    {" "}
                    <Gift className="w-5 h-5 text-yellow-400" />{" "}
                    <span className="text-yellow-400 font-semibold">
                      {" "}
                      Bônus Inclusos{" "}
                    </span>{" "}
                  </div>{" "}
                  <div className="space-y-2">
                    {" "}
                    <div className="flex items-center space-x-2">
                      {" "}
                      <Camera className="w-4 h-4 text-slate-400" />{" "}
                      <span className="text-slate-300 text-sm">
                        {" "}
                        +4 posts profissionais{" "}
                      </span>{" "}
                    </div>{" "}
                    <div className="flex items-center space-x-2">
                      {" "}
                      <Smartphone className="w-4 h-4 text-slate-400" />{" "}
                      <span className="text-slate-300 text-sm">
                        {" "}
                        Destaques Instagram personalizados{" "}
                      </span>{" "}
                    </div>{" "}
                    <div className="flex items-center space-x-2">
                      {" "}
                      <Globe className="w-4 h-4 text-slate-400" />{" "}
                      <span className="text-slate-300 text-sm">
                        {" "}
                        Portfólio digital incluso{" "}
                      </span>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                {/* Focus */}{" "}
                <div className="flex items-start space-x-3 mb-6">
                  {" "}
                  <TrendingUp className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />{" "}
                  <p className="text-slate-300 text-sm">
                    {" "}
                    Focado em escala de resultados, fortalecimento da marca e
                    geração de leads qualificados.{" "}
                  </p>{" "}
                </div>{" "}
                {/* CTA Button */}{" "}
                <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25">
                  {" "}
                  Escolher Impulse Pro{" "}
                </button>{" "}
              </div>{" "}
            </div>{" "}
            {/* Impulse Vision Package */}{" "}
            <div className="group relative bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-3xl p-8 border-2 border-gradient-to-r hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-500 hover:scale-105 lg:col-span-2 xl:col-span-1">
              {" "}
              {/* Premium Badge */}{" "}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                {" "}
                <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center space-x-2">
                  {" "}
                  <Star className="w-4 h-4" /> <span>MAIS COMPLETO</span>{" "}
                </div>{" "}
              </div>{" "}
              {/* Background Effect */}{" "}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>{" "}
              <div className="relative z-10 mt-4">
                {" "}
                {/* Package Header */}{" "}
                <div className="flex items-center justify-between mb-6">
                  {" "}
                  <div className="flex items-center space-x-3">
                    {" "}
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-300">
                      {" "}
                      <Eye className="w-6 h-6 text-white" />{" "}
                    </div>{" "}
                    <div>
                      {" "}
                      <h4 className="text-2xl font-bold text-white">
                        {" "}
                        Impulse Vision{" "}
                      </h4>{" "}
                      <p className="text-purple-400 font-semibold">
                        {" "}
                        Pacote Premium{" "}
                      </p>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="text-right">
                    {" "}
                    <div className="text-3xl font-bold text-white">
                      {" "}
                      R$ 11.000{" "}
                    </div>{" "}
                    <div className="text-slate-400 text-sm">por mês</div>{" "}
                  </div>{" "}
                </div>{" "}
                {/* Package Description */}{" "}
                <p className="text-slate-300 mb-6 leading-relaxed">
                  {" "}
                  Nosso pacote mais completo, desenvolvido para empresas que
                  desejam liderar no digital, escalar vendas e consolidar
                  autoridade de marca.{" "}
                </p>{" "}
                {/* Features */}{" "}
                <div className="space-y-4 mb-6">
                  {" "}
                  <div className="flex items-start space-x-3">
                    {" "}
                    <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />{" "}
                    <div>
                      {" "}
                      <span className="text-white font-semibold">
                        {" "}
                        Tráfego pago premium{" "}
                      </span>{" "}
                      <div className="text-slate-400 text-sm space-y-1 mt-1">
                        {" "}
                        <p>• Gestão avançada de campanhas</p>{" "}
                        <p>• R$ 1.500 investidos em anúncios</p>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="flex items-start space-x-3">
                    {" "}
                    <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />{" "}
                    <div>
                      {" "}
                      <span className="text-white font-semibold">
                        {" "}
                        8 vídeos criativos/mês{" "}
                      </span>{" "}
                      <p className="text-slate-400 text-sm">
                        {" "}
                        2 Reels por semana, com foco em engajamento e vendas{" "}
                      </p>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="flex items-start space-x-3">
                    {" "}
                    <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />{" "}
                    <div>
                      {" "}
                      <span className="text-white font-semibold">
                        {" "}
                        Identidade visual completa{" "}
                      </span>{" "}
                      <p className="text-slate-400 text-sm">
                        {" "}
                        Logo, paleta, branding, manuais{" "}
                      </p>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="flex items-start space-x-3">
                    {" "}
                    <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />{" "}
                    <div>
                      {" "}
                      <span className="text-white font-semibold">
                        {" "}
                        Site profissional{" "}
                      </span>{" "}
                      <p className="text-slate-400 text-sm">
                        {" "}
                        Estrutura moderna e responsiva{" "}
                      </p>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="flex items-start space-x-3">
                    {" "}
                    <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />{" "}
                    <div>
                      {" "}
                      <span className="text-white font-semibold">
                        {" "}
                        Landing Page otimizada{" "}
                      </span>{" "}
                      <p className="text-slate-400 text-sm">
                        {" "}
                        Para conversão máxima{" "}
                      </p>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                {/* Bonus Items */}{" "}
                <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-xl p-4 mb-6">
                  {" "}
                  <div className="flex items-center space-x-2 mb-3">
                    {" "}
                    <Gift className="w-5 h-5 text-yellow-400" />{" "}
                    <span className="text-yellow-400 font-semibold">
                      {" "}
                      Bônus Inclusos{" "}
                    </span>{" "}
                  </div>{" "}
                  <div className="grid grid-cols-1 gap-2">
                    {" "}
                    <div className="flex items-center space-x-2">
                      {" "}
                      <Camera className="w-4 h-4 text-slate-400" />{" "}
                      <span className="text-slate-300 text-sm">
                        {" "}
                        +4 posts profissionais{" "}
                      </span>{" "}
                    </div>{" "}
                    <div className="flex items-center space-x-2">
                      {" "}
                      <Smartphone className="w-4 h-4 text-slate-400" />{" "}
                      <span className="text-slate-300 text-sm">
                        {" "}
                        Destaques Instagram personalizados{" "}
                      </span>{" "}
                    </div>{" "}
                    <div className="flex items-center space-x-2">
                      {" "}
                      <Globe className="w-4 h-4 text-slate-400" />{" "}
                      <span className="text-slate-300 text-sm">
                        {" "}
                        Portfólio digital exclusivo{" "}
                      </span>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                {/* Focus */}{" "}
                <div className="flex items-start space-x-3 mb-6">
                  {" "}
                  <TrendingUp className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />{" "}
                  <p className="text-slate-300 text-sm">
                    {" "}
                    Focado em posicionar a marca no mais alto nível, gerar
                    autoridade e maximizar resultados de marketing e vendas.{" "}
                  </p>{" "}
                </div>{" "}
                {/* CTA Button */}{" "}
                <button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
                  {" "}
                  Escolher Impulse Vision{" "}
                </button>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          {/* Bottom CTA */}{" "}
          <div className="text-center mt-12">
            {" "}
            <p className="text-slate-300 mb-6">
              {" "}
              Não sabe qual pacote escolher? Vamos conversar e encontrar a
              solução ideal para seu negócio.{" "}
            </p>{" "}
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
              {" "}
              Falar com Especialista{" "}
            </button>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* Contact Section */}{" "}
      <section id="contact" className="py-20 px-4">
        {" "}
        <div className="max-w-4xl mx-auto text-center">
          {" "}
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {" "}
            Vamos <span className="text-blue-400">Conversar?</span>{" "}
          </h3>{" "}
          <p className="text-xl text-slate-300 mb-12">
            {" "}
            Pronto para transformar sua ideia em realidade? Entre em contato
            conosco!{" "}
          </p>{" "}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {" "}
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-colors duration-300">
              {" "}
              <Mail className="w-8 h-8 text-blue-400 mx-auto mb-4" />{" "}
              <h4 className="text-white font-semibold mb-2">Email</h4>{" "}
              <p className="text-slate-300">contato@impulsevision.com</p>{" "}
            </div>{" "}
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-colors duration-300">
              {" "}
              <Phone className="w-8 h-8 text-blue-400 mx-auto mb-4" />{" "}
              <h4 className="text-white font-semibold mb-2">Telefone</h4>{" "}
              <p className="text-slate-300">+55 (47) 99625-7974</p>{" "}
            </div>{" "}
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-colors duration-300">
              {" "}
              <MapPin className="w-8 h-8 text-blue-400 mx-auto mb-4" />{" "}
              <h4 className="text-white font-semibold mb-2">Local</h4>{" "}
              <p className="text-slate-300">Rio do Sul, SC</p>{" "}
            </div>{" "}
          </div>{" "}
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
            {" "}
            Iniciar Projeto{" "}
          </button>{" "}
        </div>{" "}
      </section>{" "}
      {/* Footer */}{" "}
      <footer className="bg-slate-900 border-t border-slate-700/50 py-8 px-4">
        {" "}
        <div className="max-w-7xl mx-auto text-center">
          {" "}
          <h5 className="text-2xl font-bold text-white mb-2">
            {" "}
            <span className="text-blue-400">Impulse</span> Vision{" "}
          </h5>{" "}
          <p className="text-slate-400">
            {" "}
            © 2024 Impulse Vision. Todos os direitos reservados.{" "}
          </p>{" "}
        </div>{" "}
      </footer>{" "}
    </div>
  );
}
export default App;
