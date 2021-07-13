/**
 * 切换到下一个页面，退出蒙版
 */
function quitemengban()
{
    let mengban = document.getElementById("mengban");
    setTimeout(function()
        {
            mengban.style.opacity = "0";
        }
        ,2000);

    setTimeout(function()
        {
            mengban.style.zIndex = "-200";
        }
        ,3000);
}
quitemengban();

/**
 * 打字效果
 */
function typewrite() {
    //字符串中利用<作为换行符 -作为空格
    let str="......她喜欢吃辣，喜欢卤味，最喜欢螺蛳粉,她的麻辣烫和烤鱼里总要放一块面，她喜欢在风景好的地方相遇。<她喜欢奶茶，有时候是奶绿，有时候是奶盖，有时候是霓裳茶舞，她要的只是三分糖，可以加的是珍珠。<她喜欢水果捞,爱加酸奶和芋圆，不喜欢水果捞里的爆珠，可以放烧仙草但不会加椰果。<......我的记性很差，所以每次发消息都会下意识地先点到你的聊天框，然后再想起来要做什么。<<你占领每个-永恒的片刻<无垠的宇宙-浩瀚的选择<万千星河，你是最亮那颗<你知道吗，我可以为你写一万行代码，就像.....我可以说一万遍，一万遍喜欢你<见到你-便是三行情诗。<";
    let recentstr = "";
    let i = 0;

    /**
     * 更新一个字符一个字符打印字符串
     */
    function print1() {
        if (str[i] == '<') {
            document.getElementById("end").innerHTML = recentstr + "<br><br>" + '|';
            recentstr += "<br><br>";
        } else if (str[i] == '-') {
            document.getElementById("end").innerHTML = recentstr + '&nbsp&nbsp&nbsp';
            recentstr += "&nbsp&nbsp&nbsp";
        } else {
            recentstr += str[i];
            document.getElementById("end").innerHTML = recentstr + '|';
        }
        i++;
    }

    /**
     * 最后末尾的闪烁 |
     */
    function print2() {
        setTimeout(() => {
            document.getElementById("end").innerHTML = recentstr + '&nbsp';
        }, 100);
        setTimeout(() => {
            document.getElementById("end").innerHTML = recentstr + '|';
        }, 630);
    }

    //循环打印字符直至到最后，删除该循环
    let printid = setInterval(() => {
        print1();
        if (i == str.length)
            clearInterval(printid);
    }, 90);

    setTimeout(() => {
        //注意setInterval内部直接写函数的时候是直接写函数名不加括号的。
        id = setInterval(print2, 1060);
    }, (str.length - 1) * 90);
    //0.53秒闪一次
}

function funclick() {
    let x = document.createElement("audio");
    x.setAttribute("src", "./video/55.mp3");
    x.setAttribute("autoplay", "autoplay");

    let yinyan = document.getElementById("yinyan");
    //yinyan.style.opacity="0";
    yinyan.setAttribute("style", "opacity:0");
    setTimeout(function () {
        document.getElementById("fronclick").style.zIndex = -300;
        document.getElementById("box").style.opacity = 1;
    }, 1500);//让播放按钮消失了，并显示出box
    window.onkeyup = fl;
}



let k = {
    a: 0,
    b: 1,
    c: 2,
    d: 3,
    e: 4,
    f: 5,
    g: 6,
    h: 7,
    i: 8,
    j: 9,
    k: 10,
    l: 11,
    m: 12,
    n: 13,
    o: 14,
    p: 15,
    q: 16,
    r: 17,
    s: 18,
    t: 19,
    u: 20,
    v: 21,
    w: 22,
    x: 23,
    y: 24,
    z: 25,
    A: 0,
    B: 1,
    C: 2,
    D: 3,
    E: 4,
    F: 5,
    G: 6,
    H: 7,
    I: 8,
    J: 9,
    K: 10,
    L: 11,
    M: 12,
    N: 13,
    O: 14,
    P: 15,
    Q: 16,
    R: 17,
    S: 18,
    T: 19,
    U: 20,
    V: 21,
    W: 22,
    X: 23,
    Y: 24,
    Z: 25
}  //将大小字母赋予同一个数字，统一处理
let a = [
    {
        name: "A",
        yin: 8,
        str: "<br><br><br>我喜欢你，不分日夜，我喜欢你，无关其他，喜欢便是喜欢，多一点不行，少一点也不可以。<br><br>还有....,其他的键<br><br>那些都是关于你的声音。以及，找一下声音里关于你的线索。"
    },
    {
        name: "B",
        yin: 2,
        str: `<br><br><br>若逢新雪初霁，满月当空<br>下面平铺着皓影，上面流转着亮银，<br><br>而你带笑地向我走来，<br><br>月色和雪色之间 ，是第三种绝色 ，<br><br>与我而言， 日月星辉之中，你是第四种难得。`
    },
    {
        name: "C",
        yin: 3,
        str: "<br><br><br><br>我总是想些无关紧要的事<br><br>比如宇宙的目的，熬夜与猝死的关系<br><br>你是否曾爱我"},
    {
        name: "D",
        yin: 4,
        str: "<br><br><br><br>我想再和你谈谈<br><br>那只在你七月的暴雨中<br><br>刚刚落下的鸟"},
    {
        name: "E",
        yin: 5,
        str: "<br><br><br><br>若是你决定了要来见我<br><br>请务必提前一周告诉我<br><br>我好将10200个小时前的相见再反复回想"},
    {
        name: "F",
        yin: 6,
        str: "<br><br><br><br>我爱你<br><br>剩余一行<br><br>笔给你"},
    {
        name: "G",
        yin: 7,
        str: "<br><br>我试图用那些漂亮的句子来形容你。但是不行<br><br>我字字推敲写出长长一段话，你眉眼一弯熠熠生辉，就让我觉得。不行<br><br>这些文字写不出你眼里的星辰，写不出你唇角的春风<br></br>无论哪个词，都及不上你半分的惊艳。"
    },
    {
        name: "H",
        yin: 5,
        str: "<br><br>你的双眸有遥远的冬雪，你的微笑有绚烂的夏阳，<br></br>你一转身便有花开为你，你一低头便有星辰黯然，<br></br>你在我心里，我便拥有全世界。"},
    {
        name: "I",
        yin: 3,
        str: "<br><br>我见过沧海的云，巫峡的雨。 <br>我见过一月的雪覆于白山，又渐变于葱茏。 <br>我在峨眉的林里云兴霞蔚， 一径之后，雾水成露，沾于衣襟。<br>我听过柔橹漂浮，声声入水，又归于沉寂。 <br>我看到春风八里十里，衣袖带花。 无论何时忆起， 它们实在是人生可喜， <br><br>但都不如我此刻遇到的你。"
    },
    {
        name: "J",
        yin: 10,
        str: "<br><br><br><br>花盛开就是一句，夜漫过就是一篇。<br><br>黄昏开始书写，黎明是无数的扉页。<br><br>全世界拼成首诗。我爱你当作最后一行。"},
    {
        name: "K",
        yin: 11,
        str: "<br><br>对你的喜欢，大抵是燃烧的星星坠落在海底开成珊瑚，<br><br>又或是揉碎的白云环绕着山峦流成大河。<br><br>那种梦幻，不真切，却令人迷醉的心动，<br></br>就像晚风拥抱月亮，海浪亲吻礁石。"
    },
    {
        name: "L",
        yin: 3,
        str: "<br><br><br><br>世界上美好的东西不太多,<br><br>立秋傍晚从河对岸吹来的风,<br><br>和二十来岁笑起来要人命的你。"},
    {
        name: "M",
        yin: 13,
        str: "<br><br><br><br>“在青山绿水之间，我想牵着你的手，<br></br>走过这座桥，桥上是绿叶红花，<br><br>桥下是流水人家，桥的那头是青丝，桥的这头是白发。”"
    },
    {
        name: "N",
        yin: 3,
        str: "<br><br><br><br>月亮照回湖心<br><br>野鹤奔向闲云<br><br>我步入你"},
    {
        name: "O",
        yin: 7,
        str: "<br><br><br><br>我们或者在月光下闲游，<br><br>或者在灯光下谈心，<br><br>手握着手，心对着心，<br><br>就像一对五十岁的情人。"},
    {
        name: "P",
        yin: 16,
        str: "<br><br><br><br>草在结它的种子，<br><br>风在摇它的叶子，<br><br>我们站着不说话，就十分美好。"},
    {
        name: "Q",
        yin: 17,
        str: "<br><br><br><br>你一眨眼，温驯的小鹿有跳动一下，<br><br>柔软的暖风有轻拂一下，遥远的星星有闪烁一下，<br><br>我也有心动，却不止一下。"},
    {
        name: "R",
        yin: 18,
        str: "<br><br><br><br>星河璀璨，阳光干净，<br><br>在人间所有美好的存在里，<br><br>不论是活着或者死去，我总是最爱你。"},
    {
        name: "S",
        yin: 19,
        str: "<br><br>我的心是亿万光年恒星爆炸后的残骸，荒烟蔓草，满目疮痍。<br><br>你来到这里，携着万千欢喜，覆在贫瘠之地上。枯木逄春，<br></>从此我的世界里只有为你而绽的名为爱的绝色。"
    },
    {
        name: "T",
        yin: 20,
        str: "<br><br>写信真是一件温柔的事，细腻的小心思就藏在横竖撇捺之中，<br><br>像是一只害羞的小兽躲在情意绵绵的字里行间，被火漆封印起来，<br><br>等着解封的那一刻窜出来，跳进启信人眼底的柔波里。"
    },
    {
        name: "U",
        yin: 5,
        str: "<br><br>我把我整个的灵魂都给你，<br><br>连同它的怪癖，耍小脾气，忽明忽暗，<br><br>一千八百种坏毛病， 它真讨厌。只有一点好， 爱你"},
    {
        name: "V",
        yin: 22,
        str: "<br><br><br><br>我一生都是坚定不移的唯物主义者<br><br>唯有你<br><br>我希望有来生"},
    {
        name: "W",
        yin: 8,
        str: "<br><br><br><br>这个世纪疯狂,没人性,腐败。<br><br>您却一直清醒,温柔,<br><br>一尘不染。"},
    {
        name: "X",
        yin: 2,
        str: "<br><br><br><br>纵然万劫不复，<br><br>纵然相思入骨，我也待你眉眼如初，<br><br>岁月如故。"},
    {
        name: "Y",
        yin: 25,
        str: "<br><br><br><br>月遇从云，花遇和风，<br><br>今晚上的夜空很美，<br><br>我又想你。"},
    {
        name: "Z",
        yin: 26,
        str: "<br><br><br><br>跟你在一起的时光都很耀眼，<br><br>因为天气好，因为天气不好，因为天气刚刚好，<br><br>每一天，都很美好。"}
];
let b = ["linear-gradient(25deg, #c3786f, #a99188, #84a7a1, #3bbcbb)",
    "linear-gradient(25deg, #cb5860, #b3876f, #90ad7f, #4acf8f)",
    "linear-gradient(25deg, #e473a3, #d294aa, #bbb0b1, #9ccab8)",
    "linear-gradient(25deg, #452089, #505ca1, #4b94b8, #24cdcf)",
    "linear-gradient(25deg, #fcb9b5, #fed0ad, #ffe7a5, #fffd9b)",
    "linear-gradient(25deg, #88a0ff, #b6bedd, #d6deb9, #eeff91)",
    "linear-gradient(25deg, #3e1c59, #53646f, #53ad83, #27fb95)",
    "linear-gradient(25deg, #590146, #634264, #647184, #56a1a5)",
    "linear-gradient(25deg, #694afc, #a26dfd, #d091fe, #f9b7fe)",
    "linear-gradient(25deg, #412285, #4c599c, #488eb3, #29c4c9)",
    "linear-gradient(25deg, #003876, #1f6889, #239b9a, #00d1ab)",
    "linear-gradient(25deg, #db6679, #b9907b, #8bb17e, #29ce80)",
    "linear-gradient(25deg, #d929f7, #e67cc5, #e5b38f, #d8e549)",
    "linear-gradient(25deg, #fcb9b5, #fed0ad, #ffe7a5, #fffd9b)",
    "linear-gradient(25deg, #0f4660, #6b486c, #ac3f78, #ec1384)",
    "linear-gradient(25deg, #094189, #7f566b, #bd6d49, #f78707)",
    "linear-gradient(43deg, #00a08c, #7db19d, #c1c0af, #ffcec1)",
    "linear-gradient(35deg, #526fbf, #8c98d0, #bfc3e0, #f0f0f0)",
    "linear-gradient(25deg, #d03e9b, #d2788a, #cfa676, #c6d05c)",
    "linear-gradient(25deg, #8fd647, #a0d187, #a8ccbf, #a8c7f7)",
    "linear-gradient(25deg, #e45579, #c59280, #96bf87, #19e88e)",
    "linear-gradient(25deg, #d575db, #b29db2, #83bb87, #00d456)",
    "linear-gradient(25deg, #d929f7, #e67cc5, #e5b38f, #d8e549)",
    "linear-gradient(25deg, #fd390b, #e1765b, #b19fa1, #1ec1e9)",
    "linear-gradient(25deg, #7b7bd4, #759cbc, #62bca2, #30db85)",
    "linear-gradient(25deg, #d6007b, #b8509e, #8a71c2, #0b8be8)"];
let s = 'a';
let records = 0;//记录我已经输入过了，防止出现多个打字function

/**
 * 键盘事件
 * 功能：随着按键盘的字母不同发出不同的钢琴键声音
 * @param e
 */
function fl(e) {
    let key = e.key;
    if (((key <= 'z' && key >= 'a') || (key <= 'Z' && key >= 'A')) && records == 0)//避免大小写的错误
    {
        let p = a[k[key]];
        s = s + p.name;

        //创建音频播放声音,播完删掉
        let audio = document.createElement("audio");
        document.body.appendChild(audio);
        audio.setAttribute("src", `./video/${p.yin}.mp3`);
        audio.setAttribute("autoplay", "autoplay");
        audio.addEventListener('ended', function () {
            // alert('over');
            audio.parentNode.removeChild(audio);
        }, false);

        let box = document.getElementById("box");
        let boxl = document.getElementById("box-left");
        let boxr = document.getElementById("box-right");
        let boxup = document.getElementById("boxup");
        let bac = document.getElementById("bac");
        bac.style.opacity = "0";
        box.style.transition = "0.5s";
        box.style.opacity = '0';
        boxup.style.opacity = '0';

        setTimeout(function () {
            boxl.innerHTML = `${p.name}`;
            boxr.innerHTML = `${p.str}`;
            bac.style.background = `${b[k[key]]}`;
            box.style.opacity = "1";
            boxup.style.opacity = "1";
            bac.style.opacity = "1";
        }, 500);

        console.log('键盘输入xiaowuxiaowuwxhn就可以进入下一个');
        if (s.indexOf("XIAOWUXIAOWUWXHN") != -1 && records == 0) {
            setTimeout(function () {
                records = 1;
                bac.style.opacity = 0;
                box.style.opacity = 0;
                boxup.style.opacity = 0;
                bac.style.opacity = 0;

                let box1 = document.getElementById("end");
                box1.style.zIndex = 7;
                box1.style.opacity = 1;
                let music = document.createElement("audio");
                music.setAttribute("src", `./video/snjxh.mp3`);
                music.setAttribute("autoplay", "autoplay");
                music.setAttribute("loop", "loop");
            }, 750);
            setTimeout(typewrite, 3000);//进行打字
        }
    }
}


