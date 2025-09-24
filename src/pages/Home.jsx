import React, { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import PsychologistCard from '../components/PsychologistCard'
import '../styles/Home.css'

const mockPsychologists = [
  {
    id: 1,
    name: 'Dra. Marina Costa',
    specialties: ['Ansiedade', 'Depressão', 'Terapia Cognitivo-Comportamental'],
    description: 'Psicóloga estagiária com foco em adultos jovens. Ofereço atendimento gratuito online para pessoas que buscam apoio emocional e desenvolvimento pessoal.',
    availability: 'Segunda a Sexta, 14h às 18h',
    experience: '6 meses de estágio supervisionado',
    contact: 'marina.costa@psicoconnect.com',
    image: '👩‍⚕️'
  },
  {
    id: 2,
    name: 'Dr. Pedro Almeida',
    specialties: ['Relacionamentos', 'Autoestima', 'Orientação Profissional'],
    description: 'Estagiário em psicologia clínica. Atendimento gratuito com foco em jovens adultos enfrentando desafios pessoais e profissionais.',
    availability: 'Terça e Quinta, 9h às 12h',
    experience: '4 meses de estágio',
    contact: 'pedro.almeida@psicoconnect.com',
    image: '👨‍⚕️'
  },
  {
    id: 3,
    name: 'Dra. Juliana Santos',
    specialties: ['Estresse', 'Burnout', 'Mindfulness'],
    description: 'Psicóloga estagiária oferecendo suporte gratuito para gestão de estresse e técnicas de relaxamento. Atendimento online disponível.',
    availability: 'Segunda, Quarta e Sexta, 15h às 19h',
    experience: '8 meses de prática supervisionada',
    contact: 'juliana.santos@psicoconnect.com',
    image: '👩‍⚕️'
  },
  {
    id: 4,
    name: 'Dr. Carlos Mendes',
    specialties: ['Adolescentes', 'Família', 'Desenvolvimento Pessoal'],
    description: 'Estagiário com foco em atendimento a adolescentes e orientação familiar. Sessões gratuitas para quem busca apoio nesta fase da vida.',
    availability: 'Terça a Quinta, 13h às 17h',
    experience: '5 meses de estágio clínico',
    contact: 'carlos.mendes@psicoconnect.com',
    image: '👨‍⚕️'
  },
  {
    id: 5,
    name: 'Dra. Amanda Lima',
    specialties: ['Traumas', 'Fobias', 'EMDR'],
    description: 'Psicóloga estagiária com formação em EMDR. Atendimento gratuito para pessoas lidando com traumas e fobias específicas.',
    availability: 'Segunda e Sexta, 10h às 14h',
    experience: '7 meses de experiência',
    contact: 'amanda.lima@psicoconnect.com',
    image: '👩‍⚕️'
  },
  {
    id: 6,
    name: 'Dr. Rafael Oliveira',
    specialties: ['LGBTQIA+', 'Identidade de Gênero', 'Aceitação'],
    description: 'Estagiário especializado em questões de diversidade. Oferece espaço seguro e acolhedor para discussão de identidade e orientação.',
    availability: 'Quarta e Sexta, 16h às 20h',
    experience: '6 meses de atendimento supervisionado',
    contact: 'rafael.oliveira@psicoconnect.com',
    image: '👨‍⚕️'
  }
]

function Home() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedSpecialty, setSelectedSpecialty] = useState('')

  const allSpecialties = [...new Set(mockPsychologists.flatMap(p => p.specialties))]

  const filteredPsychologists = mockPsychologists.filter(psych => {
    const matchesSearch = psych.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         psych.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesSpecialty = !selectedSpecialty || psych.specialties.includes(selectedSpecialty)
    return matchesSearch && matchesSpecialty
  })

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <div className="home-container">
      <header className="home-header">
        <div className="header-content">
          <div className="logo-section">
            <h1>PsicoConnect</h1>
            <span className="tagline">Cuidado psicológico acessível para todos</span>
          </div>
          <div className="user-section">
            <span className="welcome-msg">
              Olá, {user.name} ({user.type === 'paciente' ? 'Paciente' : 'Psicólogo'})
            </span>
            <button onClick={handleLogout} className="logout-btn">
              Sair
            </button>
          </div>
        </div>
      </header>

      <main className="home-main">
        <section className="hero-section">
          <h2>Encontre Apoio Psicológico Gratuito</h2>
          <p>Conectamos você com psicólogos estagiários dedicados que oferecem atendimento gratuito e de qualidade</p>
        </section>

        <section className="filters-section">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Buscar por nome ou descrição..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
          <div className="specialty-filter">
            <select
              value={selectedSpecialty}
              onChange={(e) => setSelectedSpecialty(e.target.value)}
              className="specialty-select"
            >
              <option value="">Todas as especialidades</option>
              {allSpecialties.map(specialty => (
                <option key={specialty} value={specialty}>
                  {specialty}
                </option>
              ))}
            </select>
          </div>
        </section>

        <section className="psychologists-grid">
          {filteredPsychologists.length > 0 ? (
            filteredPsychologists.map(psychologist => (
              <PsychologistCard
                key={psychologist.id}
                psychologist={psychologist}
                isPatient={user.type === 'paciente'}
              />
            ))
          ) : (
            <div className="no-results">
              <p>Nenhum psicólogo encontrado com os critérios selecionados.</p>
            </div>
          )}
        </section>

        {user.type === 'psicologo' && (
          <section className="psychologist-info">
            <div className="info-card">
              <h3>Área do Psicólogo</h3>
              <p>Como psicólogo estagiário, você pode visualizar os perfis de outros profissionais.</p>
              <p>Em breve: funcionalidade para criar e gerenciar seu próprio perfil!</p>
            </div>
          </section>
        )}
      </main>

      <footer className="home-footer">
        <p>PsicoConnect © 2024 - Conectando pessoas ao cuidado psicológico</p>
        <p className="disclaimer">
          Os atendimentos são realizados por estagiários de psicologia sob supervisão profissional
        </p>
      </footer>
    </div>
  )
}

export default Home