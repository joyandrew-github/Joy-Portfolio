
import styles from "./Chatbot.module.css";
import { useState, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { FaRobot, FaUserCircle } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  text: string;
  user: boolean;
}

const GEMINI_API_KEY = "AIzaSyBFJB9-RRjDgcYoB77gvb2xCquDbD5gd54";

const portfolioContext = `
  You are Joyandrew S's portfolio chatbot. Your name is JoyBot.
  Here is the information about Joyandrew S:

  ---

  **Introduction:**
  - Name: Joyandrew S
  - Title: Full Stack Developer
  - Location: Tamil Nadu, India
  - Passion: Creating innovative web solutions with modern technologies. Specializing in MERN Stack, React Native, and cutting-edge development practices.
  - Bio: A passionate Full Stack Developer currently pursuing B.Tech in Information Technology at Sri Eshwar College of Engineering. My journey in software development began with a curiosity about how things work behind the scenes. This curiosity has evolved into a deep passion for creating user-centric applications that solve real-world problems. I believe in continuous learning and staying updated with the latest technologies. My goal is to contribute to meaningful projects that make a positive impact on people's lives.

  **Education:**
  - Degree: B.Tech in Information Technology
  - College: Sri Eshwar College of Engineering
  - Graduation Year: 2027

  **Experience:**
  - Years of Experience: 2+
  - Projects Completed: 15+
  - Technologies Mastered: 20+

  **Skills:**
  - **Frontend:** React.js, JavaScript, HTML/CSS, Three.js, Bootstrap, GSAP, Framer Motion
  - **Backend:** Node.js, Express.js, Django, REST API, MongoDB, Mongoose, GridFS
  - **Programming Languages:** C++, C, Python, Java, JavaScript
  - **Mobile Development:** React Native
  - **Databases:** SQL, MongoDB
  - **Tools:** Git/GitHub, VS Code, IntelliJ, Canva, PowerPoint, MATLAB, Google Colab
  - **Core Concepts:** Object-Oriented Programming (OOP) in C++, Data Structures & Algorithms (DSA)

  **Problem Solving:**
  - LeetCode: 200+ problems solved, Contest Rating: 1608
  - SkillRack: 950+ problems solved, Rank: 23915
  - CodeChef: 85+ problems solved
  - HackerRank: 5★ Gold in Java, 3★ Silver in C++, 3★ Silver in Python, 1★ Bronze in SQL

  **Projects:**
  - **Smart Parking and Booking System:** Optimizes parking space utilization with a booking platform and real-time updates. (React, Node.js, MongoDB, Leaflet, RazorPay)
  - **EduViz - Interactive 3D Learning Platform:** Real-time 3D visualization for complex concepts. (React, Three.js, Node.js, MongoDB)
  - **ClassConnect - Virtual Classroom Platform:** Supports live classes, course management, and real-time chat. (React, Node.js, MongoDB, WebRTC)
  - **BookHive - Online Book Management:** A platform for managing and exploring books. (React, Node.js, MongoDB, Razorpay)
  - **TASK MANAGER:** A task management app built with C.
  - **SHOPIFY:** A Django-based eCommerce platform with MySQL and Razorpay.

  **Achievements:**
  - **Winner:** Buildathon-Expo, Shophify (eCommerce Website), Project Expo (Cash prize ₹2,000)
  - **Runner Up:** Mini Project Expo 2K25, Freshathon (Cash prize ₹5,000)

  **Certifications:**
  - C++/C Data Structures & Algorithms (Udemy)
  - Java Full Stack (National Level STTP 2K24 by AICTE & Brainovision)
  - Python for Data Science (Udemy)
  - SQL Basics & Intermediate (HackerRank)
  - Frontend Development: HTML, CSS & JavaScript (Udemy)
  - Full Stack Development: MERN Stack (Udemy)
  - Java Programming: Beginner to Master (Udemy)
  
  ---

  Your role is to answer questions about Joyandrew S based on this information. Be friendly, professional, and helpful. If a question is outside of this context, politely state that you can only answer questions about Joyandrew's portfolio.
`;

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setMessages([
        { text: "Hello! I'm JoyBot, Joyandrew's portfolio assistant. I can tell you about his education, skills, projects, and achievements. How can I help you?", user: false }
      ]);
    }
  }, [isOpen]);
  
  const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

  const handleSend = async () => {
    if (input.trim() === "" || isLoading) return;

    const textToSend = input;
    setMessages(prev => [...prev, { text: textToSend, user: true }]);
    setInput("");
    setIsLoading(true);

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      
      const chat = model.startChat({
        history: [
          { role: "user", parts: [{ text: portfolioContext }] },
          { role: "model", parts: [{ text: "Great! I am ready to answer questions about Joyandrew S." }] }
        ]
      });

      const result = await chat.sendMessage(textToSend);
      const response = await result.response;
      const text = response.text();

      setMessages(prev => [...prev, { text, user: false }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { text: "Sorry, I'm having some trouble right now. Please try again later.", user: false }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.chatbot}>
      <AnimatePresence>
        {isOpen && (
           <motion.div 
           className={styles.chatWindow}
           initial={{ opacity: 0, y: 20, scale: 0.95 }}
           animate={{ opacity: 1, y: 0, scale: 1 }}
           exit={{ opacity: 0, y: 20, scale: 0.95 }}
           transition={{ duration: 0.3, ease: "easeInOut" }}
         >
            <div className={styles.chatHeader}>
              <h3>Joyandrew's Portfolio Chatbot</h3>
            </div>
            <div className={styles.messages}>
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  className={`${styles.message} ${
                    msg.user ? styles.userMessage : styles.botMessage
                  }`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  {msg.user ? (
                    <>
                      <span className={styles.messageText}>{msg.text}</span>
                      <FaUserCircle className={styles.userIcon} size={22} />
                    </>
                  ) : (
                    <>
                      <FaRobot className={styles.botIcon} size={22} />
                      <span className={styles.messageText}>{msg.text}</span>
                    </>
                  )}
                </motion.div>
              ))}
              {isLoading && <div className={styles.loadingDots}><div></div><div></div><div></div></div>}
            </div>
            <div className={styles.inputContainer}>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask about Joyandrew..."
                disabled={isLoading}
              />
              <button onClick={handleSend} disabled={isLoading}>Send</button>
            </div>
            </motion.div>
        )}
      </AnimatePresence>
      <motion.button 
        className={styles.chatIcon} 
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaRobot size={30} />
      </motion.button>
    </div>
  );
};

export default Chatbot; 