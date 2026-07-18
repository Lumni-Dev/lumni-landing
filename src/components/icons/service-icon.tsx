import type { SVGProps } from "react";

import type { ServiceIcon as ServiceIconName } from "@/domain/models/service";

type IconProps = SVGProps<SVGSVGElement>;

const PATHS: Record<ServiceIconName, string> = {
  development: "M8 6 2 12l6 6M16 6l6 6-6 6M14 3l-4 18",
  automation: "M4 7h9a4 4 0 0 1 0 8H8m0 0 3-3m-3 3 3 3M17 17h3M4 4v3M20 4v6",
  consulting: "M3 20V10M9 20V4M15 20v-7M21 20V8M2 20h20",
  staffing: "M12 3v6m0 0-3-3m3 3 3-3M5 21v-4a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v4M9 12a3 3 0 1 0 6 0",
  security: "M12 3 5 6v5c0 4.6 3 8.4 7 10 4-1.6 7-5.4 7-10V6l-7-3Zm-3 8.5 2 2 4-4",
};

interface ServiceIconProps extends IconProps {
  name: ServiceIconName;
}

export function ServiceIcon({ name, ...props }: ServiceIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d={PATHS[name]} />
    </svg>
  );
}
