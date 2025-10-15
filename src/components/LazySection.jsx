// components/LazySection.jsx
import { useInView } from "react-intersection-observer";
import { Suspense } from "react";

export default function LazySection({ children, threshold = 0.2 }) {
    const { ref, inView } = useInView({ threshold, triggerOnce: true });

    return (
        <div ref={ref} className="w-full h-full">
            {inView && <Suspense fallback={null}>{children}</Suspense>}
        </div>
    );
}
