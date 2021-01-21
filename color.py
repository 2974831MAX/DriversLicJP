from datetime import datetime
from datetime import date, datetime, timedelta
from japanera import Japanera, EraDate

janera = Japanera()

c_era = janera.era(date.today())
today = date.today()


birthday = "1997-02-05";

# 最後の違反日
# resultとfmtからstrptime
print(janera.strptime("本日は <平成30年11月11日15時>", "本日は <%-E%-O年%m月%d日%H時>"))
    # -> [datetime.datetime(2019, 4, 16, 0, 0)]
print ("最近（直近）の違反日時")
last_pstr = "平成30年11月11日"
base = date (1997,2,5)
td = timedelta(days=-42)
print (base + td)
# date = datetime.datetime.now() - datetime.timedelta(days=2)

print ("最後の違反から5年経過した後に免許を更新できればゴールド免許になります。")