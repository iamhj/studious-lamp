import csv
from bs4 import BeautifulSoup
from logSetting import getLogger

logger = getLogger('myLog/rank.log')

with open('static/rank.html', 'r', encoding='utf-8') as f:
    html = f.read()

soup = BeautifulSoup(html, 'html.parser')
filename = soup.find(class_='w-3/4').get_text() if soup.find(class_='w-3/4') else 'None'
ths = soup.find_all('table')[1].find('thead').find('tr').find_all('th')
titles = [th.get_text() for th in ths]
trs = soup.find_all('table')[1].find('tbody').find_all('tr')
lines = [[td.get_text() for td in tr.find_all('td')] for tr in trs]

with open('static/rank.csv', 'w', encoding='utf-8', newline='') as csvfile:
    writer = csv.writer(csvfile)
    try:
        writer.writerow(titles)
        writer.writerows(lines)
        logger.info('Rank saved to rank.csv')
    except Exception as e:
        logger.error(e.args)
    
