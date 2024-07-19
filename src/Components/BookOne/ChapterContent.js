import "./index.scss";
import React from "react";

export const chapterContent = {
  chapter1: {
    title: "",
    content: (
      /*CHAPTER 1 */
      <div id="chapter1" className="c-1">
        <h2>Chapter 1 - Getting Started with AWS </h2>
        <p style={{ color: "#ffffff8a", fontSize: "18px" }}>12/1/23</p>
        <p>
          <br></br>
          Im going to prefix this by saying, that I already have quite a bit of
          knowledge about AWS but I bought this book to really reinforce what I
          know and I do genuinely believe that you learn more by hearing from
          different sources. Nonetheless, I do expect to learn new things in
          this book.
        </p>

        <p style={{ fontWeight: "bolder" }}> My Takeaway</p>
        <p>
          I know it's probably cheap to say that I didn't take much from this
          chapter except for two things. One, I had no idea that AWS was
          originally just a platform created to handle the immense online
          operations of Amazon.com. It's amazing how it has evolved into what it
          is today, being at the top of the cloud market alongside Azure and
          Google Cloud. Two, I must admit I underestimated the importance of the
          CLI. In fact, ever since reading about the CLI, I've decided that for
          every project I undertake, I will first do everything in the AWS
          management console and then provision those same services with the
          CLI.
        </p>
      </div>
    ),
  },
  /*CHAPTER 2 */
  chapter2: {
    title: "",
    content: (
      <div id="chapter2" className="c-1">
        <h2>Chapter 2 - AWS Architecture and Core Concepts</h2>
        <p style={{ color: "#ffffff8a" }}>12/2/23</p>

        <p style={{ fontWeight: "bolder" }}> My Takeaway</p>
        <p>
          Admittedly, networking is the one thing that I have truly struggled
          with when it comes to the cloud, so imagine my discomfort finding out
          the cloud is built on a vast infrastructure of servers, many of which
          run on Linux or other operating systems. With that being said, I can't
          play ignorance to the importance of EC2 and VPC and the AWS Global
          Distribution. I understand that AWS's worldwide distribution network
          enables the provisioning of smooth streaming experiences to a global
          audience, irrespective of their geographical location. Organizations
          can utilize Virtual Private Clouds (VPCs) to establish highly secure
          and segregated network environments, distinctly isolating their
          trading systems from other business operations to guarantee optimal
          security. Organizations can employ specialized EC2 instances for
          compute-intensive activities such as Data Analysis, Big Data
          Processing, Scientific/Engineering Simulations, Research, 3D
          rendering, and more. Despite the challenges and my initial discomfort
          with the complexity of cloud networking, I continue my journey to
          understand the cloud deeper.
        </p>
      </div>
    ),
  },
  /* CHAPTER 3 */
  chapter3: {
    title: "",
    content: (
      <div id="chapter3" className="c-1">
        <h2>Chapter 3 - Identity and Access Management (IAM)</h2>
        <p style={{ color: "#ffffff8a" }}>12/2/23</p>

        <p style={{ fontWeight: "bolder" }}> My Takeaway</p>
        <p>
          I see AWS IAM as the defensive line of your AWS account. However,
          while IAM serves as a critical line of defense, it's important to
          remember that comprehensive cloud security involves multiple layers,
          including network security, data encryption, and regular auditing,
          much like a football team needs a good defense, offense, and special
          teams to win games. Fortunately, this is one service I found
          particularly easy to grasp.
        </p>
      </div>
    ),
  },
  /* Chapter 4 */
  chapter4: {
    title: "",
    content: (
      <div id="chapter4" className="c-1">
        <h2>Chapter 4 - Amazon S3: Scalable Storage in the Cloud</h2>
        <p style={{ color: "#ffffff8a" }}>12/2/23</p>
        <p style={{ fontWeight: "bolder" }}> My Takeaway</p>
        <p>
          Since starting the development phase of my cloud journey, S3 and
          Lambda have by far been the services I use the most. In fact, whenever
          I try to implement a new project with services I've never used, S3
          proves itself to be a more than suitable option. Needless to say, I've
          used S3 so much to the point of possibly abusing it. The AWS Free Tier
          for S3 is quite generous as it gives you 5 GB of Standard Storage,
          20,000 GET Requests, 2,000 PUT, COPY, POST, and LIST Requests, and 100
          GB of Data Transfer Out.
        </p>
        <p></p>
      </div>
    ),
  },
  chapter5: {
    title: "",
    content: (
      <div id="chapter5" className="c-1">
        <h2>Chapter 5 - Amazon RDS and Databases on AWS</h2>
        <p style={{ color: "#ffffff8a" }}>12/3/23</p>
        <p style={{ fontWeight: "bolder" }}> My Takeaway</p>
        <p>
          See, this is the part of the book I like the most: where I actually
          learn a thing or two. Sure, I have dabbled in MySQL and PostgreSQL in
          my time, but I never truly went in depth with them. I'm excited to
          perhaps do a project with RDS as I'm really trying to not use Amazon
          S3 so I can get hands-on with a broad set of AWS services. I think my
          biggest takeaway really, is knowing that AWS offers an alternative to
          using RDS within its own set of services such as Amazon Aurora,
          DynamoDB, Redshift, DocumentDB, Neptune, ElastiCache, QLDB (Quantum
          Ledger Database), and Keyspaces (for Apache Cassandra).
        </p>
        <p></p>
      </div>
    ),
  },
  chapter6: {
    title: "",
    content: (
      <div id="chapter6" className="c-1">
        <h2>Chapter 6 - AWS DynamoDB: NoSQL in the Cloud</h2>
        <p style={{ color: "#ffffff8a" }}>12/4/23</p>
        <p style={{ fontWeight: "bolder" }}> My Takeaway</p>
        <p>
          One of the things I read was that DynamoDB offers built-in support for
          ACID transactions. I have never heard of such a term. As I looked into
          it, it turns out ACID stands for Atomicity, Consistency, Isolation,
          and Durability. When it says DynamoDB supports ACID transactions, it
          means that it can guarantee these properties, ensuring that the
          database transactions are processed in a reliable and predictable way.
          This is crucial for applications that require strong consistency and
          reliability in their operations, such as financial systems,
          e-commerce, and other critical applications.
        </p>

        <p>
          While I was reading, I did ask myself, 'How does DynamoDB compare to
          other NoSQL databases?' Turns out, it only really stands out because
          it seamlessly integrates with AWS services; however, that's the
          caveat, DynamoDB is, for the most part, AWS-centric.
        </p>
      </div>
    ),
  },
  chapter7: {
    title: "",
    content: (
      <div id="chapter7" className="c-1">
        <h2>Chapter 7 - Amazon EC2: Virtual Servers in the Cloud</h2>
        <p style={{ color: "#ffffff8a" }}>12/4/23</p>
        <p style={{ fontWeight: "bolder" }}> My Takeaway</p>
        <p>
          I know it's a small detail, but interesting how the book refers to
          instance types as a letter series. For example, general-purpose
          instances are referred to as 't' series, or compute-optimized
          instances denoted as 'c' series.
        </p>

        <p>
          Through my AWS cloud learning, I would often come across the different
          kinds of instances AWS has to offer, such as general-purpose,
          compute-optimized, memory-optimized, and storage-optimized. However,
          the books introduces me to another type of instance that I never came
          across, namely, GPU instances. These are designed for
          graphics-intensive applications and other workloads that benefit from
          GPU acceleration.
        </p>

        <p>
          " Stopping an EC2 instance helps save costs and frees up resources
          without permanently deleting your data. When you stop an instance, AWS
          shuts it down, similar to turning off your own computer. During this
          state, you're not billed for additional instance hours. However, you
          are still billed for the EBS storage. It's crucial to understand that
          when you stop an instance, the data on the attached EBS volume is
          retained, enabling you to restart it later without data loss. " I, for
          one, was wondering why I was being charged for an EBS volume even
          though I stopped my instance.
        </p>

        <p></p>
      </div>
    ),
  },
  chapter8: {
    title: "",
    content: (
      <div id="chapter8" className="c-1">
        <h2>Chapter 8 - Load Balancers and Elastic Beanstalk</h2>
        <p style={{ color: "#ffffff8a" }}>12/4/23</p>
        <p style={{ fontWeight: "bolder" }}> My Takeaway</p>
        <p>
          In my opinion, to fully understand AWS load balancers, one must have a
          good grasp of networking because AWS offers different types of load
          balancers designed for different kinds of traffic. While I have not
          yet worked with load balancers, I understand that they require
          consistent monitoring and maintenance.
        </p>

        <p>
          I think it's very cool that you can actually run simulated tests on
          your Auto Scaling Group in order to see how it responds. It makes
          sense, considering you can manually increase the load to see if the
          new instances are launched as expected, or you can create a Lambda
          function that generates CPU or network load, then trigger it manually
          or on a schedule.
        </p>

        <p>
          Then there's Elastic Beanstalk, a service I am excited to use. I
          already had a good understanding of what it is and what it does, but
          after reading this chapter, I'm even more excited because I didn't
          know that Elastic Beanstalk offers pre-configured Docker environments,
          making it easier for developers who are already using containerized
          applications.
        </p>
      </div>
    ),
  },
  chapter9: {
    title: "",
    content: (
      <div id="chapter9" className="c-1">
        <h2>Chapter 9 - AWS Lambda: Serverless Computing</h2>
        <p style={{ color: "#ffffff8a" }}>12/4/23</p>
        <p style={{ fontWeight: "bolder" }}> My Takeaway</p>
        <p>
          Up until now, I've only really used AWS Lambda for serverless backend
          logic and event-driven data processing, but it's good to know that it
          can also be used for real-time file processing, scheduled tasks,
          extensions and customizations, etc. For example, you can send an image
          to your S3 bucket, which will trigger a Lambda function that
          automatically resizes them and stores the processed images back into a
          different S3 bucket.
        </p>
      </div>
    ),
  },
  chapter10: {
    title: "",
    content: (
      <div id="chapter10" className="c-1">
        <h2>Chapter 10 - Developer Tools and DevOps</h2>
        <p style={{ color: "#ffffff8a" }}>12/4/23</p>
        <p>
          This is one of the chapters I was really looking forward to. As of
          this moment, I have a general idea of how CI/CD works, but I want to
          understand it at a deeper level. Hopefully, this book will aid in
          that.
        </p>
        <p style={{ fontWeight: "bolder" }}> My Takeaway</p>
        <p>
          So essentially, to my understanding, AWS CodePipeline is a service you
          use in order to orchestrate the layout of your CI/CD flow, but each
          action within a stage is where the real magic happens.
        </p>
        <p>
          When it comes to AWS CodeDeploy, it's important to understand the
          different deployment strategies. During my first attempt at the AWS
          Developer Associate exam, I was caught off guard by questions related
          to this topic, which I had perhaps overlooked during my studies. Sure,
          when we're doing projects to build our cloud skills, the best
          deployment strategy might be in-place deployment or blue/green
          deployment. However, in real-world scenarios, such as working for a
          company where a client is looking to AWS to deploy an application,
          it's a totally different ballgame. This means there will be more to
          consider when you're choosing your deployment strategy.
        </p>
      </div>
    ),
  },
  chapter11: {
    title: "",
    content: (
      <div id="chapter11" className="c-1">
        <h2>Chapter 11 - AWS CloudFormation: Infrastructure as Code</h2>
        <p style={{ color: "#ffffff8a" }}>12/5/23</p>
        <p>
          I was looking forward to this chapter. I had only performed
          Infrastructure as Code (IaC) with Terraform and GitHub Actions, and
          although my focus with IaC is more on Terraform, I have considered
          learning CloudFormation and provisioning with the AWS CDK in
          TypeScript. It is my understanding that although Terraform is the most
          robust and widely renowned way of performing IaC for cloud-based
          architectures, some companies may solely use the CDK with a specific
          programming language, or only use CloudFormation for AWS provisioning.
        </p>
        <p style={{ fontWeight: "bolder" }}> My Takeaway</p>
        <p>
          You know, this may sound a bit dumb, but admittedly, when reading
          about AWS CloudFormation, I have seen it written in both YAML and JSON
          to the point that I thought they were the same thing. Turns out,
          'While functionally equivalent, they have different syntaxes and cater
          to distinct preferences.' Good thing I read this book for that
          clarification. I may just be going from what I read here, but I think
          if I were to choose, I would prefer to write my CloudFormation stacks
          in YAML due to its nesting capabilities. In this regard, I see JSON as
          CSS and YAML as Sass in the sense that YAML syntax seems to be a bit
          smoother compared to the rigid JSON.
        </p>
      </div>
    ),
  },
  chapter12: {
    title: "",
    content: (
      <div id="chapter12" className="c-1">
        <h2>Chapter 12 - Monitoring and Logging with AWS CloudWatch</h2>
        <p style={{ color: "#ffffff8a" }}>12/5/23</p>
        <p></p>
        <p style={{ fontWeight: "bolder" }}> My Takeaway</p>
        <p>
          Not much to really take away from this; I am only really interested in
          the upgraded CloudWatch. The upgraded version of AWS CloudWatch
          includes detailed monitoring with 1-minute intervals for EC2
          instances, custom metrics creation, extended data ingestion and
          storage for CloudWatch Logs, additional dashboards for comprehensive
          monitoring, more alarms for detailed notifications, advanced event
          pattern matching and routing with EventBridge, CloudWatch Synthetics
          for endpoint and URL monitoring, CloudWatch Contributor Insights for
          analyzing top contributors to metrics, and extra API requests beyond
          the free tier.
        </p>
      </div>
    ),
  },
  chapter13: {
    title: "",
    content: (
      <div id="chapter13" className="c-1">
        <h2>Chapter 13 - AWS Security Best Practices</h2>
        <p style={{ color: "#ffffff8a" }}>12/5/23</p>
        <p></p>
        <p style={{ fontWeight: "bolder" }}> My Takeaway</p>
        <p>
          Chapter 13 of "AWS Unleashed" really hammers home how important it is
          to stay on top of security when you're working with AWS. It talks
          about using multiple layers of protection like Security Groups and
          NACLs, making sure everything's encrypted, and always keeping an eye
          on things to make sure you're following the rules and catching any
          weird stuff early. Basically, it's like a constant game of guard duty,
          making sure your cloud stuff stays safe and sound. It's a super
          helpful read for anyone wanting to keep their AWS game strong and
          secure.
        </p>
      </div>
    ),
  },
  chapter14: {
    title: "",
    content: (
      <div id="chapter14" className="c-1">
        <h2>Chapter 14 - Microservices with AWS</h2>
        <p style={{ color: "#ffffff8a" }}>12/5/23</p>
        <p></p>
        <p style={{ fontWeight: "bolder" }}> My Takeaway</p>
        <p>
          The key takeaways from this chapter are pretty cool. First,
          microservices let you break your app into smaller, more manageable
          pieces, making it easier to handle and update. Then, with ECS and EKS,
          AWS gives you powerful tools to manage these pieces, especially when
          it comes to using containers, which are like little packages your app
          can live in. Lastly, AWS's Lambda and API Gateway are game-changers
          for going serverless, meaning you can run your app without worrying
          about the servers it lives on.
        </p>
      </div>
    ),
  },
  chapter15: {
    title: "",
    content: (
      <div id="chapter15" className="c-1">
        <h2>Chapter 15 - Case Studies</h2>
        <p style={{ color: "#ffffff8a" }}>12/5/23</p>
        <p></p>
        <p style={{ fontWeight: "bolder" }}> My Takeaway</p>
        <p>
          It's all about seeing AWS in action, from powering the backbone of an
          e-commerce site to managing massive data with Lambda and S3, and even
          expanding your reach globally with multi-region deployment.
        </p>
      </div>
    ),
  },
  Overall: {
    title: "",
    content: (
      <div id="Overall Thoughts" className="c-1">
        <h2>Overall Thoughts</h2>
        <p style={{ color: "#ffffff8a" }}>12/5/23</p>
        <p></p>
        <p style={{ fontWeight: "bolder" }}> My Takeaway</p>
        <p>
          I strongly recommend NOT buying this book. In my opinion, it just
          seems like a copy and paste of AWS documentation, really, and it
          doesn't really teach you much. Don't get me wrong, I left with a bit
          more than what I came with, so to speak. Although it covers the main
          AWS services, it leaves out many others; AWS has over 200 services,
          each serving a different purpose. However, I just wanted a book that
          came out recently, and I wanted to really practice blogging about a
          book, so in that regard, it served its purpose.
        </p>
      </div>
    ),
  },
};
