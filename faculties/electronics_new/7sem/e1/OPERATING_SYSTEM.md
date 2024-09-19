# Syllabus

## Operating System

**CT 725 06**

**Course Objective:**

The objective of the course is to be familiar with the different aspects of operating system and use the idea in designing operating system. 

### Course Outline

1. **Introduction (5 hours)**

   * Operating System and Function
   * Evolution of Operating System
   * Type of Operating System: Batch, Interactive, Multiprocessing, Time Sharing and Real Time System
   * Operating System Components
   * Operating System Structure: Monolithic, Layered, Micro-Kernel, Client-Server, Virtual Machine
   * Operating System Services
      * System calls
      * Shell commands
      * Shell programming
   * Examples of O. S.: UNIX, Linux, MS-Windows, Handheld OS.

2. **Process Management (6 hours)**

   * Introduction to Process
      * Process description
      * Process states
      * Process control
   * Threads
   * Processes and Threads
   * Scheduling
      * Types of scheduling
      * Scheduling in batch system
      * Scheduling in Interactive System
      * Scheduling in Real Time System
      * Thread Scheduling
   * Multiprocessor Scheduling concept

3. **Process Communication and Synchronization (5 hours)**

   * Principles of Concurrency
   * Critical Region
   * Race Condition
   * Mutual Exclusion
   * Semaphores and Mutex
   * Message Passing
   * Monitors
   * Classical Problems of Synchronization: Readers-Writers Problem, Producer Consumer Problem, Dining Philosopher problem

4. **Memory Management (6 hours)**

   * Memory address, Swapping and Managing Free Memory Space
   * Resident Monitor
   * Multiprogramming with Fixed Partition
   * Multiprogramming With Variable Partition
   * Multiple Base Register
   * Virtual Memory Management
      * Paging
      * Segmentation
      * Paged Segmentation
   * Demand Paging
   * Performance
   * Page Replacement Algorithms
   * Allocation of Frames
   * Thrashing

5. **File Systems (6 hours)**

   * File: Name, Structure, Types, Access, Attribute, Operations
   * Directory and File Paths
   * File System Implementation
      * Selecting Block Size
      * Impact of Block Size Selection
      * Implementing File: Contiguous Allocation, Link List Allocation, Link List Allocation with Table, Inode
      * Implementing Directory
   * Impact of Allocation Policy on Fragmentation
   * Mapping File Blocks on The Disk Platter
   * File System Performance
   * Example File Systems: CD ROM file system, MS-DOS file system, Unix File system

6. **I/O Management & Disk Scheduling (4 hours)**

   * Principles of I/O Hardware
   * Principles of I/O software
   * I/O software Layer
   * Disk
      * Hardware
      * Formatting
      * Arm scheduling
      * Error handling
      * Stable Storage

7. **Deadlock (5 hours)**

   * Principles of deadlock
   * Deadlock Prevention
   * Deadlock Avoidance
   * Deadlock Detection
   * Recovery from deadlock
   * An Integrated Deadlock Strategies
   * Other Issues: Two phase locking, Communication Deadlock, Livelock, Starvation

8. **Security (4 hours)**

   * Security breaches
   * Types of Attacks
   * Security Policy and Access Control
   * Basics of Cryptography
   * Protection Mechanisms
   * Authentication
   * OS Design Considerations For Security
   * Access Control Lists And OS Support

9. **System administration (4 hours)**

   * Administration Tasks
   * User Account Management
   * Start And Shutdown Procedures
   * Setting up Operational Environment for a New User
   * AWK tool, Search, Sort tools, Shell scripts, Make tool

### Practical

1. Shell commands, shell programming: write simple functions, basic tests, loops, patterns, expansions, substitutions
2. Programs using the following system calls of UNIX operating system: fork, exec, getpid, exit, wait, close, stat, opendir, readdir
3. Programs using the I/O system calls of UNIX operating system
4. Implement the Producer – Consumer problem using semaphores.
5. Implement some memory management schemes

### References

1. Andrew S. Tanenbaum, "Modern Operating Systems", 3rd Edition, PHI
2. Stalling William, "Operating Systems", 6th Edition, Pearson Education
3. Silbcrschatz A.,Galvin P., Gagne G., "Operating System Concepts", 8th Edition, John Wiley and Sons,
4. Milan Milenkovic, "Operating Systems Concepts and Design", TMGH
5. Das Sumitabha, "Unix Concepts and Applications", 3rd Edition, Tata McGraw Hill, 2003
6. M. J. Bach, "The Design of The Unix Operating System", PHI.
7. Charles Crowley, "Operating Systems: A Design-oriented Approach", TMH.

### Evaluation Scheme

The questions will cover all the chapters of the syllabus. The evaluation scheme will be as indicated in the table below.

| Chapters | Hour | Marks Distribution* |
|---|---|---|
| 1 | 5 | 10 |
| 2 | 6 | 10 |
| 3 | 5 | 10 |
| 4 | 6 | 10 |
| 5 | 6 | 10 |
| 7 | 5 | 10 |
| 6, 8, 9 | 12 | 20 |
| **Total** | **45** | **80** |

*There may be minor deviation in marks distribution

## Copyright &copy; 2021 