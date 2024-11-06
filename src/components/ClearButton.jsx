// ClearButton.js
import { FaTrash } from "react-icons/fa";
export const ClearButton = ({ onClear }) => {
    return (
        <button onClick={onClear} style={{ padding: "10px", margin: "10px 0", cursor: "pointer", border: "none", background: "transparent" }}>
            <FaTrash size={50} color="red"/> {/* Tamaño ajustable del ícono */}
        </button>
    );
};
