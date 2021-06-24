/**
* @Name: index.js
* @Author: zliang
* @Description: 处理主页的动画逻辑
**/

import utils from './utils';

require('../css/index.less');
require('../css/normalize.css');

window.onload = function() {
    // loading
    let loading = document.querySelector('#loading');
    // 单纯人物的bg
    let charImg = document.querySelector('#char');
    // 背景图bg
    let bgImg = document.querySelector('#bg');

    // 加载完成后，将loading取消
    loading.classList.add('site-loading-hide');
    // loading动画结束之后
    loading.addEventListener('transitionend', function() {
        // inview 展示
        inViewTransition();
        // plate 展示
        plateTransition();
        // storytitle 展示
        stortyTitleTransition();
        // storytext 展示
        storyTextTransition();
        // character title 展示
        chaTitleTransition();
        // character 展示
        chaNavTransition();
        chaContentTransition();
        // graphic cg 展示
        graphicTitleTransition();
        // download 展示
        downloadTransition();
        // special 展示
        specialTransition();
        // staff 展示
        staffTransition();
        // product 展示
        productTransition();
        // backtop 展示
        backtopTransition();

        // 纯背景图 展示
        charImg.classList.add('show');
    })
    charImg.addEventListener('transitionend', function() {
        bgImg.classList.add('show');
    })

    // 监听滚动条滚动
    window.addEventListener('scroll', throttle(150, () => {
        // inview 展示
        inViewTransition();
        // plate 展示
        plateTransition();
        // storyTitle 展示
        stortyTitleTransition();
        // storyText 展示
        storyTextTransition();
        // character title 展示
        chaTitleTransition();
        // character nav 展示
        chaNavTransition();
        // character content 展示
        chaContentTransition();
        // graphic cg 展示
        graphicTitleTransition();
        // download 展示
        downloadTransition();
        // special 展示
        specialTransition();
        // staff 展示
        staffTransition();
        // product 展示
        productTransition();
        // backtop 展示
        backtopTransition();
    }));

    const backtop = document.querySelector('#backtop');
    backtop.addEventListener('click', scrollToTop);

    // 控制 inView 模块的淡入淡出
    function inViewTransition() {
        let eleFather = utils.getEle('#articleInner');
        let eleChilds = utils.getEleAll('#articleInner .in-view');
        const LIMIT = Math.ceil(eleFather.clientHeight / 4);
        for (let i = 0; i < eleChilds.length; i++) {
            utils.elementInOut({
                childEle: eleChilds[i],
                cla: 'show-block',
                fatherEle: eleFather,
                limit: LIMIT
            })
        }
    }

    // 控制 plate 模块的淡入淡出
    function plateTransition() {
        // 获取palte模块
        let plateFather = document.querySelector('#plate');
        let plateChilds = document.querySelectorAll('#plate li');
        const LIMIT = Math.ceil(plateFather.offsetHeight / 4);
        for (let i = 0; i < plateChilds.length; i++) {
            utils.elementInOut({
                childEle: plateChilds[i],
                cla: 'in-view-show',
                fatherEle: plateFather,
                delayCla: 'plate-delay',
                fadeCla: 'in-view-hide',
                limit: LIMIT
            })
        }
    }

    // 控制 story标题 模块的淡入淡出
    function stortyTitleTransition() {
        let storyTitle = utils.getEle('#storyTitle');
        let english = utils.getEle('#storyTitle .eng');
        let chinese = utils.getEle('#storyTitle .chinese');
        const LIMIT = Math.ceil(storyTitle.offsetHeight / 3);
        // 英文大字
        utils.elementInOut({
            childEle: english,
            cla: 'text-center',
            limit: LIMIT,
            fatherEle: storyTitle
        });
        // 中文小字
        utils.elementInOut({
            childEle: chinese,
            cla: 'text-center',
            limit: LIMIT,
            fatherEle: storyTitle
        });
    }

    // 控制 srory内容 模块的淡入淡出
    function storyTextTransition() {
        // 简介content
        let storyText = utils.getEleAll('.story-text > p');
        for(let i = 0; i < storyText.length; i++) {
            utils.elementInOut({
                childEle: storyText[i],
                cla: 'show-block'
            });
        }
    }

    // 控制 character 模块的淡入淡出
    function chaTitleTransition() {
        let chaTitle = utils.getEle('#chaTitle');
        let english = utils.getEle('#chaTitle .eng');
        let chinese = utils.getEle('#chaTitle .chinese');
        const LIMIT = Math.ceil(chaTitle.offsetHeight / 3);
        // 英文大字
        utils.elementInOut({
            childEle: english,
            cla: 'text-center',
            limit: LIMIT,
            fatherEle: chaTitle
        });
        // 中文小字
        utils.elementInOut({
            childEle: chinese,
            cla: 'text-center',
            limit: LIMIT,
            fatherEle: chaTitle
        });
    }

    // 控制 character nav 模块的淡入淡出
    function chaNavTransition() {
        let charNav = utils.getEle('#charNav');
        let charNavLi = utils.getEleAll('#charNav ul li a');
        const LIMIT = Math.ceil(charNav.offsetHeight / 3);
        for (let i = 0; i < charNavLi.length; i++) {
            utils.elementInOut({
                childEle: charNavLi[i],
                cla: 'show-block',
                fatherEle: charNav,
                delayCla: 'delay',
                fadeCla: 'hide-block',
                limit: LIMIT,
            });
        }
    }

    // 控制 character content 模块的淡入淡出
    function chaContentTransition() {

        for (let i = 0; i < 9; i++) {
            let character01 = utils.getEle(`#character-0${i+1}`);
            let characterBg = utils.getEle(`#character-0${i+1} .bg`);

            let standImages = utils.getEle(`#character-0${i+1} .stand-images img`);
            let words = utils.getEle(`#character-0${i+1} .words`);
            let name = utils.getEle(`#character-0${i+1} .name`);
            let controllButtons = utils.getEle(`#character-0${i+1} .controll-buttons`);
            let status = utils.getEle(`#character-0${i+1} .status`);
            let desc = utils.getEle(`#character-0${i+1} .desc`);
            utils.elementInOut({
                childEle: characterBg,
                cla: 'show-block',
                fatherEle: character01,
                limit: 200
            });


            standImages && utils.elementInOut({
                childEle: standImages,
                cla: 'show-block',
                fatherEle: character01,
                limit: 200
            });

            utils.elementInOut({
                childEle: words,
                cla: 'show-block',
                fatherEle: character01,
                limit: 200
            });

            utils.elementInOut({
                childEle: name,
                cla: 'show-block',
                fatherEle: character01,
                limit: 200,
                delayCla: 'delay-block'
            });

            controllButtons && utils.elementInOut({
                childEle: controllButtons,
                cla: 'show-block',
                fatherEle: character01,
                limit: 200,
                delayCla: 'delay-block'
            });

            utils.elementInOut({
                childEle: status,
                cla: 'show-block',
                fatherEle: character01,
                limit: 200,
                delayCla: 'delay-block'
            });

            utils.elementInOut({
                childEle: desc,
                cla: 'show-block',
                fatherEle: character01,
                limit: 200,
                delayCla: 'delay-block'
            });
        }
    }

    // 控制 cg 模块淡入淡出
    function graphicTitleTransition() {
        let chaTitle = utils.getEle('#graphicTitle');
        let english = utils.getEle('#graphicTitle .eng');
        let chinese = utils.getEle('#graphicTitle .chinese');
        const LIMIT = Math.ceil(chaTitle.offsetHeight / 3);
        // 英文大字
        utils.elementInOut({
            childEle: english,
            cla: 'text-center',
            limit: LIMIT,
            fatherEle: chaTitle
        });
        // 中文小字
        utils.elementInOut({
            childEle: chinese,
            cla: 'text-center',
            limit: LIMIT,
            fatherEle: chaTitle
        });

        // 获取banner模块
        let plateFather = document.querySelector('#graphic #plates');
        let plateChilds = document.querySelectorAll('#graphic #plates li');
        const LIMITS = Math.ceil(plateFather.offsetHeight / 6);
        for (let i = 0; i < plateChilds.length; i++) {
            utils.elementInOut({
                childEle: plateChilds[i],
                cla: 'in-view-show',
                fatherEle: plateFather,
                delayCla: 'plate-delay',
                fadeCla: 'in-view-hide',
                limit: LIMITS
            })
        }
    }

    // 控制 download 模块的淡入淡出
    function downloadTransition() {
        let downloadTitle = utils.getEle('#downloadTitle');
        let english = utils.getEle('#downloadTitle .eng');
        let chinese = utils.getEle('#downloadTitle .chinese');
        const LIMIT = Math.ceil(downloadTitle.offsetHeight / 3);
        // 英文大字
        utils.elementInOut({
            childEle: english,
            cla: 'text-center',
            limit: LIMIT,
            fatherEle: downloadTitle
        });
        // 中文小字
        utils.elementInOut({
            childEle: chinese,
            cla: 'text-center',
            limit: LIMIT,
            fatherEle: downloadTitle
        });

        // 获取banner模块
        let downloadFather = document.querySelector('#download .banner-list-area');
        let downloadChilds = document.querySelectorAll('#download .banner-list-area li');
        const LIMITS = Math.ceil(downloadFather.offsetHeight / 6);
        for (let i = 0; i < downloadChilds.length; i++) {
            utils.elementInOut({
                childEle: downloadChilds[i],
                cla: 'in-view-show',
                fatherEle: downloadFather,
                fadeCla: 'in-view-hide',
                limit: LIMITS
            })
        }
    }

    // 控制 special 模块的淡入淡出
    function specialTransition() {
        let specialTitle = utils.getEle('#specialTitle');
        let english = utils.getEle('#specialTitle .eng');
        let chinese = utils.getEle('#specialTitle .chinese');
        const LIMIT = Math.ceil(specialTitle.offsetHeight / 3);
        // 英文大字
        utils.elementInOut({
            childEle: english,
            cla: 'text-center',
            limit: LIMIT,
            fatherEle: specialTitle
        });
        // 中文小字
        utils.elementInOut({
            childEle: chinese,
            cla: 'text-center',
            limit: LIMIT,
            fatherEle: specialTitle
        });

        // 获取banner模块
        let specialFather = document.querySelector('#special .banner-list-area');
        let specialChilds = document.querySelectorAll('#special .banner-list-area li');
        const LIMITS = Math.ceil(specialFather.offsetHeight / 6);
        for (let i = 0; i < specialChilds.length; i++) {
            utils.elementInOut({
                childEle: specialChilds[i],
                cla: 'in-view-show',
                fatherEle: specialFather,
                delayCla: 'plate-delay',
                fadeCla: 'in-view-hide',
                limit: LIMITS
            })
        }
    }

    // 控制 staff 模块的淡入淡出
    function staffTransition() {
        let staffTitle = utils.getEle('#staffTitle');
        let english = utils.getEle('#staffTitle .eng');
        let chinese = utils.getEle('#staffTitle .chinese');
        let scrollBox = utils.getEle('#staff #scrollBox');
        const LIMIT = Math.ceil(staffTitle.offsetHeight / 3);
        // 英文大字
        utils.elementInOut({
            childEle: english,
            cla: 'text-center',
            limit: LIMIT,
            fatherEle: staffTitle
        });
        // 中文小字
        utils.elementInOut({
            childEle: chinese,
            cla: 'text-center',
            limit: LIMIT,
            fatherEle: staffTitle
        });

        utils.elementInOut({
            childEle: scrollBox,
            cla: 'show-block',
        });
    }

    // 控制 product 模块的淡入淡出
    function productTransition() {
        let productTitle = utils.getEle('#productTitle');
        let english = utils.getEle('#productTitle .eng');
        let chinese = utils.getEle('#productTitle .chinese');
        const LIMIT = Math.ceil(productTitle.offsetHeight / 3);
        // 英文大字
        utils.elementInOut({
            childEle: english,
            cla: 'text-center',
            limit: LIMIT,
            fatherEle: productTitle
        });
        // 中文小字
        utils.elementInOut({
            childEle: chinese,
            cla: 'text-center',
            limit: LIMIT,
            fatherEle: productTitle
        });

        let sectionInView = utils.getEleAll('#product section.in-view');
        for (let i = 0; i < sectionInView.length; i++) {
            utils.elementInOut({
                childEle: sectionInView[i],
                cla: 'show-block',
                limit: Math.ceil(sectionInView[i].offsetHeight / 3),
            });
        }
    }

    // 控制 backtop 模块的淡入淡出
    function backtopTransition() {
        const backtop = utils.getEle('#backtop');
        // 滚动条的滚动距离
        let scrollTop = document.documentElement.scrollTop;
        const visibilityHeight = 200;
        if (scrollTop >= visibilityHeight) {
            backtop.classList.add('in-view-show');
        } else {
            backtop.classList.remove('in-view-show');
        }
    }
}


// 节流函数
function throttle(delay, noTrailing, callback, debounceMode) {

    // 定义一个空变量，将来用来存放定时器
    var timeoutID;

    // 定义一个空变量判断最新时间点，初始值为0，将来用来比对delay时间
    var lastExec = 0;

    if(typeof noTrailing !== 'boolean') {
        debounceMode = callback;
        callback = noTrailing;
        noTrailing = undefined;
    }

    // 闭包
    function wrapper() {
        var self = this;
        var elapsed = Number(new Date()) - lastExec;
        var args = arguments;

        // 执行 'callback' 函数并且更新最新的时间点
        function exec() {
            lastExec = Number(new Date());
            callback.apply(self, args);
        }

        // 清空定时器
        function clear() {
            timeoutID = undefined;
        }


        if (debounceMode && !timeoutID) {
            exec();
        }

        // 如果存在定时器，则清除已有的定时器
        if (timeoutID) {
            clearTimeout(timeoutID);
        }

        // 如果 debounceMode 为 undefined 并且 elapsed 的值大于 delay
        if (debounceMode === undefined && elapsed > delay) {
            // 初始化时触发该函数
            exec();
        } else if (noTrailing !== true) {
            // 初始化完成后，判断条件一直处于该状态，lastExec的值不会再更新，因而elapsed的值则会一直增大，直到elapsed > delay
            timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === undefined ? delay - elapsed : delay);
        }
    }

    return wrapper;
}

// 回到顶部 相关配置
const cubic = value => Math.pow(value, 3);
// js 缓动函数
const easeInOutCubic = value => value < 0.5 ? cubic(value * 2) / 2 : 1 - cubic((1 - value) *2) / 2;

// backtop函数
function scrollToTop() {
    const currentEl = document.documentElement;
    const berginTime = Date.now();
    const beginValue = currentEl.scrollTop;
    const rAF = (func => setTimeout(func, 16));
    const frameFunc = () => {
        /**
         * berginTime在初始化完成后便不会再变化
         * Date.now()每过16ms就会增大一次
         * */
        const progress = (Date.now() - berginTime) / 500;
        if (progress < 1) {
            currentEl.scrollTop = beginValue * (1 - easeInOutCubic(progress));
            // 递归
            rAF(frameFunc)
        } else {
            currentEl.scrollTop = 0;
        }
    }
    // 初始化调用
    rAF(frameFunc);
}

