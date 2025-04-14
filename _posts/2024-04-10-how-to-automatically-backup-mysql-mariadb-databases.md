---
title: "How to Automatically Backup MySQL/MariaDB Databases" 
excerpt: ""
tags: ["webdev", "cron", "backup", "automation", "mariadb", "mysql"]
coverImage: "/uploads/2025-04/cover_003.jpg"
ogImage:
  url: "/uploads/2025-04/cover_003.jpg"
author:
  name: Tuan Thanh Ngo
  picture: "/uploads/authors/thanh.jpg"
---

## Introduction

Backing up your MySQL or MariaDB databases regularly is crucial. In this guide, I’ll show you how to automate automatically backups for multiple MySQL/MariaDB databases on Ubuntu, including a script that also deletes backups older than 30 days.

Let’s dive in. 🛠️

## 🧪 Step 1: Create the Backup Script

First, create a shell script that will dump your databases and save them with a timestamp.

```bash
#!/bin/bash

# Database credentials
USER="your_db_user"
PASSWORD="your_db_password"
HOST="localhost"

# Backup directory
BACKUP_DIR="/home/youruser/db_backups"
DATE=$(date +%F)

# List of databases to back up
DATABASES=("db1" "db2" "db3")

# Ensure the backup directory exists
mkdir -p "$BACKUP_DIR"

# Dump each database
for DB in "${DATABASES[@]}"; do
    mysqldump -u "$USER" -p"$PASSWORD" -h "$HOST" "$DB" > "$BACKUP_DIR/${DB}_$DATE.sql"
done

# 🧹 Delete backups older than 30 days
find "$BACKUP_DIR" -type f -name "*.sql" -mtime +30 -exec rm {} \;
```

Save it as something like `backup_databases.sh`.

Don’t forget to make it executable:

```bash
chmod +x backup_databases.sh
```

## 🧼 What the Script Does

- Dumps each database individually into `.sql` files
- Names the backup files with the current date (e.g. `db1_2025-04-05.sql`)
- Deletes `.sql` files older than 30 days in the backup directory

## ⏱️ Step 2: Schedule It with Cron

To run the script weekly (e.g. every Sunday at 2am), open your crontab:

```bash
crontab -e
```

Add this line:

```bash
0 2 * * 0 /path/to/backup_databases.sh
```

Cron will automatically pick up the change — no need to restart anything.

Here are some common cron expressions you can use to customize your backup schedule:

| Frequency         | Cron Expression       | Description                              |
|------------------|------------------------|------------------------------------------|
| **Daily**        | `0 2 * * *`            | Every day at 2:00 AM                     |
| **Weekly**       | `0 2 * * 0`            | Every Sunday at 2:00 AM                  |
| **Monthly**      | `0 2 1 * *`            | On the 1st day of every month at 2:00 AM |
| **Every 6 hours**| `0 */6 * * *`          | Every 6 hours                            |
| **Every 15 mins**| `*/15 * * * *`         | Every 15 minutes                         |
| **Weekdays only**| `0 2 * * 1-5`          | Monday to Friday at 2:00 AM              |
| **1st & 15th**   | `0 2 1,15 * *`         | On the 1st and 15th of each month        |

Test and verify your cron timing at [crontab.guru](https://crontab.guru/).

## 📌 Tips

- **Security**: Consider using a `.my.cnf` file in your home directory to store credentials securely.
- **Compression**: You can add `gzip "$BACKUP_DIR/${DB}_$DATE.sql"` after each dump to save space.
- **Cloud Sync**: Sync the backups to a remote server or cloud provider for extra safety.

With this setup, your MySQL/MariaDB databases will be backed up automatically — hands-free, reliable, and secure. 🙌