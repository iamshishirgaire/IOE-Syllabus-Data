## Syllabus: Speech Processing (CT 785 08)

**Course Objectives:**

1. To introduce the characteristics of Speech signals and the related time and frequency domain methods for speech analysis and speech compression.
2. To introduce the models for speech production.
3. To develop time and frequency domain techniques for estimating speech parameters.
4. To introduce a predictive technique for speech compression.
5. To understand speech recognition, synthesis and speaker identification.

**Syllabus:**

1. **Nature of speech signal [8 hours]**
    * Speech production: Mechanism of speech production
    * Acoustic phonetics
    * Digital models for speech signals
    * Representations of speech waveform
        * Sampling speech signals
        * Basics of quantization
        * Delta modulation
        * Differential PCM 

2. **Time domain methods for speech processing [8 hours]**
    * Time domain parameters of Speech signal
    * Methods for extracting the parameters
        * Short-time Energy
        * Average Magnitude
        * Short-time average Zero crossing Rate 
    * Auditory perception: psychoacoustics.
    * Silence Discrimination using ZCR and energy
    * Short Time Auto Correlation Function
    * Pitch period estimation using AutoCorrelation Function

3. **Frequency domain method for speech processing [10 hours]**
    * Short Time Fourier analysis
        * Fourier transform and linear filtering interpretations
        * Sampling rates
    * Spectrographic displays
    * Pitch and formant extraction
    * Analysis by Synthesis
    * Analysis synthesis systems
        * Phase vocoder
        * Channel Vocoder
    * Homomorphic speech analysis
        * Cepstral analysis of Speech
        * Formant and Pitch Estimation
        * Homomorphic Vocoders

4. **Linear predictive analysis of speech [10 hours]**
    * Basic Principles of linear predictive analysis
    * Auto correlation method
    * Covariance method
    * Solution of LPC equations
    * Cholesky method
    * Durbin's Recursive algorithm
    * Application of LPC parameters
        * Pitch detection using LPC parameters
        * Formant analysis
        * VELP
        * CELP

5. **Application of speech & audio signal processing [9 hours]**
    * Algorithms: 
        * Dynamic time warping
        * K-means clustering and Vector quantization
        * Gaussian mixture modeling
        * Hidden Markov modeling
    * Automatic Speech Recognition
        * Feature Extraction for ASR
        * Deterministic sequence recognition
        * Statistical Sequence Recognition
        * Language models
    * Speaker identification and verification
    * Voice response system
    * Speech synthesis
        * Basics of articulatory
        * Source-filter
        * Concatenative synthesis

**Practical:**

There should be 4-6 experiments based on following topics:

1. Spectral analysis
2. Time-Frequency analysis
3. Pitch extraction
4. Formant tracking
5. Speech enhancement
6. Audio coding
7. Speaker recognition

All these lab works may be performed in Matlab or similar softwares capable of processing speech signals. It can also be implemented in hardware if available.

**References:**

1. Thomas F. Quatieri, "Discrete-Time Speech Signal Processing", Prentice Hall /Pearson Education.
2. Ben Gold and Nelson Morgan, "Speech and Audio Signal Processing", John Wiley and Sons Inc.
3. L.R.Rabiner and R.W.Schaffer, "Digital Processing of Speech signals", Prentice Hall
4. L.R. Rabiner and B. H. Juang, "Fundamentals of Speech Recognition", Prentice Hall.
5. J.R. Deller, J.H.L. Hansen and J.G. Proakis, "Discrete Time Processing of Speech Signals", John Wiley, IEEE Press.
6. J.L Flanagan, "Speech Analysis Synthesis and Perception", Springer, Verlag.

**Evaluation Scheme:**

The questions will cover all the chapters of the syllabus. The evaluation scheme will be as indicated in the table below:

| Chapters | Hours | Marks Distribution* |
|---|---|---|
| 1 | 8 | 14 |
| 2 | 8 | 14 |
| 3 | 10 | 18 |
| 4 | 10 | 18 |
| 5 | 9 | 16 |
| **Total** | **45** | **80** |

* There could be a minor deviation in Marks distribution

**Copyright&copy; 2021** 
