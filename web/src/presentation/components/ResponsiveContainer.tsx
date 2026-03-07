import { useEffect, useState } from "react";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function ResponsiveContainer({ children }: Props) {
  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isDesktop = width >= 1024;

  return (
    <div
      className="w-full mx-auto flex-1"
      style={{
        maxWidth: isDesktop ? 600 : "100%",
        paddingLeft: isDesktop ? 32 : 16,
        paddingRight: isDesktop ? 32 : 16,
      }}
    >
      {children}
    </div>
  );
}
