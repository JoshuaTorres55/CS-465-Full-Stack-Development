# Computer Science Capstone ePortfolio

## Professional Self-Assessment
**Name:** Joshua Torres  
**Course:** CS 499: Computer Science Capstone  
**Institution:** Southern New Hampshire University

### Introduction and Professional Positioning
My path into technology grew out of an early interest in stock markets, investing, and understanding how businesses build long-term value. Choosing Computer Science was a intentional decision to master the actual engineering that powers modern companies, giving me direct technical capability rather than just theoretical concepts. Early on in my degree, my work focused heavily on backend software development and user experience design, learning how applications process data securely while keeping interfaces intuitive for the people using them. Combining that software foundation with my background in business and investing brought my goals full circle into private equity technology portfolio operations and user experience strategy. Evaluating technology assets in private equity requires looking at both sides of a platform together, verifying that backend infrastructure scales under heavy transaction volume while ensuring the user experience drives adoption and operational efficiency. Developing this ePortfolio demonstrates my ability to refactor legacy code, lock down security controls, and optimize performance across the stack, connecting engineering execution and user experience directly to real business value. 

Program Outcomes and Core Competencies 

Effective collaboration in software development requires bridging the gap between technical design and user needs. Outside of my primary capstone artifact, my work on the Guardian Life Shield caregiver application showcased how team collaboration directly shapes software usability. During paper prototyping and usability evaluation modules, I led user testing feedback loops with teammates to evaluate how non-technical caregivers navigated complex health tracking screens. By organizing structured usability feedback and establishing clean UI component guidelines, I helped align our team around consistent navigation standards and low-friction interface flows. This experience reinforced that strong team collaboration goes beyond writing code together; it requires establishing shared design standards, conducting transparent reviews, and iterating based on direct stakeholder and peer feedback. 

Communicating with Stakeholders 

Technical decisions must translate into clear business value to guide executive decision-making and project strategy. Across my technical documentation, milestone narratives, and user experience designs, I focus on explaining why a specific refactor matters for system uptime, platform security, and user retention. In my project work, I document design choices by laying out the clear trade-offs between baseline approaches and optimized architectures. Whether showing how moving to reactive Angular controls prevents invalid database entries or proving how array filtering cuts query latency, I present technical details clearly so decision-makers can act on them with confidence. 

Data Structures and Algorithms 

System performance comes down to choosing the right data structures and stripping out unoptimized code that bogs down under real user volume. In my algorithm refactoring for the CS-465 full-stack repository, I targeted the array processing and search filtering routines that handle vacation package lookups. The original codebase relied on nested iteration loops that repeatedly scanned datasets, wasting memory and slowing down response times. By evaluating execution paths through Big-O time and space complexity, I restructured the search logic to eliminate redundant loops and optimize memory allocation, making query lookups instant even as dataset size grows. 

Software Engineering and Databases 

Reliable software stops invalid data at the user interface while maintaining tight, indexed database rules on the backend. Across my software design and database updates in the CS-465 MEAN stack travel application, I overhauled both ends of the stack. On the frontend, I implemented Angular FormBuilder services with conditional template validation to reject empty or corrupted entries before network requests ever hit the server. On the backend, I built strict Mongoose schemas with explicit field requirements, exact data types, and compound indexes across high-traffic routes, protecting database integrity and keeping query speeds high. 

Security Mindset 

Building production-grade platforms means anticipating exploit vectors and locking down system access long before code hits production. I apply a defense-in-depth approach across every layer of the stack rather than relying on a single check. In my project refactoring, I enforced strict client-side validation in Angular, secured administrative REST endpoints using JSON Web Token authentication middleware, and locked down Mongoose models to reject unexpected payload mutations. I also separated environment variables completely from source control to protect credentials, ensuring sensitive user data remains protected under real-world operational conditions. 

Synthesis of Artifacts 

The enhanced full-stack MEAN repository brings together software engineering, algorithmic refactoring, and database optimization into a single, production-ready system. The software design updates establish rigid frontend input validation and responsive error handling; the algorithm optimization streamlines search filtering and execution paths; and the database updates lock down schema integrity and query execution speed. Together, these three enhancements demonstrate a complete end-to-end software development lifecycle, proving my readiness to evaluate, engineer, and scale complex technology assets. 


## Project Overview: Travlr Getaways Application

Travlr Getaways Full-Stack Application 
The Travlr Getaways application features a decoupled architecture designed to meet modern web standards. The customer-facing interface utilizes Express and Handlebars for server-side rendering to optimize search engine performance, while the administrative dashboard is built as an Angular Single-Page Application (SPA) to provide a rich, asynchronous user experience. MongoDB was selected for this project because its document-based structure supports the flexible storage of travel package data, avoiding the rigid schema constraints typical of relational databases and allowing for more efficient data serialization. 

JSON serves as the essential bridge between the backend logic and the frontend presentation layers. By utilizing JSON for data interchange, the application ensures that the client-side services can consume API responses seamlessly, which maintains a clean separation of concerns throughout the full stack. During the development process, I focused on refactoring the UI into modular, reusable components for trip listings and data entry forms. This approach significantly reduced code redundancy and improved the maintainability of the administrative dashboard as new functionality was integrated. 

Testing the application involved verifying both public data retrieval routes and secure, authenticated API endpoints. To ensure data integrity, I implemented JSON Web Tokens (JWT) for the administrative login flow. This security layer ensures that sensitive data modification routes, specifically the POST and PUT operations, are restricted to authorized users. This process deepened my understanding of how to manage secure state transitions and protect sensitive backend resources. 

This course has been instrumental in my professional growth, providing me with the opportunity to master the end-to-end lifecycle of a full-stack web application. By navigating the complexities of the MEAN stack—from database schema design to the implementation of authentication middleware—I have developed a stronger foundation in architectural design and secure coding practices. These skills are highly applicable to my career goals and have provided me with a robust framework for building and scaling professional-grade web applications in the future. 
