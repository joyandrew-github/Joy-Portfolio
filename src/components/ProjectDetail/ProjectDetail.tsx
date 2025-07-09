import React from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import styles from './ProjectDetail.module.css';
import { ExternalLink, Github, ArrowLeft } from 'lucide-react';

const ProjectDetail: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  // Try to get project from location.state
  const project = location.state?.project;

  // If no project in state, show a fallback (could fetch by id if you want)
  if (!project) {
    return (
      <div className={styles.notFound}>
        <button className={styles.backBtn} onClick={() => navigate(-1)}>
          <ArrowLeft size={18} /> Back
        </button>
        <h2>Project Not Found</h2>
        <p>Sorry, we couldn't find the project details.</p>
      </div>
    );
  }

  return (
    <div className={styles.detailWrapper}>
      <button className={styles.backBtn} onClick={() => navigate(-1)}>
        <ArrowLeft size={18} /> Back
      </button>
      <div className={styles.detailCard}>
        <img src={project.image} alt={project.title} className={styles.detailImage} />
        <h1 className={styles.detailTitle}>{project.title}</h1>
        <p className={styles.detailDesc}>{project.description}</p>
        <div className={styles.detailSection}>
          <h3>Key Features</h3>
          <ul className={styles.featuresList}>
            {project.features && project.features.length > 0 ? (
              project.features.map((feature: string, idx: number) => (
                <li key={idx}>{feature}</li>
              ))
            ) : (
              <li>No features listed.</li>
            )}
          </ul>
        </div>
        <div className={styles.detailSection}>
          <h3>Tech Stack</h3>
          <div className={styles.techStack}>
            {project.technologies.map((tech: string, idx: number) => (
              <span key={idx} className={styles.tech}>{tech}</span>
            ))}
          </div>
        </div>
        <div className={styles.detailActions}>
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn-primary">
            <ExternalLink size={16} /> Live Demo
          </a>
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn-secondary">
            <Github size={16} /> Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
