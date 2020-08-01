import mach from "./sensordata.json";
import * as ST from "../../settings/settings";

const machines = mach;

export const getAllMachines = () => {
  return machines.map((mach) => {
    return {
      lat: mach.coordinate.lat,
      lng: mach.coordinate.lng,
      name: mach.name,
      id: mach.machId,
      numSensors: mach.sensors.length,
    };
  });
};

export const getMachineById = (mach_id) => {
  return machines.find((mach) => {
    return mach.machId === mach_id;
  });
};

export const getMachineByTimeInterval = () => {};

export const getAllSensors = () => {};

export const getSensorsByID = (selectedMach, sensId) => {
  let sensor = selectedMach.sensors.find((o) => o.sensId === sensId);

  let t0 = 0;
  const elapsedTime = sensor.histData.map((data, index) => {
    let t = new Date(data.timestamp);
    if (index === 0) {
      t0 = t;
    }

    let dt = t - t0;
    let diffMins = Math.round((dt / 3600000) * 60);
    switch (sensor.senstype) {
      case ST.SENSE_TYPES.PRES:
        return {
          t: diffMins,
          P: data.value.P,
        };
      case ST.SENSE_TYPES.TEMP:
        return {
          t: diffMins,
          T: data.value.T,
        };
      case ST.SENSE_TYPES.VIBR:
        return {
          t: diffMins,
          X: data.value.X,
          Vel: data.value.Vel,
          Acc: data.value.Acc,
        };
    }
  });

  sensor.histData = elapsedTime;

  return sensor;
};

const parseDateTime = (DateTime) => {};

export const getSensorsByMachId = () => {};
