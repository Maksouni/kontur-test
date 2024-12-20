import React from "react";

interface ButtonProps {
    text: string;
    type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
    color?: string;
    onClick?: () => void
}

export default function CustomButton({ text, type, color, onClick }: ButtonProps) {
    return (
        <button
            type={type}
            onClick={onClick}
            style={{
                backgroundColor: `${color ? color : 'var(--primary-color)'}`
            }}
            className="custom-button"
        >
            {text}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.00188 13.5151C0.611353 13.9056 0.611353 14.5388 1.00188 14.9293C1.3924 15.3198 2.02557 15.3198 2.41609 14.9293L1.00188 13.5151ZM15.709 1.2222C15.709 0.669913 15.2613 0.222198 14.709 0.222198L5.70898 0.222198C5.1567 0.222198 4.70898 0.669914 4.70898 1.2222C4.70899 1.77448 5.1567 2.2222 5.70898 2.2222L13.709 2.2222L13.709 10.2222C13.709 10.7745 14.1567 11.2222 14.709 11.2222C15.2613 11.2222 15.709 10.7745 15.709 10.2222L15.709 1.2222ZM2.41609 14.9293L15.4161 1.9293L14.0019 0.515091L1.00188 13.5151L2.41609 14.9293Z" fill="white" />
            </svg>

        </button>
    )
}