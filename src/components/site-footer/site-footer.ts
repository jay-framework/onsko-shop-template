import { makeJayStackComponent, phaseOutput } from '@jay-framework/fullstack-component';

export const SiteFooter = makeJayStackComponent()
  .withSlowlyRender(async () => phaseOutput({}, {}));
