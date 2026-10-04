import { useMemo, useState } from "react";
import {
    Cake,
    Search,
    Bell,
    Users,
    CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";

import { students } from "../data/students";
import "../styles/birthdays.css";

function Birthdays() {
    const [search, setSearch] = useState("");
    const [notificationsEnabled, setNotificationsEnabled] =
        useState(
            typeof window !== "undefined" &&
            Notification.permission === "granted"
        );
    const [notificationError, setNotificationError] =
        useState("");

    const birthdayStudents = useMemo(() => {
        const query = search.trim().toLowerCase();

        const filtered = students.filter((student) => {
            if (!student.birthDate) {
                return false;
            }

            if (!query) {
                return true;
            }

            return `${student.name} ${student.group}`
                .toLowerCase()
                .includes(query);
        });

        return [...filtered].sort((a, b) => {
            const [, aMonth, aDay] =
                a.birthDate.split("-").map(Number);

            const [, bMonth, bDay] =
                b.birthDate.split("-").map(Number);

            return aMonth - bMonth || aDay - bDay;
        });
    }, [search]);

    const formatBirthday = (birthDate) => {
        const [, month, day] =
            birthDate.split("-").map(Number);

        return new Intl.DateTimeFormat("uz-UZ", {
            day: "numeric",
            month: "long",
        }).format(
            new Date(
                2026,
                month - 1,
                day
            )
        );
    };

    const getReminderDate = (birthDate) => {
        const [, month, day] =
            birthDate.split("-").map(Number);

        const year = new Date().getFullYear();

        const birthday = new Date(
            year,
            month - 1,
            day
        );

        const reminder = new Date(birthday);

        reminder.setDate(
            reminder.getDate() - 3
        );

        return reminder;
    };

    const formatReminderDate = (birthDate) => {
        const reminder =
            getReminderDate(birthDate);

        return new Intl.DateTimeFormat("uz-UZ", {
            day: "numeric",
            month: "long",
        }).format(reminder);
    };

    const enableAllReminders = async () => {
        setNotificationError("");

        if (!("Notification" in window)) {
            setNotificationError(
                "Ushbu brauzer notification funksiyasini qo‘llab-quvvatlamaydi."
            );
            return;
        }

        if (Notification.permission === "denied") {
            setNotificationError(
                "Notification bloklangan. Brauzer sozlamalaridan NEXUS uchun notificationga ruxsat bering."
            );
            return;
        }

        if (Notification.permission !== "granted") {
            const permission =
                await Notification.requestPermission();

            if (permission !== "granted") {
                setNotificationError(
                    "Notificationga ruxsat berilmadi."
                );
                return;
            }
        }

        localStorage.setItem(
            "nexus-birthday-reminders",
            "enabled"
        );

        setNotificationsEnabled(true);

        new Notification(
            "🔔 NEXUS eslatmalari yoqildi",
            {
                body:
                    "Barcha talabalar uchun tug‘ilgan kun eslatmalari yoqildi. Har bir tug‘ilgan kundan 3 kun oldin, soat 08:00 da eslatma beriladi.",
                icon: "/favicon.svg",
                tag: "nexus-birthday-reminders",
            }
        );
    };

    return (
        <main className="birthdays-page">
            <div className="container">

                {/* HEADER */}
                <motion.div
                    className="birthdays-header"
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                >
                    <div>
                        <span className="birthdays-eyebrow">
                            NEXUS • REMINDERS
                        </span>

                        <h1>
                            Tug‘ilgan kunlar
                        </h1>

                        <p>
                            Guruh talabalarining
                            tug‘ilgan kunlari va
                            avtomatik eslatmalari.
                        </p>
                    </div>

                    <div className="birthdays-count">
                        <Users size={18} />

                        <div>
                            <strong>
                                {birthdayStudents.length}
                            </strong>

                            <span>
                                talaba
                            </span>
                        </div>
                    </div>
                </motion.div>

                {/* GLOBAL REMINDER */}
                <motion.div
                    className="birthday-reminder-panel"
                    initial={{
                        opacity: 0,
                        y: 15,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        delay: 0.1,
                    }}
                >
                    <div className="reminder-panel-icon">
                        {notificationsEnabled ? (
                            <CheckCircle2
                                size={21}
                                strokeWidth={1.7}
                            />
                        ) : (
                            <Bell
                                size={21}
                                strokeWidth={1.7}
                            />
                        )}
                    </div>

                    <div className="reminder-panel-content">
                        <strong>
                            {notificationsEnabled
                                ? "Barcha eslatmalar yoqilgan"
                                : "Tug‘ilgan kun eslatmalari"}
                        </strong>

                        <span>
                            Tug‘ilgan kundan 3 kun oldin,
                            ertalab 08:00 da NEXUS
                            notification yuboriladi.
                        </span>
                    </div>

                    <button
                        type="button"
                        className={`reminder-enable-button ${notificationsEnabled
                                ? "enabled"
                                : ""
                            }`}
                        onClick={
                            enableAllReminders
                        }
                        disabled={
                            notificationsEnabled
                        }
                    >
                        {notificationsEnabled ? (
                            <>
                                <CheckCircle2
                                    size={17}
                                />
                                Yoqilgan
                            </>
                        ) : (
                            <>
                                <Bell size={17} />
                                Barchasini yoqish
                            </>
                        )}
                    </button>
                </motion.div>

                {notificationError && (
                    <motion.div
                        className="birthday-notification-error"
                        initial={{
                            opacity: 0,
                            y: -5,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                    >
                        {notificationError}
                    </motion.div>
                )}

                {/* SEARCH */}
                <div className="birthdays-search">
                    <Search
                        size={18}
                        strokeWidth={1.8}
                    />

                    <input
                        type="text"
                        placeholder="Talabani qidirish..."
                        value={search}
                        onChange={(event) =>
                            setSearch(
                                event.target.value
                            )
                        }
                    />
                </div>

                {/* CARDS */}
                <div className="birthdays-grid">
                    {birthdayStudents.map(
                        (student, index) => (
                            <motion.article
                                className="birthday-card"
                                key={student.id}
                                initial={{
                                    opacity: 0,
                                    y: 18,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                transition={{
                                    duration: 0.35,
                                    delay:
                                        index * 0.03,
                                }}
                            >
                                <div className="birthday-card-top">
                                    <div className="birthday-avatar">
                                        {student.image ? (
                                            <img
                                                src={
                                                    student.image
                                                }
                                                alt={
                                                    student.name
                                                }
                                            />
                                        ) : (
                                            <Cake
                                                size={25}
                                                strokeWidth={
                                                    1.5
                                                }
                                            />
                                        )}
                                    </div>

                                    <span className="birthday-group">
                                        {
                                            student.group
                                        }
                                    </span>
                                </div>

                                <div className="birthday-content">
                                    <h3>
                                        {
                                            student.name
                                        }
                                    </h3>

                                    <div className="birthday-date">
                                        <Cake
                                            size={16}
                                            strokeWidth={
                                                1.8
                                            }
                                        />

                                        <span>
                                            Tug‘ilgan kuni:{" "}
                                            {formatBirthday(
                                                student.birthDate
                                            )}
                                        </span>
                                    </div>

                                    <div className="birthday-reminder-date">
                                        <Bell
                                            size={14}
                                            strokeWidth={
                                                1.8
                                            }
                                        />

                                        <span>
                                            Eslatma:{" "}
                                            {
                                                formatReminderDate(
                                                    student.birthDate
                                                )
                                            } • 08:00
                                        </span>
                                    </div>
                                </div>

                                <div className="birthday-card-status">
                                    <CheckCircle2
                                        size={15}
                                        strokeWidth={
                                            1.8
                                        }
                                    />

                                    <span>
                                        Umumiy eslatma tizimi
                                    </span>
                                </div>
                            </motion.article>
                        )
                    )}
                </div>

                {birthdayStudents.length ===
                    0 && (
                        <div className="birthday-empty">
                            <Cake size={30} />

                            <h3>
                                Talaba topilmadi
                            </h3>

                            <p>
                                Boshqa ism bilan
                                qidirib ko‘ring.
                            </p>
                        </div>
                    )}
            </div>
        </main>
    );
}

export default Birthdays;