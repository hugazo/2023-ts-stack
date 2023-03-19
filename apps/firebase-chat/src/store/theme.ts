import { ref, computed, watch } from 'vue';
import { defineStore } from 'pinia';
import { Dark } from 'quasar';

type ThemeValues = boolean | 'auto';

interface Theme {
  name: string,
  value: ThemeValues,
  icon: string
}
interface Themes extends Array<Theme> {}

const themeStore = defineStore('theme', () => {
  const themes = <Themes>[
    {
      name: 'Light',
      value: false,
      icon: 'mdi-light-switch',
    },
    {
      name: 'Dark',
      value: true,
      icon: 'mdi-light-switch-off',
    },
    {
      name: 'System',
      value: 'auto',
      icon: 'mdi-lightbulb-auto',
    },
  ];

  const selectedTheme = ref(0);

  const currentTheme = computed(():Theme => themes[selectedTheme.value]);

  watch(currentTheme, () => {
    Dark.set(currentTheme.value.value);
  });

  const changeTheme = () => {
    selectedTheme.value = selectedTheme.value < themes.length - 1
      ? selectedTheme.value + 1
      : 0;
  };

  return {
    selectedTheme,
    currentTheme,
    changeTheme,
  };
}, {
  persist: {
    storage: localStorage,
  },
});

export default themeStore;
