import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
    ArrowLeft,
    Download,
    FileText,
    LogOut,
    ShieldCheck,
} from "lucide-react";
import { motion } from "framer-motion";

import "../styles/private-students.css";

function PrivateStudents() {
    const navigate = useNavigate();

    useEffect(() => {
        const isAuthenticated =
            sessionStorage.getItem("nexus-auth");

        if (isAuthenticated !== "true") {
            navigate("/student-login", {
                replace: true,
            });
        }
    }, [navigate]);

    const handleLogout = () => {
        sessionStorage.removeItem("nexus-auth");

        navigate("/student-login", {
            replace: true,
        });
    };

    return (
        <main className="private-page">
            <div className="private-bg-glow" />

            <div className="private-container">

                <motion.header
                    className="private-header"
                    initial={{ opacity: 0, y: -15 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <div>
                        <button
                            type="button"
                            className="private-back"
                            onClick={() => navigate("/")}
                        >
                            <ArrowLeft size={17} />
                            <span>Bosh sahifa</span>
                        </button>

                        <div className="private-title-row">
                            <div className="private-title-icon">
                                <ShieldCheck
                                    size={23}
                                    strokeWidth={1.7}
                                />
                            </div>

                            <div>
                                <span className="private-eyebrow">
                                    PRIVATE SECTION
                                </span>

                                <h1>
                                    Talabalar ma’lumotlari
                                </h1>
                            </div>
                        </div>
                    </div>

                    <button
                        type="button"
                        className="private-logout"
                        onClick={handleLogout}
                    >
                        <LogOut size={17} />
                        <span>Chiqish</span>
                    </button>
                </motion.header>

                <motion.section
                    className="private-info-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                >
                    <div className="private-info-icon">
                        <FileText
                            size={24}
                            strokeWidth={1.6}
                        />
                    </div>

                    <div>
                        <h2>
                            Talabalar ma’lumotlari
                        </h2>

                        <p>
                            Ushbu bo‘limda NEXUS guruhiga tegishli
                            talabalarning maxfiy ma’lumotlari
                            joylashtirilgan.
                        </p>
                    </div>

                    <div className="private-file-meta">
                        <span>PDF DOCUMENT</span>
                        <strong>students-data.pdf</strong>
                    </div>
                </motion.section>

                <motion.section
                    className="pdf-section"
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.18 }}
                >
                    <div className="pdf-toolbar">
                        <div className="pdf-toolbar-title">
                            <FileText size={18} />

                            <span>
                                Talabalar hujjati
                            </span>
                        </div>

                        <a
                            href="/documents/2606-Guruh Talabalar Jadvali.pdf"
                            download
                            className="pdf-download"
                        >
                            <Download size={17} />
                            <span>Yuklab olish</span>
                        </a>
                    </div>

                    <div className="pdf-viewer">
                        <iframe
                            src="/documents/2606-Guruh Talabalar Jadvali.pdf"
                            title="Talabalar ma’lumotlari PDF"
                        />
                    </div>
                </motion.section>

                <div className="private-security-note">
                    <ShieldCheck size={16} />

                    <span>
                        Ushbu bo‘lim NEXUS maxfiy ma’lumotlar
                        bo‘limi hisoblanadi.
                    </span>
                </div>

            </div>
        </main>
    );
}

export default PrivateStudents;