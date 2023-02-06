import { Notify } from 'quasar';

Notify.setDefaults({
  position: 'top',
  timeout: 3500,
});

export const error = (message?: string) => (Notify.create({
  color: 'negative',
  icon: 'mdi-alert-circle',
  message,
}));

export const success = (message?: string) => (Notify.create({
  color: 'positive',
  icon: 'mdi-thumb-up',
  message,
}));

export const alert = (message?: string) => (Notify.create({
  color: 'warning',
  icon: 'mdi-alert-circle',
  message,
}));

export const info = (message?: string) => (Notify.create({
  color: 'info',
  icon: 'mdi-information',
  message,
}));

export default {};
