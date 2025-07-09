import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, ExternalLink } from 'lucide-react';
import styles from './Contact.module.css';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await emailjs.sendForm(
        'service_fg8j45m', // updated service ID from dashboard
        'template_gvz0kik',
        formRef.current!,
        'cus4F3ay0GV83hv0x'
      );
      setFormData({
        from_name: '',
        from_email: '',
        subject: '',
        message: '',
      });
      alert('Message sent successfully!');
    } catch (error: any) {
      console.error('EmailJS error:', error);
      if (error && error.text) {
        alert('Failed to send message: ' + error.text);
      } else {
        alert('Failed to send message. Please try again later.');
      }
    }
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'joyandrew.s2023it@sece.ac.in',
      link: 'mailto:joyandrew.s2023it@sece.ac.in',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91-7806895713',
      link: 'tel:+917806895713',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Tamil Nadu, India',
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      link: 'https://github.com/joyandrew-github',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/joyandrew-s-b450322a9/',
    },
    {
      icon: ExternalLink,
      label: 'Portfolio',
      link: '#home',
    },
  ];

  return (
    <section id="contact" className={`${styles.contact} section-padding ${styles.noBottomPadding} ${styles.contactSpace}`}>
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.title}>
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className={styles.subtitle}>
            Let's discuss opportunities and bring ideas to life together
          </p>
        </motion.div>

        <div className={styles.content}>
          <motion.div
            className={styles.contactInfo}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className={styles.infoTitle}>Contact Information</h3>
            <p className={styles.infoDescription}>
              Feel free to reach out to me for any inquiries, collaborations, or just to say hello!
            </p>

            <div className={styles.infoList}>
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  className={styles.infoItem}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={styles.infoIcon}>
                    <info.icon size={18} />
                  </div>
                  <div className={styles.infoContent}>
                    <span className={styles.infoLabel}>{info.label}</span>
                    {info.link ? (
                      <a href={info.link} className={styles.infoValue}>
                        {info.value}
                      </a>
                    ) : (
                      <span className={styles.infoValue}>{info.value}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className={styles.socialSection}>
              <h4 className={styles.socialTitle}>Follow Me</h4>
              <div className={styles.socialLinks}>
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon size={18} />
                    <span>{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className={styles.contactForm}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="from_name"
                  value={formData.from_name}
                  onChange={handleInputChange}
                  className={styles.input}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="from_email"
                  value={formData.from_email}
                  onChange={handleInputChange}
                  className={styles.input}
                  required
                />
              </div>

              {/* Hidden reply_to field for EmailJS reply functionality */}
              <input type="hidden" name="from_email" value={formData.from_email} />

              <div className={styles.formGroup}>
                <label htmlFor="subject" className={styles.label}>
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={styles.input}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className={styles.textarea}
                  rows={6}
                  required
                />
              </div>

              <motion.button
                type="submit"
                className="btn-primary"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;