## **Subject Content**

1. **Introduction (4 hours)**
    * Brayton Cycle
    * Types of Jet Engine
    * Components of Jet Engine
    * Basics of Total and Static Enthalpies
    * Thrust Equations and Propulsive Efficiencies
2. **Fundamentals of Thermal Turbo-machines (8 hours)**
    * Review on Compressible Aerodynamics
    * Turbo-machine System Discretization
    * Fundamental Equations:
        * Conservation of Mass
        * Conservation of Energy
        * Conservation of Momentum
        * Euler's Turbine Equation
        * Rothalpy
    * Efficiencies
        * Isentropic Efficiency
        * Calculating with Isentropic Efficiencies
        * Polytropic Efficiency
3. **Combustion Chambers and Nozzles (8 hours)**
    * Classification of combustion chambers
    * Important factors affecting combustion chamber design
    * Combustion process
    * Combustion chamber performance
    * Effect of operating variables on performance
        * Flame tube cooling
        * Flame stabilization
        * Use of flame holders
    * Theory of flow in isentropic nozzles
    * Convergent nozzles and nozzle choking
    * Nozzle throat conditions
        * Nozzle efficiency
        * Losses in nozzles
        * Over expanded and under Expanded nozzles
        * Ejector and variable area nozzles
        * Interaction of nozzle flow with adjacent surfaces
4. **Compressors (14 hours)**
    * Types of Compressors
    * Stage Velocity Triangle
    * First Design Parameter: Degree of Reaction
    * Second Design Parameter: Loading Factor
    * Third Design Parameter: Flow Coefficient
    * The Normalized Velocity Triangle
    * Special Cases:
        * Degree of Reaction equal to one half (R = 0.5)
        * Zero Exit Swirl (Cθ,3 = 0)
    * Simplified Off-Design Analysis
    * Axial Compressor - Effect of Degree of Reaction
    * Compressor Design Aspects
        * Axial Compressor Rotor Types
        * Multiple Rotors
        * Rotor Blade Mount
        * Stator Vane Mount
        * Variable Stage Geometry
    * Surge Control (Bleed Valve)
    * Boundary Layer Control
    * Aspiration
    * Blade Twist
5. **Turbines (12 hours)**
    * Types of Turbine
    * Stage Velocity Triangles
    * First Design Parameter: Degree of Reaction
    * Second Design Parameters: Loading Factor
    * Third Design Parameters: Flow Coefficient
    * The Normalized Velocity Triangle
    * Special Cases:
        * Degree of Reaction Equal to Zero (R = 0; Action Turbine)
        * Degree of Reaction equal to one half (R = 0.5; Reaction Turbine)
        * Zero Exit Swirl (Cθ,3 = 0)
    * Axial Turbine - Effects of Degree of Reaction
    * Turbine Design Aspects:
        * Disk Rotor
        * Drum Rotor
        * Sealing Aspects
        * Action Turbine
        * Reaction Turbine
        * Turbine Blade Geometry
        * Three-Dimensional Effects
    * Design of Multistage Turbine
    * System Discretization
    * Problem Statement:
        * Determination of Approximate Flow Parameters
        * Determination of Inlet and Outlet Angular Geometry
        * Determination of Number of Stages
        * Determination of Stage Efficiency
        * First Iteration of Flow Parameters
        * Finalization of First Iteration
6. **Losses in Turbo-machines (4 hours)**
    * Losses
    * Losses in a Turbine Stage
    * Loss Coefficients
    * Dependency of the Efficiency from Design Parameters
    * Reaction Turbine (R = 0.5)
    * Action Turbine (R = 0)
7. **Propulsion (10 hours)**
    * Turbine Engines
        * Construction Arrangement and operation of turbojet, turbofan, turbo-shaft, and turbo-propeller engines.
        * Electronic Engine Control and Fuel Metering Systems (FADEC)
    * Engine Indicating Systems (EICAS/ECAM)
        * EGT/ITT
        * Engine Speed
        * Engine Thrust Indication
        * Oil Pressure and Temperature
        * Fuel Pressure, Temperature, and Flow
        * Manifold Pressure, Engine Torque, and Propeller Speed
    * Starting and Ignition System
        * Operation of Engine Start Systems and Components
        * Ignition Systems and Components
        * Maintenance Safety Requirements

### References

1. Dixon, S.L., 1998 "Fluid Mechanics and Thermodynamics of Turbomachinery" 4th Edn. Butterworth-Heinemann, Woburn, MA, USA, 1998 (ISBN 0-7506-7059-2)
2. Soderberg, C.R., 1949 Unpublished Note, Gas Turbine Laboratory, Massachusetts Institute of Technology
3. Hill, P.G. & Peterson, C.R. “Mechanics & Thermodynamics of Propulsion” Addison – Wesley Longman INC, 1999.
4. Cohen, H. Rogers, G.F.C. and Saravanamuttoo, H.I.H. “Gas Turbine Theory”, Longman, 1989.
5. Oates, G.C., “Aero thermodynamics of Aircraft Engine Components”, AIAA Education Series, New York, 1985.
6. “Rolls Royce Jet Engine” – Third Edition – 1983.
7. Mathur, M.L. and Sharma, R.P., “Gas Turbine, Jet and Rocket Propulsion”, Standard Publishers & Distributors, Delhi, 1999.
8. Sutton, G.P., “Rocket Propulsion Elements”, John Wiley & Sons Inc., New York, 5th Edn., 1993.
9. [http://web.mit.edu/16.unified/www/SPRING/propulsion/notes/node70.html](http://web.mit.edu/16.unified/www/SPRING/propulsion/notes/node70.html)
10. FAA Aircraft Propulsion 12A and 15A

## Project

1. Simulation of Axial Compressor or Turbine in available CFD Software. Details of Project:

    * Euler's Radius = <u>                        </u> 
    * Pressure Ratio of a stage = <u>             </u> 
    * Mass Flow Rate (kg/s) = <u>               </u> (Through a sector)
    * Thermal Head (J)    = <u>          </u>  (Total quantity)
    * Density of gas (kg/m3) = <u>                  S      </u> (average value in that sector)
    * Stage Inlet Temperature (K)  = <u>        </u> 
    * Stage Pressure at Inlet = <u>                        </u> 
    * Tip Clearance= <u>          </u>(% of blade span)

**Hint:**

1. Use Euler's Turbine Equation to find the LE and TE stagger angle.
2. Approximate a curve tangential to these curves found in step 1.
3. Use appropriate airfoil/thickness ratio for 2D design.
4. Develop 3D design from data and above steps.
5. Carry out CFD simulation for the given conditions

**Note:** Assume appropriate data if missing.

## Evaluation Scheme

The questions will cover all the chapters of the syllabus. The evaluation scheme will be as indicated in the table below:

| Unit      | Chapter | Topics | Marks  |
| --------- | ------- | ------ | ------ |
| 1         | 1 & 3   | All    | 16     |
| 2         | 4       | All    | 16     |
| 3         | 5       | All    | 16     |
| 4         | 2 & 6   | All    | 16     |
| 5         | 7       | All    | 16     |
| **Total** |         |        | **80** |

