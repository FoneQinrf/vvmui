/*
 * @Author: Fone丶峰
 * @Date: 2020-04-08 09:48:03
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-24 14:15:41
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 */


import { weeks } from "./utils";
const Time = new Date();
const timestamp = new Date(
    `${Time.getFullYear()}/${Time.getMonth() + 1}/${Time.getDate()}`
).getTime();
export default {
    watch: {
        locationDate(val) {
            if (val) {
                this.$refs.DateList.locationDateFnc();
            }
        }
    },
    data() {
        return {
            options: []
        };
    },
    computed: {
        clasess() {
            return options => {
                const timestamp2 = new Date(
                    `${options.year}/${options.month}/${options.day}`
                ).getTime();
                const optionsDate = `${options.year}/${options.month}/${options.day}`;
                const date = `${this.options.year}/${this.options.month}/${this.options.day}`;
                if (this.type === 'single') {
                    return [
                        "vvm-Calendar-DateList-item-day",
                        { selectDate: optionsDate === date },
                        {
                            disabledDate:
                                this.oldDateDisabledFnc(timestamp2) ||
                                this.disabledList.includes(optionsDate)
                        }
                    ];
                }
                if (this.options.length === 1) {
                    const timestamp1 = new Date(
                        `${this.options[0].year}/${this.options[0].month}/${this.options[0].day}`
                    ).getTime();
                    return [
                        "vvm-Calendar-DateList-item-day",
                        { selectDate: timestamp1 === timestamp2 },
                        {
                            disabledDate:
                                this.oldDateDisabledFnc(timestamp2) ||
                                this.disabledList.includes(optionsDate)
                        }
                    ];
                }
                if (this.options.length === 2) {
                    const timestamp1 = new Date(
                        `${this.options[0].year}/${this.options[0].month}/${this.options[0].day}`
                    ).getTime();
                    const timestamp3 = new Date(
                        `${this.options[1].year}/${this.options[1].month}/${this.options[1].day}`
                    ).getTime();
                    return [
                        "vvm-Calendar-DateList-item-day",
                        {
                            selectDate: timestamp1 === timestamp2 && timestamp2 === timestamp3
                        },
                        {
                            "selectDate startDate":
                                timestamp1 === timestamp2 && timestamp2 !== timestamp3
                        },
                        {
                            "selectDate endDate":
                                timestamp2 === timestamp3 && timestamp1 !== timestamp2
                        },
                        {
                            "select-Date-Middle":
                                timestamp1 < timestamp2 && timestamp2 < timestamp3
                        },
                        {
                            disabledDate:
                                this.oldDateDisabledFnc(timestamp2) ||
                                this.disabledList.includes(optionsDate)
                        }
                    ];
                }
                return [
                    "vvm-Calendar-DateList-item-day",
                    {
                        disabledDate:
                            this.oldDateDisabledFnc(timestamp2) ||
                            this.disabledList.includes(optionsDate)
                    }
                ];
            };
        }
    },
    methods: {
        style(index, week) {
            if (index === 0) {
                const i = weeks.indexOf(week);
                return { marginLeft: `${(100 / 7) * i}%` };
            }
            return { marginLeft: "0px" };
        },
        clickDate(index, options) {
            //是否点击日期是否是当前日期之前
            if (
                this.oldDateDisabledFnc(
                    new Date(`${options.year}/${options.month}/${options.day}`).getTime()
                )
            ) {
                return;
            }
            //点击日期是否存在禁用日期之中
            if (
                this.disabledList.includes(
                    `${options.year}/${options.month}/${options.day}`
                )
            ) {
                return;
            }
            let array;
            if (this.type === 'range') {
                if (this.options.length === 0) {
                    this.$set(this.options, 0, options);
                } else {
                    const compareDate = this.compareDate(options);
                    if (compareDate) {
                        this.$set(this.options, 1, options);
                    } else {
                        this.options = [];
                        this.$set(this.options, 0, options);
                    }
                }
                array = []
                this.options.map((item) => {
                    if (this.formatter) {
                        array.push(this.formatter(`${item.year}/${item.month}/${item.day}`))
                        return
                    }
                    array.push(`${item.year}/${item.month}/${item.day}`)
                })
            } else {
                this.options = options;
                const { year, month, day } = this.options
                array = this.formatter ? this.formatter(`${year}/${month}/${day}`) : `${year}/${month}/${day}`
            }
            this.currentValue = array
            this.$emit("on-change", array, this.options);
        },
        compareDate(options) {
            const timestamp1 = new Date(
                `${this.options[0].year}/${this.options[0].month}/${this.options[0].day}`
            ).getTime();
            const timestamp2 = new Date(
                `${options.year}/${options.month}/${options.day}`
            ).getTime();
            return timestamp2 >= timestamp1;
        },
        oldDateDisabledFnc(newTimestamp) {
            if (this.oldDateDisabled) {
                return timestamp > newTimestamp
            }
            return false;
        }
    }
};