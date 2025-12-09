import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

const projects = [
  {
    id: 1,
    title: 'Интернет-магазин',
    description: 'Full-stack приложение с React и Node.js',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop',
    tech: ['React', 'TypeScript', 'PostgreSQL']
  },
  {
    id: 2,
    title: 'Мобильное приложение',
    description: 'Кросс-платформенное решение на React Native',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=300&fit=crop',
    tech: ['React Native', 'Redux', 'Firebase']
  },
  {
    id: 3,
    title: 'CRM система',
    description: 'Корпоративная система управления',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
    tech: ['Vue.js', 'Python', 'Docker']
  },
  {
    id: 4,
    title: 'Веб-портал',
    description: 'Информационный портал с админ-панелью',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop',
    tech: ['Next.js', 'MongoDB', 'REST API']
  },
  {
    id: 5,
    title: 'Dashboard аналитики',
    description: 'Визуализация данных в реальном времени',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
    tech: ['React', 'D3.js', 'WebSocket']
  },
  {
    id: 6,
    title: 'Социальная сеть',
    description: 'Платформа для общения и контента',
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=500&h=300&fit=crop',
    tech: ['GraphQL', 'Node.js', 'Redis']
  }
];

export default function Index() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 animate-fade-in">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Code2" size={24} className="text-primary-foreground" />
              </div>
              <span className="font-heading font-bold text-xl text-foreground">ИС и Программирование</span>
            </div>
            
            <nav className="hidden md:flex gap-6 animate-fade-in">
              {['home', 'about', 'frontend', 'backend', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`font-medium transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'about' && 'О специальности'}
                  {section === 'frontend' && 'Frontend'}
                  {section === 'backend' && 'Backend'}
                  {section === 'projects' && 'Проекты'}
                  {section === 'contact' && 'Контакты'}
                </button>
              ))}
            </nav>

            <Button variant="outline" className="md:hidden">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </header>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-slide-up">
            <h1 className="font-heading font-extrabold text-5xl md:text-7xl mb-6 text-foreground">
              09.02.07
            </h1>
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 text-primary">
              Информационные системы и программирование
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-medium">
              Разработчик веб и мультимедийных приложений
            </p>
            <div className="inline-block bg-accent/20 px-8 py-4 rounded-2xl border-2 border-accent">
              <p className="text-2xl font-heading font-bold text-accent-foreground">
                Твой код – твоё будущее! 💻
              </p>
            </div>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-scale-in">
            <Card className="p-6 hover:shadow-lg transition-all hover:scale-105 bg-card border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Icon name="Code" size={28} className="text-primary" />
              </div>
              <h3 className="font-heading font-bold text-lg mb-2 text-card-foreground">Современные технологии</h3>
              <p className="text-muted-foreground text-sm">React, TypeScript, Python и другие</p>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-all hover:scale-105 bg-card border-border">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Icon name="Rocket" size={28} className="text-secondary" />
              </div>
              <h3 className="font-heading font-bold text-lg mb-2 text-card-foreground">Карьерный рост</h3>
              <p className="text-muted-foreground text-sm">Востребованная профессия с высокой зарплатой</p>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-all hover:scale-105 bg-card border-border">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Icon name="Users" size={28} className="text-accent" />
              </div>
              <h3 className="font-heading font-bold text-lg mb-2 text-card-foreground">Командная работа</h3>
              <p className="text-muted-foreground text-sm">Работа в команде над реальными проектами</p>
            </Card>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-center mb-12 text-foreground animate-fade-in">
            О специальности
          </h2>
          
          <Card className="p-8 md:p-12 animate-slide-up bg-card border-border">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-card-foreground leading-relaxed mb-6">
                Специальность <strong className="text-primary">09.02.07 "Информационные системы и программирование"</strong> готовит 
                высококвалифицированных специалистов в области разработки современных веб-приложений и 
                мультимедийных систем.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div>
                  <h3 className="font-heading font-bold text-xl mb-4 text-foreground flex items-center gap-2">
                    <Icon name="GraduationCap" size={24} className="text-primary" />
                    Чему вы научитесь
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                      <span>Разработка веб-приложений</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                      <span>Работа с базами данных</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                      <span>Frontend и Backend разработка</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                      <span>Мобильные приложения</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-heading font-bold text-xl mb-4 text-foreground flex items-center gap-2">
                    <Icon name="Briefcase" size={24} className="text-secondary" />
                    Где работать
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-secondary mt-1 flex-shrink-0" />
                      <span>IT-компании и стартапы</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-secondary mt-1 flex-shrink-0" />
                      <span>Веб-студии</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-secondary mt-1 flex-shrink-0" />
                      <span>Банки и финтех</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-secondary mt-1 flex-shrink-0" />
                      <span>Фриланс и удалённая работа</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section id="frontend" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <div className="inline-block bg-primary/10 px-4 py-2 rounded-full mb-4">
                <span className="text-primary font-heading font-bold">Frontend Development</span>
              </div>
              <h2 className="font-heading font-bold text-4xl mb-6 text-foreground">
                Фронтенд-разработка
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Создание пользовательских интерфейсов, работа с современными фреймворками и библиотеками.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Palette" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-lg mb-1 text-foreground">UI/UX Design</h4>
                    <p className="text-muted-foreground">Создание красивых и удобных интерфейсов</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Smartphone" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-lg mb-1 text-foreground">Адаптивная вёрстка</h4>
                    <p className="text-muted-foreground">Работа на всех устройствах и экранах</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Zap" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-lg mb-1 text-foreground">Производительность</h4>
                    <p className="text-muted-foreground">Оптимизация и быстрая загрузка</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex flex-wrap gap-3">
                {['HTML5', 'CSS3', 'JavaScript', 'React', 'TypeScript', 'Tailwind'].map((tech) => (
                  <span key={tech} className="px-4 py-2 bg-primary/10 rounded-lg text-primary font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="relative animate-scale-in">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 p-8 flex items-center justify-center">
                <Icon name="Layout" size={200} className="text-primary/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="backend" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative animate-scale-in order-2 md:order-1">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-secondary/20 to-accent/20 p-8 flex items-center justify-center">
                <Icon name="Server" size={200} className="text-secondary/30" />
              </div>
            </div>
            
            <div className="animate-slide-up order-1 md:order-2">
              <div className="inline-block bg-secondary/10 px-4 py-2 rounded-full mb-4">
                <span className="text-secondary font-heading font-bold">Backend Development</span>
              </div>
              <h2 className="font-heading font-bold text-4xl mb-6 text-foreground">
                Бэкенд-разработка
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Серверная логика, API, базы данных и безопасность приложений.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Database" size={24} className="text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-lg mb-1 text-foreground">Базы данных</h4>
                    <p className="text-muted-foreground">PostgreSQL, MongoDB, Redis</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Webhook" size={24} className="text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-lg mb-1 text-foreground">REST API</h4>
                    <p className="text-muted-foreground">Разработка серверных API</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Shield" size={24} className="text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-lg mb-1 text-foreground">Безопасность</h4>
                    <p className="text-muted-foreground">Аутентификация и защита данных</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex flex-wrap gap-3">
                {['Python', 'Node.js', 'PHP', 'PostgreSQL', 'Docker', 'AWS'].map((tech) => (
                  <span key={tech} className="px-4 py-2 bg-secondary/10 rounded-lg text-secondary font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-center mb-4 text-foreground animate-fade-in">
            Примеры проектов
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-12 animate-fade-in">
            Интерактивная галерея работ наших студентов
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-scale-in">
            {projects.map((project, index) => (
              <Card
                key={project.id}
                className="overflow-hidden cursor-pointer transition-all hover:scale-105 hover:shadow-xl group bg-card border-border"
                onClick={() => setSelectedProject(project)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                    <Button variant="secondary" size="sm">
                      Подробнее
                      <Icon name="ArrowRight" size={16} className="ml-2" />
                    </Button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-bold text-xl mb-2 text-card-foreground">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-accent/10 rounded-full text-sm text-accent font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer id="contact" className="bg-primary text-primary-foreground py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center">
                  <Icon name="Code2" size={24} className="text-primary-foreground" />
                </div>
                <span className="font-heading font-bold text-xl">ИС и Программирование</span>
              </div>
              <p className="text-primary-foreground/80">
                Специальность 09.02.07<br />
                Квалификация: Разработчик веб и мультимедийных приложений
              </p>
            </div>
            
            <div>
              <h3 className="font-heading font-bold text-lg mb-4">Контакты</h3>
              <div className="space-y-3">
                <a href="mailto:info@example.ru" className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  <Icon name="Mail" size={20} />
                  <span>info@example.ru</span>
                </a>
                <a href="tel:+79001234567" className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  <Icon name="Phone" size={20} />
                  <span>+7 (900) 123-45-67</span>
                </a>
                <div className="flex items-center gap-2 text-primary-foreground/80">
                  <Icon name="MapPin" size={20} />
                  <span>г. Москва, ул. Примерная, 1</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-heading font-bold text-lg mb-4">Социальные сети</h3>
              <div className="flex gap-4 mb-6">
                <a href="https://vk.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                  <Icon name="Share2" size={20} />
                </a>
                <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                  <Icon name="Send" size={20} />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                  <Icon name="Youtube" size={20} />
                </a>
              </div>
              <div className="text-primary-foreground/80 text-sm">
                <p className="font-semibold">Автор проекта:</p>
                <p>Иванов Иван Иванович</p>
                <p>Группа: ИС-21-1</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-primary-foreground/60">
            <p>&copy; 2024 Специальность 09.02.07. Все права защищены.</p>
          </div>
        </div>
      </footer>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="font-heading text-2xl">{selectedProject?.title}</DialogTitle>
          </DialogHeader>
          {selectedProject && (
            <div className="space-y-4">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-lg"
              />
              <p className="text-lg text-muted-foreground">{selectedProject.description}</p>
              <div>
                <h4 className="font-heading font-semibold mb-2">Используемые технологии:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech) => (
                    <span key={tech} className="px-4 py-2 bg-primary/10 rounded-lg text-primary font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="pt-4">
                <h4 className="font-heading font-semibold mb-2">Описание проекта:</h4>
                <p className="text-muted-foreground">
                  Этот проект демонстрирует практическое применение знаний, полученных в рамках специальности. 
                  Реализованы современные подходы к разработке, использованы актуальные технологии и инструменты.
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
