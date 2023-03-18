import { ref, computed } from 'vue';
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

  const changeTheme = () => {
    if (selectedTheme.value < themes.length - 1) {
      selectedTheme.value += 1;
    } else {
      selectedTheme.value = 0;
    }
    Dark.set(currentTheme.value.value);
  };

  return {
    currentTheme,
    changeTheme,
  };
});

export default themeStore;
