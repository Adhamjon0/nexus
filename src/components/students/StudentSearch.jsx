import { Search, X } from "lucide-react";

function StudentSearch({ value, onChange }) {
    return (
        <div className="student-search">
            <Search
                size={19}
                strokeWidth={1.8}
            />

            <input
                type="text"
                value={value}
                onChange={(event) => onChange(event.target.value)}
                placeholder="Talabani qidiring..."
            />

            {value && (
                <button
                    type="button"
                    onClick={() => onChange("")}
                    aria-label="Qidiruvni tozalash"
                >
                    <X size={17} />
                </button>
            )}
        </div>
    );
}

export default StudentSearch;