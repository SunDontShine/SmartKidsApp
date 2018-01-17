import mysql.connector

cnx = mysql.connector.connect(user='root', host='localhost', passwd='password', db='SmartKidsApp')
cursor = cnx.cursor()

file = input("Enter the name of the file to import data to problems database : ")
grade = input("Grade level : ")
multi = ("INSERT INTO multiplication (grade, multiplier, multiplicand) VALUES (%s, %s, %s)")

#add = ("INSERT INTO addition"
#       "(grade, first, last)"
#       "VALUES(1,2,3)")
#cursor.execute(add)


file = open(file,'r')
for line in file:
 print(line) 
 problem = (grade,line[2],line[0])
 cursor.execute(multi, problem)
 cnx.commit()
cursor.close()
cnx.close()
  
