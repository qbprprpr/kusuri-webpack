const utls = {
    /**
     * 控制元素的淡入淡出 -- 公共方法
     * @param {Object} childEle(必填)   当前要被添加动画的元素
     * @param {String} cla(必填)    当前添加的动画class
     * @param {Object} fatherEle    当前要被添加动画的元素的父元素（考虑到某些要被添加动画效果的元素一开始不占位）
     * @param {String} delayCla 当前元素触发动画效果的延迟时间的class
     * @param {String} fadeCla  当前元素淡出时的动画class（一般淡入跟淡出所用的时间以及动画函数不太一致，淡出要快一些）
     * @param {Number} limit    当前元素淡入淡出的距离
     * @param {Boolean} isAbsolute  判断当前出发动画效果的元素其定位是否是绝对定位
     **/
    elementInOut: function(animeData) {
        // 如果当前参数不是规定类型的参数，抛错提示
        try {
            if (Object.prototype.toString.call(animeData) !== '[object Object]') {
                throw new Error('该函数参数应为对象');
            }
        } catch(error) {
            console.log('error ->', error)
        }
        let { childEle, cla, fatherEle, delayCla, fadeCla, limit, isAbsolute } =  animeData;
        // 当前屏幕高度
        let screenClientHeight = document.documentElement.clientHeight;
        // 滚动条的滚动距离
        let scrollTop = document.documentElement.scrollTop;
        // 计算滚动条的当前位置
        let currentHeight = screenClientHeight + scrollTop;
        // 模块在淡入或者淡出时剩余的高度
        const FADELIMIT = limit || 50;
        // 判断淡入淡出的基准是 当前元素的父元素 还是 当前元素
        let limitEle = fatherEle ? fatherEle : childEle;

        /**
         * 21/6/10 - 新发现的问题:
         * 如果当前定位的元素，它的父元素定位为相对定位
         * 或者当前定位的元素，他的定位是绝对定位，并且该元素有父元素，其父元素定位为相对定位，
         * 那么当前定位的元素它的offsetTop指的是它到其父元素的距离，而不是到body的距离
         **/
        let eleOffsetTop = limitEle.offsetTop;
        isAbsolute ? (eleOffsetTop += childEle.offsetTop) : eleOffsetTop;

        /**
         * 向下滑动-淡入 与 向上滑动-淡出 用的是同一个逻辑：
         * 当前滚动条的滚动距离 小于 要处理元素距离浏览器顶部的距离
         *
         * 向下滑动-淡出 与 向上滑动-淡入 用的是同一个逻辑：
         *  当前滚动条的滚动距离 大于 要处理元素距离浏览器顶部的距离
         * 假设当前要处理的元素是 一条线，当前滚动条要 完全覆盖这条线 则需要：当前屏幕高度 + 滚动条滚动距离（滚动条距离当前元素距离 + 当前屏幕高度）
         **/
        // 向下滑动 - 淡入
        if ((scrollTop < eleOffsetTop) && currentHeight > eleOffsetTop + FADELIMIT) {
            !utls.hasClass(childEle, cla) && childEle.classList.add(cla);
            // 判断是否存在需要延迟的class
            delayCla && !utls.hasClass(childEle, delayCla) && childEle.classList.add(delayCla);
            // 判断是否存在需要重绘当前元素淡出动画的class
            fadeCla && utls.hasClass(childEle, fadeCla) && childEle.classList.remove(fadeCla);
        }
        // 向下滑动 - 淡出
        if ((scrollTop > eleOffsetTop) && scrollTop > eleOffsetTop + limitEle.clientHeight - FADELIMIT) {
            utls.hasClass(childEle, cla) && childEle.classList.remove(cla);
            delayCla && utls.hasClass(childEle, delayCla) && childEle.classList.remove(delayCla);
            fadeCla && !utls.hasClass(childEle, fadeCla) && childEle.classList.add(fadeCla);
        }
        // 向上滑动 - 淡入
        if ((scrollTop > eleOffsetTop) && scrollTop < eleOffsetTop + limitEle.clientHeight - FADELIMIT) {
            !utls.hasClass(childEle, cla) && childEle.classList.add(cla);
            delayCla && !utls.hasClass(childEle, delayCla) && childEle.classList.add(delayCla);
            fadeCla && utls.hasClass(childEle, fadeCla) && childEle.classList.remove(fadeCla);
        }
        // 向上滑动 - 淡出
        if ((scrollTop < eleOffsetTop) && currentHeight < eleOffsetTop + FADELIMIT) {
            utls.hasClass(childEle, cla) && childEle.classList.remove(cla);
            delayCla && utls.hasClass(childEle, delayCla) && childEle.classList.remove(delayCla);
            fadeCla && !utls.hasClass(childEle, fadeCla) && childEle.classList.add(fadeCla);
        }
    },

    // 获取相应标签的元素
    getEle: function(clas) {
        return document.querySelector(clas);
    },

    // 获取相应标签的元素数组
    getEleAll: function(clas) {
        return document.querySelectorAll(clas);
    },

    // 检测元素中是否含有某个class
    hasClass: function(elem, cls) {
        cls = cls || '';
        if (cls.replace(/\s/g, '').length == 0) return false;
        return new RegExp(' ' + cls + ' ').test(' ' + elem.className + ' ');
    }
}

export default utls;