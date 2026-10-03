import StudentCard from "./StudentCard";

function StudentGrid({ students }) {
    if (!students.length) {
        return (
            <div className="students-empty">
                <p>Talaba topilmadi.</p>
            </div>
        );
    }

    return (
        <div className="students-grid">
            {students.map((student, index) => (
                <StudentCard
                    key={student.id}
                    student={student}
                    index={index}
                />
            ))}
        </div>
    );
}

export default StudentGrid;