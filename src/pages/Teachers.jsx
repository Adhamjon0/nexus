import { useMemo, useState } from "react";
import {
    Search,
    UserRound,
    Phone,
    BookOpen,
} from "lucide-react";
import { motion } from "framer-motion";

import { teachers } from "../data/teachers";

import "../styles/teachers.css";

function Teachers() {
    const [search, setSearch] = useState("");

    const filteredTeachers = useMemo(() => {
        const query = search.trim().toLowerCase();

        if (!query) {
            return teachers;
        }

        return teachers.filter((teacher) =>
            `${teacher.name} ${teacher.subject} ${teacher.position} ${teacher.department}`
                .toLowerCase()
                .includes(query)
        );
    }, [search]);

    return (
        <main className="teachers-page">
            <section className="teachers-hero">
                <div className="container">
                    <motion.div
                        className="teachers-heading"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="teachers-heading-icon">
                            <UserRound
                                size={23}
                                strokeWidth={1.8}
                            />
                        </div>

                        <div>
                            <span className="section-label">
                                NEXUS / TEACHERS
                            </span>

                            <h1>O‘qituvchilar</h1>

                            <p>
                                NEXUS guruhiga dars beruvchi
                                o‘qituvchilar ro‘yxati.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="teachers-toolbar"
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.5,
                            delay: 0.1,
                        }}
                    >
                        <div className="teacher-search">
                            <Search
                                size={19}
                                strokeWidth={1.8}
                            />

                            <input
                                type="text"
                                value={search}
                                onChange={(event) =>
                                    setSearch(event.target.value)
                                }
                                placeholder="O‘qituvchini qidiring..."
                            />
                        </div>

                        <div className="teachers-count">
                            <strong>
                                {filteredTeachers.length}
                            </strong>

                            <span>o‘qituvchi</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="teachers-content">
                <div className="container">
                    {filteredTeachers.length > 0 ? (
                        <div className="teachers-grid">
                            {filteredTeachers.map(
                                (teacher, index) => (
                                    <motion.article
                                        key={teacher.id}
                                        className="teacher-card"
                                        initial={{
                                            opacity: 0,
                                            y: 18,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            y: 0,
                                        }}
                                        transition={{
                                            duration: 0.4,
                                            delay: index * 0.05,
                                        }}
                                    >
                                        <div className="teacher-card-top">
                                            <div className="teacher-avatar">
                                                <UserRound
                                                    size={25}
                                                    strokeWidth={1.7}
                                                />
                                            </div>

                                            <span className="teacher-status">
                                                ACTIVE
                                            </span>
                                        </div>

                                        <div className="teacher-info">
                                            <span className="teacher-label">
                                                O‘QITUVCHI
                                            </span>

                                            <h2>{teacher.name}</h2>

                                            <div className="teacher-subject">
                                                <BookOpen
                                                    size={15}
                                                    strokeWidth={1.8}
                                                />

                                                <span>
                                                    {teacher.subject}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="teacher-details">
                                            <div>
                                                <span>Lavozim</span>
                                                <strong>
                                                    {teacher.position}
                                                </strong>
                                            </div>

                                            <div>
                                                <span>Bo‘lim</span>
                                                <strong>
                                                    {teacher.department}
                                                </strong>
                                            </div>
                                        </div>

                                        <div className="teacher-phone">
                                            <Phone
                                                size={15}
                                                strokeWidth={1.8}
                                            />

                                            <span>{teacher.phone}</span>
                                        </div>
                                    </motion.article>
                                )
                            )}
                        </div>
                    ) : (
                        <div className="teachers-empty">
                            <UserRound size={28} />
                            <p>O‘qituvchi topilmadi.</p>
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
}

export default Teachers;