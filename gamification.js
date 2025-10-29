// src/utils/rewards.js
export const addPoints = (points) => {
  const current = parseInt(localStorage.getItem('points') || '0');
  localStorage.setItem('points', current + points);
};

export const getBadges = () => {
  const points = parseInt(localStorage.getItem('points') || '0');
  return points >= 100 ? ['Focus Master'] : [];
};