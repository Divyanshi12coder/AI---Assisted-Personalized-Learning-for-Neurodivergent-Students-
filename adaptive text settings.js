// src/components/TextSettings.jsx
import React from 'react';

function TextSettings({ settings, update }) {
  return (
    <div className="space-y-2">
      <select onChange={e => update('font', e.target.value)}>
        <option value="sans">Default</option>
        <option value="OpenDyslexic">OpenDyslexic</option>
      </select>
      <input type="range" min="14" max="24" onChange={e => update('fontSize', e.target.value)} />
      <input type="color" onChange={e => update('bgColor', e.target.value)} />
    </div>
  );
}

export default TextSettings;