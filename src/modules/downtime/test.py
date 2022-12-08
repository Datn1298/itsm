#Python version - 3.8
#This script requires requests module installed in python.
import requests
 
url = "https://itsm.ho.fpt.vn/api/v3/releases/25"
headers = {"authtoken":"BC473F86-1A1F-4F8C-B725-38E6C00CFA28"}
input_data = ''''''
params = {'input_data': input_data}
response = requests.get(url,headers=headers,params=params,verify=False)
print(response.text)
