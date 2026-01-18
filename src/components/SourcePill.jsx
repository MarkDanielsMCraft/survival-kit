import { ExternalLink, ShieldCheck, Heart, AppWindow, Stethoscope, Youtube, BadgeEuro } from "lucide-react";
import { SOURCE_BADGE } from '../constants/config';

export const SourcePill = ({ source }) => {
  const iconMap = {
    official: <ShieldCheck size={14} />,
    ngo: <Heart size={14} />,
    tool: <AppWindow size={14} />,
    learning: <Stethoscope size={14} />,
    video: <Youtube size={14} />,
    referral: <BadgeEuro size={14} />
  };

  const s = SOURCE_BADGE[source] || { label: "Link", color: "bg-slate-50 text-slate-600" };
  const icon = iconMap[source] || <ExternalLink size={14} />;
  
  return (
    <span className={`inline-flex items-center gap-1.5 text-[10px] font-black px-2 py-1 rounded-full border ${s.color}`}>
      {icon}
      {s.label}
    </span>
  );
};
