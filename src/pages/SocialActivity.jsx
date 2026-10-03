import { useState } from "react";
import {
    HeartHandshake,
    Plus,
    CalendarDays,
    FileText,
    Image,
    X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/social-activity.css";

const initialActivities = [
    {
        id: 1,
        title: "Yoshlar forumida ishtirok",
        type: "Ijtimoiy tadbir",
        date: "20.09.2026",
        description:
            "Samarqand yoshlar forumida faol ishtirok etdim.",
        file: "yoshlar-forumi.pdf",
        fileType: "pdf",
    },
    {
        id: 2,
        title: "Universitet tadbirida ko‘ngillilik",
        type: "Ko‘ngillilik",
        date: "12.09.2026",
        description:
            "Universitet tomonidan tashkil etilgan tadbirda ko‘ngilli sifatida qatnashdim.",
        file: "tadbir.jpg",
        fileType: "image",
    },
];

function SocialActivity() {
    const [activities, setActivities] = useState(initialActivities);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [form, setForm] = useState({
        title: "",
        type: "",
        date: "",
        description: "",
        file: null,
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleFileChange = (event) => {
        const file = event.target.files?.[0] || null;

        setForm((prev) => ({
            ...prev,
            file,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!form.title.trim()) {
            return;
        }

        const newActivity = {
            id: Date.now(),
            title: form.title.trim(),
            type: form.type.trim() || "Ijtimoiy faollik",
            date:
                form.date ||
                new Date().toISOString().slice(0, 10),
            description: form.description.trim(),
            file: form.file?.name || null,
            fileType: form.file?.type?.startsWith("image")
                ? "image"
                : "pdf",
        };

        setActivities((prev) => [
            newActivity,
            ...prev,
        ]);

        setForm({
            title: "",
            type: "",
            date: "",
            description: "",
            file: null,
        });

        setIsModalOpen(false);
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <main className="social-page">

            {/* HERO */}
            <section className="social-hero">
                <div className="container">

                    <motion.div
                        className="social-heading"
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.5,
                        }}
                    >
                        <div className="social-heading-icon">
                            <HeartHandshake
                                size={23}
                                strokeWidth={1.8}
                            />
                        </div>

                        <div>
                            <span className="section-label">
                                NEXUS / SOCIAL ACTIVITY
                            </span>

                            <h1>Ijtimoiy faollik</h1>

                            <p>
                                Yil davomida ishtirok etgan
                                tadbirlaringiz, yutuqlaringiz
                                va faoliyatlaringizni bir joyda
                                saqlang.
                            </p>
                        </div>
                    </motion.div>

                    {/* SUMMARY */}
                    <motion.div
                        className="social-summary"
                        initial={{
                            opacity: 0,
                            y: 18,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.5,
                            delay: 0.1,
                        }}
                    >
                        <div className="social-summary-card">
                            <span>FAOLIYATLAR</span>

                            <strong>
                                {activities.length}
                            </strong>
                        </div>

                        <div className="social-summary-card">
                            <span>BU YIL</span>

                            <strong>
                                {
                                    activities.filter((item) =>
                                        item.date.includes("2026")
                                    ).length
                                }
                            </strong>
                        </div>

                        <button
                            type="button"
                            className="add-activity-button"
                            onClick={openModal}
                        >
                            <Plus size={19} />
                            <span>Faoliyat qo‘shish</span>
                        </button>
                    </motion.div>

                </div>
            </section>

            {/* ACTIVITY CONTENT */}
            <section className="social-content">
                <div className="container">

                    <div className="social-list-header">
                        <div>
                            <span className="section-label">
                                ACTIVITY HISTORY
                            </span>

                            <h2>Faoliyatlarim</h2>
                        </div>

                        <span className="social-list-count">
                            {activities.length} ta
                        </span>
                    </div>

                    <div className="social-list">

                        {activities.length > 0 ? (
                            activities.map((activity, index) => (
                                <motion.article
                                    key={activity.id}
                                    className="activity-card"
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
                                    <div className="activity-card-top">

                                        <div className="activity-icon">
                                            <HeartHandshake
                                                size={21}
                                                strokeWidth={1.7}
                                            />
                                        </div>

                                        <div className="activity-date">
                                            <CalendarDays size={14} />

                                            <span>
                                                {activity.date}
                                            </span>
                                        </div>

                                    </div>

                                    <div className="activity-content">

                                        <span className="activity-type">
                                            {activity.type}
                                        </span>

                                        <h3>
                                            {activity.title}
                                        </h3>

                                        {activity.description && (
                                            <p>
                                                {activity.description}
                                            </p>
                                        )}

                                    </div>

                                    {activity.file && (
                                        <div className="activity-file">

                                            {activity.fileType === "image" ? (
                                                <Image size={17} />
                                            ) : (
                                                <FileText size={17} />
                                            )}

                                            <span>
                                                {activity.file}
                                            </span>

                                        </div>
                                    )}
                                </motion.article>
                            ))
                        ) : (
                            <div className="social-empty">

                                <HeartHandshake size={30} />

                                <h3>
                                    Hozircha faoliyatlar yo‘q
                                </h3>

                                <p>
                                    Birinchi faoliyatingizni
                                    qo‘shishdan boshlang.
                                </p>

                                <button
                                    type="button"
                                    onClick={openModal}
                                >
                                    <Plus size={17} />
                                    Faoliyat qo‘shish
                                </button>

                            </div>
                        )}

                    </div>
                </div>
            </section>

            {/* MODAL */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        className="activity-modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onMouseDown={(event) => {
                            if (
                                event.target === event.currentTarget
                            ) {
                                closeModal();
                            }
                        }}
                    >
                        <motion.div
                            className="activity-modal"
                            initial={{
                                opacity: 0,
                                scale: 0.96,
                                y: 10,
                            }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                y: 0,
                            }}
                            exit={{
                                opacity: 0,
                                scale: 0.96,
                                y: 10,
                            }}
                            transition={{
                                duration: 0.22,
                                ease: "easeOut",
                            }}
                            onMouseDown={(event) =>
                                event.stopPropagation()
                            }
                        >

                            {/* MODAL HEADER */}
                            <div className="activity-modal-header">

                                <div>
                                    <span className="section-label">
                                        NEW ACTIVITY
                                    </span>

                                    <h2>
                                        Faoliyat qo‘shish
                                    </h2>
                                </div>

                                <button
                                    type="button"
                                    className="activity-modal-close"
                                    onClick={closeModal}
                                    aria-label="Yopish"
                                >
                                    <X size={20} />
                                </button>

                            </div>

                            {/* FORM */}
                            <form
                                className="activity-form"
                                onSubmit={handleSubmit}
                            >

                                {/* TITLE */}
                                <label>
                                    <span>
                                        Faoliyat nomi
                                    </span>

                                    <input
                                        type="text"
                                        name="title"
                                        value={form.title}
                                        onChange={handleChange}
                                        placeholder="Masalan: Yoshlar forumida ishtirok"
                                        required
                                    />
                                </label>

                                {/* TYPE */}
                                <label>
                                    <span>
                                        Faoliyat turi
                                    </span>

                                    <input
                                        type="text"
                                        name="type"
                                        value={form.type}
                                        onChange={handleChange}
                                        placeholder="Masalan: Ko‘ngillilik"
                                    />
                                </label>

                                {/* DATE */}
                                <label>
                                    <span>
                                        Sana
                                    </span>

                                    <input
                                        type="date"
                                        name="date"
                                        value={form.date}
                                        onChange={handleChange}
                                    />
                                </label>

                                {/* DESCRIPTION */}
                                <label>
                                    <span>
                                        Faoliyat haqida
                                    </span>

                                    <textarea
                                        name="description"
                                        value={form.description}
                                        onChange={handleChange}
                                        placeholder="Faoliyatingiz haqida qisqacha yozing..."
                                        rows={4}
                                    />
                                </label>

                                {/* FILE */}
                                <label className="activity-file-input">
                                    <span>
                                        Rasm yoki hujjat
                                    </span>

                                    <div className="file-picker">
                                        <FileText size={19} />

                                        <span>
                                            {form.file
                                                ? form.file.name
                                                : "Rasm yoki PDF tanlang"}
                                        </span>
                                    </div>

                                    <input
                                        type="file"
                                        accept="image/*,.pdf"
                                        onChange={handleFileChange}
                                    />
                                </label>

                                {/* SUBMIT */}
                                <button
                                    type="submit"
                                    className="activity-submit"
                                >
                                    <Plus size={18} />

                                    <span>
                                        Faoliyatni saqlash
                                    </span>
                                </button>

                            </form>

                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </main>
    );
}

export default SocialActivity;