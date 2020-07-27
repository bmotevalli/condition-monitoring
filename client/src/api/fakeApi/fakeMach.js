import mach from "./sensordata.json";

const machines = mach;

export const getAllMachines = () => {
  return machines;
};

export const getMachineById = mach_id => {
  return machines.find(mach => {
    return mach.machId === mach_id;
  });
};

export const getMachineByTimeInterval = () => {};

export const getAllSensors = () => {};

export const getSensorsByID = () => {};

export const getSensorsByMachId = () => {};
