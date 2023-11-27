import delay from 'lodash/delay';
import { providerMap } from '@/utils/const'
const resourceUrl = '/assets/third'

let loaded = false
const providerArr = Object.entries(providerMap)

const providerPreload = () => {
    if (loaded) return
    providerArr.forEach(([key, arr], index) => {
        const delayTime = (index + 1 ) * 10000
        delay(() => {
            arr.forEach((item)=> {
                const url = `${resourceUrl}/games/${key}/${item}.png`
                fetch(url)
            })
        }, delayTime, 'later')
    })
    loaded = true
}

export default providerPreload
