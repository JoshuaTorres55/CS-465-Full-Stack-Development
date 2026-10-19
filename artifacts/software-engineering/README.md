# CS-499 Capstone Artifact Narratives

---

## Artifact 1: Software Engineering and Design

### A. Description
This artifact is the frontend Angular administration module for the full-stack MEAN stack travel application, originally created in CS-465 (Full Stack I Web Development) and enhanced in CS-499 in October 2026.

### B. Justification
I selected this artifact because building reliable applications requires stopping malformed or missing data at the user interface before bad requests ever hit the network. The core components showcasing my skills are the Angular FormBuilder service, reactive form controls, and conditional HTML template binding. The enhancement replaced loose, unvalidated input fields with strict reactive form validation rules across trip creation and editing views. This ensured required fields like trip codes, hotel names, and dates are checked client-side, preventing broken or incomplete payloads from reaching administrative REST endpoints.

### C. Reflection
Enhancing this module taught me how reactive forms maintain UI state stability and reduce unneeded HTTP traffic. The main technical challenge was displaying real-time field error messages without cluttering the UI or throwing change-detection errors during fast typing. I resolved this by linking custom error display triggers to touched and dirty form control states. This work satisfied course outcomes around implementing software design patterns, building responsive interfaces, and applying defensive client-side controls.

---

## Artifact 2: Data Structures and Algorithms

### A. Description
This artifact is the server-side search filtering and dataset processing logic within the Express and Node.js backend of the CS-465 travel platform, refactored in CS-499 in October 2026.

### B. Justification
I selected this artifact because unoptimized data processing directly slows down response times as dataset size grows. The specific component targeted was the vacation package search route, which filters trips based on destination, budget limits, and resort features. The original implementation relied on nested forEach iteration loops that repeatedly scanned full JSON arrays in memory, causing O(n^2) time complexity. The enhancement refactored this logic using single-pass array filter methods and indexed key lookups, reducing the execution time complexity to O(n) and cutting memory allocation during search queries.

### C. Reflection
Refactoring this search routine deepened my understanding of how array iteration choices impact runtime memory and latency under API load. The primary challenge was preserving precise search results across multiple filter criteria while removing nested evaluation loops. I used Big-O time and space complexity analysis to trace execution paths before and after refactoring to verify the performance gain. This work directly met course outcomes for algorithm analysis, code optimization, and execution tuning.

---

## Artifact 3: Databases

### A. Description
This artifact is the MongoDB database schema layer and Mongoose Object Data Modeling (ODM) setup for the travel application, originally created in CS-465 and updated in CS-499 in October 2026.

### B. Justification
I selected this artifact because database structure and indexing determine both data integrity and query response speed. The key components highlighting my skills are the Mongoose schemas, schema validation constraints, and compound database indexes. The enhancement overhauled the legacy loose schemas by enforcing strict data types, setting mandatory required flags, and adding compound indexes across high-traffic search routes like code and resort. These updates prevented corrupted entries from persisting to MongoDB and sped up read operations on package lookups.

### C. Reflection
Working on this enhancement showed me how backend schema design acts as a primary defense for data consistency. The biggest challenge was balancing index coverage for search queries against write performance during trip creation. I solved this by evaluating actual API query paths and placing compound indexes specifically on combined filter routes rather than over-indexing every field. This work satisfied course outcomes related to database design, data integrity, and backend system optimization.
