import {
    UserRound,
    Phone,
    Mail,
    MapPin,
    Users,
    Clock3,
    MessageCircle,
    ShieldCheck,
} from "lucide-react";
import { motion } from "framer-motion";

import { tutor } from "../data/tutor";

import "../styles/tutor.css";

function Tutor() {
    return (
        <main className="tutor-page">
            <section className="tutor-hero">
                <div className="container">
                    <motion.div
                        className="tutor-heading"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="tutor-heading-icon">
                            <UserRound
                                size={23}
                                strokeWidth={1.8}
                            />
                        </div>

                        <div>
                            <span className="section-label">
                                NEXUS / TUTOR
                            </span>

                            <h1>Tyutor</h1>

                            <p>
                                Guruh talabalari bilan ishlovchi
                                tyutor haqida ma’lumot.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="tutor-content">
                <div className="container">
                    <div className="tutor-layout">

                        <motion.div
                            className="tutor-profile card"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: 0.1,
                            }}
                        >
                            <div className="tutor-profile-top">
                                <div className="tutor-avatar">
                                    <UserRound
                                        size={38}
                                        strokeWidth={1.5}
                                    />
                                </div>

                                <div className="tutor-status">
                                    <span />
                                    Faol
                                </div>
                            </div>

                            <div className="tutor-profile-info">
                                <span className="tutor-label">
                                    GURUH TYUTORI
                                </span>

                                <h2>{tutor.name}</h2>

                                <p>{tutor.position}</p>
                            </div>

                            <div className="tutor-divider" />

                            <div className="tutor-contact-list">
                                <div className="tutor-contact-item">
                                    <div className="tutor-contact-icon">
                                        <Phone size={17} />
                                    </div>

                                    <div>
                                        <span>Telefon</span>
                                        <strong>{tutor.phone}</strong>
                                    </div>
                                </div>

                                <div className="tutor-contact-item">
                                    <div className="tutor-contact-icon">
                                        <Mail size={17} />
                                    </div>

                                    <div>
                                        <span>Email</span>
                                        <strong>{tutor.email}</strong>
                                    </div>
                                </div>

                                <div className="tutor-contact-item">
                                    <div className="tutor-contact-icon">
                                        <MapPin size={17} />
                                    </div>

                                    <div>
                                        <span>Xona</span>
                                        <strong>{tutor.room}</strong>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <div className="tutor-main">

                            <motion.div
                                className="tutor-stats"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.15,
                                }}
                            >
                                <div className="tutor-stat card">
                                    <div className="tutor-stat-icon">
                                        <Users size={20} />
                                    </div>

                                    <span>Guruh talabalari</span>
                                    <strong>{tutor.students}</strong>
                                </div>

                                <div className="tutor-stat card">
                                    <div className="tutor-stat-icon">
                                        <Clock3 size={20} />
                                    </div>

                                    <span>Tajriba</span>
                                    <strong>{tutor.experience}</strong>
                                </div>
                            </motion.div>

                            <motion.div
                                className="tutor-info-card card"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.2,
                                }}
                            >
                                <div className="tutor-info-header">
                                    <div>
                                        <span className="section-label">
                                            ABOUT TUTOR
                                        </span>

                                        <h3>Tyutor haqida</h3>
                                    </div>

                                    <div className="tutor-info-badge">
                                        {tutor.group}
                                    </div>
                                </div>

                                <p className="tutor-description">
                                    Tyutor talabalar bilan kundalik
                                    akademik va tashkiliy masalalarda
                                    ishlaydi. Guruhdagi talabalarni
                                    qo‘llab-quvvatlash, muhim
                                    ma’lumotlarni yetkazish va
                                    universitet hayotiga moslashishda
                                    yordam beradi.
                                </p>

                                <div className="tutor-department">
                                    <span>Bo‘lim</span>
                                    <strong>{tutor.department}</strong>
                                </div>
                            </motion.div>

                            <motion.div
                                className="tutor-actions"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.25,
                                }}
                            >
                                <a
                                    href={`tel:${tutor.phone.replace(/\s/g, "")}`}
                                    className="tutor-action primary"
                                >
                                    <Phone size={18} />
                                    <span>Qo‘ng‘iroq qilish</span>
                                </a>

                                <a
                                    href={`mailto:${tutor.email}`}
                                    className="tutor-action secondary"
                                >
                                    <MessageCircle size={18} />
                                    <span>Xabar yuborish</span>
                                </a>
                            </motion.div>

                            <div className="tutor-privacy">
                                <ShieldCheck size={18} />

                                <span>
                                    Tyutorning shaxsiy ma’lumotlari
                                    faqat zarur aloqa ma’lumotlari bilan
                                    cheklangan.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Tutor;