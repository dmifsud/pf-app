import './button.scss';
type Variant = 'primary' | 'secondary';

interface ButtonProps {
    variant: Variant;
    size: 'small' | 'medium' | 'large';
    label: string;
    fullWidth?: boolean;
    onClick: () => void;
    children?: React.ReactNode;
}

export const Button = ({
    variant,
    size,
    label,
    onClick,
    fullWidth = true,
    children,
}: ButtonProps) => {
    const classes = {
        width: fullWidth ? 'full-width' : '',
    };

    return (
        <button
            className={`button button-${variant} button-${size} ${classes.width}`}
            onClick={onClick}
        >
            {children ?? label}
        </button>
    );
};
