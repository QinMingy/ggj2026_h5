const ELEMENTS = {
    金: { name: '金', color: '#E8E8E8', icon: '⚔️', counters: '木' },
    木: { name: '木', color: '#3A7D44', icon: '🌲', counters: '土' },
    水: { name: '水', color: '#1E3A5F', icon: '💧', counters: '火' },
    火: { name: '火', color: '#D32F2F', icon: '🔥', counters: '金' },
    土: { name: '土', color: '#A67C52', icon: '⛰️', counters: '水' }
};

const CUSTOMERS = [
    {
        id: 1,
        img: 'character_27.png',
        name: '李寒水',
        job: '剑客',
        avatar: '🗡️',
        danger: '★★☆☆☆',
        requirements: [
            { element: '金', amount: 5, weight: 0.7 },
            { element: '火', amount: 3, weight: 0.3 }
        ],
        weakness: '木',
        dialogues: [
            { type: 'intro', text: '我需要一个提升武力的面具，能让我的剑术更加凌厉。', trustChange: 0 },
            { type: 'question', text: '您常年行走江湖，最怕什么？', response: '怕？我只怕剑不够快。不过...我的剑是寒铁打造的。', clue: '提到寒铁剑（金克木）', trustChange: -10 },
            { type: 'question', text: '您来自何方？', response: '北方，那里多山林。我不喜欢树木茂密的地方。', clue: '不喜欢树林（木弱）', trustChange: -12 },
            { type: 'question', text: '您的剑法师承何处？', response: '家传剑法，讲究一击必杀。', clue: null, trustChange: -8 },
            { type: 'question', text: '为何需要面具？', response: '江湖仇家太多，需要隐藏身份。', clue: null, trustChange: -10 },
            { type: 'question', text: '您杀过人吗？', response: '（冷笑）你问这个做什么？', clue: null, trustChange: -20 },
            { type: 'observe', text: '[观察他的佩剑]', response: '他的剑鞘上刻着金属纹样，剑柄缠着铁丝。', clue: '佩戴寒铁剑', trustChange: -6 },
            { type: 'observe', text: '[观察他的神态]', response: '他目光锐利，时刻警惕着周围的动静。', clue: '警觉性极高', trustChange: -8 }
        ],
        price: 100,
        relicReward: ['寒铁剑（材料：金+5）', '碎银x3（金钱+30）', '江湖令牌'],
        reportText: '剑客李寒水于今夜子时在竹林遭遇山贼。战斗中，面具突然碎裂，其护体真气溃散...次日晨，猎人发现其尸身，身旁散落一地碎银。'
    },
    {
        id: 2,
        name: '王书生',
        img:'character_22.png',
        job: '书生',
        avatar: '📚',
        danger: '★☆☆☆☆',
        requirements: [
            { element: '木', amount: 4, weight: 1.0 }
        ],
        weakness: '火',
        dialogues: [
            { type: 'intro', text: '我想要一个增强智慧的面具，帮助我科举高中。', trustChange: 0 },
            { type: 'question', text: '您平时喜欢在哪里读书？', response: '我怕热，喜欢待在地窖里，那里凉快。', clue: '怕热（火弱）', trustChange: -6 },
            { type: 'question', text: '您的学问如何？', response: '还算可以，就是容易心烦意乱，见不得火光。', clue: '见不得火光（火弱）', trustChange: -8 },
            { type: 'question', text: '科举考了几次？', response: '（叹气）三次了...希望这次能中。', clue: null, trustChange: -5 },
            { type: 'question', text: '家中可有妻室？', response: '尚未婚配，想等功名有成再说。', clue: null, trustChange: -6 },
            { type: 'question', text: '您为何面色苍白？', response: '（紧张）没...没什么，只是读书太多。', clue: '似乎有所隐瞒', trustChange: -12 },
            { type: 'observe', text: '[观察他的衣着]', response: '他穿着青色长袍，带着木质书签。', clue: '佩戴木质饰品', trustChange: -3 },
            { type: 'observe', text: '[观察他的手]', response: '他的手指细长，指尖有墨渍，是常年握笔的痕迹。', clue: '确实是读书人', trustChange: -4 }
        ],
        price: 80,
        relicReward: ['古籍残卷（材料：木+4）', '文房四宝', '金钱+25'],
        reportText: '书生王某于府中苦读，夜半时分油灯倾倒，引发火灾。其戴着面具昏睡不醒，未能及时逃离...次日仆人在废墟中发现其遗物。'
    },
    {
        id: 3,
        name: '张富商',
        img:'character_29.png',
        job: '商人',
        avatar: '💰',
        danger: '★★★☆☆',
        requirements: [
            { element: '土', amount: 5, weight: 0.6 },
            { element: '金', amount: 3, weight: 0.4 }
        ],
        weakness: '木',
        dialogues: [
            { type: 'intro', text: '给我做个招财进宝的面具，要最好的！', trustChange: 0 },
            { type: 'question', text: '您是做什么生意的？', response: '海上贸易，常年在船上漂泊。最近总觉得运气不好。', clue: '常年海上（水克土）', trustChange: -12 },
            { type: 'question', text: '您最近遇到什么麻烦？', response: '总是遇到海盗，他们的木船来去如风，防不胜防。', clue: '怕木船（木克土的延伸）', trustChange: -15 },
            { type: 'question', text: '生意如何？', response: '还行，就是这两年不太顺。', clue: null, trustChange: -10 },
            { type: 'question', text: '您的财富从何而来？', response: '（警觉）这个...做生意赚的，你问这么多干嘛？', clue: '对财富来源敏感', trustChange: -30 },
            { type: 'question', text: '需要什么价位的面具？', response: '钱不是问题，最好的给我来！', clue: null, trustChange: -8 },
            { type: 'observe', text: '[观察他的配饰]', response: '他戴着金银首饰，但手上有很多木刺的痕迹。', clue: '手上有木刺痕迹', trustChange: -8 },
            { type: 'observe', text: '[观察他的表情]', response: '他说话时眼神闪烁，似乎有什么心事。', clue: '心中有事', trustChange: -10 }
        ],
        price: 150,
        relicReward: ['金银珠宝（金钱+80）', '海图碎片', '珍珠（材料：水+3）'],
        reportText: '商人张某乘船出海，途中遭遇风浪，船只撞上漂浮的巨木。其佩戴的面具在碰撞中碎裂，落水身亡...后人打捞起其随身财物。'
    },
    {
        id: 4,
        name: '赵猎人',
        img: 'character_10.png',
        job: '猎人',
        avatar: '🏹',
        danger: '★★☆☆☆',
        requirements: [
            { element: '水', amount: 4, weight: 0.7 },
            { element: '木', amount: 2, weight: 0.3 }
        ],
        weakness: '土',
        dialogues: [
            { type: 'intro', text: '我需要一个能隐匿行踪的面具，方便打猎。', trustChange: 0 },
            { type: 'question', text: '您常在哪里狩猎？', response: '深山老林，不过我最怕遇到山体滑坡，泥石流。', clue: '怕泥石流（土弱）', trustChange: -10 },
            { type: 'question', text: '您用什么武器？', response: '木弓木箭，还有一些陷阱。我不喜欢笨重的东西。', clue: '使用木质武器', trustChange: -12 },
            { type: 'question', text: '猎过什么大型猎物？', response: '野猪、鹿、有一次还遇到过熊。', clue: null, trustChange: -8 },
            { type: 'question', text: '山里危险吗？', response: '习惯了就好，最怕的是地形变化。', clue: '怕地形变化（土弱）', trustChange: -10 },
            { type: 'observe', text: '[观察他的装备]', response: '他背着皮制箭囊，衣服上沾着泥土。', clue: '衣服沾泥土', trustChange: -6 },
            { type: 'observe', text: '[观察他的眼神]', response: '他的眼神如鹰隼般锐利，常年在野外磨练出的本能。', clue: '野外生存经验丰富', trustChange: -5 }
        ],
        price: 90,
        relicReward: ['兽皮（材料：土+3）', '猎弓', '金钱+20'],
        reportText: '猎人赵某在山中追踪猎物，不慎踩到松软的土地，引发小型山崩。其面具在滚石冲击下破碎，被埋于乱石之中...数日后被人发现。'
    },
    {
        id: 5,
        name: '孙道士',
        img: 'character_26.png',
        job: '道士',
        avatar: '☯️',
        danger: '★★★★☆',
        requirements: [
            { element: '火', amount: 6, weight: 0.5 },
            { element: '木', amount: 4, weight: 0.3 },
            { element: '土', amount: 3, weight: 0.2 }
        ],
        weakness: '水',
        dialogues: [
            { type: 'intro', text: '贫道需要一个增强法力的面具，用于降妖除魔。', trustChange: 0 },
            { type: 'question', text: '您修炼什么法术？', response: '火系道法，不过我天生怕水，不会游泳。', clue: '怕水（水弱）', trustChange: -14 },
            { type: 'question', text: '您最近在做什么？', response: '准备去江边的水鬼洞除妖，有些担心。', clue: '担心去水边', trustChange: -16 },
            { type: 'question', text: '道长修行多少年了？', response: '贫道入道三十余年，略有小成。', clue: null, trustChange: -12 },
            { type: 'question', text: '降妖除魔可有报酬？', response: '（皱眉）贫道行善积德，不图钱财。', clue: null, trustChange: -25 },
            { type: 'question', text: '水鬼洞有何危险？', response: '那里阴气重，水汽弥漫，对我的火系道法有所克制。', clue: '水克火', trustChange: -14 },
            { type: 'observe', text: '[观察他的法器]', response: '他拿着桃木剑，腰间挂着火红色的符咒。', clue: '使用火系法器', trustChange: -10 },
            { type: 'observe', text: '[观察他的气质]', response: '他周身隐隐有热气蒸腾，是长年修炼火系功法的表现。', clue: '火系修为深厚', trustChange: -8 }
        ],
        price: 120,
        relicReward: ['道家秘籍（材料：火+5）', '符咒x5', '金钱+50'],
        reportText: '道士孙某前往江边除妖，与水鬼激战。战斗中不慎落水，面具被江水浸透后碎裂，法力尽失...其尸身三日后在下游被发现。'
    },
    {
        id: 6,
        name: '钱大夫',
        img:'character_14.png',
        job: '郎中',
        avatar: '💊',
        danger: '★★☆☆☆',
        requirements: [
            { element: '木', amount: 5, weight: 0.7 },
            { element: '水', amount: 3, weight: 0.3 }
        ],
        weakness: '金',
        dialogues: [
            { type: 'intro', text: '老夫行医多年，需要一个能增强望闻问切之能的面具。', trustChange: 0 },
            { type: 'question', text: '您擅长治什么病？', response: '草药调理，最怕遇到需要针灸的病人，我手不稳。', clue: '怕针灸（金克木）', trustChange: -10 },
            { type: 'question', text: '行医多少年了？', response: '四十余年，救人无数，也见过不少生死。', clue: null, trustChange: -8 },
            { type: 'question', text: '最近有什么难治的病人？', response: '有个铁匠，被铁器所伤，伤口总是不愈合。', clue: '铁器伤难治（金克木）', trustChange: -12 },
            { type: 'question', text: '您收徒吗？', response: '收过几个，但都不成器。', clue: null, trustChange: -8 },
            { type: 'observe', text: '[观察他的药箱]', response: '药箱是木制的，里面装满了各种草药。', clue: '使用木制器具', trustChange: -5 },
            { type: 'observe', text: '[观察他的手]', response: '他的手指修长，指甲修剪得很整齐，是把脉的好手。', clue: '善于把脉', trustChange: -6 }
        ],
        price: 95,
        relicReward: ['医书残卷（材料：木+4）', '珍贵草药', '金钱+35'],
        reportText: '郎中钱某外出采药，不慎被山中的铁矿石割伤。伤口感染后，面具的木气被金气所克，无法发挥疗效...数日后在山中病亡。'
    },
    {
        id: 7,
        name: '周铁匠',
        job: '铁匠',
        img:'character_30.png',
        avatar: '🔨',
        danger: '★★★☆☆',
        requirements: [
            { element: '金', amount: 6, weight: 0.6 },
            { element: '土', amount: 4, weight: 0.4 }
        ],
        weakness: '火',
        dialogues: [
            { type: 'intro', text: '俺要个能让俺打铁更有力气的面具！', trustChange: 0 },
            { type: 'question', text: '您打铁多少年了？', response: '二十年了，但最近总觉得炉火太旺，受不了。', clue: '受不了炉火（火克金）', trustChange: -12 },
            { type: 'question', text: '您最拿手的是什么？', response: '打农具，不过最近想试试打兵器。', clue: null, trustChange: -10 },
            { type: 'question', text: '打铁有什么诀窍？', response: '火候最重要，但我最近总是把握不好，火太大了。', clue: '火候难控制', trustChange: -14 },
            { type: 'question', text: '您身体还好吗？', response: '（咳嗽）还行，就是肺不太好，可能是烟熏的。', clue: '肺部受损', trustChange: -18 },
            { type: 'observe', text: '[观察他的双手]', response: '他的手上满是老茧和烫伤的疤痕。', clue: '常年接触高温', trustChange: -8 },
            { type: 'observe', text: '[观察他的衣着]', response: '他穿着厚重的皮围裙，上面有不少烧焦的痕迹。', clue: '工作环境高温', trustChange: -6 }
        ],
        price: 110,
        relicReward: ['精铁（材料：金+5）', '铁锤', '金钱+40'],
        reportText: '铁匠周某在锻造兵器时，炉火突然失控。其面具被高温熔化，金气尽失...次日徒弟发现其倒在炉边，已无气息。'
    },
    {
        id: 8,
        name: '吴渔夫',
        job: '渔夫',
        img:'character_6.png',
        avatar: '🎣',
        danger: '★☆☆☆☆',
        requirements: [
            { element: '水', amount: 4, weight: 1.0 }
        ],
        weakness: '土',
        dialogues: [
            { type: 'intro', text: '俺想要个能让俺捕更多鱼的面具。', trustChange: 0 },
            { type: 'question', text: '您在哪里捕鱼？', response: '江里，不过最近江水混浊，泥沙太多。', clue: '怕泥沙（土克水）', trustChange: -6 },
            { type: 'question', text: '捕鱼有什么技巧？', response: '看水流，但遇到泥石流冲下来就没办法了。', clue: '怕泥石流', trustChange: -8 },
            { type: 'question', text: '最近收获如何？', response: '不太好，水底淤泥太多，网都拉不动。', clue: '水底淤泥多', trustChange: -6 },
            { type: 'question', text: '您家里人多吗？', response: '老婆孩子都靠俺养活呢。', clue: null, trustChange: -5 },
            { type: 'observe', text: '[观察他的渔网]', response: '渔网是用麻绳编的，上面沾着不少泥巴。', clue: '渔网沾泥', trustChange: -3 },
            { type: 'observe', text: '[观察他的肤色]', response: '他的皮肤被太阳晒得黝黑，是常年在水上劳作的痕迹。', clue: '常年水上作业', trustChange: -4 }
        ],
        price: 70,
        relicReward: ['珍珠（材料：水+3）', '渔网', '金钱+20'],
        reportText: '渔夫吴某在江上捕鱼，突遇上游泥石流。其面具被泥沙掩埋，水气尽失...数日后在下游发现其遗体。'
    },
    {
        id: 9,
        name: '郑将军',
        job: '将军',
        img:'character_4.png',
        avatar: '⚔️',
        danger: '★★★★★',
        requirements: [
            { element: '金', amount: 7, weight: 0.4 },
            { element: '火', amount: 5, weight: 0.3 },
            { element: '土', amount: 4, weight: 0.2 },
            { element: '水', amount: 3, weight: 0.1 }
        ],
        weakness: '火',
        dialogues: [
            { type: 'intro', text: '本将军需要一个能增强战力的面具，不日将出征北伐。', trustChange: 0 },
            { type: 'question', text: '将军战功如何？', response: '百战百胜，但最近总梦到战场上的烈火。', clue: '梦到烈火（火克金）', trustChange: -15 },
            { type: 'question', text: '北伐有何困难？', response: '敌军善用火攻，我军铁甲怕火。', clue: '怕火攻', trustChange: -18 },
            { type: 'question', text: '将军可有家室？', response: '（沉默）战死沙场，马革裹尸，何须牵挂。', clue: null, trustChange: -12 },
            { type: 'question', text: '将军为何需要面具？', response: '（冷笑）你管得太多了。', clue: null, trustChange: -30 },
            { type: 'observe', text: '[观察他的铠甲]', response: '他穿着精铁打造的铠甲，上面有不少烧焦的痕迹。', clue: '铠甲有烧伤痕迹', trustChange: -12 },
            { type: 'observe', text: '[观察他的气势]', response: '他周身杀气凛然，不怒自威。', clue: '杀气重', trustChange: -10 }
        ],
        price: 200,
        relicReward: ['将军令牌', '精铁铠甲（材料：金+6）', '金钱+100'],
        reportText: '将军郑某率军北伐，与敌军激战。敌军火攻之下，其面具被烈火熔化，金气尽失...全军覆没，将军战死沙场。'
    }
];

const BASE_MASKS = [
    { id: 1, name: '全脸面具', icon: '😶', attributes: { 金: 1, 木: 1, 水: 1, 火: 1, 土: 1 } },
    { id: 2, name: '鬼面', icon: '👺', attributes: { 金: 2, 木: 0, 水: 0, 火: 1, 土: 0 } },
    { id: 3, name: '半脸面具', icon: '🎭', attributes: { 金: 0, 木: 2, 水: 1, 火: 0, 土: 0 } },
    { id: 4, name: '眼罩', icon: '😎', attributes: { 金: 0, 木: 0, 水: 2, 火: 0, 土: 1 } },
    { id: 5, name: '兽面', icon: '🦁', attributes: { 金: 1, 木: 0, 水: 0, 火: 2, 土: 0 } },
    { id: 6, name: '戏曲面具', icon: '🎎', attributes: { 金: 0, 木: 1, 水: 0, 火: 0, 土: 2 } }
];

const MATERIALS = [
    { id: 1, name: '龙纹', attributes: { 木: 3, 水: 1 }, visibility: 20, price: 30 },
    { id: 2, name: '凤纹', attributes: { 火: 3, 金: -1 }, visibility: 20, price: 30 },
    { id: 3, name: '云纹', attributes: { 水: 3, 火: -1 }, visibility: 15, price: 25 },
    { id: 4, name: '兽纹', attributes: { 金: 3, 木: -1 }, visibility: 20, price: 30 },
    { id: 5, name: '山纹', attributes: { 土: 3, 水: -1 }, visibility: 15, price: 25 },
    { id: 6, name: '青色颜料', attributes: { 木: 2 }, visibility: 10, price: 10 },
    { id: 7, name: '红色颜料', attributes: { 火: 2 }, visibility: 10, price: 10 },
    { id: 8, name: '蓝色颜料', attributes: { 水: 2 }, visibility: 8, price: 8 },
    { id: 9, name: '银色颜料', attributes: { 金: 2 }, visibility: 10, price: 12 },
    { id: 10, name: '黄色颜料', attributes: { 土: 2 }, visibility: 8, price: 8 },
    { id: 11, name: '藤蔓纹样', attributes: { 木: 2, 土: 1 }, visibility: 12, price: 15 },
    { id: 12, name: '火焰纹样', attributes: { 火: 2, 木: -1 }, visibility: 15, price: 18 },
    { id: 13, name: '水波纹样', attributes: { 水: 2, 木: 1 }, visibility: 10, price: 12 },
    { id: 14, name: '金属纹样', attributes: { 金: 2, 土: 1 }, visibility: 12, price: 15 },
    { id: 15, name: '岩石纹样', attributes: { 土: 2, 金: 1 }, visibility: 10, price: 12 }
];

const RUNES = [
    { id: 1, name: '刚猛符', attributes: { 金: 2, 火: -1 }, visibility: 5, price: 20 },
    { id: 2, name: '生机符', attributes: { 木: 2, 金: -1 }, visibility: 5, price: 20 },
    { id: 3, name: '流转符', attributes: { 水: 2, 土: -1 }, visibility: 5, price: 20 },
    { id: 4, name: '炎爆符', attributes: { 火: 2, 水: -1 }, visibility: 5, price: 20 },
    { id: 5, name: '厚土符', attributes: { 土: 2, 木: -1 }, visibility: 5, price: 20 }
];

const CUSTOMER_DROPS = [
    { id: 101, name: '寒铁碎片', attributes: { 金: 5, 木: -3 }, visibility: 25, price: 50, fromCustomer: 1 },
    { id: 102, name: '书生墨宝', attributes: { 木: 4, 火: -3 }, visibility: 20, price: 40, fromCustomer: 2 },
    { id: 103, name: '商人金砖', attributes: { 土: 5, 木: -3 }, visibility: 30, price: 60, fromCustomer: 3 },
    { id: 104, name: '猎人兽牙', attributes: { 水: 4, 土: -3 }, visibility: 22, price: 45, fromCustomer: 4 },
    { id: 105, name: '道士符箓', attributes: { 火: 5, 水: -4 }, visibility: 28, price: 55, fromCustomer: 5 },
    { id: 106, name: '药王草精', attributes: { 木: 5, 金: -3 }, visibility: 25, price: 50, fromCustomer: 6 },
    { id: 107, name: '玄铁精华', attributes: { 金: 5, 火: -4 }, visibility: 28, price: 55, fromCustomer: 7 },
    { id: 108, name: '深海珍珠', attributes: { 水: 4, 土: -3 }, visibility: 22, price: 45, fromCustomer: 8 },
    { id: 109, name: '将军战魂', attributes: { 金: 6, 火: -5 }, visibility: 35, price: 80, fromCustomer: 9 }
];

class Game {
    constructor() {
        this.state = {
            day: 1,
            money: 500,
            reputation: 3,
            credit: '良好',
            unlockedDrops: [],
            currentCustomer: null,
            currentDialogueIndex: 0,
            trust: 50,
            clues: [],
            observations: [],
            selectedWeakness: null,
            confirmedWeakness: null,
            currentMask: null,
            maskAttributes: { 金: 0, 木: 0, 水: 0, 火: 0, 土: 0 },
            visibility: 0,
            usedMaterials: [],
            completedOrders: [],
            pendingReports: [],
            customerQueue: [...CUSTOMERS]
        };
        this.init();
    }

    init() {
        this.updateUI();
    }

    updateUI() {
        document.getElementById('menu-day').textContent = this.state.day;
        document.getElementById('shop-day').textContent = this.state.day;
        document.getElementById('money').textContent = this.state.money;
        document.getElementById('reputation').textContent = this.state.reputation;
        document.getElementById('credit').textContent = this.state.credit;
    }

    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        document.getElementById(screenId).classList.add('active');
    }

    startGame() {
        this.showScreen('shop-screen');
        this.updateUI();
    }

    backToMenu() {
        this.showScreen('main-menu');
    }

    nextCustomer() {
        if (this.state.customerQueue.length === 0) {
            alert('恭喜！你已经接待了所有顾客。游戏结束！');
            this.backToMenu();
            return;
        }

        const customerIndex = Math.floor(Math.random() * this.state.customerQueue.length);
        this.state.currentCustomer = this.state.customerQueue[customerIndex];
        this.state.currentDialogueIndex = 0;
        this.state.trust = 50;
        this.state.clues = [];
        this.state.observations = [];
        this.state.selectedWeakness = null;
        this.state.confirmedWeakness = null;

        this.showDialogue();
    }

    showDialogue() {
        const customer = this.state.currentCustomer;
        this.showScreen('dialogue-screen');

        document.getElementById('customer-name').textContent = customer.name;
        document.getElementById('customer-job').textContent = customer.job;
        document.getElementById('customer-danger').textContent = customer.danger;
        this.renderCustomerAvatar(customer, document.getElementById('customer-avatar'));
        document.getElementById('trust-value').textContent = this.state.trust;
        document.getElementById('trust-fill').style.width = this.state.trust + '%';

        const historyDiv = document.getElementById('dialogue-history');
        historyDiv.innerHTML = '';
        
        const introMsg = document.createElement('div');
        introMsg.className = 'dialogue-message customer';
        introMsg.textContent = customer.name + ': ' + customer.dialogues[0].text;
        historyDiv.appendChild(introMsg);

        this.updateClues();
        this.updateObservations();
        this.renderDialogueChoices();
    }

    renderDialogueChoices() {
        const choicesDiv = document.getElementById('dialogue-choices');
        choicesDiv.innerHTML = '';

        const customer = this.state.currentCustomer;
        const availableDialogues = customer.dialogues.filter((d, i) => i > 0);

        availableDialogues.forEach((dialogue, index) => {
            const btn = document.createElement('button');
            btn.className = 'choice-btn';
            btn.textContent = dialogue.text;
            btn.onclick = () => this.selectDialogue(index + 1);
            choicesDiv.appendChild(btn);
        });
    }

    selectDialogue(index) {
        const customer = this.state.currentCustomer;
        const dialogue = customer.dialogues[index];

        const historyDiv = document.getElementById('dialogue-history');
        
        const questionMsg = document.createElement('div');
        questionMsg.className = 'dialogue-message merchant';
        questionMsg.textContent = '商人: ' + dialogue.text;
        historyDiv.appendChild(questionMsg);

        if (dialogue.response) {
            const responseMsg = document.createElement('div');
            responseMsg.className = 'dialogue-message customer';
            responseMsg.textContent = customer.name + ': ' + dialogue.response;
            historyDiv.appendChild(responseMsg);

            if (dialogue.clue) {
                this.state.clues.push(dialogue.clue);
                this.updateClues();
            }

            if (dialogue.type === 'observe') {
                this.state.observations.push(dialogue.clue);
                this.updateObservations();
            }

            const trustChange = dialogue.trustChange !== undefined ? dialogue.trustChange : 10;
            this.state.trust = Math.max(0, Math.min(100, this.state.trust + trustChange));
            document.getElementById('trust-value').textContent = this.state.trust;
            document.getElementById('trust-fill').style.width = this.state.trust + '%';

            if (this.state.trust <= 0) {
                this.handleTrustFailure();
                return;
            }
        }

        historyDiv.scrollTop = historyDiv.scrollHeight;

        customer.dialogues.splice(index, 1);
        this.renderDialogueChoices();
    }

    updateClues() {
        const cluesDiv = document.getElementById('clues-list');
        cluesDiv.innerHTML = '';
        this.state.clues.forEach(clue => {
            const clueItem = document.createElement('div');
            clueItem.className = 'clue-item';
            clueItem.textContent = clue;
            cluesDiv.appendChild(clueItem);
        });
    }

    updateObservations() {
        const obsDiv = document.getElementById('observations');
        obsDiv.innerHTML = '';
        this.state.observations.forEach(obs => {
            const obsItem = document.createElement('div');
            obsItem.className = 'observation-item';
            obsItem.textContent = obs;
            obsDiv.appendChild(obsItem);
        });
    }

    handleTrustFailure() {
        const customer = this.state.currentCustomer;
        this.showScreen('delivery-screen');

        document.getElementById('final-mask').textContent = '💔';

        const reactionDiv = document.getElementById('customer-reaction');
        reactionDiv.innerHTML = `<p>${customer.name}的脸色越来越难看...</p>`;

        const resultDiv = document.getElementById('inspection-result');
        resultDiv.className = 'inspection-result result-failure';
        resultDiv.innerHTML = `
            <p>❌ 交易失败</p>
            <p>${customer.name}："你问东问西，分明居心不良！告辞！"</p>
            <p>顾客愤怒离开，你的信誉受损。</p>
        `;

        this.state.reputation = Math.max(1, this.state.reputation - 1);
        this.state.credit = this.state.reputation >= 4 ? '优秀' : this.state.reputation >= 3 ? '良好' : '一般';

        this.state.currentCustomer = null;
        this.updateUI();
    }

    startCrafting() {
        if (!this.state.currentCustomer) {
            alert('请先接待顾客！');
            return;
        }
        this.showScreen('crafting-screen');
        this.state.currentMask = null;
        this.state.maskAttributes = { 金: 0, 木: 0, 水: 0, 火: 0, 土: 0 };
        this.state.visibility = 0;
        this.state.usedMaterials = [];

        const customer = this.state.currentCustomer;
        const orderInfo = document.getElementById('order-info');
        const reqText = customer.requirements.map(req => 
            `${ELEMENTS[req.element].icon}${req.element}+${req.amount}`
        ).join(' ');
        orderInfo.textContent = `${customer.name}（${customer.job}）：需要${reqText}的面具`;

        this.renderBaseMasks();
        this.renderMaterials();
        this.renderRunes();
        this.updateCraftingMoney();
        this.updateMaskPreview();
    }

    renderBaseMasks() {
        const container = document.getElementById('base-masks');
        container.innerHTML = '';
        BASE_MASKS.forEach(mask => {
            const item = document.createElement('div');
            item.className = 'base-mask-item';
            item.innerHTML = `${mask.icon} ${mask.name}<br><small>`;
            Object.entries(mask.attributes).forEach(([elem, val]) => {
                if (val > 0) item.innerHTML += `${elem}+${val} `;
            });
            item.innerHTML += '</small>';
            item.onclick = () => this.selectBaseMask(mask);
            container.appendChild(item);
        });
    }

    selectBaseMask(mask) {
        document.querySelectorAll('.base-mask-item').forEach(item => {
            item.classList.remove('selected');
        });
        event.target.classList.add('selected');
        
        // 返还之前消耗的素材费用
        const refund = this.state.usedMaterials.reduce((sum, m) => sum + m.price, 0);
        this.state.money += refund;
        
        this.state.currentMask = mask;
        this.state.maskAttributes = { ...mask.attributes };
        this.state.visibility = 0;
        this.state.usedMaterials = [];
        this.updateCraftingMoney();
        this.updateMaskPreview();
    }

    formatAttributes(attributes) {
        const parts = [];
        Object.entries(attributes).forEach(([elem, val]) => {
            if (val !== 0) {
                parts.push(`${elem}${val > 0 ? '+' : ''}${val}`);
            }
        });
        return parts.join(' ');
    }

    renderCustomerAvatar(customer, container) {
        container.innerHTML = '';
        if (customer.img) {
            const img = document.createElement('img');
            img.src = `images/avatars/${customer.img}`;
            img.alt = customer.name;
            img.className = 'customer-avatar-img';
            img.onerror = () => {
                container.innerHTML = customer.avatar;
            };
            container.appendChild(img);
        } else {
            container.textContent = customer.avatar;
        }
    }

    renderMaterials() {
        const container = document.getElementById('materials');
        container.innerHTML = '';
        const allMaterials = [...MATERIALS, ...this.state.unlockedDrops];
        allMaterials.forEach(material => {
            const item = document.createElement('div');
            item.className = material.fromCustomer ? 'material-item rare-material' : 'material-item';
            const attrText = this.formatAttributes(material.attributes);
            item.innerHTML = `${material.name}<br><small>${attrText} | 显眼度+${material.visibility} | 💰${material.price}</small>`;
            item.onclick = () => this.addMaterial(material);
            container.appendChild(item);
        });
    }

    renderRunes() {
        const container = document.getElementById('runes');
        container.innerHTML = '';
        RUNES.forEach(rune => {
            const item = document.createElement('div');
            item.className = 'rune-item';
            const attrText = this.formatAttributes(rune.attributes);
            item.innerHTML = `${rune.name}<br><small>${attrText} | 显眼度+${rune.visibility} | 💰${rune.price}</small>`;
            item.onclick = () => this.addMaterial(rune);
            container.appendChild(item);
        });
    }

    addMaterial(material) {
        if (!this.state.currentMask) {
            alert('请先选择基底面具！');
            return;
        }

        if (this.state.money < material.price) {
            alert('金钱不足！');
            return;
        }

        this.state.money -= material.price;
        Object.entries(material.attributes).forEach(([elem, val]) => {
            this.state.maskAttributes[elem] = (this.state.maskAttributes[elem] || 0) + val;
        });
        this.state.visibility += material.visibility;
        this.state.usedMaterials.push(material);
        this.updateCraftingMoney();
        this.updateMaskPreview();
    }

    updateCraftingMoney() {
        document.getElementById('crafting-money').textContent = this.state.money;
    }

    updateMaskPreview() {
        const previewDiv = document.getElementById('mask-preview');
        
        if (!this.state.currentMask) {
            previewDiv.innerHTML = '<div class="mask-display">选择基底面具开始制作</div>';
            return;
        }

        previewDiv.innerHTML = `<div class="mask-visual">${this.state.currentMask.icon}</div>`;

        const attributesDiv = document.getElementById('attribute-bars');
        attributesDiv.innerHTML = '';
        
        Object.entries(this.state.maskAttributes).forEach(([elem, value]) => {
            const bar = document.createElement('div');
            bar.className = 'attribute-bar';
            const maxValue = 10;
            const percentage = Math.min(100, (value / maxValue) * 100);
            bar.innerHTML = `
                <div class="attribute-label">
                    <span>${ELEMENTS[elem].icon} ${elem}</span>
                    <span>${value}</span>
                </div>
                <div class="attribute-progress">
                    <div class="attribute-fill ${elem}" style="width: ${percentage}%"></div>
                </div>
            `;
            attributesDiv.appendChild(bar);
        });

        document.getElementById('visibility').textContent = this.state.visibility;
        document.getElementById('visibility-fill').style.width = Math.min(100, this.state.visibility) + '%';
        
        const statusSpan = document.getElementById('visibility-status');
        if (this.state.visibility < 30) {
            statusSpan.textContent = '✓ 安全';
            statusSpan.className = 'status-safe';
        } else if (this.state.visibility < 50) {
            statusSpan.textContent = '⚠ 警惕';
            statusSpan.className = 'status-warning';
        } else {
            statusSpan.textContent = '✗ 危险';
            statusSpan.className = 'status-danger';
        }
    }

    cancelCrafting() {
        // 返还已消耗的素材费用
        const refund = this.state.usedMaterials.reduce((sum, m) => sum + m.price, 0);
        this.state.money += refund;
        this.state.usedMaterials = [];
        this.showDialogue();
    }

    completeMask() {
        if (!this.state.currentMask) {
            alert('请先选择基底面具并添加材料！');
            return;
        }

        const customer = this.state.currentCustomer;
        
        // 计算加权平均完成度
        let totalWeightedRatio = 0;
        let details = [];
        let allSatisfied = true;
        
        customer.requirements.forEach(req => {
            const currentAmount = this.state.maskAttributes[req.element] || 0;
            const ratio = Math.min(1, currentAmount / req.amount);
            totalWeightedRatio += ratio * req.weight;
            
            details.push({
                element: req.element,
                required: req.amount,
                current: currentAmount,
                ratio: ratio,
                weight: req.weight
            });
            
            if (currentAmount < req.amount) {
                allSatisfied = false;
            }
        });
        
        this.state.attributeRatio = totalWeightedRatio;

        if (!allSatisfied) {
            const ratio = Math.floor(this.state.attributeRatio * 100);
            const expectedPayment = Math.floor(customer.price * this.state.attributeRatio);
            
            let detailText = details.map(d => 
                `${d.element}: ${d.current}/${d.required} (权重${Math.floor(d.weight * 100)}%)`
            ).join('\n');
            
            const confirmSubmit = confirm(
                `面具属性不足！\n\n` +
                detailText + `\n\n` +
                `总体完成度: ${ratio}%\n` +
                `预计获得金钱: ${expectedPayment}两（原价${customer.price}两）\n\n` +
                `是否仍要提交？`
            );
            if (!confirmSubmit) {
                return;
            }
        }

        this.deliverMask();
    }

    deliverMask() {
        this.showScreen('delivery-screen');
        const customer = this.state.currentCustomer;

        document.getElementById('final-mask').textContent = this.state.currentMask.icon;

        const reactionDiv = document.getElementById('customer-reaction');
        reactionDiv.innerHTML = `<p>${customer.name}仔细审视着面具...</p>`;

        setTimeout(() => {
            this.inspectMask();
        }, 1500);
    }

    inspectMask() {
        const customer = this.state.currentCustomer;
        const resultDiv = document.getElementById('inspection-result');
        
        let detected = false;
        if (this.state.visibility >= 80) {
            detected = true;
        } else if (this.state.visibility >= 50) {
            detected = Math.random() < 0.4;
        } else if (this.state.visibility >= 30) {
            detected = Math.random() < 0.1;
        }

        if (detected) {
            resultDiv.className = 'inspection-result result-failure';
            resultDiv.innerHTML = `
                <p>❌ 交易失败</p>
                <p>${customer.name}："这面具有问题！你在暗藏什么？"</p>
                <p>顾客愤怒离开，你的信誉下降。</p>
                <p>损失材料成本，未获得收益。</p>
            `;
            this.state.reputation = Math.max(1, this.state.reputation - 1);
            this.state.credit = this.state.reputation >= 4 ? '优秀' : this.state.reputation >= 3 ? '良好' : '一般';
        } else {
            resultDiv.className = 'inspection-result result-success';
            // 根据属性比例计算实际支付
            const actualPayment = Math.floor(customer.price * this.state.attributeRatio);
            const ratio = Math.floor(this.state.attributeRatio * 100);
            
            let reactionText = '不错，这面具正合我意！';
            if (this.state.attributeRatio < 0.5) {
                reactionText = '这面具勉强能用，但远不如我预期的...';
            } else if (this.state.attributeRatio < 1) {
                reactionText = '这面具还可以，不过似乎差了点意思。';
            }
            
            resultDiv.innerHTML = `
                <p>✓ 交易成功</p>
                <p>${customer.name}："${reactionText}"</p>
                <p>完成度: ${ratio}%</p>
                <p>获得金钱：${actualPayment}两</p>
            `;
            this.state.money += actualPayment;

            const hasCounterElement = this.state.maskAttributes[customer.weakness] > 0;
            if (hasCounterElement) {
                this.state.pendingReports.push({
                    customer: customer,
                    mask: { ...this.state.maskAttributes },
                    counterPower: this.state.maskAttributes[customer.weakness]
                });
            }

            this.state.completedOrders.push({
                customer: customer.name,
                success: true,
                hasCounter: hasCounterElement
            });

            const index = this.state.customerQueue.indexOf(customer);
            if (index > -1) {
                this.state.customerQueue.splice(index, 1);
            }
        }

        this.updateUI();
    }

    completeDelivery() {
        this.state.day++;
        
        if (this.state.completedOrders.length >= 3 && this.state.pendingReports.length > 0) {
            this.showBattleReport();
        } else {
            this.showScreen('shop-screen');
        }
    }

    showBattleReport() {
        if (this.state.pendingReports.length === 0) {
            this.showScreen('shop-screen');
            return;
        }

        const report = this.state.pendingReports.shift();
        this.showScreen('report-screen');

        document.getElementById('report-title').textContent = `第${this.state.day}日 · 噩耗传来`;
        
        const reportTextDiv = document.getElementById('report-text');
        reportTextDiv.textContent = report.customer.reportText;

        const rewardsDiv = document.getElementById('report-rewards');
        rewardsDiv.innerHTML = '<h3>【获得遗物】</h3>';
        report.customer.relicReward.forEach(reward => {
            const item = document.createElement('div');
            item.className = 'reward-item';
            item.textContent = '- ' + reward;
            rewardsDiv.appendChild(item);
        });

        // 解锁顾客掉落的特殊素材
        const dropMaterial = CUSTOMER_DROPS.find(d => d.fromCustomer === report.customer.id);
        if (dropMaterial && !this.state.unlockedDrops.find(d => d.id === dropMaterial.id)) {
            this.state.unlockedDrops.push(dropMaterial);
            const dropItem = document.createElement('div');
            dropItem.className = 'reward-item special-drop';
            const attrText = this.formatAttributes(dropMaterial.attributes);
            dropItem.textContent = `- 【新素材】${dropMaterial.name}（${attrText}）`;
            rewardsDiv.appendChild(dropItem);
        }

        const moneyReward = 50 + report.counterPower * 20;
        this.state.money += moneyReward;

        const repDiv = document.getElementById('report-reputation');
        repDiv.innerHTML = '<h3>【声望变化】</h3>';
        repDiv.innerHTML += `<div class="reputation-item">- 暗黑商人名望 +15</div>`;
        repDiv.innerHTML += `<div class="reputation-item">- 正道声望 -5</div>`;
        repDiv.innerHTML += `<div class="reputation-item">- 额外金钱 +${moneyReward}两</div>`;

        this.updateUI();
    }

    closeReport() {
        if (this.state.pendingReports.length > 0) {
            this.showBattleReport();
        } else {
            this.showScreen('shop-screen');
        }
    }

    showGallery() {
        alert('面具图鉴功能开发中...');
    }

    showReports() {
        alert('战报档案功能开发中...');
    }
}

const game = new Game();
