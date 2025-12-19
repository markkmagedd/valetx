import { ReactNode } from "react";

interface ActionCardProps {
  icon: ReactNode;
  title: string;
  onClick?: () => void;
  variant?: "default" | "yellow";
}

export default function ActionCard({
  icon,
  title,
  onClick,
  variant = "default",
}: ActionCardProps) {
  const bgColor = variant === "yellow" ? "bg-yellow-500" : "bg-white";
  const textColor = variant === "yellow" ? "text-navy-dark" : "text-navy-dark";

  return (
    <div onClick={onClick} className={`action-card ${bgColor} ${textColor}`}>
      <div className="action-card-icon">{icon}</div>
      <div className="action-card-title">{title}</div>
    </div>
  );
}
