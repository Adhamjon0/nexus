import {
    Building2,
    UserRound,
    Phone,
    Mail,
    MapPin,
    Clock3,
    ShieldCheck,
} from "lucide-react";
import { motion } from "framer-motion";

import { deanery } from "../data/deanery";

import "../styles/deanery.css";

function Deanery() {
    return (
        <main className="deanery-page">
            <section className="deanery-hero">
                <div className="container">
                    <motion.div
                        className="deanery-heading"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="deanery-heading-icon">
                            <Building2
                                size={23}
                                strokeWidth={1.8}
                            />
                        </div>

                        <div>
                            <span className="section-label">
                                NEXUS / DEANERY
                            </span>

                            <h1>Dekanat</h1>

                            <p>
                                Fakultet rahbariyati va dekanat
                                xodimlari haqida ma’lumot.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="deanery-content">
                <div className="container">

                    <div className="deanery-intro">
                        <div>
                            <span className="section-label">
                                FACULTY ADMINISTRATION
                            </span>

                            <h2>
                                Dekanat rahbariyati
                            </h2>

                            <p>
                                Talabalar uchun asosiy tashkiliy
                                va akademik masalalar bo‘yicha
                                murojaat qilish mumkin bo‘lgan
                                rahbariyat.
                            </p>
                        </div>

                        <div className="deanery-working">
                            <Clock3 size={18} />
                            <div>
                                <span>Ish vaqti</span>
                                <strong>
                                    09:00 — 18:00
                                </strong>
                            </div>
                        </div>
                    </div>

                    <div className="deanery-grid">
                        {deanery.map((person, index) => (
                            <motion.article
                                key={person.id}
                                className="deanery-card"
                                initial={{
                                    opacity: 0,
                                    y: 20,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                transition={{
                                    duration: 0.45,
                                    delay: index * 0.1,
                                }}
                            >
                                <div className="deanery-card-top">
                                    <div className="deanery-avatar">
                                        <UserRound
                                            size={32}
                                            strokeWidth={1.5}
                                        />
                                    </div>

                                    <span className="deanery-status">
                                        <span />
                                        {person.status}
                                    </span>
                                </div>

                                <div className="deanery-person">
                                    <span>
                                        {person.position}
                                    </span>

                                    <h3>{person.name}</h3>

                                    <p>
                                        {person.department}
                                    </p>
                                </div>

                                <div className="deanery-divider" />

                                <div className="deanery-contact">
                                    <div className="deanery-contact-item">
                                        <Phone size={16} />

                                        <div>
                                            <span>Telefon</span>
                                            <strong>
                                                {person.phone}
                                            </strong>
                                        </div>
                                    </div>

                                    <div className="deanery-contact-item">
                                        <Mail size={16} />

                                        <div>
                                            <span>Email</span>
                                            <strong>
                                                {person.email}
                                            </strong>
                                        </div>
                                    </div>

                                    <div className="deanery-contact-item">
                                        <MapPin size={16} />

                                        <div>
                                            <span>Xona</span>
                                            <strong>
                                                {person.room}
                                            </strong>
                                        </div>
                                    </div>
                                </div>

                                <a
                                    href={`tel:${person.phone.replace(
                                        /\s/g,
                                        ""
                                    )}`}
                                    className="deanery-call"
                                >
                                    <Phone size={16} />
                                    Bog‘lanish
                                </a>
                            </motion.article>
                        ))}
                    </div>

                    <motion.div
                        className="deanery-note"
                        initial={{
                            opacity: 0,
                            y: 15,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.5,
                            delay: 0.25,
                        }}
                    >
                        <div className="deanery-note-icon">
                            <ShieldCheck size={20} />
                        </div>

                        <div>
                            <strong>
                                Muhim ma’lumot
                            </strong>

                            <p>
                                Dekanat bilan bog‘liq shaxsiy
                                va xizmat ma’lumotlari faqat
                                ruxsat etilgan foydalanuvchilar
                                uchun ko‘rsatiladi.
                            </p>
                        </div>
                    </motion.div>

                </div>
            </section>
        </main>
    );
}

export default Deanery;