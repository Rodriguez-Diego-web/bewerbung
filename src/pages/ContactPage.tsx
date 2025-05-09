import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEnvelope, 
  faPhone, 
  faLocationDot, 
  faPaperPlane, 
  faCheck, 
  faExclamationTriangle
} from '@fortawesome/free-solid-svg-icons';
import { 
  faLinkedin, 
  faTwitter, 
  faGithub, 
  faDribbble 
} from '@fortawesome/free-brands-svg-icons';
import profileData from '../data/profileData';

const PageContainer = styled.div`
  padding: 30px;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
`;

const PageHeader = styled.div`
  text-align: center;
  margin-bottom: 50px;
`;

const PageTitle = styled.h1`
  font-size: 32px;
  margin-bottom: 15px;
  color: var(--text-color);
  position: relative;
  
  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 3px;
    background-color: var(--accent-color);
    margin: 15px auto 0;
  }
`;

const PageSubtitle = styled.p`
  font-size: 16px;
  color: var(--text-light);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-top: 40px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactForm = styled.form`
  background-color: var(--secondary-color);
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s, box-shadow 0.3s;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  }
`;

const FormTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 25px;
  color: var(--text-color);
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 10px;
    color: var(--accent-color);
  }
`;

const FormField = styled.div`
  margin-bottom: 25px;
  
  label {
    display: block;
    margin-bottom: 10px;
    font-size: 14px;
    color: var(--text-light);
    font-weight: 500;
  }
  
  input, textarea {
    width: 100%;
    padding: 12px 15px;
    background-color: var(--primary-color);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    color: var(--text-color);
    font-size: 15px;
    transition: border-color 0.2s, box-shadow 0.2s;
    
    &:focus {
      outline: none;
      border-color: var(--accent-color);
      box-shadow: 0 0 0 3px rgba(249, 115, 22, 0.1);
    }
  }
  
  textarea {
    min-height: 150px;
    resize: vertical;
  }
  
  .error-message {
    color: #e53e3e;
    font-size: 12px;
    margin-top: 5px;
    display: flex;
    align-items: center;
    
    svg {
      margin-right: 5px;
      font-size: 10px;
    }
  }
`;

const SubmitButton = styled.button`
  background-color: var(--accent-color);
  color: white;
  border: none;
  padding: 14px 25px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s, transform 0.1s;
  width: 100%;
  
  svg {
    margin-right: 10px;
  }
  
  &:hover {
    background-color: #e96400;
  }
  
  &:active {
    transform: scale(0.98);
  }
  
  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const InfoCard = styled.div`
  background-color: var(--secondary-color);
  padding: 25px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const IconContainer = styled.div`
  width: 50px;
  height: 50px;
  background-color: rgba(249, 115, 22, 0.1);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  
  svg {
    color: var(--accent-color);
    font-size: 20px;
  }
`;

const InfoContent = styled.div`
  h4 {
    margin: 0 0 8px 0;
    font-size: 18px;
    color: var(--text-color);
  }
  
  p {
    margin: 0;
    color: var(--text-light);
    font-size: 15px;
  }
  
  a {
    color: var(--text-light);
    text-decoration: none;
    transition: color 0.2s;
    
    &:hover {
      color: var(--accent-color);
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 30px;
`;

const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--secondary-color);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s, transform 0.2s;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  
  svg {
    color: var(--text-light);
    font-size: 18px;
    transition: color 0.2s;
  }
  
  &:hover {
    background-color: var(--accent-color);
    transform: translateY(-3px);
    
    svg {
      color: white;
    }
  }
`;

const FormFeedback = styled.div<{ type: 'success' | 'error' }>`
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  background-color: ${props => props.type === 'success' ? 'rgba(47, 133, 90, 0.1)' : 'rgba(229, 62, 62, 0.1)'};
  color: ${props => props.type === 'success' ? '#2f855a' : '#e53e3e'};
  
  svg {
    margin-right: 10px;
    font-size: 16px;
  }
`;

const MapContainer = styled.div`
  margin-top: 50px;
  border-radius: 12px;
  overflow: hidden;
  height: 400px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  
  iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }
`;

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{
    type: 'success' | 'error';
    message: string;
  } | null>(null);
  
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name ist erforderlich';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'E-Mail ist erforderlich';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Ungültige E-Mail-Adresse';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Betreff ist erforderlich';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Nachricht ist erforderlich';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Nachricht muss mindestens 10 Zeichen lang sein';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for this field when typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setFeedback(null);
    
    // Simuliere einen API-Aufruf
    try {
      // Hier würde in einer echten Anwendung der API-Aufruf stattfinden
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Erfolgsfall
      setFeedback({
        type: 'success',
        message: 'Vielen Dank für deine Nachricht! Ich werde mich so schnell wie möglich bei dir melden.'
      });
      
      // Formular zurücksetzen
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      // Fehlerfall
      setFeedback({
        type: 'error',
        message: 'Beim Senden deiner Nachricht ist ein Fehler aufgetreten. Bitte versuche es später noch einmal.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const getSocialIcon = (name: string) => {
    switch (name) {
      case 'linkedin':
        return faLinkedin;
      case 'twitter':
        return faTwitter;
      case 'github':
        return faGithub;
      case 'dribbble':
        return faDribbble;
      default:
        return faLinkedin;
    }
  };
  
  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>Kontakt aufnehmen</PageTitle>
        <PageSubtitle>
          Hast du Fragen oder möchtest du mit mir an einem Projekt arbeiten? 
          Füll einfach das Formular aus oder kontaktiere mich direkt über eine der folgenden Optionen.
        </PageSubtitle>
      </PageHeader>
      
      <ContactGrid>
        <ContactForm onSubmit={handleSubmit}>
          <FormTitle>
            <FontAwesomeIcon icon={faEnvelope} />
            Sende mir eine Nachricht
          </FormTitle>
          
          {feedback && (
            <FormFeedback type={feedback.type}>
              <FontAwesomeIcon icon={feedback.type === 'success' ? faCheck : faExclamationTriangle} />
              {feedback.message}
            </FormFeedback>
          )}
          
          <FormField>
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              id="name"
              name="name"
              placeholder="Dein vollständiger Name" 
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && (
              <div className="error-message">
                <FontAwesomeIcon icon={faExclamationTriangle} />
                {errors.name}
              </div>
            )}
          </FormField>
          
          <FormField>
            <label htmlFor="email">E-Mail</label>
            <input 
              type="email" 
              id="email"
              name="email"
              placeholder="Deine E-Mail-Adresse" 
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <div className="error-message">
                <FontAwesomeIcon icon={faExclamationTriangle} />
                {errors.email}
              </div>
            )}
          </FormField>
          
          <FormField>
            <label htmlFor="subject">Betreff</label>
            <input 
              type="text" 
              id="subject"
              name="subject"
              placeholder="Worum geht es?" 
              value={formData.subject}
              onChange={handleChange}
            />
            {errors.subject && (
              <div className="error-message">
                <FontAwesomeIcon icon={faExclamationTriangle} />
                {errors.subject}
              </div>
            )}
          </FormField>
          
          <FormField>
            <label htmlFor="message">Nachricht</label>
            <textarea 
              id="message"
              name="message"
              placeholder="Beschreibe dein Anliegen oder Projekt..."
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && (
              <div className="error-message">
                <FontAwesomeIcon icon={faExclamationTriangle} />
                {errors.message}
              </div>
            )}
          </FormField>
          
          <SubmitButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              'Wird gesendet...'
            ) : (
              <>
                <FontAwesomeIcon icon={faPaperPlane} />
                Nachricht senden
              </>
            )}
          </SubmitButton>
        </ContactForm>
        
        <ContactInfo>
          <InfoCard>
            <IconContainer>
              <FontAwesomeIcon icon={faEnvelope} />
            </IconContainer>
            <InfoContent>
              <h4>E-Mail</h4>
              <p>
                <a href={`mailto:${profileData.email}`}>{profileData.email}</a>
              </p>
            </InfoContent>
          </InfoCard>
          
          <InfoCard>
            <IconContainer>
              <FontAwesomeIcon icon={faPhone} />
            </IconContainer>
            <InfoContent>
              <h4>Telefon</h4>
              <p>
                <a href={`tel:${profileData.phone}`}>{profileData.phone}</a>
              </p>
            </InfoContent>
          </InfoCard>
          
          <InfoCard>
            <IconContainer>
              <FontAwesomeIcon icon={faLocationDot} />
            </IconContainer>
            <InfoContent>
              <h4>Standort</h4>
              <p>{profileData.location}</p>
            </InfoContent>
          </InfoCard>
          
          <SocialLinks>
            {profileData.socialLinks.map(link => (
              <SocialLink 
                key={link.id} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                title={link.platform}
              >
                <FontAwesomeIcon icon={getSocialIcon(link.icon)} />
              </SocialLink>
            ))}
          </SocialLinks>
        </ContactInfo>
      </ContactGrid>
      
      <MapContainer>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.654302977797!2d13.3765!3d52.5163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDMwJzU4LjciTiAxM8KwMjInMzUuNCJF!5e0!3m2!1sde!2sde!4v1638714478936!5m2!1sde!2sde" 
          allowFullScreen 
          loading="lazy" 
          title="Standortkarte"
        ></iframe>
      </MapContainer>
    </PageContainer>
  );
};

export default ContactPage;
