import {
    ArrowRight,
    Users,
    UserRound,
    GraduationCap,
    Building2,
    ShieldCheck,
    Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/home.css";

const quickActions = [
    {
        title: "Talabalar",
        description: "Guruhdagi talabalarni ko‘rish",
        path: "/students",
        icon: Users,
    },
    {
        title: "O‘qituvchilar",
        description: "O‘qituvchilar haqida ma’lumot",
        path: "/teachers",
        icon: UserRound,
    },
    {
        title: "Tyutor",
        description: "Tyutor bo‘limiga o‘tish",
        path: "/tutor",
        icon: GraduationCap,
    },
    {
        title: "Dekanat",
        description: "Dekanat ma’lumotlari",
        path: "/deanery",
        icon: Building2,
    },
];

function Home() {
    return (
        <main className="home-page">
            {/* Hero */}
            <section className="home-hero">
                <div className="container">
                    <motion.div
                        className="hero-content"
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="hero-badge">
                            <Sparkles size={14} />

                            <span>NEXUS PLATFORM</span>
                        </div>

                        <h1>
                            Your group,
                            <br />
                            <span>connected.</span>
                        </h1>

                        <p>
                            Talabalar, o‘qituvchilar, tyutor va
                            dekanat ma’lumotlarini bir joyda
                            boshqaring.
                        </p>

                        <div className="hero-actions">
                            <Link
                                to="/students"
                                className="primary-button"
                            >
                                <span>Talabalarni ko‘rish</span>

                                <ArrowRight size={18} />
                            </Link>

                            <Link
                                to="/student-login"
                                className="secondary-button"
                            >
                                <ShieldCheck size={18} />

                                <span>Maxfiy bo‘lim</span>
                            </Link>
                        </div>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        className="home-stats"
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.6,
                            delay: 0.15,
                        }}
                    >
                        <div className="stat-card">
                            <div className="stat-icon">
                                <Users size={21} />
                            </div>

                            <div>
                                <span className="stat-label">
                                    Talabalar
                                </span>

                                <strong>18</strong>
                            </div>
                        </div>

                        <div className="stat-card">
                            <div className="stat-icon">
                                <UserRound size={21} />
                            </div>

                            <div>
                                <span className="stat-label">
                                    O‘qituvchilar
                                </span>

                                <strong>9</strong>
                            </div>
                        </div>

                        <div className="stat-card">
                            <div className="stat-icon">
                                <GraduationCap size={21} />
                            </div>

                            <div>
                                <span className="stat-label">
                                    Guruh
                                </span>

                                <strong>NEXUS</strong>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Quick Access */}
            <section className="quick-section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-label">
                            QUICK ACCESS
                        </span>

                        <h2 className="section-title">
                            Kerakli bo‘limni tanlang
                        </h2>

                        <p className="section-description">
                            NEXUS platformasining asosiy bo‘limlariga
                            tezkor kirish.
                        </p>
                    </div>

                    <div className="quick-grid">
                        {quickActions.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <motion.div
                                    key={item.path}
                                    initial={{
                                        opacity: 0,
                                        y: 20,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    transition={{
                                        duration: 0.4,
                                        delay: 0.1 * index,
                                    }}
                                >
                                    <Link
                                        to={item.path}
                                        className="quick-card"
                                    >
                                        <div className="quick-card-top">
                                            <div className="quick-icon">
                                                <Icon
                                                    size={22}
                                                    strokeWidth={1.8}
                                                />
                                            </div>

                                            <ArrowRight
                                                className="quick-arrow"
                                                size={19}
                                            />
                                        </div>

                                        <div className="quick-card-content">
                                            <h3>{item.title}</h3>

                                            <p>{item.description}</p>
                                        </div>
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Privacy Banner */}
            <section className="privacy-section">
                <div className="container">
                    <div className="privacy-card">
                        <div className="privacy-icon">
                            <ShieldCheck size={24} />
                        </div>

                        <div className="privacy-content">
                            <span>MAXFIYLIK</span>

                            <h3>
                                Talabalar ma’lumotlari himoyalangan
                            </h3>

                            <p>
                                Shaxsiy ma’lumotlarga faqat
                                autentifikatsiyadan so‘ng kirish mumkin.
                            </p>
                        </div>

                        <Link
                            to="/student-login"
                            className="privacy-button"
                        >
                            Kirish

                            <ArrowRight size={17} />
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Home;