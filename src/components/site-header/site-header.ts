import { makeJayStackComponent, phaseOutput } from '@jay-framework/fullstack-component';
import { createSignal, createEffect } from '@jay-framework/component';

export const SiteHeader = makeJayStackComponent()
  .withProps()
  .withFastRender(async () => {
    return phaseOutput({ headerHidden: false, headerHasScrolled: false }, {});
  })
  .withInteractive(function SiteHeader() {
    const threshold = window.innerHeight * 0.5;
    const initiallyHidden = window.scrollY > threshold;
    const [isHidden, setIsHidden] = createSignal(initiallyHidden);
    const [hasScrolled, setHasScrolled] = createSignal(initiallyHidden);

    createEffect(() => {
      const handler = () => {
        const hidden = window.scrollY > threshold;
        if (hidden) {
          setHasScrolled(true);
        }
        setIsHidden(hidden);
      };
      window.addEventListener('scroll', handler, { passive: true });
      return () => window.removeEventListener('scroll', handler);
    });

    return {
      render: () => ({
        headerHidden: isHidden(),
        headerHasScrolled: hasScrolled(),
      }),
    };
  });
