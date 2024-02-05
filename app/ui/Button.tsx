interface ButtonProps {
    children: React.ReactNode;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, className }) => {
    return (
        <button
            className={`${
                className ? className : ""
            } bg-primary text-white rounded-xl 
            px-4 py-2 inline-flex flex-row items-center justify-center 
            font-medium appearance-none
            hover:bg-primary/80 transition-colors  active:scale-95`}
        >
            {children}
        </button>
    );
};

export default Button;
