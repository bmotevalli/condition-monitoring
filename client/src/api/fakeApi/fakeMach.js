import mach from "./sensordata.json"

const machines = mach

export default {
    
    getAllMachines = () => {
        return machines
    },
    getMachineById = (mach_id) => {
        return machines.find((mach) => {
            return mach.machId === mach_id
        })
    },

    getMachineByTimeInterval = () => {

    },

    getAllSensors = () => {
        
    },

    getSensorsByID = () => {

    },

    getSensorsByMachId = () => {

    }
}