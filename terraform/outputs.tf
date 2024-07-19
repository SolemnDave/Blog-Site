output "instance_public_ip" {
  description = "The public IP of the web server instance"
  value       = "This is your IP: ${aws_eip.web_eip.public_ip}"
}

output "cloudfront_domain_name" {
  description = "The domain name of the CloudFront distribution"
  value       = aws_cloudfront_distribution.cdn.domain_name
}
