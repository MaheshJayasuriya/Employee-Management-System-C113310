@echo off
mysql -u root -p"aa803" -P 3307 -e "source C:\Assignment-C113310\Employee-Management-System-C113310\database\mysql_setup.sql"
mysql -u root -p"aa803" -P 3307 -e "source C:\Assignment-C113310\Employee-Management-System-C113310\database\mysql_sample_data.sql"
echo MySQL scripts executed successfully
pause
