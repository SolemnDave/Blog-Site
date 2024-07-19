## Architecture

<img src="public/ProjectBlogArch.png" alt="Project Blog Architecture" width="800"/>

<a href="public/ProjectBlogArch.txt" target="_blank" rel="noopener noreferrer">View Architecture Detail</a>

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup](#setup)

## Overview

Creating my first personal blog site in my attempt to practice frontend development and website hosting over a Linux server, distributed using Terraform and a shell script.

This project encapsulates the full lifecycle of a modern web application, from design and development to deployment and continuous integration. It's a comprehensive showcase of utilizing a variety of technologies and services, primarily focusing on React for frontend development and AWS services for hosting and deployment.

## Features

- **Automated Infrastructure Deployment:** Use Terraform to deploy and configure AWS resources automatically.

- **Efficient Resource Management:** Provision and manage AWS resources with Terraform, minimizing manual tasks.

- **Scalable Frontend Hosting:** Host a React frontend on EC2 using Nginx for efficient static content serving.

- **Domain Management:** Manage domain names with Route 53, integrated with CloudFront for distribution.

- **Secure Connections:** Implement HTTPS with AWS ACM for SSL/TLS certificates, ensuring secure communication.

- **Content Distribution:** Use CloudFront as a CDN for low-latency, high-speed content delivery.

- **Dynamic Configuration:** Employ shell scripts for dynamic tasks like setting up Nginx and managing permissions.

- **Version Control:** Manage infrastructure as code with Git for version tracking, collaboration, and rollbacks.

- **Cross-Platform Compatibility:** Ensure deployment works across different environments and operating systems.

- **Enhanced Security:** Secure SSH access with IAM roles and policies, and fine-tune security group rules.

## Tech Stack

- **React:** JavaScript library for building user interfaces.
- **Nginx:** Web server used to serve the React application.
- **AWS EC2:** Virtual servers in the cloud to host the application.
- **AWS Route 53:** Domain name system (DNS) web service for domain management.
- **AWS CloudFront:** Content Delivery Network (CDN) for fast content delivery.
- **AWS ACM:** AWS Certificate Manager for managing SSL/TLS certificates.
- **Terraform:** Infrastructure as Code (IaC) tool for provisioning and managing AWS resources.
- **Git:** Version control system for tracking code changes and collaboration.
- **Shell Scripting:** For automating configuration tasks on the server.
- **IAM:** AWS Identity and Access Management for securing SSH access and managing permissions.

## Setup

1.  **Frontend Development:**

    - **React Application:**
      Create a new React application using Create React App.
      Develop the components, pages, and assets for your blog site.
      Test the application locally to ensure it works as expected.
      Build the production version of the React app using npm run build.

2.  **Infrastructure as Code with Terraform:**

    - **AWS Configuration:**
      Set up AWS credentials and configure the AWS CLI.
      Define variables for your Terraform configuration, such as region, instance_type, key_name, domain_name, hosted_zone_id, and certificate_arn.

    - **Terraform Scripts:**
      Create main.tf for defining AWS resources like EC2 instances, security groups, and EIP.
      Create variables.tf for managing input variables.
      Create provider.tf for AWS provider configuration.
      Create outputs.tf for defining output values.
      Create a shell script (setup_ssh_keys.sh) for managing SSH keys.

    - **Resource Definition:**
      Define an EC2 instance with the Amazon Linux 2 AMI.
      Set up a security group allowing SSH and HTTP traffic.
      Associate an Elastic IP (EIP) with the EC2 instance.
      Configure Route 53 for domain name management.
      Set up CloudFront for content delivery and ACM for SSL certificates.

3.  **Deploying Infrastructure:**

    - **Terraform Deployment:**
      Initialize Terraform with terraform init.
      Validate the configuration with terraform validate.
      Plan the deployment with terraform plan.
      Apply the deployment with terraform apply -auto-approve.

4.  **Server Configuration:**

    - **SSH into EC2 Instance:**
      Connect to your EC2 instance using the SSH key pair.

      ```bash
      ssh -i ~/path_to_your_ssh_key.pem ec2-user@your_instance_ip
      ```

    - **Install and Configure Nginx:**
      Update the system packages:

      ```bash
      sudo yum update -y
      ```

      - Install Nginx: sudo amazon-linux-extras install nginx1 -y.

        ```bash
        sudo amazon-linux-extras install nginx1 -y.
        ```

      - Start and enable Nginx:

        ```bash
        sudo systemctl start nginx && sudo systemctl enable nginx.
        ```

    - **Deploy Frontend:**

      SCP the build folder from your local machine to the EC2 instance:

      ```bash
      scp -i ~/path_to_your_ssh_key -r ~/path_to_your_project/build/\* ec2-user@your_instance_ip:/usr/share/nginx/html
      ```

    - **Configure Nginx:**

      Set up Nginx to serve the React application by editing the Nginx configuration file:

      ```bash
      sudo nano /etc/nginx/nginx.conf
      ```

      Add the following server block:

      ```bash
      server {
      listen 80;
      server_name your_domain_or_ip;

      root /usr/share/nginx/html;
      index index.html index.htm;

      location / {
          try_files $uri $uri/ /index.html;
      }
      }
      ```

      Restart Nginx to apply the changes:

      ```bash
      sudo systemctl restart nginx
      ```

5.  **Verify Deployment:**

    - Access your website via the public IP of your EC2 instance or the configured domain name.

    - Ensure that the application is accessible and routes work correctly.

6.  **DNS Configuration:**

    - Ensure that your Route 53 records are correctly pointing to the CloudFront distribution.

    - Verify that the domain name resolves correctly and is associated with your CloudFront distribution.
