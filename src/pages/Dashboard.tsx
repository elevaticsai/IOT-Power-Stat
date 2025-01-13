import React from 'react';
import Sidebar from '../components/Sidebar';
import EnergyConsumptionChart from '../components/EnergyConsumptionChart';
import PowerDistributionChart from '../components/PowerDistributionChart';
import PowerChart from '../components/PowerChart';
import VoltageFrequencyChart from '../components/VoltageFrequencyChart';
import WeeklyUsageChart from '../components/WeeklyUsageChart';
import AlarmsTable from '../components/AlarmsTable';
import GaugeChart from '../components/GaugeChart';

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <GaugeChart value={2769} label="Current Power" unit="W" color="purple" />
            <GaugeChart value={17.60} label="Current" unit="A" color="red" />
            <GaugeChart value={229.70} label="Voltage" unit="V" color="purple" />
            <GaugeChart value={60.90} label="Frequency" unit="Hz" color="red" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-lg font-medium mb-4">Energy Consumption</h2>
              <EnergyConsumptionChart />
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-lg font-medium mb-4">Power Distribution</h2>
              <PowerDistributionChart />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-lg font-medium mb-4">Power & Current</h2>
              <PowerChart />
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-lg font-medium mb-4">Voltage & Frequency</h2>
              <VoltageFrequencyChart />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-lg font-medium mb-4">Weekly Usage Pattern</h2>
              <WeeklyUsageChart />
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-lg font-medium mb-4">Recent Alarms</h2>
              <AlarmsTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}