import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const RegistrationCalibration = () => {
  const [probeType, setProbeType] = useState('');

  const renderCalibrationFields = () => {
    switch(probeType) {
      case 'Specific Conductance':
        return (
          <div className="grid grid-cols-1 gap-4">
            <div className="border-t pt-4">
              <h3 className="font-medium mb-4">Specific Conductance (μs/cm)</h3>
              <div className="grid grid-cols-5 gap-4">
                <div>
                  <label className="block text-sm mb-1">Standard Used</label>
                  <input type="text" className="w-full p-2 border rounded" />
                </div>
                <div>
                  <label className="block text-sm mb-1">Temp</label>
                  <input type="number" className="w-full p-2 border rounded" />
                </div>
                <div>
                  <label className="block text-sm mb-1">Initial SC</label>
                  <input type="number" className="w-full p-2 border rounded" />
                </div>
                <div>
                  <label className="block text-sm mb-1">Calibrated SC</label>
                  <input type="number" className="w-full p-2 border rounded" />
                </div>
                <div>
                  <label className="block text-sm mb-1">SC QA</label>
                  <input type="text" className="w-full p-2 border rounded" />
                </div>
              </div>
            </div>
          </div>
        );
      case 'pH':
        return (
          <div className="grid grid-cols-1 gap-4">
            <div className="border-t pt-4">
              <h3 className="font-medium mb-4">pH Calibration</h3>
              <div className="grid grid-cols-4 gap-4 mb-4">
                <div>
                  <label className="block text-sm mb-1">Temperature</label>
                  <input type="number" className="w-full p-2 border rounded" />
                </div>
                <div className="col-span-3">
                  <label className="block text-sm mb-1">Initial pH</label>
                  <div className="grid grid-cols-3 gap-4">
                    <input type="number" placeholder="pH4" className="w-full p-2 border rounded" />
                    <input type="number" placeholder="pH7" className="w-full p-2 border rounded" />
                    <input type="number" placeholder="pH10" className="w-full p-2 border rounded" />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-4 mb-4">
                <div>
                  <label className="block text-sm mb-1">pH mV</label>
                  <input type="number" className="w-full p-2 border rounded" />
                </div>
                <div className="col-span-3">
                  <label className="block text-sm mb-1">Calibrated pH</label>
                  <div className="grid grid-cols-3 gap-4">
                    <input type="number" placeholder="pH4" className="w-full p-2 border rounded" />
                    <input type="number" placeholder="pH7" className="w-full p-2 border rounded" />
                    <input type="number" placeholder="pH10" className="w-full p-2 border rounded" />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-1">pH 7-10 Slope (95-105%)</label>
                  <input type="number" className="w-full p-2 border rounded" />
                </div>
                <div>
                  <label className="block text-sm mb-1">pH 4-7 Slope (95-105%)</label>
                  <input type="number" className="w-full p-2 border rounded" />
                </div>
              </div>
            </div>
          </div>
        );
      case 'DO':
        return (
          <div className="grid grid-cols-1 gap-4">
            <div className="border-t pt-4">
              <h3 className="font-medium mb-4">Dissolved Oxygen (mg/L)</h3>
              <div className="grid grid-cols-6 gap-4">
                <div>
                  <label className="block text-sm mb-1">Barom. Pressure mmHg</label>
                  <input type="number" className="w-full p-2 border rounded" />
                </div>
                <div>
                  <label className="block text-sm mb-1">Temp</label>
                  <input type="number" className="w-full p-2 border rounded" />
                </div>
                <div>
                  <label className="block text-sm mb-1">Initial DO</label>
                  <input type="number" className="w-full p-2 border rounded" />
                </div>
                <div>
                  <label className="block text-sm mb-1">Calibrated DO</label>
                  <input type="number" className="w-full p-2 border rounded" />
                </div>
                <div>
                  <label className="block text-sm mb-1">Theoretical DO</label>
                  <input type="number" className="w-full p-2 border rounded" />
                </div>
                <div>
                  <label className="block text-sm mb-1">DO QA</label>
                  <input type="text" className="w-full p-2 border rounded" />
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Probe Registration & Calibration</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Registration Section */}
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="font-medium">Registration Details</h3>
              <div>
                <label className="block text-sm font-medium mb-1">Manufacturer</label>
                <input type="text" className="w-full p-2 border rounded" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Model</label>
                <input type="text" className="w-full p-2 border rounded" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">DOW Inventory #</label>
                <input type="text" className="w-full p-2 border rounded" />
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-medium">Probe Details</h3>
              <div>
                <label className="block text-sm font-medium mb-1">Probe Type</label>
                <select 
                  className="w-full p-2 border rounded"
                  value={probeType}
                  onChange={(e) => setProbeType(e.target.value)}
                >
                  <option value="">Select Type</option>
                  <option value="Specific Conductance">Specific Conductance</option>
                  <option value="pH">pH</option>
                  <option value="DO">DO</option>
                  <option value="ORP">ORP</option>
                  <option value="Temperature">Temperature</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Serial Number</label>
                <input type="text" className="w-full p-2 border rounded bg-gray-50" value="KT-2024-001" readOnly />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Expiration Date</label>
                <input type="date" className="w-full p-2 border rounded" />
              </div>
            </div>
          </div>

          {/* Calibration Section */}
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Analyst</label>
                <input type="text" className="w-full p-2 border rounded" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Date</label>
                <input type="date" className="w-full p-2 border rounded" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Time</label>
                <input type="time" className="w-full p-2 border rounded" />
              </div>
            </div>

            {renderCalibrationFields()}
          </div>

          <div className="flex space-x-4">
            <button className="flex-1 bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700">
              Save Calibration
            </button>
            <button className="flex-1 bg-gray-600 text-white p-3 rounded-lg hover:bg-gray-700">
              Print Log
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RegistrationCalibration;
