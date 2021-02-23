export default {
    chinese: {
        items: [
            {
                tag: "ol",
                atts: {
                    class: ["list-decimal"],
                },
                items: [
                    {
                        tag: "li",
                        value: "KvK數據",
                        items: [
                            {
                                tag: "ol",
                                atts: {
                                    class: ["list-alpha pl-5"],
                                },
                                items: [
                                    {
                                        tag: "li",
                                        value:
                                            "腳本將每天運行以收集個人統計信息",
                                    },
                                    {
                                        tag: "li",
                                        value:
                                            "將會在遺跡/祭壇開放1小時30分鐘至2小時前以及遺跡關閉或敵人 \
                                            佔領遺跡/祭壇後收集個人統計數據",
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        tag: "li",
                        value: "KvK貢獻積分準則",
                        items: [
                            {
                                tag: "ol",
                                atts: {
                                    class: ["list-alpha pl-5"],
                                },
                                items: [
                                    {
                                        tag: "li",
                                        value: "進入皇庭前",
                                        items: [
                                            {
                                                tag: "div",
                                                value:
                                                    "貢獻積分 = 【（T4擊殺 x 1）+（T5擊殺 x 2）+（榮譽分x 2）+（其他活動分數）】 -（戰力*18%）",
                                            },
                                        ],
                                    },
                                    {
                                        tag: "li",
                                        value: "進入皇庭後",
                                        items: [
                                            {
                                                tag: "div",
                                                value:
                                                    "貢獻積分 = 【（T4擊殺 x 1）+（T5擊殺 x 2）+（榮譽分x2）+（陣亡 x 1.5）+（其他活動分數）】 -（戰力*18%）",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                tag: "div",
                                atts: {
                                    class: ["font-bold", "mb-3", "mt-5"],
                                },
                                value: "注意事項",
                            },
                            {
                                tag: "ul",
                                atts: {
                                    class: ["pl-5"],
                                    style: ["list-style-type: '✓  '"],
                                },
                                items: [
                                    {
                                        tag: "li",
                                        value:
                                            "如果被發現是故意吃集結或被0，特別是在戰爭期間，那麼當天收集的個人統計信息不會被算進貢獻積分裡",
                                    },
                                    {
                                        tag: "li",
                                        value:
                                            "如果在遺跡時段被發現沒在幫忙打而是自己在刷分，那麼當天遺跡時段收集的個人統計信息不會被算進貢獻積分裡",
                                    },
                                    {
                                        tag: "li",
                                        value:
                                            "你必須在KvK末尾上傳你的榮譽積分截圖，否則將被視為0",
                                    },
                                    {
                                        tag: "li",
                                        value:
                                            "你必須在陣營之間階段競爭結束時上傳你的積分截圖，否則將被視為0",
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        tag: "li",
                        value: "貢獻積分",
                        items: [
                            {
                                tag: "ol",
                                atts: {
                                    class: ["list-alpha pl-5"],
                                },
                                items: [
                                    {
                                        tag: "li",
                                        value: "每個人都會以負貢獻積分點開始，佔個人戰力的18％",
                                    },
                                    {
                                        tag: "li",
                                        value: "在KvK結束時，如果你的得分仍然為負數，則表示你的貢獻低於預期。",
                                    },
                                    {
                                        tag: "div",
                                        atts: {
                                            class: ["font-bold", "mb-3", "mt-5"],
                                        },
                                        value: "注意事項",
                                    },
                                    {
                                        tag: "ul",
                                        atts: {
                                            class: ["pl-5"],
                                            style: ["list-style-type: '✓  '"],
                                        },
                                        items: [
                                            {
                                                tag: "li",
                                                value: "根據莉莉絲的系統，戰力匹配上限為1.5億。所以，所有超過1.5億的玩家的貢獻積分上限為2700萬（18％x 1.5億）",
                                            },
                                            {
                                                tag: "li",
                                                value: "貢獻積分用法的詳細信息將很快發布，包括但不限於執政官活動",
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        tag: "li",
                        value: "貢獻低於預期",
                        items: [
                            {
                                tag: "ol",
                                atts: {
                                    class: ["list-alpha pl-5"],
                                },
                                items: [
                                    {
                                        tag: "li",
                                        value: "7天内移民",
                                    },
                                    {
                                        tag: "li",
                                        value: "如果你想留在王國中，必須刪除相同戰力的兵",
                                    },
                                ],
                            },
                            {
                                tag: "div",
                                atts: {
                                    class: ["font-bold", "mb-3", "mt-5"],
                                },
                                value: "注意事項",
                            },
                            {
                                tag: "ul",
                                atts: {
                                    class: ["pl-5"],
                                    style: ["list-style-type: '✓  '"],
                                },
                                items: [
                                    {
                                        tag: "li",
                                        value: "如果你選擇迴避，則將在7天寬限期結束後清零p",
                                    },
                                    {
                                        tag: "li",
                                        value: "刪除部隊的示例 – 如果你的貢獻積分點是-500萬，你將需要刪除50萬個T5，相同500万戰力"
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        tag: "li",
                        value: "其他活動分數",
                        items: [
                            {
                                tag: "ol",
                                atts: {
                                    class: ["list-alpha pl-5"],
                                },
                                items: [
                                    {
                                        tag: "li",
                                        value: "陣營之間階段競爭1 - 分數 x 1",
                                    },
                                    {
                                        tag: "li",
                                        value: "陣營之間階段競爭2 - 分數 x 0.5 （最高能獲取分數 - 2000萬）",
                                    },
                                    {
                                        tag: "li",
                                        value: "陣營之間階段競爭3 - 分數 x 2",
                                    },
                                    {
                                        tag: "li",
                                        value: "陣營之間階段競爭4 - 分數 x 0.5 （最高能獲取分數 - 2000萬)",
                                    },
                                    {
                                        tag: "li",
                                        value: "陣營之間階段競爭5 - 分數 x 2",
                                    },
                                    {
                                        tag: "li",
                                        value: "資源捐贈 - 1億 （4000萬食物，2000萬木頭，2000萬石頭，2000萬金幣） = 100,000",
                                    },
                                    {
                                        tag: "li",
                                        value: "忙派頭銜 - 4小時 = 400,000",
                                    },
                                    {
                                        tag: "li",
                                        value: "跑腳本（收集個人統計數據） - 2次 = 250,000",
                                    },
                                    {
                                        tag: "li",
                                        value: "數據質量檢查 (確保所有人員數據已被拉出）= 70,000",
                                    },
                                    {
                                        tag: "li",
                                        value: "舉報犯規者（自己刷分、吃集結）- 20,000",
                                    },
                                ],
                            },
                            {
                                tag: "div",
                                atts: {
                                    class: ["font-bold", "mb-3", "mt-5"],
                                },
                                value: "注意事項",
                            },
                            {
                                tag: "ul",
                                atts: {
                                    class: ["pl-5"],
                                    style: ["list-style-type: '✓  '"],
                                },
                                items: [
                                    {
                                        tag: "li",
                                        value: "如果你要舉報某人，必須附加屏幕截圖",
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },
    english: {
        items: [
            {
                tag: "ol",
                atts: {
                    class: ["list-decimal"],
                },
                items: [
                    {
                        tag: "li",
                        value: "KvK Stats Collection",
                        items: [
                            {
                                tag: "ol",
                                atts: {
                                    class: ["list-alpha pl-5"],
                                },
                                items: [
                                    {
                                        tag: "li",
                                        value:
                                            "Script will be run daily to collect individual’s stats",
                                    },
                                    {
                                        tag: "li",
                                        value:
                                            "Stats will be collected 1hour 30mins to 2 hours before the ruins/altars \
                                            open, and after the ruins closed/ captured by the enemy",
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        tag: "li",
                        value: "KvK Contribution Points Calculation ",
                        items: [
                            {
                                tag: "ol",
                                atts: {
                                    class: ["list-alpha pl-5"],
                                },
                                items: [
                                    {
                                        tag: "li",
                                        value: "Before Level 8 Pass Opens",
                                        items: [
                                            {
                                                tag: "div",
                                                value:
                                                    "Contribution Points = [(T4 Kills x 1point) + (T5 Kills x 2points) + \
                                                    (Honor Points x 2points) + (Other Activities Points)] – \
                                                    (18% of Power at the start)",
                                            },
                                        ],
                                    },
                                    {
                                        tag: "li",
                                        value: "After Level 8 Pass Opens",
                                        items: [
                                            {
                                                tag: "div",
                                                value:
                                                    "Contribution Points = [(T4 Kills x 1point) + (T5 Kills x 2points) \
                                                    + (Dead Troops x1.5points) + (Honor Points x 2points) + \
                                                    (Other Activities Points)] – (18% of Power at the start)",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                tag: "div",
                                atts: {
                                    class: ["font-bold", "mb-3", "mt-5"],
                                },
                                value: "Things To Note",
                            },
                            {
                                tag: "ul",
                                atts: {
                                    class: ["pl-5"],
                                    style: ["list-style-type: '✓  '"],
                                },
                                items: [
                                    {
                                        tag: "li",
                                        value:
                                            "If you are caught taking rallies on purpose, \
                                        especially during wars, the stats collected on that day \
                                        will be forfeited",
                                    },
                                    {
                                        tag: "li",
                                        value:
                                            "If you are caught feeding with your farms or anyone else during ruins, \
                                        the stats collected for that ruins period will be forfeited",
                                    },
                                    {
                                        tag: "li",
                                        value:
                                            "You are required to send a screenshot of your Honor Points at the end of \
                                        the KvK, else it will be taken as 0",
                                    },
                                    {
                                        tag: "li",
                                        value:
                                            "You are required to send a screenshot of your Points at the end of the LvD \
                                        Stages, else it will be taken as 0",
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        tag: "li",
                        value: "KvK Contribution Points System",
                        items: [
                            {
                                tag: "ol",
                                atts: {
                                    class: ["list-alpha pl-5"],
                                },
                                items: [
                                    {
                                        tag: "li",
                                        value: "Everyone will start off with a negative contribution points at 18% of your power",
                                    },
                                    {
                                        tag: "li",
                                        value: "At the end of the KvK, if your points remain at a negative figure, it means that your contribution is below expectation.",
                                    },
                                    {
                                        tag: "div",
                                        atts: {
                                            class: ["font-bold", "mb-3", "mt-5"],
                                        },
                                        value: "Things To Note",
                                    },
                                    {
                                        tag: "ul",
                                        atts: {
                                            class: ["pl-5"],
                                            style: ["list-style-type: '✓  '"],
                                        },
                                        items: [
                                            {
                                                tag: "li",
                                                value: "If you are caught taking rallies on purpose, \
                                                especially during wars, the stats collected on that day \
                                                will be forfeited",
                                            },
                                            {
                                                tag: "li",
                                                value: "If you are caught feeding with your farms or anyone else during ruins, \
                                                the stats collected for that ruins period will be forfeited",
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        tag: "li",
                        value: "Failure to meet contribution expectations",
                        items: [
                            {
                                tag: "ol",
                                atts: {
                                    class: ["list-alpha pl-5"],
                                },
                                items: [
                                    {
                                        tag: "li",
                                        value: "To migrate out of the kingdom with 7 days",
                                    },
                                    {
                                        tag: "li",
                                        value: "To delete troops equivalent to the contribution shortfall if you want to remain in the kingdom",
                                    },
                                ],
                            },
                            {
                                tag: "div",
                                atts: {
                                    class: ["font-bold", "mb-3", "mt-5"],
                                },
                                value: "Things To Note",
                            },
                            {
                                tag: "ul",
                                atts: {
                                    class: ["pl-5"],
                                    style: ["list-style-type: '✓  '"],
                                },
                                items: [
                                    {
                                        tag: "li",
                                        value: "If you choose to ignore, you will be zeroed once the 7 days grace period is up",
                                    },
                                    {
                                        tag: "li",
                                        value: "Example of deleting troops – If your contribution points is -5 million, you will be required to delete 500k T5s which adds up to 5million power.",
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        tag: "li",
                        value: "Other Activities Points",
                        items: [
                            {
                                tag: "ol",
                                atts: {
                                    class: ["list-alpha pl-5"],
                                },
                                items: [
                                    {
                                        tag: "li",
                                        value: "LvD Stage 1 – Points x 1",
                                    },
                                    {
                                        tag: "li",
                                        value: "LvD Stage 2 – Points x 0.5 (Capped at 20mil)",
                                    },
                                    {
                                        tag: "li",
                                        value: "LvD Stage 3 – Points x 2",
                                    },
                                    {
                                        tag: "li",
                                        value: "LvD Stage 4 – Points x 0.5 (Capped at 20mil)",
                                    },
                                    {
                                        tag: "li",
                                        value: "LvD Stage 5 – Points x 2",
                                    },
                                    {
                                        tag: "li",
                                        value: "RSS Donation – 100 million (40mil food, 20mil wood, 20mil stone, 20mil gold) – 100k points",
                                    },
                                    {
                                        tag: "li",
                                        value: "Distribution of Titles – 400k points/ 4hours",
                                    },
                                    {
                                        tag: "li",
                                        value: "Pulling Stats – 250k points/ 2 times",
                                    },
                                    {
                                        tag: "li",
                                        value: "QC of Stats (Ensure every player is accounted for) – 70k points",
                                    },
                                    {
                                        tag: "li",
                                        value: "Reporting of Rule Breakers (Self-feeding, taking rallies etc) – 20k points",
                                    },
                                ],
                            },
                            {
                                tag: "div",
                                atts: {
                                    class: ["font-bold", "mb-3", "mt-5"],
                                },
                                value: "Things To Note",
                            },
                            {
                                tag: "ul",
                                atts: {
                                    class: ["pl-5"],
                                    style: ["list-style-type: '✓  '"],
                                },
                                items: [
                                    {
                                        tag: "li",
                                        value: "You are required to attach screenshot(s) if you are reporting someone",
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },
};
