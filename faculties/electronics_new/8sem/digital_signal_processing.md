## Syllabus

**Digital Signal Processing**

**Course Objectives:**

1. To introduce digital signal processing techniques and applications.
2. To design and implement IIR and FIR digital filters.

### Topics:

1. **Introduction (4 hours)**
    * Basic elements of Digital Signal Processing
    * Need of Digital Signal Processing over Analog Signal Processing
    * A/D and D/A conversion
    * Sampling continuous signals and spectral properties of sampled signals
2. **Discrete-time Signals and System (6 hours)**
    * Elementary discrete-time signals
    * Linearity, Shift invariance, Causality of discrete systems
    * Recursive and Non-recursive discrete-time systems
    * Convolution sum and impulse response
    * Linear Time-invariant systems characterized by constant coefficient difference equations
    * Stability of LTI systems, Implementation of LTI system
3. **Z-Transform (6 hours)**
    * Definition of the z-transform
    * One-side and two-side transforms, ROC, Left-side, Right-sided and two-sided sequences, Region of convergence, Relationship to causality
    * Inverse z-transform-by long division, by partial fraction expansion
    * Z-transform properties-delay advance, Convolution, Parseval's theorem
    * Z-transform function H(z)-transient and steady state sinusoidal response, pole-zero relationship stability
4. **Discrete Fourier Transform (7 hours)**
    * Definition and applications, Frequency domain sampling and for reconstruction, Forward and Reverse transforms, Relationship of the DFT to other transforms
    * Properties of the Discrete Fourier Transform: Periodicity, Linearity and Symmetry Properties, Multiplication of two DFTs and Circular Convolution, Time reversal, Circular time shift and Multiplication of two sequences circular frequency shift, Circular correlation and Parseval's Theorem
    * Efficient computation of the DFT: Algorithm, applications, Applications of FFT Algorithms
5. **Implementation of Discrete-time System (8 hours)**
    * Structures for FIR and IIR, Direct Form, Cascaded and parallel form, Lattice for FIR
    * Conversion between direct form and lattice and vice verse, Lattice and lattice-ladder for IIR
    * Frequency response
    * Digital filters, finite precision implementations of discrete filters
    * Representation of Numbers; fixed point and floating binary point, Effect of Rounding and truncation; Limit cycle oscillations effect
    * Quantization of filter coefficients and effects on location of poles, and zeros; pole perturbation, Overflow and underflow error, Scaling to prevent overflow and underflow
6. **IIR Filter Design (5 hours)**
    * IIR Filter Design: IIR filter design by classical filter design using low pass approximations Butterworth, Chebychev, Inverse Chebyshev, Elliptic and Bessel-Thompson filters
    * IIR filter design by Impulse-invariant method, Bilinear Transformation Method, Matched z-transform method
    * IIR lowpass discrete filter design using bilinear transformation
    * Spectral transformations, Highpass, Bandpass and Notch filters
7. **FIR Filter Design (5 hours)**
    * FIR filter design by Fourier approximation
    * Gibbs phenomena in FIR filter design, Design of Linear Phase FIR filters using window function, Applications of window functions to frequency response smoothing
    * Window functions, Rectangular, Hamming, Blackman and Kaiser windows
    * Design of linear phase FIR filter by the frequency sampling method
    * FIR filter design using the Remez exchange algorithm
    * Design of optimum equiripple linear-phase FIR filters
8. **Digital Filter Implementation (4 hours)**
    * Implementations using special purpose DSP processors
    * Bit-serial arithmetic, pipelined implementations
    * Distributed arithmetic implementations

### Practical:

1. Study the behavior of a simple digital notch filter.
2. Response of a recursive digital.
3. Scaling, dynamic range and noise behavior of a recursive digital filter, observation of nonlinear finite precision effects.
4. Response of a non-recursive digital filter, Implementation in Impulse Invariant and Bilinear Transformation.
5. Band pass filters implemented using cascade second order sections and wave or ladder filters, Comparison of implementations.
6. Design of FIR filter using window method, Comparison of FIR filter for different windowing method.

### References:

1. J.G. Proakis and D.G. Manolakis, *Digital Signal Processing,* Prentice Hall of India. 2009
2. A.V. Oppenheim, *Discrete-Time Signal Processing,* Prentice Hall, 2009.
3. S.K. Mitra, *Digital Signal Processing, A Computer-based Approach,* McGraw Hill, 2008

### Evaluation Scheme:

| Unit | Hour | Marks Distribution* |
|---|---|---|
| 1 | 4 | 7 |
| 2 | 6 | 11 |
| 3 | 6 | 11 |
| 4 | 7 | 13 |
| 5 | 8 | 14 |
| 6 | 5 | 9 |
| 7 | 5 | 9 |
| 8 | 4 | 6 |
| **Total** | **45** | **80** |

**\* There can be 8 to 12 questions covering all Syllabuses<br>
*There can be minor deviations in the numbers** 
