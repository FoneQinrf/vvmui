/*
 * @Author: Fone丶峰
 * @Date: 2020-04-01 11:07:37
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-01 13:21:53
 * @Description: 
 * @Email: qinrifeng@163.com
 */
import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import { mount } from 'vue-test-utils'
import Backtop from '@/../packages/components/Backtop/index.vue'
chai.use(sinonChai)

describe('Backtop.vue', () => {
    it('存在.', () => {
        expect(Backtop).to.exist
    })
})