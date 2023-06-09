//------------------------------ MODULE --------------------------------
import {LocaleConfig, Calendar} from 'react-native-calendars';
import { useState, useEffect } from 'react';
import {timeToText} from '@/lib'
import styled from 'styled-components/native';
import { useIsFocused } from '@react-navigation/native';

//------------------------------ SETTING --------------------------------
LocaleConfig.locales['kr'] = {
    monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
    monthNamesShort: ['1월.', '2월.', '3월', '4월', '5월', '6월', '7월.', '8월', '9월', '10월', '11월', '12월'],
    dayNames: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
    dayNamesShort: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    today: "오늘"
};
LocaleConfig.defaultLocale = 'kr';

//---------------------------- COMPONENT -------------------------------
export default function CalendarView({ initDate = null, dateChange = () => {}, scheduleData = [] }){
    //init
    const isFocused = useIsFocused();

    //state
    const [selected, setSelected] = useState(null);
    const [dayset, setDayset] = useState(null);

    //function
    const init = () => {
        try{
            const currentDate = initDate ? initDate : new Date();

            const threeMonthsEarlier = new Date();
            threeMonthsEarlier.setMonth(currentDate.getMonth() - 3);
        
            const threeMonthsLater = new Date();
            threeMonthsLater.setMonth(currentDate.getMonth() + 3);
        
            setDayset({
                td : currentDate,
                sd : threeMonthsEarlier,
                ed : threeMonthsLater
            });
            setSelected(selected || timeToText(currentDate, 'y-mm-dd'));
            dateChange(selected || timeToText(currentDate, 'y-mm-dd'));
        }catch(e){
            console.log(e);
            setDayset({
                td : null,
                sd : null,
                ed : null
            });
        }
    }

    const bubbleCount = (cnt) => {
        return (
            <StyledBubbleView>
                <StyledBubbleText>+{cnt}</StyledBubbleText>
                <BubbleArrow/>
            </StyledBubbleView>
        )
    }

    const markDate = () => {
        try{            
            //day1 and saturday css exception
            const extraChk = (new Date(selected).getDate() == 1 && new Date(selected).getDay() == 5);

            //selectedStyle
            const selectedStyle = {
                backgroundColor: 'white',
                borderColor: 'red',
                borderWidth: 1,
                margin: extraChk ? 1 : -1,
                width:30,
                height:30,
                top: extraChk ? -2 : 0,
            };

            //selected
            const selectedObj = {
                [selected]: {
                    selected: true, 
                    disableTouchEvent: true, 
                    customStyles: {
                        container: selectedStyle,
                        text : {color: '#2d4150'}
                    },
                }
            };

            //sunday
            const sundayObj = {};
            let targetDate = new Date(dayset.sd);
            const endDate = new Date(dayset.ed);
            while (targetDate <= endDate) {
                const dateString = targetDate.toISOString().split('T')[0];
                if (targetDate.getDay() === 0) {
                    sundayObj[dateString] = { 
                        customStyles: {
                            container : dateString == selected ? selectedStyle : null,
                            text : { color:'red' }
                        } 
                    };
                    targetDate.setDate(targetDate.getDate() + 6);
                }
                targetDate.setDate(targetDate.getDate() + 1);
            }

            //markedDay
            const markedObj = {...scheduleData};
            for(let key in markedObj){
                markedObj[key] = {                    
                    customStyles: {
                        container: key == selected ? selectedStyle : {
                            backgroundColor: 'white',
                            borderColor: 'transparent',
                            borderWidth: 1,
                            margin: extraChk ? 1 : -1,
                            width:30,
                            height:30,
                            top: extraChk ? -2 : 0,
                        },
                        text : { color: new Date(key).getDay() === 0 ? 'red' : '#2d4150'},
                        renderUnder: () => bubbleCount(scheduleData[key].length)//to use this option, customized "renderUnderView()" function inside "react-native-calendars/src/calendar/day/basic/index.js"
                    },
                }
            }

            return ({...selectedObj, ...sundayObj, ...markedObj }); //order is important!
        }catch(e){
            console.log(e);
            return Object();
        }
    }

    //effect
    useEffect(() => {
        //if(isFocused) init(); //everytime init(dayset, selected refresh) when focused
        init(); 
    }, [/*isFocused*/]);

    //render
    return dayset ? (
        <Calendar
            style={{
                borderWidth:0.5,
                borderColor: '#eee',
                padding:10,
                paddingTop:20,
            }}
            theme={{
                'stylesheet.calendar.main': {
                    week: {
                        marginTop: 5,
                        marginBottom: 17,
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                    },
                },
                backgroundColor: '#ffffff',
                calendarBackground: '#ffffff',
                textSectionTitleColor: '#b6c1cd',
                todayTextColor: '#2d4150',
                dayTextColor: '#2d4150',
                textDisabledColor: '#eee',
                textDayFontSize: 15,
                textDayFontWeight: '500',
                arrowColor: '#F33562',
                textMonthFontSize: 18,
                textMonthFontWeight: '500',
            }}
            current={timeToText(dayset.td, 'y-mm-dd')}
            minDate={timeToText(dayset.sd, 'y-mm-dd')}
            maxDate={timeToText(dayset.ed, 'y-mm-dd')}
            monthFormat={'M월'} 
            onDayPress={day => {
                setSelected(day.dateString);
                dateChange(day.dateString);
            }}
            markingType={'custom'}
            markedDates={markDate()}
            hideExtraDays={true}
        />
    ) : null;
}

//------------------------------- STYLE --------------------------------
const StyledBubbleView = styled.TouchableOpacity`
    background:#F33562;
    padding:0.35px 7px;
    margin:-8.5px 0 0 0;
    border-radius:3px;
    position: static;
    bottom:-14px;
`;
const BubbleArrow = styled.TouchableOpacity`
    background:#F33562;
    position: absolute;
    width: 10px;
    height: 10px;
    transform: rotate(45deg);
    bottom: 5px;
    left: 10px;
    z-index:-1;
`;
const StyledBubbleText = styled.Text`
    font-size:10px;
    color:white;
`;
