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

        return {
            render: () => ({
                headerHidden: isHidden(),
            }),
        };
    });
