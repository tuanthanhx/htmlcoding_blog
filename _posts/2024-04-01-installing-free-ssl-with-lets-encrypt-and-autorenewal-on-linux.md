---
title: "Installing Free SSL with Let's Encrypt and Auto-Renewal on Linux"
excerpt: ""
tags: ["Server", "Linux", "SSL"]
coverImage: "/uploads/2025-03/cover_009.jpg"
ogImage:
  url: "/uploads/2025-03/cover_009.jpg"
author:
  name: Tuan Thanh Ngo
  picture: "/uploads/authors/thanh.jpg"

---

# Introduction

Securing your website with SSL (HTTPS) is crucial for both security and SEO. Let's Encrypt provides free SSL certificates that can be automatically renewed. In this guide, we will install a Let's Encrypt SSL certificate and set up automatic renewal on a Linux server.

## Prerequisites

Before we begin, ensure you have the following:

- A **Linux server** (Ubuntu, Debian, CentOS, etc.)
- A **registered domain name** pointing to your server
- **Root or sudo access** to execute administrative commands
- A **web server** (Apache or Nginx) installed and running

## Step 1: Update System and Install Certbot

Certbot is the recommended tool for obtaining and managing Let's Encrypt certificates. First, update your system's package lists.

### Ubuntu / Debian
```bash
sudo apt update && sudo apt upgrade -y
sudo apt install certbot python3-certbot-nginx -y
```

### CentOS / RHEL
```bash
sudo yum install epel-release -y
sudo yum install certbot python3-certbot-nginx -y
```

## Step 2: Obtain an SSL Certificate

Now, use Certbot to request an SSL certificate for your domain. Replace `yourdomain.com` with your actual domain name.

### For Nginx
```bash
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

### For Apache
```bash
sudo certbot --apache -d yourdomain.com -d www.yourdomain.com
```

### Manual DNS Verification (For Wildcard Domains)
If you're using a wildcard domain (`*.yourdomain.com`), you need to verify via DNS:
```bash
sudo certbot -d yourdomain.com -d *.yourdomain.com --manual --preferred-challenges dns certonly
```
Follow the instructions to add a TXT record to your domain's DNS settings.

## Step 3: Configure SSL in Your Web Server

Once the SSL certificate is issued, Certbot will automatically configure your web server. If needed, you can manually adjust your configuration.

### For Nginx
Ensure the following lines are in your server block:
```nginx
server {
    listen 443 ssl;
    server_name yourdomain.com www.yourdomain.com;
    ssl_certificate /etc/letsencrypt/live/yourdomain.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/yourdomain.com/privkey.pem;
}
```
Restart Nginx:
```bash
sudo systemctl restart nginx
```

### For Apache
Ensure SSL module is enabled:
```bash
sudo a2enmod ssl
sudo systemctl restart apache2
```

## Step 4: Verify SSL Installation

To check if your SSL certificate is installed correctly, visit:
```
https://yourdomain.com
```
You can also use an SSL checker tool like [SSL Labs](https://www.ssllabs.com/ssltest/) to confirm proper installation.

## Step 5: Enable Auto-Renewal

Let's Encrypt certificates expire every 90 days, so setting up auto-renewal is crucial.

Check if auto-renewal is already configured:
```bash
sudo systemctl status certbot.timer
```

To manually test renewal, run:
```bash
sudo certbot renew --dry-run
```

To ensure Certbot runs automatically, add a cron job:
```bash
sudo crontab -e
```
Add the following line at the bottom:
```bash
0 3 * * * certbot renew --quiet --post-hook "systemctl restart nginx"
```
This will check for renewal daily at 3 AM and restart Nginx after renewal. If using Apache, replace `nginx` with `apache2`.

## Step 6: Troubleshooting SSL Issues

If you face any issues, check the logs:
```bash
sudo journalctl -u certbot --no-pager
```
Or manually renew the certificate:
```bash
sudo certbot renew
```
If renewal fails, ensure your firewall allows HTTPS traffic:
```bash
sudo ufw allow 443/tcp
sudo systemctl restart nginx
```

## Conclusion

Your website is now secured with a free SSL certificate from Let's Encrypt, and auto-renewal ensures uninterrupted HTTPS security. If you encounter any problems, always check logs and your web server configurations. Enjoy your secure website!

