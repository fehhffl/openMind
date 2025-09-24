import React, { useState } from 'react'
import '../styles/PsychologistCard.css'

function PsychologistCard({ psychologist, isPatient }) {
  const [showContact, setShowContact] = useState(false)

  const handleContact = () => {
    setShowContact(!showContact)
  }

  return (
    <div className="psychologist-card">
      <div className="card-header">
        <div className="avatar">{psychologist.image}</div>
        <div className="header-info">
          <h3>{psychologist.name}</h3>
          <span className="experience">{psychologist.experience}</span>
        </div>
      </div>

      <div className="card-body">
        <div className="specialties">
          {psychologist.specialties.map((specialty, index) => (
            <span key={index} className="specialty-tag">
              {specialty}
            </span>
          ))}
        </div>

        <p className="description">{psychologist.description}</p>

        <div className="availability">
          <span className="availability-label">📅 Disponibilidade:</span>
          <span className="availability-time">{psychologist.availability}</span>
        </div>
      </div>

      <div className="card-footer">
        {isPatient ? (
          <>
            <button
              onClick={handleContact}
              className="contact-btn"
            >
              {showContact ? 'Ocultar Contato' : 'Entrar em Contato'}
            </button>
            {showContact && (
              <div className="contact-info">
                <p>📧 Email: {psychologist.contact}</p>
                <p className="contact-note">
                  Entre em contato mencionando que você encontrou o profissional através do PsicoConnect
                </p>
              </div>
            )}
          </>
        ) : (
          <div className="psychologist-view">
            <p className="view-note">Visualização de perfil profissional</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default PsychologistCard