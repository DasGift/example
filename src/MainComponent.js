import React, {useEffect} from "react";

export const MainComponent = () => {
    let arr = [1, 2, null, 'String', true, 4454654, {}, 'blabla']

    useEffect(() => {
        func1()
        func2()
        func3()
        func4()
        func5()
    }, [])
    const func1 = () => {
        console.time('Start1')
        for (let i in arr) {
            console.log(arr[i])
        }
        console.timeEnd('Start1') // 1.219970703125 ms
    }
    const func2 = () => {
        console.time('Start2')
        arr.forEach(item => console.log(item))
        console.timeEnd('Start2') // 0.85693359375 ms
    }
    const func3 = () => {
        console.time('Start3')
        arr.map(item => console.log(item))
        console.timeEnd('Start3') // 0.819091796875 ms
    }
    const func4 = () => {
        console.time('Start4')
        for (let i of arr) {
            console.log(i);
        }
        console.timeEnd('Start4') // 0.794921875 ms
    }
    const func5 = () => {
        console.time('Start5')
        for (let i = 0; i <= arr.length; i++) {
            console.log(arr[i]);
        }
        console.timeEnd('Start5') // 0.929931640625 ms
    }
    return (
        <div></div>
    )
}