import { Suspense, lazy } from 'react';

// const ShootingStars = lazy(() => import('./shooting-stars').then(mod => ({ default: mod.ShootingStars })));
// const StarsBackground = lazy(() => import('./stars-background').then(mod => ({ default: mod.StarsBackground })));
const HexagonBackground = lazy(() => import('./HexagonBackground').then(mod => ({ default: mod.HexagonBackground })));

export default function LazyBackground() {
  return (
    <Suspense fallback={null}>
      <div className="pointer-events-none fixed inset-0 -z-10 select-none">
        {/* <ShootingStars />
        <StarsBackground /> */}
        <HexagonBackground hexagonSize={80} hexagonMargin={3} className="absolute inset-0" />
      </div>
    </Suspense>
  );
}
