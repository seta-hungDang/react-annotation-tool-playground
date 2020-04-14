import React from 'react';

export default function FeaturePage() {
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <LionImage />
      </Layer>
    </Stage>
  );
}
