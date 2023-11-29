export const koreanDay = [ '일', '월', '화', '수', '목', '금', '토' ];

export const globalMsg = { 
    'error' : "문제가 발생하였습니다.",
    'certPass' : "인증이 완료되었습니다.",
    'certFail' : "인증번호가 일치하지 않습니다.",
    'needCert' : "인증이 필요합니다.",
    'isNotCert' : "인증번호를 입력 해 주세요.",
    'certOver' : "시간이 만료 되었습니다. 인증번호를 다시 발송 해 주세요.",
    'isNotPhone' : "휴대폰번호를 입력 해 주세요.",
    'isNotName' : "이름을 입력 해 주세요.",
    'isNotBirth' : "생년월일을 입력 해 주세요.",
    'isNotEmail' : "이메일을 입력 해 주세요.",
    'isNotFormal' : "형식이 올바르지 않습니다.",
    'invalidPhone' : "휴대폰번호가 올바르지 않습니다.",
    'isNotSelectedDate' : "날짜가 선택되지 않았습니다.",
    'isNotSelectedTime' : "시간이 선택되지 않았습니다.",
    'isNotSelectedRoom' : "방이 선택되지 않았습니다.",
    'isNotSelectedUsing' : "이용시간이 선택되지 않았습니다.",
    'isNotGuest' : "예약자 정보가 입력되지 않았습니다.",
    'selectRequired' : "필수 동의항목을 전부 체크 해 주세요.",
};

export const reservationStatus = [
    '',
    '예약대기',
    '예약완료',
    '취소완료',
    '예약부도',
    '이용완료',
];

export const errorToast = {
    type: 'bad',
    text1: '현재 지원하지 않는 기능입니다.',
    topOffset: 120,
    visibilityTime: 1000
};

export const defaultLocation = {latitude: 37.576044, longitude: 126.977019, zoom: 14}; //Gwanghwamun

export const alertDefaultSetting = { 
    showProgress:false,
    closeOnTouchOutside:true,
    closeOnHardwareBackPress:true,
    confirmButtonColor:"#F33562",
    cancelText:"취소",
    showCancelButton:true,
    showConfirmButton:true
};

export const mailList = [
    { id: '1', title: 'gmail.com' },
    { id: '2', title: 'naver.com' },
    { id: '3', title: 'daum.net' },
    { id: '4', title: 'hanmail.net' },
    { id: '5', title: 'yahoo.co.kr' },
]

export const reviewScoreOption = {
    5 : { title: "최고에요" },
    4 : { title: "좋아요" },
    3 : { title: "괜찮아요" },
    2 : { title: "별로에요" },                      
    1 : { title: "실망했어요" },                      
}

export const reviewTagOption = [
    '친절해요',
    '주차 편해요',
    '깨끗해요',
    '갓성비',
    '트렌디한',
    '고급스러운',
    '추천',
];

export const defaultImage = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFBcVFRUYGBcZGyQdGxoaGyIhHBwbIxwiIBwcGiIiIywjHCApHSAcJDUkKC0vMjIyISI4PTgwPCwxMi8BCwsLDw4PHRERHTEpIygxMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMf/AABEIAO8A0wMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAEBQMGAAIHAQj/xAA9EAACAQIEBQIEAwcEAgEFAAABAhEDIQAEEjEFIkFRYXGBBhMykUKhsRQjUsHR4fAHYnLxFYKSJENEc7L/xAAZAQADAQEBAAAAAAAAAAAAAAABAgMABAX/xAAnEQACAgICAgMBAAEFAAAAAAAAAQIRAyESMUFRBBMiYbEUUnGBkf/aAAwDAQACEQMRAD8A5oRj2MTOuNSvjFqI2RkY0jBAW2NCuA0ZEUYwDG4GNYwQ2YFxE2Ju+IWwrGRlECRIkTcAwSPBgxhw1CjVpN8vWvyg7FHIJMhYYERIGmDabjCkCwxPkMx8uorkSoMMv8SEQ6+6kjE5xvaGsGAvjaLYNq8NZalRRdUBOs7FIDK0+VK+7AYEIthlJPoFGqjGxXGRjbDBIiMQV8EE4HrYDMe5bY49bfG2TFjjxvqwDHrbY0xscagYxjdHIII3BkeouMdi4fWDKrDYwfvjjeOl/C9T5lCmx6KB/wDG38scnyY6TL/Hf6ZZGdboGUkRIG/vjj/xPT05qqIjmmPUA/zx2fL0FiVW/XzfrjlHx3R05kmPqUH32/pifx3U6LZ1+bKxjAxFwYPjGYwjHecQZQzhCiSx862GMwFjMDijD91x5GHdf4Zzg/8Axqv/AMG/pgSpwbMLvRqj/wBD/THW1s500L7Y0aMFPk6g3psPUYHem38JwJRdBUkRLGM0jEU3Njj3VviSTHbR4RjVlGJMtQapr0iSqFyP9oif1xJVyYWilQuqswLBS3MVmF0qL3gmSI2vhJyS0NEGxkYhU4Y8N4LmK8fKpO4JgEAxPrthbDQXVzLvlEWbUnKt3YETT1dwIdR7YWYvHA/9Pc4y1Fq6KSOADJlpB1AiAdrj3OHlH/S6kBFTNOT00rbba/nCQfGx6bObZHImqIDQwI1A/wAJIGod43I7e+B8w6sxKgKs2F7D3x1+j/pxlqZYrXqhipUEx1Uq229zPqMLn/0tI+mupUkiCIYC3XqQQenXGUnbNWjlpXGmYypBKmxGOocK/wBNipLZh0IAgAT9U2JHUaYt3ntdu3+ntE1BUZ5uTeZaSSZHqSZ7HwIbkDicgyKGnJamlRTEhtQjfYqQQbHuLHBz18q93y7oe9OrP5MsY6wfhfKgLSGqQQSwJk2I7SshpJPjzKXjnwTTKFqAd6gBhRABib/dl3P4bnfBtMHE5xWy+XP0PVXw6KfzVh+mPMpw2m7ENXpoO7Bhf3GmP/bEvEuHVaLlKiXUSfGwPsCYnvPTADP4OFf8ZkifPcKqUwGYBkJtUpsHpnwGFp8GDi4fBL/uInZiD7mf54r3B8vW5nouqGLqWHOL8rKRpcb2YEe+L58M8Nd0NQ0VoMxkqlkYi2pV/BtdZjqLWxzZ5fmmXwxfKx3kK0LeRbt4xz7/AFHoQ1N+5I/L+2OlDKBNiZJ2OwPjFB/1Dpn5SAklg4JJ7EH+wxLG6mjoybgznGPDgpMozbFfTUAftjf9hYjlliDBEeYBHcXAPUSO+PQ5I4KYHpPY4zDRs9Up8lM8i2HnufcyffGYXkx+C9n1UW8YjWr3EYTpm+aFuTck7L/TEocEE/MZo3IAjEHlZHlY2lT5xo1JP4FI9BhVRpVN0qLp79T/ACxJWzTCQDzATBFm98H7WHl7R5V4bk2eHy9Es3VqSGfeMRv8LZG7HJ0PP7pT+UYky7JUKPp5gJAPQ22w0FUADVY4pjnJrZlTKzkfgXI02LrR55JDFjaeggxEGIwg4v8A6fZOrTSoENJ5hizNGkLpUBZsLKR2GLrmOJTy07neekefHm+EdZdSl6lRgSTAm3/rGwNjt9+pkUUF0KMv8K8My51iiah6CoSwBA6Ke574e0M0ByKFRIsEEBYEG2xj0wKtFCA5JJgmZNjcconf07nviJHVZGn6TctaYEah2b23wrb8lEkgs1dRMFuUgsIILAxAjYg32v06EHVs8RYyLmQAOWQSDPcdTtgN8y0AwCwAvAkdlki5gm4wE+dDqy7DSSzQJggkaup7R64ARxVzRblX6mkFhPgsYgAfebj3krvU0RMRA7CZ/sPvivftdTSnyzoRyOt7LB6zcC21wLXnE2UWWfSZidTaiNMCebvB7dSd7kZIzHGZzSqwRqkkDU0mQLjfwP0OIKvEUV1DvzEnSB1HS25uJ9h1GK+7o6gnlUWDMBq7bAmZMwe+oWEDGcEy/wAtEqMTVq9AxIsLJuYnTIjUB2ts6FYyzxqamcFVB0y0wCAYAKjVAiw32PriSjxIU2ZXOsqJ1ySJ62ib3ERHY9MBZrPCrzltKmWZZbTCkdrAEAMNy0QYmAQOMUXYI1IlNBgBY0npFgSYAI3NwREYJiXiiUqyk1KdIkgiSsMwIEiQJBi/a623xT+M/BjVf3qtotZAoIG8Rp5mvBkibnbpdX/FpVLrbWZP/FRFpJJkze+DeGu5n5ggAxAPL6227b7D3OYrRxOnwLNobUqhXUBqgSDMTEmBP6Yu3COOOoVXBBU6SD0j+c4vtfgyMC6lVeV0lmldKvruPzxUuNZP5jnMwF0tprKpkBgOUiPq1LHTHPli32PhnTpj2o5q0zAuRv26hh7xbFG+NaLVKOpQZtK7kMGEi253GLJkMw2mx2PTqvX8vzjAXFsuAp0tyuNSkdHAP6i49Djii3GR2VcXE5OmVqmYpuY3hTYdza3vhpknqM6FRpNOk5JJgajKkknaZ/LF/wDhX4oSnmCC+qV0m0HVqJ2P1Hwtz2xbKuepiojSpV3d+xLr+7UARLbsYAN8d/O10ec3xZwn/wAc/RapHQqjQfTGY7hW+Ja6sV1URB2LbfmMeYpzRPkhsGDiSAFbcqL26GPPXHjcQCLFNQomPTx64zKcK+WZFQERBUiP+8D5zKkUpdCGmxS4/wDcGPyGI8Y2BINy+bFRJ1wbWFtzv/bB+drIiapHL1OEuTpU6Z1hrlQbg/VFx7YBzvEUAAZhJOwgkidhEyTv0xXHBJbHUSTiPEqijVSE3JsRqAA7fbeJvcWxDl+KVHQEkMRIu0Ta3UE2vM+L4rfFOKuXpoJKknmEEqJkX3ZARPQ2jpBHp8UKEKzxqCgyo0hhvJtG/a9jiqRTRa8olQlSCxidZgAiTMJAm3k3jodsz2aWkpRNR0wL99j6RIuB7nA+VzVXTDiGI1EmNMNsARexvBuZwNmsmzKJqFT5E3t+X57b4SQyI81xUiL8siZ23t95/LEWZzJqFS0hNQiJF/HiOg7i2INLE6ZU6QOWDcdZ8k6tv+zMyxMEDbbtv09Dp+2FGB6+ZmYOiCAVFybDaIPbv4xDmawSmqhlNtTHT9Ux/Ob7GFxmYgvSpjSQzEtIHaxi47/lgnPU7wFX16+QPvgGFrZtmUCG1AACbFbxItK79uvTB3A80PktAKAAkk3BBJBNyYAYkxq2gnAj0mNzIFpiea+xxpkHZCacAh45SbT0iR3+0+MFAbNP2o0lqOlMFmAGs2heVSCJ5QbEkEE323M+WeozqGnTTViUA5eXl1EkaiCZBvBW/SQFnswRUZ5hFVRCnYrtK9C0x1ta2G1DiSU6aNEatKqJGqSvNOwYdbRuxt0cUAzitAhECyABN5uTuCGOoM2pAB06CB8twxtAZKhDHlYsDEASLAysRFw152gjDXPOUpAJJ0iopUQxAJGl1LGBAgkncE97rMnl9DLTLFdIIUAkA6nJGk9+km4Oq3QLYaHHDsw4QUnUOFAhr6tRmxg7Ane533JxZctTKoGYjSx6GSOblAkSBBgREfmafnaPNyBwYEvNjdY6iJvbYgdCLF8KztVKgXWsGSuqZO5bpEW6keZ66zUW5lGnmllP1Ar0vIIuR+fU+lb4nlFSpylr2iI1ITIBncqZ/wAthws1aakyjAyViAw/3wSGEgXBw/TIUymmoqmNj2H8uuFnDlsVtoo2WTTUiOUj7dMZxuhppMb6RzR2vMjte/ucTZorr/d/TrIUmQTBIvN+hxNmagC6Tc7Ed53H8scE47OyDuNoo2Q4ZTqgvKKq3Zjtv1P4Z6e+Ns9nzJ0kyVhqhYs7j/keYAjTItMX7Y0zNOnSZijOae+gdO8g/SRPmLjA+ZjdTKn6e8dvUbe2L8rjo8/5CcbSIZGMxH84C0ExjMT5I5eH9Owtmg9QBVJ67+PsN8MUzJVCWbpsbx+d79jhfw3LMpJIMGIYGLDcH/r3GEvHuIsCV/COguYG5J8jqe/vjqhjXZ0QhezOL8fqXWmUBjlM6fWJOw9N43xUUzS0iHbUSxBY80lZNgGIMm9479sA1OINr5iAf4yeaCLwN3Jt3ItBwMtRlUlbKNkkEk9WaQOoBt2H8M4unRUYvlRrJ0nQDr0wY0sd2aQVabTMm9oknSmxeooP061hSQdokGReFBlhH1ESTfCutxCpVqNqdipU32BURyi3YQY7z0sVlHK1l5ZaV2idpNx6+mDegHSuJcXpUUNSowVW9z6+d8VhOOrVc/LqBwo2uGC+QYMbX8YVfG7uoHzBCwIE3OwBMC4Fvv5ws+CadM5hqrED5dKoxIECXUIqlRygDUxAAv7CJvaKXRdPmaiSRtfbY7fp+ZwNVFWqwRJk9fA6z0nHq8QYnkokqb3ImOhPQdbT3vg3K5kU31rymIgx9t/8thEMUz4jzVTKOKYn5sTLfhXuL72woo57OH958xjeLtfvAXt7Rh3nuEV89Xq1ArE6YiLgg8ojci14BO9jgFOD1tWmpyAWII5hG9v5mB5wyVIDsc8K4pUempZZMx037R064Zgjl1iOYQwn9f8AP54DyuV0KFUSPF7k77fn+mCalIxcSOxgYwSLO5caGanpHMGMiZEGARtaMKsxWbQqnoQeWxnbzN4MHaOlsE1q2kwSQIiw23nxjX5svBmQNX3Ufp2GNYlEa6gLnYaY/A0AkTJ3kKNX8tt0z61GhhIdiRq3Btyn+G4MR42vidqIInaRBHQggi/sTfxit0mAqA6h0MNI1AHvsGt+KPXC9jdFwZ3Uh6ZJZTqFuhk3I3BWQZB2OJK5IK1KROnVqhoJUMZjpYMN977xiPIZrUEqL+E8wmGOkySP4gVMEjvN5kMaJMMbEr4Ile0+D6SARibbQVQ+4Vm/mJpblYDaTMeDP0xBiZi2DF4gOZGuwMWH0mPxGNrdfHTCrIURAZbkHY+bEW/6ue0Ya5mmE/ebAbsSbfafz7DD83QJJCPjeQenT5TyudSsTI6EgR9MR5/osp5pghka9NzE37z/AFwL8R8fc1AMu9J0A1NAV11KZ16WBCetjf0w44T8U1np6qiKelpGod79DcbdPOOeX6dgeVxjSKzxZRUAq0+4BHXmkAnv2n/jhVkVLLpAM30gb6r2Hn+eL89bJ1KbUGpU01zEAK0zq6XIkAyNrdoxW+IZA0gFViZfWr2DEbnxqEz2Iv0IDQpafQs5KSV9iClRcgFUEHaXUYzBFbK6mLTEmbbe2MwvFekT+yHo7Dw8lqTFupsPPnFH47RYWZjDH6FO58t23km3brFo4CQV/i6e/X0gTgL4hyEglYJm3g+v2/mMdadIMSj5fKAzUqJMLKjYAHa294vPQYXs6KRsWPczfwO1hbr46WF6fy6b73tJ3ImDv6CB2/KsZ7KEHUbk3ntPb0v+WA5FKPKC01jYs5nvY/hPQbjba4tth38PZUlmqPuT17ennFZRiXNtz6RebYvHBaRROnn1xrYUhhmuHJX/AHdRNdMSBchhNoU79rGRIBsQDgbP8GpZOkqqmim7wZMs0CeZj52ERv3w/wCHEkalvHew9Tix8a4NlM1RCV6aMgHKTZlMbqRcH0wezdM5bxDjiIEDFEmw0k9Ivc9Bvg3hWV/aUNSmQ6balJtB2A6n9cb8K+E6YzlVM2Uq0qQDUpH1aiZLjxpuLgzOL+qqiBaaDSLQkLA9BjBk14KS1AqCjEQeuxne4P8A1hb8ko0QQpO09J3/AOzhpxDKMrr8yolOXJUVlFzH4SGE77z3mcetlqiafmAMp2deZB0hWJWPQjAbAeUMo26nl/5XPpcfkcSvkSdwZ8R+XfGmUqODYMP0836bbbdsNaFcgyyT5Fwfe+/22wtjFazXDoho9uvsYjocLMzkmHMV2vbeOnrB7Wxes8wYRpKkjaNjv/ntiu8TU6IBPr0P2wW6FF5QPTlTcCPcbEfc4p/EKf73SLDr6aZ9+vriyioabC9iLx+uInyiuSVEtO/sfHgD7+uFi9hkLCkamWwghRf2PuCTPXScOfhvMuLMbTue56HxAM9NsC1spKBUm38xudjvf1DbScPOC5Jg1xZjLeCeu3XcnyR3wZbMi0cHUPBAI/TaYHWPXrOHWYRgpgT3tMd/W/TAHDIA5fsP8sevth6hDKKiwbSfI8d8ZLQJFMr8My4bUaalvItMzMbb398RcRynzF069FolRcehm2LBxHKK5ZwIK7qLTHY7fbFfzXFVp/7T2X6o7nqMLHGo9nFPnGVsSZngNddNVGLmncNoJBA/jUAn3Go+MFVKi1KellBDLt2P+2QCCG6wDbCDi/GnqPLl4U8tMMVT1dgdTmfSOmIqfH3qOiVFnU24ZiR4AM22xKUXf56LuMnFN9jL9nFtVzABPcgQT774zBzBDfSb9jjMb/oh+vY7oPUp04Y2JN9jE39MbLmvmCRIE7RuNhiKpxJ3JQqriNx0N7Ed8R5Gppp85FyBuABcQI+wtiivyWhdntbJ6uU9J/Pf8rYVZrhDGAJHjx/a+HjZhQpCkGLk9zN/t2/6xt8wDTzTO/TboB1wxXl4KDmsqEYSsGbADc+2LFkaTFN/8jxgmvkAX1RLHbx6DEtbKimiHVaSD3G1v74ZbCpeBtwnkCyZJ2B+mf4iBvb/ADsXxbilOkhqVGkATO/T8IxX8vmgbSFAFjvA6mD6gfbvOBM9ngyFd+w/T13wVINWUTPfGlc5j5qcpBI07hltpDebEkjvi88E+PstVZFqKaTmBJPKT3BER745ZnMm61CSNzqn1P8AU40+XhtD/W2rPoGqqVBCwQwMo0FTPUTI8z5G1zhaKdNFKonyz9OhgdJ7RFx/b2xznhHGatOm+l+VVWJuFPIgjxzMfbFmynxA9emCSGgBj3+UxJVh3NJldG//AFsb6gpFWLKLj2N0rKDI1qe2qPaCpxmZ4voBIJ9L37bQDhdRzFQDRWC22dekbET9S+NxfYiMQ5tHUTKkHYibjx/TphGElTP1KhJDEMf4rHHjuGX6jqG/ft7/AOd8Lkzjbcur0vj01v4o2jx/n9cKYGzp/pGFf7aadQqG36+RBH/84Lz9aJboALT16YrtZGdy2wm3tIH88NCPsDY5yXEWuD3LSb3HQ99wY7dsWHh+ZYkBpiQGgCItcluxk28DFWoTIOkEsOboIsJNtyQ3TqLScP8AhxqJFMIrBmJs3eDP+25nv+mGaRkXPLVtM8pYggEkx0EsGMD7iR7xiwcLzSxKCw3AFvPnbFSpZOy6ajgXLKw7AyovIgTcGd7jDTIViHPy6gInSZYmNzf1Oq5Ai2+MjMseYy4LBgwEiL9e0dPGxPTFO+KeBGoRVpKdQswkQR3N4tbFqUComgmGC6kYiBq/n6R5xPlH1jmHNFxb3Nt8FiNWqOL1OGIXGuqA5/AoJP3jT36jE2X4MoaUZy1wCAFibGCSxmOuLR8T8LWnV1osBrfnf0wkzOZFOmznoOm8kxb7ziDi97IyyStRRF/5BU5ArwthpYR7cmMwmqVWJlWVQdgXAPqR0nfGYSv6U+t+jrmY+JaVKDWoFDN2EMBbeRfxgOvxvI101BFO0qRpYTF1P8QgW9MCce+G85WphaZpDvraB7QDgHgXwStBi+cem8fTTRzp1d2JCk+mDjyS+u8mmQTpfoW8Qq0dTmhUaDuriGUn8vAxPR4iAGEglFk9+g6/4JGH54pSVm/+jphOrFFAYxtJF7YMy+eo5qmVTLCoIhggCgSPp1GOnY40MkWMsiFFIl6ZrTYADtBBM3HWOnfG+tfk6DofVdrHWJ2JO09IExi1UuHoKYQUUpjoBEr5tucVfMZCpRzC05ZqRuCy2H4jcCAZB++K8ldIMZWxIaYDsgF/F53AH2Lffrib9nUiCB/n6YX16mqqSCJvsD6Af55watXpN1vew9un+DDNHSiLPcGpGTVDaY+tfqTrqA2aIuL2Nr4qq8IprUDiqKlKmwJIVjImQDAIEgGxPfF8pZmnUHy6mzCGAPSIInET/DlDXqQEL/DqMf8AWCkPHI1o57xGtSarWNIn5RJYLEC7KQI7BiQB0+2LX8J8L0U0dtxceFaCQPRgrDs0nFlq8FyYBY0UBHWNzM+s4Dq176KakjYAC2CK58jzN1lAAAkbA9BPbx+m3QyAsnUoViNr38en+ecNMnwsyPm2/wBoJO+wt6T+mHLUEUSFgiSDfYfy2MdPGBQpSW4dV1ErTAA2k332tebYCzNF0J1dPqi/Qb++LZmarGLReZJnaYJAix2ntPg4R5tCRqaAo2F7LcRJB6TaO4xqMUfMuatQIlhN72tck/nhq+TBPIJgbjoR3id2n7dMM3ydOmy/LUJr6iSSYMhZHr/Trgw5HSurWvUgqDNrwLHaO4mB3nGsyQtpZQkWU/Sd0JBg2JLdJJab7YccPTRUKAkhljVaSdoGwNwI6xPa+ZZgdOqozqB+ANO34rkKALXMCdsO8lXV2K6Q4XlNgGEdArQCZ3i32jGZgnLlkU/wsBeCVAgyfqtEbxGM4XliyAh2ViJKwNgv0mxcqOjSOg8kjK12A0aQt+UD6TBvBFhv1Njg9QgZGVtBnYGO0yLxJ/yJxkwtGZKoG0MTp0GeaQT0uCJE9hbbDd7OGBid5NoOA81IR6gNws73B/FIAMW7AzB8YKohXVGO6nf28b3/AJ4PgU14/kRWoNCjWBIn7xa+OTcRpxTYuLKQSOhgwJ8TBjrEdcdqqIGpkHYjHDviujU+aaIuqywi4J7+g2++Fl0QmnyUl4KnXVWYsVkkySWaT6xb7YzDH/xtT+Afcf1x5gbN9kvZdsp8b1Q37xVE7RsL7HvbrhrU+I6LFWLIzOJ8IB3Hc453madSRqWGEyfXaOgwW2V+XTTUk/MB0uDs0TzdxjlyY42qGeKLVj3jPGvmhaaxpdjLg+JxH8McRzALKtZqaqrs2sDTYQGA+2FvCaaGlUpyfmgGoJAuQYIHtgzIvroZt2MsFVAQNg1QalHkwMNCCQFjSotjcceg6JmnZmIlWSNLCLebi+GlXixrUNSAhWkeSAYkdr9+xxT+H0hnaNGmdS1KVQzNtNGNyfDQBh9xKNLIn0IsBdxbc2Mk7+b/AHrGEU+RoQXK0VWtNNnOocxne4vG3S4++JmEyRebkm9t7jtsN8Q59WVZA3sl1g8sTe+52g+t76UlZQCwO8XMDeDAJkxBt46zipc8ouxYmGi0DrAifzwzoZ9v4YtG8n19h7+ML3VY00yQFJFp9bGIjb1PpaHM1dA0GVY2Xf3j+ISOxxqDY1OeLCDubDa/b/NsWLhlc02GXqUmBKhlqAcjyJYTEArfrsJgWwh+HsqXliRAEAnvO9+sfr9reHKU4JJJt6nwO1+vbGYYo2AIk01mZEmBvHfwAMLKg5pIA6T1vHb6RjzOZuF6yb/rhTmc+SgJF5IAG5E+vckW7nBsMsbXY5o8KLi5CgAECNuwg2gdjP6yr4rlVUlWIvMMN779biewHTC/P5DWqk516I30/L1q3eeZR40mR/JZmkFMUqVGpUqxMs5+ub2EmAOnvhXIZxSQwoJqUAqDT5ZI9SIC7yDf0HocFCmrBpOqVsoY6t+YiREAdht1E48y5p0xo1c+5GsxTMGdjB2M7D6uu+opadOkSbiXB5jI1EAgCI0mx7eBjIQKy+UWAVVlA5YvfpOwEEHt26xievlmVAAETSQRyCWM9mO/Xff8tEB0TuAAAylQQTe7MTE+bkQcH0aytp0jQ3SCFIsdgxhjvex874KFNRqq0whMEk3EyY/iNpk22G/jE6QKYA3UyNQYiT/yO2A0zaCVJNzYoxt2ILAfiAtsR3m2wqwzMiMX8RpI7tP0npa++531BsdZfNalJ1THKQDsf4dr/btiXg4EFV1AAEAMZjwLC3UdY9sJsjmSS6wFa2pZMbRO1/a1vXBnB80SXFt+hm5m027mxvcHBFZaEe2kjHNPjQAVLUwruIJG5ANhjpFZ4WfF5OOc/HDqnyq5MCWUiJDDeJHUGYk9/OBJaFkrRVtDi3bHuD6VdGAZXsdr4zCbOTfoIzOV+YpemNUwKlMb9yw8zc95OFPxFm9VXL6AWVVYQSVlouD5WADh0aYoywW1gSbGOx8b3++B6uXWqSSZuJn6SIt2IYXhgfExIxyRe7Z6+XEpLXYr4WzGorLSUuN4ZjAMgg9NsPMnwxaVOpTSy1BebwdQII9DjShVpZWmdKEmb3F/U9vYfnhz8MOaoatUQaFgIqzdp69W9NrYy5SlSPIksnPj0MuFcO/Z6QBjU5lp3jZREHcycC1clIaWe+4iQSCbHlJEQMPuKVgoUMDe3LMi1zYH1wFnXLLIaCYtAt0BkiAdyOhjtjtarR2wXFUVirlaYWAjlfrEKWbUBaxnp6dx2C9cpqcmDqvAItfZdIMSNgesEgCbOsylRmZQW+m0eDFjIhpJM+mBVqKtLSKh1ldIJUkSRYk9PAtabRgpjMRIKep3DHkgGd9XYaRvubHrvj2tw6pVX5jB4KysLELbSZ6A3P397pwr4UZ6P76VYjcR3PjtG5Ow7ThxmFRTpSbCLeskf5FpxmxRH8Lq6KoZNIZQVBF9MBpvB2Ox7E22xJ8U8XWm6UwDzLOodxeD1kjb07kDFgbh6uoJkGI/yDHbFY+JuHkr+7gOgggmxHQ+OoxOcnR0/GcedyFB4gpdVqVI1zp822HqcS5WkunUZKiI299/J74rlMimAz05qgQGEkdQCvax2wUOLvTQKqatViN2O42Emdov19MLFs6fkyi9oa5+gVU6dBU3IA+xiImeuBuHUQCtUq4iQoAmDeTEwAADBPYeuJMkXqGalkAYqLCdJgkkkCNvXe+xJzNblXUDGllmmQBIAaFtzGQRtaGt0FjgNsyrso1q0ASpCrtFwVIgxJ26g/TfGNTLkh5TmktIhVk2ZdQ5j4nsYxuzBYWoGDAWJOkGwIJG+6qJBIuwsCcShabMX+YoXVDQRAgEdZsRHYA74wEEVKSKAx0yTZpO+2waQLEXPWLYiZZW5IqLuxlwACZAneRIuCd998aa2DC0U0kaFAURI0ixA2IMbGCIx5U16wRTUG8SRr3klPqN4k2gX2InBSAFipq0ksWUiY+oi4HLEmeaZBAv74hSqA6hApBP0tIYNAPaJue0eMRUEF+RdZMyCbMR1eJWbbeOpjBFOnqbSeV1g2nVEbRF4k825k4ILCadECqGQsFcGbgrJje8nqPY4ZZDLFa6wDGkSTtaRA6mZN/yviPhWQLNLE3IN7mb79fvh5mwqqG6gxPW+MKzOM1AEIPbHO/9QLZJQ0mHGjp0O4IuPfqL4tXFK5qNdJW0fzI7dftisf6hOP2RESBziBpMqIMxJJ+3/eN0jk61jjMb/LxmBQnM6jRrlqYR1PYmeYb9RuIx6csKa8sstrgyZ7QP88Yn+UtRDUD7vBRbR2Kxue4wNTcgz+GbEG//ALDfzP67481Hrg4uYMOpAJkCIIgzNhHt74tnBM1T+X8uYYnlHQiwABH6WNzivKjMByA3kMCBbsdwT1uPfA+VQhvxKd7N0m5jYGeqke22Hxz4y5Ep4lPb7Oj5unLCCAfz9u39vssz4RJ7A80ySesKJ9dv5YH4Zx2RprKSYhXB3NxB6A239ZjDR+VdtKgXJYddtRNtzvjtU1NaOOUXB0yvVkQsWQu7xcarKItqJIiJJH5E7GuZvJPUqqqOaSlg1osRaDBMxvMdgOoF0r5ZB+8L6e4LALv1P5ekbQRjTNcJ+aUq0qlP5tMlhfUpWI0sFNt41Xi3bBTSA2O8jWYpoZlZwNxsfPj74ArKWb6W5SR9QgxfoZm0328yBiCnSqIwfQZ3cDrMdiVNrE+89mNZogaQdRF4Mxve2w87fljIxiV1HLMGQCDve4Anp9+uFPG6SVF+WvYxcgzFgGO1p874IqsYBB5BJaTvANyT6WkwPthRmMwWQlGYl2sdwTEMxk7C/L3X2JcUZMTV+AU3BVWfVcmWkAagsapALEyfE9ce5Hg6U21gArpIME6iTG23XUfcXnDJXU8pWADzc0kpEhh1BMqZm07nBKZoq7DsAEHQN1DbdGF94HkEjjXQ1ti7LsiK4COqKOVBcs2/Jt2MR1J8AxFEY3KqCsuCAe0HqRqIUwJ6bAxgw0pZ2U3kxKAnyq9dl2gA9I6xafm3EggidXQhvq6LDKv4bXPQRggBq4VQXVVE/UIJaL6WF9QJEwRuRuJjE6IHE6UboNUFZnYQNPKN4IHocafLkjWSJGwCnSNMkGBP0kfeIGIaFdBUZV5RIYMFswjl0gQD0EgbA73xqNYU6BGu9XUTYEQO9hbV2IjxaxOy5kFIgMn8TJ2EiSOsws9xt0xBmHJcqSrCTe1iRAKDpYmfUbA4lfRTU1H2/DE6wIkqbzvM7bbY1g2S5HLKOdU0yTJIA5e0jwdoG22C6edX8Ckt0IEgGTJkAzt0nfC2hrzFNTCoqmQJ0giTv4MixnsZsSyy1MjUysdSHmAEKo/gE9IUWJMd9sbswXTzzooYwxNyQCtjtYz2PfEvEs2TyiQCNz06Tta+JKem5YrpF7GPwy0+8/2wDXy+qm+mBHMmq4AF2WdyLyJ9OmDQAKtmqg0yTytzHYbbAjpPtt7Vf4/aowpNpOkkyOszaO5jpPpiyUqBep9QAZBCSdLRsGEyLyPvvcYQfEOfC1xSZWNNQF0l7hiJimNiZgSQTv6YWTpGq9FOHDXPYff+mMxdXyuWBhmSm0CUdiWUxsxAifA226YzEvvRD65hOQzDC6wbCNJ6+/XE1fNrUExpqDlnTtHRrbeZwjy9dUXQq6qZtP40M7x0jfBmczFNFV3qsUKwFg/MfuQJsCROowPXHFVHqyyRirkw8ZGpq1q7oG5iNIZB/wAe09r43o5ZlI+abkbhT9W9wZAv1FvTFQzPxFUjTSHyl7zNQ9pY7eigYHyPHK1MtDBtRn94NRB7gk2O32weLOb/AFkb6LJ8QcTNMCkuk1CLkfhG6x2Y+8Wwv4dxk/KzKVXDfNRV/eLquJg97A27GO2ENZy7Ekksxkkm5ONwh7YtCLSs5J/Jk5cn/wCBzVOQLrqVIELrYkL4UE29LDFj/wBO82KWYa0l6ZAAjoQf5Yq9NCLYLySOGBphtYMjQJPqIw8VW/JJ5m5Js6znuKVBCrCtuVi5Efh6E/50xX6/Eq4JYOWK7iBAubQSJ6WMdul0Qr5iroFSoFRoBKlRaQvS88wEH0iMScLovTNNWNql1F4VyAQO0kduoxRTd7LLMm6osGR45SqgKzRUBIIcg3Mn6RygxeLwL4kZLgghySI2gAiA95BMEGbbemFlfKKDFSmhP0kWiwmFIEXG0mYnabyfKZgvy2NKSCo21xsYZyHFlOlYiOs4qWNkoH5pJZSuyiyhiTFwRMMyzPUWgiDjf5CVEJTTYjVqOzhYAeJIIsSPBwCmdejUT5yLUQGdaACGDAA+dwJsb2FxJI+IMswNVHXSpPKbFrnVaP5HcYJierlCt9IIUlfRWALETEEx7gbb4HqLUQ6VLhQo7kEEc8Lqlm9QfF5mVOMUlBanfVvcbkyAb7XIgeLYWvxGlrlPqYwdI62A9N5AFoHnCuVBoLoI1NRLagAoVrAwBA2A3YAwREEiBYD2llAIIsLETEgwB+g3/vhZUatUqKaVJyADzTAvIPr1J9O+Cl4dUnVWdlEiFSYgjmEkW227T7JbYVE1zXEVV2przN1NvG/m5Md1xJl8ixCNUIdpuN5DAXtaBt+e5wOmRQViKbFtMRqEg7HQWUX2F+0+mLPSqhXRWCvrEBSBM7gEk9iLH8urJegPR7kskiR8tVGqRCgG4JMx69Sd47484g7rT5CS0XOkRMyLdD38elpjTc1AoTQt7SCZi7SJMmAI3EW7Y1rNUVyW5kizCCwjci0sSSBG29r4ZIAOzrUE03MPMNAlj/tkAWJMMes2wdlqSLTIEX2ntp2ttb+fWcBcQOkhRAUXaWIuwaSbGJ6xcDxjd30hjIJi28TPKJvPUekW2wbAyGoiSQq8xFjJC22H+033xS+H5GmaxqOPlVmVoYsrgPJGuksLrMXAExN9xhzx34gRF0NOogSikau0E3Cg9TfbYyMIMzxF8xTWnUSmKa3CaZA3gy0sTcyZvfEMj3XglPJxIKvwEWJb9odpvJy1ST6y2MwTTzDIAq1KigbKrkKPAAsB6YzCc0R+0izmdGWJbSvz2EQpMKsfjHXuFOK3mMw1Ri7sWY7k74iqPJN59e/fGgOEWNlMs3OXZKDgzJ5TU4Vm0Ttq79JwCrwQcN0zAqNIRma3IFn8xsPOFlDibDGF3JjzNcEoKwXVD/QQWnmKMVLADlIIBi839SPSpUKZUs4cawCCwPISRMC4hdLzPWNxgR8jWqXq1dKjZdRcj0WYH3xmulSEJTDPN2qXJ9FFh+eHjL0gT4zk+kG/KSolP5ahWJJb6miIUAQCwm5vhhTepTAUtSWBBZjBYW0yAdUrFjY7YrjZx2sXMdhZfYCBh/w/g+ug1WoSsglB4GzHwTb740nJbJwhydRIxmVEAV1XSP8A7dMi0zEhRN7xjejladQiK99xrVxeZ3vGAMhli5sDixpRNMALZhBkgGb7X6eLeoxOd/7h8eN5JUkDZn51JdSfvFYQ2lwyi/kggXJEEASZ8hf+eCm9F7ghl+WJMEixm3iIi/qGo4yhb5eYpaHuFZCBPoxiTG6nqNupN+RSjWGV0gEvbWm0MwG6xEkbSJHXFI5JxX62vaO/gqryVrPfECsgVaTsRJgjbxZbz/2emKbmtZJUoQjNIs5M2MBmA3gEwBPXHVf2WkGYwpQjcWGqZaRuLXEGCJtO2z5EBo2gm4AtEGLQSLGVgdY3EdUJJq49EmvZznLI8RJjbeDB/QcoP5+ls4fQNNVIAYXAYDl6HmI2HkTHa2HTumkLA1MLjSJB3MtBgR0F+oEYTLUSk5RyQp5wJEja4tBBBEffYyWYaVaLBwvOMraZBA6kRp2O228ixtaxwwd0qcrgAEXhhMdDG8/23thPTUJTFRyRsUZSVlJ3iTshB/LBvDeIKzGmwkiDMkjaJ6kDrJ777wtGs1oUMllwxDNzkEsahbVGxEyvS1u8Xw0y1MfLEw7bgMb6SSAY2HL0EDfthPxDgy/MNUS4AnQxOnVI3XYWHTeTPcm0WXlL1FbmFiojmEgCNpLAiSTveNsuzSoKzuYCwy828EHcMIUG/W1zgfOpU0MWqFiSGXYAbeJEHuBv74EZy1RSUb5SrMdA2y79I2B3MeuNsxm2QNMmKgEmQJJsB4ufBsMMKRZwamsdWptouQConyI1EnyIjC34tzy0KCCCdTzYieXYmbDp/wBnDVKeptTgBt7EXJkE2MXwv+JMnSzGUrNpDlablGvZkUwR136bEHzgNoRujniVfnO1R352uJ+mJ2G9gOmDVBpkq0W/pIjCDhtCo6k0yAyqWMkKAFiSCTEyY97XxZOHuK6XPMFlbXJtK9zvbHNkuLt9C5IprrZB80nr+f8AfGYh+Ue35j+uMxO0c3BigtibLZR6n0rbqxso9ScHZfIKt2OojpFv74IZy3/EbDp7YvvwFySIaWSppdj8xu2yf1P5YOpZhjyiFX+FRA+wwMUwXl8qzEKo9cK4ryK5WH0sm7IGnlPb9fGE9XLPNwPbYdgPJx0DOZDLfLRqiq+lYAP5wO/SY6nFZegNRIETsBsPA9MTjKmdGdQhBcexXk8hqYA/TO3fHU+KcNDUdC2EACO3b7WxUuG5SCJAgYK49x/5SfLRv3rDlH8A6MfPYY0k5C/Fnuq7NaopK7U6SiaZgsTOojcATaD17g9MSkAgxO0XgjruD3k/bFX4VVO8jUTOo/eT56z/AGw8OYMtbcXB6jaR5t0ue18Qktns4+KVIgz9FagKOCQRP9wdwQdmG2Ki7VMrU0Go4DfS4O4/3dDB6H1xeFqgLMagTeb309una148YWcc4ctamVI5hdT1j/I/X0pCdOn0bJDkv6S8LztTSVYgkGRAEN10kRYzcRFxY4PyOaLQNSsGH1AAqNoseYLbaTefeg8O4q1FjTqSRMDuL9D0N/0w1rVpHz8u+ktZ1/Dr35h/ugfdrjFoJwlS6fRytcl/UXfMZkErTqsP3g0Kv0sGnlMkwQYBBv5BwFlqwC/LdEMEEgj31AhtJ1CDO/fCfJcWdUKVULyB9BAsSIZdUFSImRvG02xV89l3dnh2dDJGomw7A7RPS8ecdcWRkXbOZ/8AaKi06bK2khmINgysNKes83qB3OCcuNLU3ACaBDXAEGYU9Cp6Dp2xzzhGefLVAdJ5WuD6xe/e2LfkuIfMUmVAabGZIsBF7XE4WUnewxRYV4y1IgssLMSbXG2wMiAf67HE2azK5gh6QAqUzq25TAPLUI3E33/oUmTztKrNOqA3QqYJ1X/M2++C8hlQKbCkxMbQexMKfWQPE4VO2M9Ial1dkW86QzMZliGPYCYC2ta0Y8qUw6MhaRpgmJDXkQb7WPf88C5uppqIv1EQswO+o2IPUbidh2jEdeoWK01jUbw24A39SAwt5wzZJsD4xxL5VJ2UQSQEAN1EwW36C49sVXP8YzNJXoK0CpJNgZptsVPSeZD/AMbbTgfjuac1qlMlSFOgkbCGnlnZgRB9xcYjOcUwajlyBA6wN4HSNz98I+7ElKlQtyXB/mNeYHj9MMsq1WlKmPlrLamHMDFtM92i23ocEZTjVNDZCT0mLeRuP1wJxTiJdizgEApA6BQTMzM3I/wRicm5OgRlegSrmqjEm5nre+MxYqmXLHUtRwpuApgAeB0xmIXE6Pp/pGmVZ9tj/k4kbLgWF4/Xviw/sWlZJPN2PTtHTC9qIHoPzw0MnNs4M+NYmknYClD3OGuQoxsLnGmXp3ki+GGVom5w7OflZFnqm0dMeUKU3wTWyqopqO3KBJ3t9rnFW4lxxqo00ZWn1OzN/QeMJLvRXHjlkYy4nxgU5SnzVNvCeT0nx98VwklzJ1MxuTcknue+NaC3t7euCBRmCNx1/wA8TgXR6mHCoLQVlqQECYnuDG83m4vHjfDFZJBjqR3j/aR2i87X84V/PIMgE9r7gnZuvn7YZfMOpGFwwhR3np9rX6AYm7OqLSD3bUQJuTsQL+bXm+3uMboCwhgQRaTbqDfsb7jxcjfelwZ/xsEEEAAlzJiSQbdI3ODsrwgbambtZRfb29sK40ib+VjTpsoXxbw0K+oRDfrF4thTwNKlN4anUak1n5WiO8xYg3Bx0P4kpqoApwCBJmSfW9t/5e1GzL1JnW25uTt/bF8c+UeJZwx0puTv1X+Rsr1KZam/Np2aLxuLdQQdv1x4cvVuQ40mTdZAN+oIPbC2lnnai9SZZBJn8S7A+CLWw34XmXcBbC0fmdvGKwlJL/g5ckY3roXPw4veeaTbYA9RH33ntODcvwo01JBOkXJE37e+nr0xYsrk+WO3bBfyOSV7j3XYD88Hm5PZOqEnB8opYVY1Ft1Akk2G52Ijfz4w9NAKDDhSzAaRtdZE37+mw9MDVymiV1BiTsYixPo0GLeMa1+Iimy0mu9SBPS0jV/bzh06F29EXFeI/Ip/Mqw1SToIHcAM3iTG/wDLHP6nG6jVfmKzB+jAxFiLbxykj8974a/GeWZFQsS4dyQ2o2gnUuknvBBnvYYqtEXwydqxJxcXTDNBMtMkdD26x37/AOHEy7YlycyD2I+/TBLZUakCkD5rAAX5ZMXtsGkDcxheRJXJ0gFli4wNWqMwKC5MD2mfvIEeuGr5QHUJuFJHqGKn8wca/C3D9eYQsJCuJvctpZlE/wDoTPiOuFT8lI4mmr8hmX4k1FRScQySp9QceY94rw1qlZ3p0mVJgBSgEqNLEDVaWBPvjzA4I7Nez//Z'