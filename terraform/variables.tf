variable "region" {
  description = "The AWS region to deploy to"
  type        = string
}

variable "instance_type" {
  description = "The EC2 instance type"
  type        = string
}

variable "key_name" {
  description = "The name of the key pair"
  type        = string
}

variable "public_key_path" {
  description = "The path to the public key to use for SSH access"
  type        = string
}

variable "private_key_path" {
  description = "The path to the private key to use for SSH access"
  type        = string
}

variable "security_group_name" {
  description = "The name of the security group"
  type        = string
}

variable "ssh_access_ips" {
  description = "The list of IP addresses to allow SSH access from"
  type        = list(string)
}

variable "domain_name" {
  description = "The domain name to use for the website"
  type        = string
}

variable "hosted_zone_id" {
  description = "The Route 53 hosted zone ID for the domain"
  type        = string
}

variable "certificate_arn" {
  description = "The ARN of the ACM certificate"
  type        = string
}
