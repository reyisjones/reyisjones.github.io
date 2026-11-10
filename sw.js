// Kill-switch for the service worker registered by the previous version of
// this site (@vite-pwa). It removes cached pages so returning visitors get the
// new site immediately, then unregisters itself. Safe to delete after a few months.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.map((k) => caches.delete(k)));
      await self.registration.unregister();
      const clients = await self.clients.matchAll({ type: "window" });
      clients.forEach((c) => c.navigate(c.url));
    })(),
  );
});
