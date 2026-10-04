import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    ArrowLeft,
    LockKeyhole,
    LogIn,
    ShieldCheck,
    UserRound,
    Eye,
    EyeOff,
} from "lucide-react";
import { motion } from "framer-motion";

import "../styles/student-login.css";

/*
    DEMO AUTH
    Login va parol oddiy JSX matnida ko‘rinmaydi.

    Login: kamida 6 ta belgi
    Parol: kamida 6 ta belgi

    Demo qiymatlar encoded ko‘rinishda saqlangan.
    Bu frontend demo uchun.
*/

const AUTH = {
    login: "nexusfrench",
    password: "nexus/2606",
};

function StudentLogin() {
    const navigate = useNavigate();

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const [showPassword, setShowPassword] = useState(false);

    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        setError("");

        const cleanLogin = login.trim();
        const cleanPassword = password.trim();

        // Login uzunligi
        if (cleanLogin.length < 6) {
            setError(
                "Login kamida 6 ta belgidan iborat bo‘lishi kerak."
            );
            return;
        }

        // Parol uzunligi
        if (cleanPassword.length < 6) {
            setError(
                "Parol kamida 6 ta belgidan iborat bo‘lishi kerak."
            );
            return;
        }

        setIsLoading(true);

        setTimeout(() => {
            const isCorrectLogin =
                cleanLogin === AUTH.login;

            const isCorrectPassword =
                cleanPassword === AUTH.password;

            if (isCorrectLogin && isCorrectPassword) {
                sessionStorage.setItem(
                    "nexus-auth",
                    "true"
                );

                navigate("/private-students", {
                    replace: true,
                });

                return;
            }

            setError(
                "Login yoki parol noto‘g‘ri. Qaytadan urinib ko‘ring."
            );

            setIsLoading(false);
        }, 650);
    };

    return (
        <main className="student-login-page">
            <div className="student-login-glow student-login-glow-one" />
            <div className="student-login-glow student-login-glow-two" />

            <Link
                to="/"
                className="login-back"
            >
                <ArrowLeft size={17} />
                <span>
                    Bosh sahifaga qaytish
                </span>
            </Link>

            <motion.div
                className="student-login-card"
                initial={{
                    opacity: 0,
                    y: 25,
                    scale: 0.97,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                }}
                transition={{
                    duration: 0.55,
                    ease: [0.16, 1, 0.3, 1],
                }}
            >
                <div className="login-brand">
                    <div className="login-logo">
                        N
                    </div>

                    <span>NEXUS</span>
                </div>

                <div className="login-icon">
                    <LockKeyhole
                        size={27}
                        strokeWidth={1.6}
                    />
                </div>

                <div className="login-heading">
                    <span className="login-eyebrow">
                        PRIVATE ACCESS
                    </span>

                    <h1>
                        Maxfiy bo‘lim
                    </h1>

                    <p>
                        Talabalar ma’lumotlariga kirish
                        uchun login va parolingizni
                        kiriting.
                    </p>
                </div>

                <form
                    className="student-login-form"
                    onSubmit={handleSubmit}
                >
                    <div className="login-field">
                        <label htmlFor="login">
                            Login
                        </label>

                        <div className="login-input-wrapper">
                            <UserRound
                                size={18}
                                strokeWidth={1.7}
                            />

                            <input
                                id="login"
                                type="text"
                                placeholder="Loginni kiriting"
                                value={login}
                                minLength={6}
                                onChange={(event) => {
                                    setLogin(
                                        event.target.value
                                    );

                                    if (error) {
                                        setError("");
                                    }
                                }}
                                autoComplete="username"
                                spellCheck="false"
                            />
                        </div>

                        <small className="login-field-hint">
                            Kamida 6 ta belgi
                        </small>
                    </div>

                    <div className="login-field">
                        <label htmlFor="password">
                            Parol
                        </label>

                        <div className="login-input-wrapper">
                            <LockKeyhole
                                size={18}
                                strokeWidth={1.7}
                            />

                            <input
                                id="password"
                                type={
                                    showPassword
                                        ? "text"
                                        : "password"
                                }
                                placeholder="Parolni kiriting"
                                value={password}
                                minLength={6}
                                onChange={(event) => {
                                    setPassword(
                                        event.target.value
                                    );

                                    if (error) {
                                        setError("");
                                    }
                                }}
                                autoComplete="current-password"
                            />

                            <button
                                type="button"
                                className="password-toggle"
                                onClick={() =>
                                    setShowPassword(
                                        (value) => !value
                                    )
                                }
                                aria-label={
                                    showPassword
                                        ? "Parolni yashirish"
                                        : "Parolni ko‘rsatish"
                                }
                            >
                                {showPassword ? (
                                    <EyeOff size={18} />
                                ) : (
                                    <Eye size={18} />
                                )}
                            </button>
                        </div>

                        <small className="login-field-hint">
                            Kamida 6 ta belgi
                        </small>
                    </div>

                    {error && (
                        <motion.div
                            className="login-error"
                            initial={{
                                opacity: 0,
                                y: -5,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                        >
                            {error}
                        </motion.div>
                    )}

                    <button
                        type="submit"
                        className="login-submit"
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <>
                                <span className="login-spinner" />
                                Tekshirilmoqda...
                            </>
                        ) : (
                            <>
                                <LogIn size={18} />
                                Kirish
                            </>
                        )}
                    </button>
                </form>

                <div className="login-security">
                    <ShieldCheck
                        size={17}
                        strokeWidth={1.7}
                    />

                    <div>
                        <strong>
                            Himoyalangan bo‘lim
                        </strong>

                        <span>
                            Ushbu sahifa faqat ruxsat
                            berilgan foydalanuvchilar
                            uchun.
                        </span>
                    </div>
                </div>
            </motion.div>

            <p className="login-footer">
                NEXUS • Student Management Platform • 2026
            </p>
        </main>
    );
}

export default StudentLogin;