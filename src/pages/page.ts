import { makeJayStackComponent, phaseOutput } from '@jay-framework/fullstack-component';
import { createSignal, createEffect } from '@jay-framework/component';

export const page = makeJayStackComponent()
    .withProps()
    .withFastRender(async () => {
        return phaseOutput({ headerHidden: false, headerReady: false }, {});
    })
    .withInteractive(function HomePage() {
        const threshold = window.innerHeight * 0.5;
        const [isHidden, setIsHidden] = createSignal(window.scrollY > threshold);

        createEffect(() => {
            const handler = () => {
                setIsHidden(window.scrollY > threshold);
            };
            window.addEventListener('scroll', handler, { passive: true });
            return () => window.removeEventListener('scroll', handler);
        });

        return {
            render: () => ({
                headerHidden: isHidden(),
                headerReady: true,
            }),
        };
    });
