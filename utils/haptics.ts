/**
 * Haptic feedback utility for PWA.
 * Uses the Vibration API to provide physical feedback.
 * 
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Vibration_API
 */

export const Haptics = {
  /**
   * Triggers a subtle single vibration.
   */
  light: () => {
    if (typeof navigator !== 'undefined' && navigator.vibrate) {
      navigator.vibrate(10);
    }
  },

  /**
   * Triggers a medium vibration.
   */
  medium: () => {
    if (typeof navigator !== 'undefined' && navigator.vibrate) {
      navigator.vibrate(50);
    }
  },

  /**
   * Triggers a success pattern (double pulse).
   */
  success: () => {
    if (typeof navigator !== 'undefined' && navigator.vibrate) {
      navigator.vibrate([100, 50, 100]);
    }
  },

  /**
   * Triggers an error pattern (multiple fast pulses).
   */
  error: () => {
    if (typeof navigator !== 'undefined' && navigator.vibrate) {
      navigator.vibrate([50, 100, 50, 100, 50]);
    }
  },
};
