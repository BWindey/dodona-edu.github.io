import DefaultTheme from 'vitepress/theme';
import PermissionSquares from './PermissionSquares.vue';
import { onMounted, watch, nextTick } from 'vue';
import { useRoute } from 'vitepress';
import mediumZoom from 'medium-zoom';
import './custom.css';

// Image zoom taken from https://github.com/vuejs/vitepress/issues/854

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('PermissionSquares', PermissionSquares)
  },
  setup() {
    const route = useRoute();
    const initZoom = () => {
      mediumZoom('main :not(a) img', { background: 'var(--vp-c-bg)' });
    };

    onMounted(() => {
      initZoom();
    });
    watch(
        () => route.path,
        () => nextTick(() => initZoom())
    );
  }
};
