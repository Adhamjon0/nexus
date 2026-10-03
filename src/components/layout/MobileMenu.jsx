import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
    X,
    Home,
    Users,
    UserRound,
    GraduationCap,
    Building2,
    ShieldCheck,
    HeartHandshake,
} from "lucide-react";

import "../../styles/mobile-menu.css";

const navItems = [
    {
        label: "Bosh sahifa",
        path: "/",
        icon: Home,
    },
    {
        label: "Talabalar",
        path: "/students",
        icon: Users,
    },
    {
        label: "O‘qituvchilar",
        path: "/teachers",
        icon: UserRound,
    },
    {
        label: "Tyutor",
        path: "/tutor",
        icon: GraduationCap,
    },
    {
        label: "Ijtimoiy faollik",
        path: "/social-activity",
        icon: HeartHandshake,
    },
    {
        label: "Dekanat",
        path: "/deanery",
        icon: Building2,
    },
];

function MobileMenu({ isOpen, onClose }) {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        className="mobile-menu-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                    />

                    <motion.aside
                        className="mobile-menu"
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{
                            duration: 0.3,
                            ease: "easeOut",
                        }}
                    >
                        <div className="mobile-menu-header">
                            <div className="logo">
                                <span className="logo-mark">N</span>
                                <span className="logo-text">NEXUS</span>
                            </div>

                            <button
                                type="button"
                                className="mobile-menu-close"
                                onClick={onClose}
                                aria-label="Menyuni yopish"
                            >
                                <X size={22} />
                            </button>
                        </div>

                        <div className="mobile-menu-content">
                            <div className="mobile-menu-label">
                                NAVIGATION
                            </div>

                            <nav className="mobile-nav">
                                {navItems.map((item) => {
                                    const Icon = item.icon;

                                    return (
                                        <NavLink
                                            key={item.path}
                                            to={item.path}
                                            onClick={onClose}
                                            className={({ isActive }) =>
                                                `mobile-nav-link ${isActive ? "active" : ""
                                                }`
                                            }
                                        >
                                            <Icon
                                                size={20}
                                                strokeWidth={1.8}
                                            />

                                            <span>{item.label}</span>
                                        </NavLink>
                                    );
                                })}
                            </nav>

                            <div className="mobile-menu-divider" />

                            <NavLink
                                to="/student-login"
                                onClick={onClose}
                                className="mobile-private-link"
                            >
                                <span className="private-icon">
                                    <ShieldCheck
                                        size={19}
                                        strokeWidth={1.8}
                                    />
                                </span>

                                <span>
                                    <strong>
                                        Talabalar ma’lumotlari
                                    </strong>

                                    <small>Maxfiy bo‘lim</small>
                                </span>
                            </NavLink>
                        </div>

                        <div className="mobile-menu-footer">
                            <span>NEXUS</span>
                            <span>Student Management</span>
                        </div>
                    </motion.aside>
                </>
            )}
        </AnimatePresence>
    );
}

export default MobileMenu;