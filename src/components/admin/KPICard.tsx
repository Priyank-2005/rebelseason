import { LucideIcon } from "lucide-react";

interface KPICardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  description?: string;
  trend?: {
    value: string;
    isPositive?: boolean;
  };
  iconColor?: string;
  iconBg?: string;
}

export function KPICard({
  title,
  value,
  icon: Icon,
  description,
  trend,
  iconColor = "text-gray-900",
  iconBg = "bg-gray-100",
}: KPICardProps) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-xs transition-all hover:shadow-md">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-gray-500">{title}</p>
        <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${iconBg}`}>
          <Icon className={`h-5 w-5 ${iconColor}`} />
        </div>
      </div>

      <div className="mt-4">
        <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl font-sans">
          {value}
        </h3>

        {(description || trend) && (
          <div className="mt-2 flex items-center gap-2 text-xs">
            {trend && (
              <span
                className={`inline-flex items-center font-semibold ${
                  trend.isPositive ? "text-emerald-600" : "text-rose-600"
                }`}
              >
                {trend.isPositive ? "+" : ""}
                {trend.value}
              </span>
            )}
            {description && (
              <span className="text-gray-500">{description}</span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
