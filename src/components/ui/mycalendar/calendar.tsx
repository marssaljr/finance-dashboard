import moment from "moment";
import { useState } from "react";
import { Button } from "../button";


function Calendar() {
    const [year, setYear] = useState(2024)
    const [month, setMonth] = useState(11)
    function getThisWeekDates() {
        const weekDates = [];
        for (let i = 1; i <= 7; i++) {
            weekDates.push(moment().day(i));
        }
        return weekDates;
    }
    const thisWeekDates = getThisWeekDates();

    const getDaysArray = (year: number, month: number) => {
        const monthIndex = month - 1; // 0..11 instead of 1..12
        const date = new Date(year, monthIndex, 1);
        const result = [];
        while (date.getMonth() === monthIndex) {
            result.push(`${date.getDate()}`);
            date.setDate(date.getDate() + 1);
        }
        return result;
    }

    return (
        <div className="w-full h-full flex flex-col justify-center gap-2 p-2">
            <div className="pl-2 flex flex-row gap-6 w-full h-full justify-around text-muted-foreground text-sm">
                <p className="w-5 h-5 items-end">D</p>
                <p className="w-5 h-5">S</p>
                <p className="w-5 h-5">T</p>
                <p className="w-5 h-5">Q</p>
                <p className="w-5 h-5">Q</p>
                <p className="w-5 h-5 items-end">S</p>
            </div>
            <div className="grid grid-cols-6 gap-2">
                {getDaysArray(year, month)?.map((day) => <Button variant={new Date().getDay().toString() === day ? 'default' : 'ghost'} className="w-5 h-7 rounded-full" key={day}>{day}</Button>)}
            </div>
        </div>
    )
}

export default Calendar