# AWS CI/CD Pipeline for Attendance Management System

## Project Overview
This project demonstrates the implementation of a CI/CD (Continuous Integration and Continuous Deployment) pipeline using AWS cloud services for automated deployment of a web application.

The Attendance Management System is automatically deployed from GitHub to Amazon S3 using AWS CodePipeline. Whenever new code changes are pushed to the GitHub repository, the pipeline automatically deploys the updated application to the live hosted website.

---

## Tech Stack
- HTML
- CSS
- JavaScript
- Git & GitHub
- AWS S3
- AWS CodePipeline

---

## AWS Services Used
- Amazon S3
- AWS CodePipeline

---

## Features
- Automated CI/CD Pipeline
- Continuous Deployment using AWS CodePipeline
- Static Website Hosting using Amazon S3
- GitHub Integration with AWS
- Automatic deployment on every git push
- Real-time website updates
- Responsive Attendance Management Dashboard

---

## Architecture Workflow

```bash
Developer
   ↓
Git Push
   ↓
GitHub Repository
   ↓
AWS CodePipeline
   ↓
Amazon S3
   ↓
Live Website
```

---

## Project Workflow
1. Created a static Attendance Management Web Application
2. Uploaded source code to GitHub repository
3. Configured Amazon S3 for static website hosting
4. Created AWS CodePipeline for deployment automation
5. Connected GitHub with AWS CodePipeline
6. Automatically deployed application to Amazon S3
7. Implemented continuous deployment workflow

---

## Screenshots

### AWS S3 Bucket Objects 
<img width="1920" height="1020" alt="image" src="https://github.com/user-attachments/assets/a0c3f043-5b16-43eb-9e2c-d2803d8dc73e" /> 

### AWS CodePipeline Successful Deployment 
<img width="1920" height="1020" alt="image" src="https://github.com/user-attachments/assets/b60f0046-54dd-448b-aff3-e2d0f9e3938f" />

### Amazon S3 Static Website Hosting
<img width="1920" height="1020" alt="image" src="https://github.com/user-attachments/assets/fb62dea7-6f67-4e6a-b0f7-2e80f63b154a" />

### Live Website  
<img width="1920" height="1020" alt="image" src="https://github.com/user-attachments/assets/b1febb8c-ac00-4244-802d-eaa018f0ac1f" />

---

## Live Demo
Add your Amazon S3 website endpoint here.

Example:

```bash
http://attendance-app-sayali.s3-website.ap-south-1.amazonaws.com
```

---

## Challenges Faced
- Configuring Amazon S3 bucket permissions
- Enabling static website hosting
- Managing public access settings
- Configuring automated deployment workflow

---

## Key Learnings
- CI/CD Concepts
- AWS CodePipeline
- Amazon S3 Hosting
- GitHub Integration
- Automated Deployment Workflow
- DevOps Fundamentals

---

## Future Enhancements
- Add AWS CloudFront CDN
- Configure Custom Domain
- Add HTTPS Support
- Add Build and Test Stages

---
