import { makeJayStackComponent, phaseOutput } from '@jay-framework/fullstack-component';
import { createSignal, createEffect } from '@jay-framework/component';

export const page = makeJayStackComponent()
    .withProps()
    .withFastRender(async () => {
        return phaseOutput({ headerHidden: false }, {});
    })
    .withInteractive(function HomePage() {
        const [isHidden, setIsHidden] = createSignal(false);

        createEffect(() => {
            const handler = () => {
                const threshold = window.innerHeight * 0.5;
                setIsHidden(window.scrollY > threshold);
            };
            window.addEventListener('scroll', handler, { passive: true });
            return () => window.removeEventListener('scroll', handler);
        });

        // Scroll-triggered entry animations
        createEffect(() => {
            const elements = document.querySelectorAll('.scroll-animate');
            if (!elements.length) return;

            const observer = new IntersectionObserver(
                (entries) => {
                    for (const entry of entries) {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('in-view');
                            observer.unobserve(entry.target);
                        }
                    }
                },
                { threshold: 0.1 }
            );

            elements.forEach((el) => observer.observe(el));
            return () => observer.disconnect();
        });

        return {
            render: () => ({
                headerHidden: isHidden(),
            }),
        };
    });
