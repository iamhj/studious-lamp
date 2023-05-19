import requests

url = 'https://hellogithub.com/report/tiobe'

try:
    response = requests.get(url)
    if response.status_code == 200:
        with open('static/rank.html', 'wb') as f:
            f.write(response.content)
            print('Response data saved to ../static/rank.html')
    else:
        print(f'Response error: {response.status_code}')
except requests.exceptions.RequestException as e:
    print(f'Request error: {e}')
