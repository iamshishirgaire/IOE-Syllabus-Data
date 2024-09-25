1. **Introduction (4 hours)**
    - History of numerical computations of civil engineering problems
    - Brief description of solution techniques:
        - Finite element method
        - Finite difference method
        - Boundary element method
        - Discrete element method
        - Smoothed particle hydrodynamics
    - Review of programming methods: (C or FORTRAN or Matlab)
2. **Solutions of linear equations (6 hours)**
    - System of linear equations
    - Banded matrices
    - Data storage and memory optimization
    - Conjugate gradient method
    - Fourier Integral
        - Discrete Fourier Transform
        - Fast Fourier Transform
3. **Elasticity in solids (6 hours)**
    - Stress displacement relationship
    - Stress-strain (constitutive) relations
        - 3D state of solid, Lame constants
        - Plane stress and plane strain condition
        - Axi-symmetric stresses
    - Equilibrium equations
4. **Finite element method (14 hours)**
    - Direct stiffness method
        - Stiffness matrices for bar, truss and beam element matrices
        - Transformation matrices for 2D and 3D cases and assembly
        - Example of a truss
    - Coordinate system - local, global, natural
    - Interpolation functions
        - Pascal triangle
        - Polynomial function
        - Lagrangian element
        - Hermite interpolation for beam element
        - Serendipidity element
    - Application in solid and frames
        - Formulation of stiffness matrices for bars, truss, beams and area (triangle) elements
        - Isoparametric formulation (linear displacement field only) – 2D triangle and quadrilateral
        - Example of dam: Calculate stresses giving pressure loads using computer programs
        - Example on wall: Calculate stresses giving vertical loads using computer programs
        - Example on wall: Calculate stresses giving vertical loads using computer programs
    - General introduction to pre and post processing
5. **Finite difference method (7 hours)**
    - Finite differences
    - Explicit scheme and Implicit Scheme
    - Governing equations of movement of fluid (Momentum and continuity equations)
    - Discretization of Kinematic wave Equation (linear and non linear)
    - Order of accuracy of the scheme and its applications
    - Numerical diffusion, dispersion and stability of scheme
    - Applications of the schemes in hydraulic channel routing
    - Implicit dynamic wave model
    - Finite difference scheme for Saint-Venant equations
6. **Method of Characteristics (4 hours)**
    - Introduction
    - Characteristics
    - Initial and boundary conditions
    - Solution to unsteady flow in pipes
7. **Simulation of Ground water flow (4 hours)**
    - Steady state flow nets and finite difference grid
    - Simulation of seepage under a dam
    - One dimensional Implicit Model
    - Application in river-Groundwater system


### Tutorials

- **Introduction (2 hours)**
    - Theory, definition and concept type questions
    - Practical: Home work to make programs in C or FORTRAN or Matlab languages
- **Solutions of linear equations (6 hours)**
    - Theory, definition and concept type questions
    - Practical examples, and numerical examples types questions
    - Write algorithm and computer programs to solve the problems
- **Elasticity in solid (2 hours)**
    - Theory, definition and concept type questions
    - Practical examples of various conditions of stresses
- **Finite element method (FEM) (10 hours)**
    - Theory, definition and concept type questions
    - Practical examples, numerical examples and derivation type questions
    - Analyze beams and simple frames
- **Finite difference method (4 hours)**
    - Theory, definition and concept type questions
    - Practical examples, numerical examples and derivation type questions, exercises on Hydraulic channel routing
- **Method of Characteristics (2 hours)**
    - Theory, definition and concept type questions, Solution of unsteady flow 
- **Simulation of Ground water flow (4 hours)**
    - Theory, definition and concept type questions, exercises on Seepage under dam and River stage –Water table evaluation

### Assignments

1. Analyze a 2D dam to find stresses giving water pressure and surcharge
2. Analyze a 2D wall panel to find stresses giving vertical loads
3. Analyze 2 storey 2 bay frame and draw bending moments and shear force diagrams
4. Write source codes to solve Saint-Venant equations marks distribution.


### References

1. P. Karasudhi, Foundation of Solid Mechanics, Kluwer Acedemic Publishers, 1991.
2. O. C. Zienkiewicz, R. L. Taylor, Finite Element for Structural, Vol. 1, 2 & 3, Elsevier, 2000. 
3. D. V. Huttan, Fundamentals of Finite Element Analysis, TATA McGRAW-HILL, 2004.
4. T. R. Chandrapatla and A. D. Belegundu, Introduction to Finite Elements in Engineering, PHI, 2000.
5. W. H. Press, S. A. Teukolsky, W. T. Vetterling, B. P. Flannery, Numerical Recipes in C, The Art of Scientific Computing, Second Edition, Cambridge University Press.
6. W. H. Press, S. A. Teukolsky, W. T. Vetterling, B. P. Flannery, Numerical Recipes in Fortran, The Art of Scientific Computing, Second Edition, Cambridge University Press. 
7. Ralph A.Wurbs, Wesley p.James, Water Resources Engineering, Prentice-Hall India.
8. M. Hanif Chaudhry, Open Channel Flow, Prentice-Hall India.
9. Ven Te Chow, D.R. Maidment, L.W. Mays, Applied Hydrology, McGraw-Hill


### Evaluation Scheme

The questions will cover all the chapters in the Syllabus. The evaluation scheme will be as indicated in the table below.

| Chapter   | Hours  | Marks Distribution* |
| --------- | ------ | ------------------- |
| 1         | 4      | 8                   |
| 2         | 6      | 8                   |
| 3         | 6      | 10                  |
| 4         | 14     | 16                  |
| 5         | 7      | 12                  |
| 6         | 4      | 8                   |
| 7         | 4      | 8                   |
| **Total** | **45** | **80**              |
