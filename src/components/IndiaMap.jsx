import React from 'react';
import { VectorMap } from '@react-jvectormap/core';
import { inMill } from '@react-jvectormap/india';
import './IndiaMap.css';

const IndiaMap = () => {
  return (
    <div className="india-map-container">
      <VectorMap
        map={inMill}
        backgroundColor="transparent"
        zoomOnScroll={false}
        containerStyle={{
          width: '100%',
          height: '400px'
        }}
        regionStyle={{
          initial: {
            fill: '#e0e0e0',
            stroke: 'none',
            "stroke-width": 0,
            "stroke-opacity": 0
          },
          hover: {
            fill: '#2e7d32',
            cursor: 'pointer'
          },
          selected: {
            fill: '#1b5e20'
          }
        }}
        series={{
          regions: [
            {
              values: {
                IN: '#4caf50',
                IN_AP: '#2e7d32',
                IN_UP: '#2e7d32',
                IN_MP: '#2e7d32',
                IN_HR: '#2e7d32',
                IN_MH: '#2e7d32',
                IN_PB: '#2e7d32',
                IN_RJ: '#2e7d32',
                IN_KA: '#2e7d32',
                IN_GJ: '#2e7d32',
                IN_TN: '#2e7d32',
                IN_WB: '#2e7d32'
              },
              attribute: 'fill'
            }
          ]
        }}
        onRegionTipShow={function(e, el, code){
          el.html(el.html() + ' (Active Trading Region)');
        }}
      />
      <div className="map-legend">
        <span className="legend-item">
          <span className="legend-color active"></span>
          <span>Active Regions</span>
        </span>
        <span className="legend-item">
          <span className="legend-color coming-soon"></span>
          <span>Coming Soon</span>
        </span>
      </div>
    </div>
  );
};

export default IndiaMap;