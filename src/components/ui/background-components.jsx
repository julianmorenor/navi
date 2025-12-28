import { cn } from "@/lib/utils";
import { useState } from "react";

export const Component = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="min-h-screen w-full relative bg-white">
            {/* Soft Yellow Glow */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `
        radial-gradient(circle at center, #FFF991 0%, transparent 70%)
      `,
                    opacity: 0.6,
                    mixBlendMode: "multiply",
                }}
            />
            {/* Your Content/Components */}
            <div className="relative z-10 flex items-center justify-center min-h-screen">
                <h2 className="font-display text-4xl text-obsidian">Contenido sobre el brillo solar</h2>
            </div>
        </div>
    );
};
