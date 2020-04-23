/*
 * @Author: Fone丶峰
 * @Date: 2020-04-21 14:38:27
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-22 13:17:52
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 */
import { mount } from 'vue-test-utils'
import { findComponentsDownward, findComponentsDownwardList } from "../utils";
import From from '@/components/From'
import FromItem from '@/components/FromItem'
import Input from '@/components/Input'
import NumberInput from '@/components/NumberInput'
import Picker from '@/components/Picker'
import Vue from "vue";

describe('From.vue', () => {
    it('不验证状态，数据正常', async (done) => {
        const component = new Vue({
            data() {
                return {
                    model: {
                        value: ""
                    }
                }
            },
            render(h) {
                return (<From model={this.model}>
                    <FromItem prop="value">
                        <Input value={this.model.value} />
                    </FromItem>
                </From>)
            }
        })
        await Vue.nextTick();
        const from = findComponentsDownward(component.$mount(), 'From')
        const fromItem = findComponentsDownward(from, 'From-Item')
        const fromItemInput = findComponentsDownward(fromItem, 'Input')
        expect(from.model.value).toBe('');
        fromItemInput.change({ target: { value: '1234' } })
        from.validate((val) => {
            expect(val).toBe(true)
            expect(fromItem.ruleState).toBe('success')
            done()
        })
    })

    it('验证Input组件校验状态，数据正常', async (done) => {
        const component = new Vue({
            data() {
                return {
                    model: {
                        value: ""
                    }
                }
            },
            render(h) {
                return (<From model={this.model}>
                    <FromItem prop="value" rule={[{ required: true, message: '请输入内容' }]}>
                        <Input value={this.model.value} />
                    </FromItem>
                </From>)
            }
        })
        await Vue.nextTick();
        const from = findComponentsDownward(component.$mount(), 'From')
        const fromItem = findComponentsDownward(from, 'From-Item')
        const fromItemInput = findComponentsDownward(fromItem, 'Input')
        fromItemInput.blur()
        expect(fromItem.message).toBe('请输入内容')
        expect(fromItem.ruleState).toBe('error')
        fromItemInput.change({ target: { value: '1234' } })
        fromItemInput.blur()
        expect(fromItem.ruleState).toBe('success')
        fromItemInput.change({ target: { value: '' } })
        fromItemInput.blur()
        expect(fromItem.ruleState).toBe('error')
        from.validate((val) => {
            expect(val).toBe(false)
            done()
        })
    })

    it('验证数字键盘', async (done) => {
        const component = new Vue({
            data() {
                return {
                    model: {
                        value: ""
                    }
                }
            },
            render(h) {
                return (<From model={this.model}>
                    <FromItem prop="value" rule={[{ required: true, message: '请输入内容', type: 'number' }]}>
                        <NumberInput value={this.model.value} />
                    </FromItem>
                </From>)
            }
        })
        await Vue.nextTick();
        const from = findComponentsDownward(component.$mount(), 'From')
        const fromItem = findComponentsDownward(from, 'From-Item')
        const fromItemRule = findComponentsDownward(fromItem, 'Number-Input')
        fromItemRule.confirm()
        expect(fromItem.message).toBe('请输入内容')
        expect(fromItem.ruleState).toBe('error')
        fromItemRule.keyup(2)
        expect(fromItem.ruleState).toBe('success')
        fromItemRule.remove()
        expect(fromItem.ruleState).toBe('error')
        from.clearValidate()
        from.validate((val) => {
            expect(val).toBe(false)
            done()
        })
    })

    it('自定义校验', async (done) => {
        const component = new Vue({
            data() {
                const value = (rule, value, callback) => {
                    if (!value) {
                        return callback(new Error("请输入内容"));
                    }
                    callback();
                }
                return {
                    model: {
                        value: ""
                    },
                    rules: {
                        value: [{ validator: value, trigger: "blur" }]
                    }
                }
            },
            render(h) {
                return (<From model={this.model} rules={this.rules}>
                    <FromItem prop="value">
                        <Input value={this.model.value} />
                    </FromItem>
                </From>)
            }
        })
        await Vue.nextTick();
        const from = findComponentsDownward(component.$mount(), 'From')
        const fromItem = findComponentsDownward(from, 'From-Item')
        const fromItemRule = findComponentsDownward(fromItem, 'Input')
        fromItemRule.blur()
        expect(fromItem.message).toBe('请输入内容')
        expect(fromItem.ruleState).toBe('error')
        fromItemRule.change({ target: { value: '1234' } })
        expect(fromItem.ruleState).toBe('success')
        fromItemRule.change({ target: { value: '' } })
        fromItemRule.blur()
        expect(fromItem.ruleState).toBe('error')
        from.clearValidate()
        from.validate((val) => {
            expect(val).toBe(false)
            done()
        })
    })

    it('多个FromItem校验', async (done) => {
        const component = new Vue({
            data() {
                return {
                    model: {
                        value: "",
                        name: ""
                    }
                }
            },
            render(h) {
                return (<From model={this.model}>
                    <FromItem prop="name" rule={[{ required: true, message: '请输入name' }]}>
                        <Input value={this.model.name} />
                    </FromItem>
                    <FromItem prop="value" rule={[{ required: true, message: '请输入value', type: 'number' }]}>
                        <NumberInput value={this.model.value} />
                    </FromItem>
                </From>)
            }
        })
        await Vue.nextTick()
        const from = findComponentsDownward(component.$mount(), 'From')
        const [RuleInput, RuleNumberInput] = findComponentsDownwardList(from, 'From-Item')
        const InputItem = findComponentsDownward(RuleInput, 'Input')
        const fromItemRule = findComponentsDownward(RuleNumberInput, 'Number-Input')
        const array = []
        from.validate((val) => {
            array.push(val)
            expect(val).toBe(false)
        })
        InputItem.blur()
        expect(RuleInput.message).toBe('请输入name')
        expect(RuleInput.ruleState).toBe('error')
        from.validate((val) => {
            array.push(val)
            expect(val).toBe(false)
        })
        fromItemRule.confirm()
        expect(RuleNumberInput.message).toBe('请输入value')
        expect(RuleNumberInput.ruleState).toBe('error')
        fromItemRule.keyup(2)
        expect(RuleNumberInput.ruleState).toBe('success')
        from.validate((val) => {
            array.push(val)
            expect(array).toEqual([false, false, false])
            done()
        })
    })

    it('多个FromItem自定义校验', async (done) => {
        const component = new Vue({
            data() {
                const value = (rule, value, callback) => {
                    if (!value) {
                        return callback(new Error("请输入value"));
                    }
                    callback();
                }
                const name = (rule, value, callback) => {
                    if (!value) {
                        return callback(new Error("请输入name"));
                    }
                    callback();
                }
                return {
                    model: {
                        value: "",
                        name: ""
                    },
                    rules: {
                        name: [{ validator: name, trigger: "blur" }],
                        value: [{ validator: value, trigger: "change" }]
                    }
                }
            },
            render(h) {
                return (<From model={this.model} rules={this.rules}>
                    <FromItem prop="name">
                        <Input value={this.model.name} />
                    </FromItem>
                    <FromItem prop="value">
                        <NumberInput value={this.model.value} />
                    </FromItem>
                </From>)
            }
        })
        await Vue.nextTick()
        const from = findComponentsDownward(component.$mount(), 'From')
        const [RuleInput, RuleNumberInput] = findComponentsDownwardList(from, 'From-Item')
        const InputItem = findComponentsDownward(RuleInput, 'Input')
        const fromItemRule = findComponentsDownward(RuleNumberInput, 'Number-Input')
        const array = []
        from.validate((val) => {
            array.push(val)
            expect(val).toBe(false)
        })
        InputItem.blur()
        expect(RuleInput.message).toBe('请输入name')
        expect(RuleInput.ruleState).toBe('error')
        from.validate((val) => {
            array.push(val)
            expect(val).toBe(false)
        })
        InputItem.change({ target: { value: '1234' } })
        fromItemRule.confirm()
        expect(RuleNumberInput.message).toBe('请输入value')
        expect(RuleNumberInput.ruleState).toBe('error')
        fromItemRule.keyup(2)
        expect(RuleNumberInput.ruleState).toBe('success')
        from.validate((val) => {
            array.push(val)
            expect(val).toBe(true)
            expect(array).toEqual([false, false, true])
            done()
        })
    })

    it('异步model', async (done) => {
        const component = new Vue({
            data() {
                return {
                    model: {
                        value: "",
                        name: ""
                    }
                }
            },
            render(h) {
                return (<From model={this.model}>
                    <FromItem prop="name" rule={[{ required: true, message: '请输入name' }]}>
                        <Input value={this.model.name} />
                    </FromItem>
                    <FromItem prop="value" rule={[{ required: true, message: '请输入value', type: 'number' }]}>
                        <NumberInput value={this.model.value} />
                    </FromItem>
                </From>)
            },
            mounted() {
                setTimeout(() => {
                    this.model.value = 123
                    this.model.name = '123'
                }, 2000)
            }
        })
        await Vue.nextTick()
        const from = findComponentsDownward(component.$mount(), 'From')
        const [RuleInput, RuleNumberInput] = findComponentsDownwardList(from, 'From-Item')
        const InputItem = findComponentsDownward(RuleInput, 'Input')
        const fromItemRule = findComponentsDownward(RuleNumberInput, 'Number-Input')
        setTimeout(async () => {
            await Vue.nextTick()
            expect(RuleInput.itemVal).toBe('123')
            expect(RuleNumberInput.itemVal).toBe(123)
            const array = []
            from.validate((val) => {
                array.push(val)
                expect(val).toBe(true)
            })
            InputItem.blur()
            expect(RuleInput.ruleState).toBe('success')
            from.validate((val) => {
                array.push(val)
                expect(val).toBe(true)
            })
            fromItemRule.confirm()
            expect(RuleNumberInput.ruleState).toBe('success')
            from.validate((val) => {
                array.push(val)
                expect(val).toBe(true)
                expect(array).toEqual([true, true, true])
                done()
            })
        }, 2000)
    })

    it('clearValidate功能', async (done) => {
        const component = new Vue({
            data() {
                return {
                    model: {
                        value: "",
                        name: ""
                    }
                }
            },
            render(h) {
                return (<From model={this.model}>
                    <FromItem prop="name" rule={[{ required: true, message: '请输入name' }]}>
                        <Input value={this.model.name} />
                    </FromItem>
                    <FromItem prop="value" rule={[{ required: true, message: '请输入value', type: 'number' }]}>
                        <NumberInput value={this.model.value} />
                    </FromItem>
                </From>)
            }
        })
        await Vue.nextTick()
        const from = findComponentsDownward(component.$mount(), 'From')
        const [RuleInput, RuleNumberInput] = findComponentsDownwardList(from, 'From-Item')
        from.validate((val) => {
            expect(val).toBe(false)
            from.clearValidate()
            expect(RuleInput.ruleState).toBe('')
            expect(RuleNumberInput.ruleState).toBe('')
            done()
        })
    })

    it('resetFields功能', async () => {
        const component = new Vue({
            data() {
                return {
                    model: {
                        value: "123",
                        name: "234",
                        picker: [0, 1, 2]
                    }
                }
            },
            render(h) {
                return (<From model={this.model}>
                    <FromItem prop="name" rule={[{ required: true, message: '请输入name' }]}>
                        <Input value={this.model.name} />
                    </FromItem>
                    <FromItem prop="value" rule={[{ required: true, message: '请输入value', type: 'number' }]}>
                        <NumberInput value={this.model.value} />
                    </FromItem>
                    <FromItem prop="picker" rule={[{ required: true, message: '请输入picker', type: 'array' }]}>
                        <Picker value={this.model.picker} />
                    </FromItem>
                </From>)
            }
        })
        await Vue.nextTick()
        const from = findComponentsDownward(component.$mount(), 'From')
        from.resetFields()
        await Vue.nextTick()
        expect(from.model.picker).toEqual([])
        expect(from.model.value).toBe('')
        expect(from.model.name).toBe('')
    })

    it('validateField功能', async () => {
        const component = new Vue({
            data() {
                return {
                    model: {
                        value: "",
                        name: "",
                    }
                }
            },
            render(h) {
                return (<From model={this.model}>
                    <FromItem prop="name" rule={[{ required: true, message: '请输入name' }]}>
                        <Input value={this.model.name} />
                    </FromItem>
                    <FromItem prop="value" rule={[{ required: true, message: '请输入value', type: 'number' }]}>
                        <NumberInput value={this.model.value} />
                    </FromItem>
                </From>)
            }
        })
        await Vue.nextTick()
        const from = findComponentsDownward(component.$mount(), 'From')
        const [RuleInput, RuleNumberInput] = findComponentsDownwardList(from, 'From-Item')
        const flag = await from.validateField('name');
        expect(flag).toBe('error')
        expect(RuleInput.ruleState).toBe('error')
        from.model.name = '123'
        await Vue.nextTick()
        const flags = await from.validateField('name');
        expect(flags).toBe('success')
        expect(RuleInput.ruleState).toBe('success')
    })
})