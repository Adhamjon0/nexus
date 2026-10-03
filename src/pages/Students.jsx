import { useMemo, useState } from "react";
import {
    // Search,
    Users,
    ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { students } from "../data/students";
import StudentGrid from "../components/students/StudentGrid";
import StudentSearch from "../components/students/StudentSearch";

import "../styles/students.css";

function Students() {
    const [search, setSearch] = useState("");

    const filteredStudents = useMemo(() => {
        const query = search.trim().toLowerCase();

        if (!query) {
            return students;
        }

        return students.filter((student) =>
            `${student.name} ${student.group} ${student.phone} ${student.position}`
                .toLowerCase()
                .includes(query)
        );
    }, [search]);

    return (
        <main className="students-page">
            <section className="students-hero">
                <div className="container">
                    <motion.div
                        className="students-heading"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="students-heading-icon">
                            <Users
                                size={22}
                                strokeWidth={1.8}
                            />
                        </div>

                        <div>
                            <span className="section-label">
                                NEXUS / STUDENTS
                            </span>

                            <h1>Talabalar</h1>

                            <p>
                                NEXUS guruhidagi talabalar ro‘yxati.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="students-toolbar"
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.5,
                            delay: 0.1,
                        }}
                    >
                        <StudentSearch
                            value={search}
                            onChange={setSearch}
                        />

                        <div className="students-count">
                            <span>{filteredStudents.length}</span>
                            <small>talaba</small>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="students-content">
                <div className="container">
                    <StudentGrid
                        students={filteredStudents}
                    />

                    <div className="students-privacy">
                        <div className="students-privacy-icon">
                            <ShieldCheck
                                size={20}
                                strokeWidth={1.8}
                            />
                        </div>

                        <div>
                            <strong>
                                Shaxsiy ma’lumotlar himoyalangan
                            </strong>

                            <p>
                                Batafsil shaxsiy ma’lumotlar faqat
                                maxfiy bo‘lim orqali ko‘riladi.
                            </p>
                        </div>

                        <Link to="/student-login">
                            Maxfiy bo‘lim
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Students;