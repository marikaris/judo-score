import { ref, onMounted, onUnmounted } from 'vue'
import { calculateKioskScale } from '@/utils/kioskScale'

/**
 * Scales a fixed base-resolution layout (default 1920x1080) to fit the
 * current window, letterboxing on the wider axis.
 *
 * The initial scale is computed synchronously (the app is a browser-only
 * static site) so the very first render is already correctly scaled.
 */
export function useKioskScaling(baseWidth = 1920, baseHeight = 1080) {
  const kioskScale = ref(
    calculateKioskScale(window.innerWidth, window.innerHeight, baseWidth, baseHeight)
  )

  const calculateScale = () => {
    kioskScale.value = calculateKioskScale(window.innerWidth, window.innerHeight, baseWidth, baseHeight)
  }

  onMounted(() => {
    window.addEventListener('resize', calculateScale)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', calculateScale)
  })

  return {
    kioskScale,
    baseWidth,
    baseHeight
  }
}
