import { makeJayStackComponent, phaseOutput } from '@jay-framework/fullstack-component';

export const SiteHeader = makeJayStackComponent()
  .withSlowlyRender(async () => phaseOutput({}, {}));
