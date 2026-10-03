import { Phone, UserRound } from "lucide-react";
import { motion } from "framer-motion";

function StudentCard({ student, index = 0 }) {
    return (
        <motion.article
            className="student-card"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.4,
                delay: index * 0.05,
            }}
        >
            <div className="student-card-top">
                <div className="student-avatar">
                    {student.image ? (
                        <img
                            src={student.image}
                            alt={student.name}
                        />
                    ) : (
                        <UserRound
                            size={25}
                            strokeWidth={1.7}
                        />
                    )}
                </div>

                <span className="student-group">
                    {student.group}
                </span>
            </div>

            <div className="student-info">
                <span className="student-label">
                    TALABA
                </span>

                <h3>{student.name}</h3>

                <div className="student-position">
                    <span>{student.position}</span>
                </div>

                <div className="student-phone">
                    <Phone size={15} strokeWidth={1.8} />
                    <span>{student.phone}</span>
                </div>
            </div>
        </motion.article>
    );
}

export default StudentCard;