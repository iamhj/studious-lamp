import csv

with open('static/rank.csv', 'r', encoding='utf-8') as file:
    reader = csv.reader(file)
    next(reader)  # skip header row
    column2 = [[row[1],float(row[2].strip('%'))] for row in reader]
language, rank = zip(*column2)
print(language, rank)
