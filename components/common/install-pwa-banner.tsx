'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function InstallPwaBanner() {
  const [show, setShow] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [platform, setPlatform] = useState<'ios' | 'android' | 'desktop'>('desktop');

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ua = navigator.userAgent.toLowerCase();

    const isIOS =
      /iphone|ipad|ipod/.test(ua) ||
      (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

    const isAndroid = /android/.test(ua);

    if (isIOS) setPlatform('ios');
    else if (isAndroid) setPlatform('android');
    else setPlatform('desktop');

    const isStandalone =
      window.matchMedia('(display-mode: standalone)').matches ||
      (window.navigator as any).standalone === true;

    if (isStandalone) return;

    // Show banner after small delay (UX improvement)
    const timer = setTimeout(() => {
      setShow(true);
    }, 3000);

    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    // Android / Chrome (real install)
    if (deferredPrompt) {
      deferredPrompt.prompt();

      const { outcome } = await deferredPrompt.userChoice;

      if (outcome === 'accepted') {
        setDeferredPrompt(null);
        setShow(false);
      }

      return;
    }

    // iOS fallback
    if (platform === 'ios') {
      alert(
        "Pour installer l'application :\n\n" +
        "1. Appuie sur le bouton Partager 📤\n" +
        "2. Sélectionne 'Sur l'écran d'accueil'\n" +
        "3. Appuie sur Ajouter ➕"
      );
      setShow(false);
      return;
    }

    // Desktop fallback
    alert('Utilisez le menu du navigateur pour installer cette application.');
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-sm rounded-2xl border border-white/20 bg-white/80 p-4 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-zinc-900/80"
        >
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 font-bold text-white">
                G
              </div>

              <div>
                <p className="text-sm font-bold text-zinc-900 dark:text-white">
                  Alimentation Gracias
                </p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  {platform === 'ios'
                    ? "Ajouter à l'écran d'accueil"
                    : 'Installer l’application'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setShow(false)}
                className="text-xs font-medium text-zinc-500 hover:text-zinc-700 dark:text-zinc-400"
              >
                Plus tard
              </button>

              <button
                onClick={handleInstallClick}
                className="rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white shadow-md transition hover:bg-emerald-700"
              >
                {platform === 'ios' ? 'Ajouter' : 'Installer'}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}