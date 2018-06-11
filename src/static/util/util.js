/**
 * Created by admin on 2018-6-5.
 */
export const isEmpty = (obj) => {
    return !Object.keys(obj).length > 0
};

export const bullElement = (e, el, option = {}) => {
    return new Promise((resolve, reject) => {
        let initOption = {
            bullWidth: 20,
            bullColor: '#B4282D',
            timingTransition: 'all .5s cubic-bezier(0,0,0.2,1)',
            ...option
        };

        let {bullWidth, bullColor, timingTransition} = initOption;
        e.persist();
        /*获取起点位置*/
        let startPosition = e.nativeEvent.touches[0];
        let [x, y] = [startPosition.clientX, startPosition.clientY];

        /*获取终点位置*/
        let finalPosition = el.getBoundingClientRect();
        let [finalX, finalY] = [finalPosition.left, finalPosition.top];
        let div = document.createElement('div');
        document.body.appendChild(div);
        div.style.cssText =
            'position:fixed;' +
            `left:${x-bullWidth/2}px;` +
            `top:${y-bullWidth/2}px;` +
            'z-index:2;' +
            `background-color:${bullColor};` +
            `width:${bullWidth}px;` +
            `height:${bullWidth}px;` +
            'border-radius:50%;' +
            `transition:${timingTransition};`;
        div.addEventListener('transitionend', function () {
            this.remove();
            resolve();
        });

        setTimeout(()=>{
            div.style.left=`${finalX+bullWidth/2}px`;
            div.style.top=`${finalY+bullWidth+2}px`;
        },0)

    })
}